const express = require('express');
const app = express();
const PORT = 3000;

let posts = [
    { id: 1, title: 'First', content: 'aaaaaaaaaaaaa' },
    { id: 2, title: 'Second', content: 'bbbbbbbbbbbb' },
    { id: 3, title: 'Third', content: 'cccccccccccc' },
  ];

  
app.use(express.json());


  app.get('/auth/login', (req, res) => {
    res.sendFile(__dirname + "/login.html");
  });

  app.get('/auth/register', (req, res) => {
    res.sendFile(__dirname + "/register.html");
  });

  app.get('/post/all', (req, res) => {
    res.json(posts);
  });
  
  app.get('/post/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);
  
    if (post) {
      res.json(post);
    } else {
      res.status(404).send('AMMAR 404 : Object not found');
    }
  });

  app.post('/post/add', (req, res) => {
    console.log(req.body)
    posts.push(req.body);
    res.status(201).json({ message: 'Post added successfully' });
  });


  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  
  
  