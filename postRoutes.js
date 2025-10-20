const express = require('express');
const { getPosts } = require('./postController');

const router = express.Router();

// GET /api/posts?page=1&limit=10
router.get('/', getPosts);

module.exports = router;