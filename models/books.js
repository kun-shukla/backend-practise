import { pool } from '../db/index.js';

export async function getAllBooks() {
  const results = await pool.query(`SELECT * FROM books;`);

  return results.rows;
};
