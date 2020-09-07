import express from "express";

import books from "../controllers/Books";
import { auth } from "../../config/middleware";

const router = express.Router();

router.post("/create-book", auth, books.createContent);
router.get("/view-personal-books", auth, books.viewBook);

export { router as booksRouter };
