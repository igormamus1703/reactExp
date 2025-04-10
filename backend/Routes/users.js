import express from "express";
import { getUsers, createUser, updateUser, deleteUser } from "../Controllers/users.js";

const router = express.Router();

router.get("/", getUsers); // Endpoint para buscar usuários (com paginação)
router.post("/", createUser); // Endpoint para criar um usuário
router.put("/:cpf", updateUser); // Endpoint para atualizar um usuário
router.delete("/:cpf", deleteUser); // Endpoint para deletar um usuário

export default router;