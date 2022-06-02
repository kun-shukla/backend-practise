import pg from 'pg';
// export const pool = new pg.Pool({
//   host: 'ec2-176-34-211-0.eu-west-1.compute.amazonaws.com',
//   database: 'd2l4lr84hral46',
//   user: 'xbclqwuztlrplx',
//   port: 5432,
//   password: '59e4b41f0fe58648017a18a09ad236acd82e6fb7578c34ee4a7a67cd5bfc3bb2',
//   ssl: {
//     rejectUnauthorized: false
//   }
// });
export const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});
