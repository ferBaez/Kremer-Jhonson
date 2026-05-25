import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Contact API Endpoint
  app.post("/api/contact", (req, res) => {
    const { name, email, subject, message } = req.body;
    
    console.log(`[Email Mock Endpoint] Recibido contacto:`);
    console.log(`De: ${name} <${email}>`);
    console.log(`Asunto: ${subject}`);
    console.log(`Mensaje: ${message}`);
    
    // Aquí se debería configurar un proveedor SMTP como Resend, SendGrid, o nodemailer.
    // La dirección destino sería: baez@hitster.page
    console.log(`[Email Mock Endpoint] (En producción esto se enviaría a: baez@hitster.page)`);

    return res.status(200).json({ success: true, message: "Mensaje enviado correctamente." });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
