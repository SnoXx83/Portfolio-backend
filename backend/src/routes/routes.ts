import { Router } from "express";
import { ProjectController } from "../controllers/projectController";
import { TechnologyController } from "../controllers/technologyController";

const router= Router();

router.post('/technology', TechnologyController.create);
router.post('/project', ProjectController.create);


export default router; 