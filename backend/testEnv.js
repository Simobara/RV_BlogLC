import dotenv from 'dotenv';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

// Ottieni il percorso del file corrente
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const envPath = resolve(__dirname, '../.env');
console.log('Percorso del file .env:', envPath);

// Carica le variabili d'ambiente dal file .env nella radice del progetto
const result = dotenv.config({ path: envPath });

if (result.error) {
  console.error('Errore nel caricamento del file .env', result.error);
} else {
  console.log("Variabili d'ambiente caricate con successo");
  console.log('EMAIL_USER:', process?.env.EMAIL_USER);
  console.log('EMAIL_PASS:', process?.env.EMAIL_PASS);
}
