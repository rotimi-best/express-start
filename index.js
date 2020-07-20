const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

const posts = [
  {
    id: 1,
    title: 'Post 1',
    description: 'Post 1 description'
  },
  {
    id: 2,
    title: 'Post 2',
    description: 'Post 2 description'
  },
  {
    id: 3,
    title: 'Post 3',
    description: 'Post 3 description'
  }
]

app.get('/', (req, res) => {
  res.send('WElcome!!!!!');
})

app.get('/post/:postId', (req, res) => {
  const {
    postId
  } = req.params;

  const post = posts.find(post => post.id == postId)

  res.json({
    success: true,
    post: post
  });
})

app.get('/posts', (req, res) => {
  res.json({
    success: true,
    posts: posts
  });
})




// app.get('/user/:userName/:group', (req, res) => {
//   // const {} = req.params;
//   console.log('req.params', req.params)


//   res.send('Username, group');
// })


app.post('/user', (req, res) => {
  const body = req.body;
  console.log('body', body)

  res.json({
    success: true,
    data: body
  })

});

app.put('/user', (req, res) => {

  res.json({
    success: true
  })

});

app.delete('/user', (req, res) => {

  res.json({
    success: true
  })

});


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))