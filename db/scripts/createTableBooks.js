import { pool } from '../index.js';

async function createTableBooks() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS books(book_id SERIAL PRIMARY KEY, title TEXT, content TEXT)
  `);


};

createTableBooks();