const express = require('express');
const mysql = require('mysql'); // 🔴 Potencial SQL Injection si no se usa correctamente
const app = express();

app.use(express.json());

// 🔴 Configuración de conexión insegura (sin SSL ni saneamiento de entrada)
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password123", // ⚠️ Contraseña en código fuente
  database: "users"
});

db.connect(err => {
  if (err) throw err;
  console.log("Connected to MySQL");
});

// 🔴 SQL Injection: No usa parámetros preparados
app.get("/user/:id", (req, res) => {
  let sql = `SELECT * FROM users WHERE id = '${req.params.id}'`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// 🔴 Uso peligroso de eval()
app.post("/execute", (req, res) => {
  let userInput = req.body.code;
  let result = eval(userInput); // ⚠️ Riesgo de ejecución remota de código (RCE)
  res.json({ result });
});

// Servidor en puerto 3000
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
