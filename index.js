const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON body
app.use(express.json());

// CORS middleware
app.use(cors());

// Path to dummy data JSON file
const dummyDataPath = path.join(__dirname, 'dummy-data.json');
let dummyData = JSON.parse(fs.readFileSync(dummyDataPath, 'utf8'));

// Endpoint to get all photos
app.get('/api/photos', (req, res) => {
  res.json(dummyData.photos);
});

// Endpoint to add a new photo
app.post('/api/photos', (req, res) => {
  const { url, caption } = req.body;
  const newPhoto = {
    id: dummyData.photos.length + 1,
    url,
    caption
  };
  dummyData.photos.push(newPhoto);
  fs.writeFileSync(dummyDataPath, JSON.stringify(dummyData, null, 2));
  res.json(newPhoto);
});

// Endpoint to update an existing photo
app.put('/api/photos/:id', (req, res) => {
  const { id } = req.params;
  const { url, caption } = req.body;
  const photoToUpdate = dummyData.photos.find(photo => photo.id === parseInt(id));
  if (!photoToUpdate) {
    return res.status(404).send('Photo not found');
  }
  photoToUpdate.url = url;
  photoToUpdate.caption = caption;
  fs.writeFileSync(dummyDataPath, JSON.stringify(dummyData, null, 2));
  res.json(photoToUpdate);
});

// Endpoint to get all texts
app.get('/api/texts', (req, res) => {
  res.json(dummyData.texts);
});

// Endpoint to add a new text
app.post('/api/texts', (req, res) => {
  const { content } = req.body;
  const newText = {
    id: dummyData.texts.length + 1,
    content
  };
  dummyData.texts.push(newText);
  fs.writeFileSync(dummyDataPath, JSON.stringify(dummyData, null, 2));
  res.json(newText);
});

// Endpoint to update an existing text
app.put('/api/texts/:id', (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  const textToUpdate = dummyData.texts.find(text => text.id === parseInt(id));
  if (!textToUpdate) {
    return res.status(404).send('Text not found');
  }
  textToUpdate.content = content;
  fs.writeFileSync(dummyDataPath, JSON.stringify(dummyData, null, 2));
  res.json(textToUpdate);
});

// Endpoint to get all links
app.get('/api/links', (req, res) => {
  res.json(dummyData.links);
});

// Endpoint to add a new link
app.post('/api/links', (req, res) => {
  const { type, url } = req.body;
  const newLink = {
    id: dummyData.links.length + 1,
    type,
    url
  };
  dummyData.links.push(newLink);
  fs.writeFileSync(dummyDataPath, JSON.stringify(dummyData, null, 2));
  res.json(newLink);
});

// Endpoint to get a single link by ID
app.get('/api/links/:id', (req, res) => {
  const { id } = req.params;
  const link = dummyData.links.find(link => link.id === parseInt(id));
  if (!link) {
    return res.status(404).send('Link not found');
  }
  res.json(link);
});

// Endpoint to update an existing link
app.put('/api/links/:id', (req, res) => {
  const { id } = req.params;
  const { type, url } = req.body;
  const linkToUpdate = dummyData.links.find(link => link.id === parseInt(id));
  if (!linkToUpdate) {
    return res.status(404).send('Link not found');
  }
  linkToUpdate.type = type;
  linkToUpdate.url = url;
  fs.writeFileSync(dummyDataPath, JSON.stringify(dummyData, null, 2));
  res.json(linkToUpdate);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
