import { Router } from "express";
import controllers from "../controllers/index";

const router = Router()

router.get('/', controllers.chat.index);
export default router
