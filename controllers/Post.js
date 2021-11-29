const Post= require("../models/postSchema.js");

exports.post = async (req, res) => {
  try {
    const {Title,Description,Image } = req.body;
    const newPost = new Post({Title,Description,Image,owner:req.userId});

    const post = await newPost.save();
    res.status(200).json({ post });

  } catch (error) {
    res.status(500).json({ message: `something went wrong ${error}` });
  }
};

exports.getPost = async (req, res) => {
  try {
    const posts=  await Post.find({}).populate('owner');
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: `something went wrong ${error}` });
  }
};
