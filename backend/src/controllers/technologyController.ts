import { Request, Response } from "express";
import AppDataSource from "../../config/db";
import { Technology } from "../entities/technology";

const technologyRepository = AppDataSource.getRepository(Technology);

export const TechnologyController = {
    create: async (req: Request, res: Response) => {
        try {
           const { name, img_url} = req.body;
        
            const newTechnology = technologyRepository.create({ name, img_url });
            await technologyRepository.save(newTechnology);
           

        } catch (error) {
            console.error('Erreur lors de la création de la technologie :', error);
            res.status(500).json({ message: 'Erreur interne du serveur' });
        }
    },
}