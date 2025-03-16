const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware para permitir recibir JSON
app.use(express.json());
app.use(cors());

// Ruta para recibir datos del formulario
app.post("/login", (req, res) => {
    const { emailOrPhone, password } = req.body;
    
    // Imprimir en la terminal de VS Code
    console.log("📧 Usuario:", emailOrPhone);
    console.log("🔒 Contraseña:", password);
    
    res.json({ message: "Datos recibidos en el servidor" });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
