import pkg from 'pg';
import express from 'express';
import cors from 'cors';
const { Client } = pkg;

const app = express();
app.use(cors());
app.use(express.json());


const bd = new Client({
  host: 'localhost',
  port: 5432,           
  user: 'juan_jose',   
  password: 'juan123',
  database: 'crudClinic'
});

bd.connect((er) => {
  if(er) throw er;
  console.log("Conexion exitosa \nURL http://localhost:3000");
});


app.listen(3000, (e) => {
  if (e) throw e;
  console.log("Corriendo en el puerto \n3000");
});