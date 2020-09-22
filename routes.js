import { Router } from "https://deno.land/x/oak@v4.0.0/mod.ts";
import {
  getAllPosts,
  getPostDetailsById,
  createNewPost,
  updateExistingPost,
  deletePostById,
} from "./controllers/blogPostController.js";

const router = new Router();

router
  .get("/blogPosts", getAllPosts)
  .get("/blogPosts/:id", getPostDetailsById)
  .post("/blogPosts", createNewPost)
  .put("/blogPosts/:id", updateExistingPost)
  .delete("/blogPosts/:id", deletePostById);

export default router;
