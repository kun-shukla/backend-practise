import express from 'express';
const router = express.Router();

import { getAllBooks } from '../models/books.js'

//CRUD operations ??? (Create/Read/Update/Delete) (POST/GET/PUT|PATCH/DELETE)

//Get all books
router.get('/', async (req, res) => {
  res.json({ success: true, payload: await getAllBooks()});
})

//Get book by ID
router.get('/:id', (req, res) => {
  res.send('Hello World');
})

router.post('/', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
})

export default router;