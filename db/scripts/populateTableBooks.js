import { pool } from '../index.js';
const dummyData = [
  {
    id: 1,
    title: "Harry Potter",
    content: "Hello world"
  },
  {
    id: 2,
    title: "Mans not hot",
    content: "Dont remove coat"
  },
  {
    id: 3,
    title: "Diana autobiography",
    content: "princess"
  },
  {
    id: 4,
    title: "Harry Potter 2",
    content: "Hello world texting..."
  },
]

async function populateTableBooks() {
 for (let i = 0; i < dummyData.length; i++) {
  await pool.query(`INSERT INTO books(title, content) VALUES($1, $2)`, [dummyData[i].title, dummyData[i].content]);
 }
};

populateTableBooks();