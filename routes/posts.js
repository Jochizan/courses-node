const router = require('express').Router();
const Post = require('../models/Post');

// GET posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find({});
    res.json({ status: 200, posts: posts });
  } catch (err) {
    res.json({ message: err });
  }
});

router.get('/specific', (req, res) => {
  res.send('Specific post');
});

// POST posts
router.post('/', async (req, res) => {
  const postNew = req.body;
  // const post
  try {
    const response = await Post.create(postNew);

    res.json({ status: 200, post: response });
  } catch (err) {
    res.json({ message: err });
  }
});

// GET Especific post
router.get('/:postId', async (req, res) => {
  try {
    const id = req.params.postId;
    const post = await Post.findById(id);
    res.json({ status: 200, post: post });
  } catch (err) {
    res.json({ message: err });
  }
});

// DELETE Especific post
router.delete('/:postId', async (req, res) => {
  try {
    const id = req.params.postId;
    const deletePost = await Post.remove({ _id: id });
    res.json({ status: 'ok', deletePost: deletePost });
  } catch (err) {
    res.json({ message: err });
  }
});

// Update a post
router.patch('/:postId', async (req, res) => {
  try {
    // para mostrar el cuerpo de la petición
    console.log(req.body);

    const id = req.params.postId;
    const updatePost = await Post.updateOne(
      { _id: id },
      { $set: { title: req.body.title } }
    );
    res.json({ status: 'ok', updatePost: updatePost });
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
