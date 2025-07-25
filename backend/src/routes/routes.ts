import { RequestHandler, Router } from "express";
import { ProjectController } from "../controllers/projectController";
import { TechnologyController } from "../controllers/technologyController";

const router= Router();

// Project routes
router.get('/project', ProjectController.getAll);
router.get('/project/:id', ProjectController.getProjectById);
router.post('/project', ProjectController.create);
router.delete('/project/:id', ProjectController.deleteProject as RequestHandler);

// Techno routes
router.get('/technology', TechnologyController.getAll);
router.post('/technology', TechnologyController.create);

export default router; 