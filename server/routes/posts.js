const express = require('express');
const posts = require('../models/posts');
const redisClient = require('./radisClient');
const router = express.Router();

router.post('/post/save', async (req, res) => {
    try {
        const newPost = new posts(req.body);
        await newPost.save();
        res.status(200).json({
            success: "Post saved successfully"
        });
    } catch (err) {
        res.status(400).json({
            error: err.message
        });
    }
});


//GET POSTS

router.get('/posts', async (req, res) => {
    try {
        const postsList = await posts.find().exec();
        res.status(200).json({
            success: true,
            existingPosts: postsList
        });
    } catch (err) {
        res.status(400).json({
            error: err
        });
    }
});

//get a specific post (GET)
router.get("/post/:id", (req, res) =>{
    let postId = req.params.id;
  
    Posts.findById(postId, (err, post) =>{
      if(err){
        return res.status(400).json({
          success: false,
          err,
        });
      } 
      return res.status(200).json({
        success: true,
        post
      }); 
    });
  });

//UPDATE POST

router.put('/post/update/:id', async (req, res) => {
    try {
        const updatedPost = await posts.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true } // returns the updated document
        );
        res.status(200).json({
            success: "Updated successfully",
            post: updatedPost
        });
    } catch (err) {
        res.status(400).json({ error: err });
    }
});


//DELETE POST

router.delete("/post/delete/:id", (req, res) => {
  Posts.findByIdAndRemove(req.params.id).exec((err, deletedPost) => {
    if (err)
      return res.status(400).json({
        message: "Delete Unsuccessful!!", err
      });
    return res.json({
      message: "Delete Successful!!", deletedPost
    });
  });
});
  

// GET /products?category=electronics&sort=price
router.get('/products', async (req, res) => {
    try {
      const { category, sort } = req.query;
  
      const filter = category ? { category } : {};
      const sortOptions = sort ? { [sort]: 1 } : {}; // Sort in ascending order
  
      const products = await Product.find(filter).sort(sortOptions);
  
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  });

  // GET /posts?category=technology&sort=topic
// router.get('/posts', async (req, res) => {
//     try {
//       const { postCategory, sort } = req.query;
//       const cacheKey = `posts:${postCategory || 'all'}:${sort || 'default'}`;
  
//       // Check Redis cache
//       redisClient.get(cacheKey, async (err, cachedPosts) => {
//         if (err) {
//           console.error('Redis error:', err);
//           return res.status(500).json({ error: 'Server error' });
//         }
  
//         if (cachedPosts) {
//           // Return cached data
//           return res.json(JSON.parse(cachedPosts));
//         }
  
//         // Fetch from MongoDB if not cached
//         const filter = postCategory ? { postCategory } : {};
//         const sortOptions = sort ? { [sort]: 1 } : {};
  
//         const posts = await Posts.find(filter).sort(sortOptions);
  
//         // Cache the result
//         redisClient.setex(cacheKey, 3600, JSON.stringify(posts)); // Cache for 1 hour
  
//         res.json(posts);
//       });
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to fetch posts' });
//     }
//   });
  
module.exports = router;