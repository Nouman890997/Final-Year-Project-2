const Feed = require("../models/Feed");

exports.createFeed = async (req, res) => {
  try {
    const { feedName, description, type, pet, brand, price } = req.body;
    let imagePath;
    if (req.file) {
      imagePath = req.file.path;
    }
    const feedData = {
      feedName,
      description,
      type,
      pet,
      brand,
      price,
    };
    if (imagePath) {
      feedData.image = imagePath;
    }
    const newFeed = new Feed(feedData);
    await newFeed.save();
    res.status(201).json({ message: "Feed created successfully", feed: newFeed });
  } catch (error) {
    res.status(500).json({ message: "Error creating feed", error: error.message });
  }
};

exports.getFeeds = async (req, res) => {
  try {
    const feeds = await Feed.find({});
    res.status(200).json(feeds);
  } catch (error) {
    res.status(500).json({ message: "Error fetching feeds", error: error.message });
  }
};

exports.getFeedOptions = async (req, res) => {
  try {
    const types = await Feed.distinct("type");
    const pets = await Feed.distinct("pet");
    const brands = await Feed.distinct("brand");
    res.status(200).json({ types, pets, brands });
  } catch (error) {
    res.status(500).json({ message: "Error fetching feed options", error: error.message });
  }
};
