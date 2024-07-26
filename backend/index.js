import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 3001;

mongoose.connect('mongodb://localhost:27017/textEditor');

const textSchema = new mongoose.Schema({
  content: { type: String, required: true },
});

const Text = mongoose.model('Text', textSchema);

app.use(bodyParser.json());
app.use(cors());

app.get('/api/text', async (req, res) => {
  try {
    const text = await Text.findOne();
    res.json(text);
  } catch (error) {
    res.status(500).send('Errore nel caricamento del testo');
  }
});

app.post('/api/text', async (req, res) => {
  const { content } = req.body;
  try {
    let text = await Text.findOne();
    if (text) {
      text.content = content;
    } else {
      text = new Text({ content });
    }
    await text.save();
    res.json(text);
  } catch (error) {
    res.status(500).send('Errore nel salvataggio del testo');
  }
});

app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});
