import { Router } from "express";
import { getRepos } from "./controllers/getRepos";

const router = Router();

router.get('/api/repos', getRepos)

router.get('/api/repos/:date', getRepos)

export { router };
