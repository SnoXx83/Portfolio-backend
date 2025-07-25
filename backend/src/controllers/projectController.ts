import { Request, Response } from 'express';
import AppDataSource from "../../config/db";
import { Project } from '../entities/project';
import { Technology } from '../entities/technology';


const projectRepository = AppDataSource.getRepository(Project);
const technologyRepository = AppDataSource.getRepository(Technology);

export const ProjectController = {
    create: async (req: Request, res: Response) => {
        try {
            const { name, resume, img_url_1, img_url_2, img_url_3, img_url_4, github_link, technology_ids } = req.body;

            const newProject = projectRepository.create({
                name,
                resume,
                img_url_1,
                img_url_2,
                img_url_3,
                img_url_4,
                github_link,
            });

            if (technology_ids && Array.isArray(technology_ids) && technology_ids.length > 0) {
                const technologies = await technologyRepository.findByIds(technology_ids);
                if (technologies.length !== technology_ids.length) {
                    console.warn("Certaines technologies fournies n'ont pas été trouvées.");
                }

                newProject.technologies = technologies;

                await projectRepository.save(newProject);
            }
        } catch (error) {
            console.error('Erreur lors de la création du projet :', error);
            res.status(500).json({ message: 'Erreur interne du serveur' });
        }
    },
    getAll: async (req: Request, res: Response) => {
        try {
            const projects = await projectRepository.find({
                relations: ['technologies'],
            });

            res.status(200).json(projects);
        } catch (error) {
            console.error('Erreur lors de la récupération des projets :', error)
        }
    },
    getProjectById: async (req: Request, res: Response) => {
        try {
            const projectId = parseInt(req.params.id);

            const project = await projectRepository.findOne({
                where: { id: projectId },
                relations: ['technologies'],
            });
            if (!project) {
                res.status(404).json({ message: 'Projet non trouvé.' });
            }

             res.status(200).json(project);
        } catch (error) {
            console.error('Erreur lors de la récupération du projet par ID :', error);
        }

    },
    deleteProject: async (req: Request, res: Response) => {
        try {
            const projectId = parseInt(req.params.id);
            const projectToDelete = await projectRepository.findOne({ where: { id: projectId } });

            if (!projectToDelete) {
                return res.status(404).json({ message: 'Projet non trouvé.' });
            }

            await projectRepository.remove(projectToDelete);

            return res.status(204).send();
        } catch (error) {
            console.error('Erreur lors de la suppression du projet :', error);
            res.status(500).json({ message: 'Erreur interne du serveur lors de la suppression du projet.' });
        }
    }
}