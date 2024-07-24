import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import nodemailer from 'nodemailer';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

// Ottieni il percorso del file corrente
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Verifica se process è definito
if (typeof process !== 'undefined') {
  dotenv.config({ path: resolve(__dirname, '../.env') });
}

// Log per il debugging
console.log('EMAIL_USER:', process?.env?.EMAIL_USER || 'undefined');
console.log('EMAIL_PASS:', process?.env?.EMAIL_PASS || 'undefined');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process?.env?.EMAIL_USER, // Utilizza la variabile d'ambiente
    pass: process?.env?.EMAIL_PASS, // Utilizza la variabile d'ambiente
  },
});

app.post('/send-email', (req, res) => {
  const { nome, cognome, email, messaggio } = req.body;

  const mailOptions = {
    from: email,
    to: process?.env?.EMAIL_USER, // Utilizza la variabile d'ambiente per la tua email di destinazione
    subject: 'New Contact Form Submission',
    text: `Nome: ${nome}\nCognome: ${cognome}\nEmail: ${email}\nMessaggio: ${messaggio}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Errore durante l'invio dell'email:", error);
      return res.status(500).send('Invio del messaggio fallito. Riprova più tardi.');
    }
    res.send('Email inviata: ' + info.response);
  });
});

app.listen(3001, () => {
  console.log('Server in esecuzione sulla porta 3001');
});
