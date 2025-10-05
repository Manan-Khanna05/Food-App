const foodModel = require('../models/food.model');
const storageService = require('../services/storage.service');
const likeModel = require("../models/likes.model")
const saveModel = require("../models/save.model")
const { v4: uuid } = require("uuid")


async function createFood(req, res) {
    const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuid())

    const foodItem = await foodModel.create({
        name: req.body.name,
        description: req.body.description,
        video: fileUploadResult.url,
        foodPartner: req.foodPartner._id
    })

    res.status(201).json({
        message: "food created successfully",
        food: foodItem
    })

}

async function getFoodItems(req, res) {
    try {
        const foodItems = await foodModel.find({}).populate('foodPartner', 'name address')
        res.status(200).json({
            message: "Food items fetched successfully",
            foodItems
        })
    } catch (error) {
        console.error('Error fetching food items:', error);
        res.status(500).json({
            message: "Error fetching food items",
            error: error.message
        })
    }
}


async function likeFood(req, res) {
    try {
        const { foodId } = req.body;
        const user = req.user;

        const isAlreadyLiked = await likeModel.findOne({
            user: user._id,
            food: foodId
        })

        if (isAlreadyLiked) {
            await likeModel.deleteOne({
                user: user._id,
                food: foodId
            })

            await foodModel.findByIdAndUpdate(foodId, {
                $inc: { likeCount: -1 }
            })

            return res.status(200).json({
                message: "Food unliked successfully",
                like: false
            })
        }

        const like = await likeModel.create({
            user: user._id,
            food: foodId
        })

        await foodModel.findByIdAndUpdate(foodId, {
            $inc: { likeCount: 1 }
        })

        res.status(201).json({
            message: "Food liked successfully",
            like: true
        })
    } catch (error) {
        console.error('Error liking food:', error);
        res.status(500).json({
            message: "Error liking food",
            error: error.message
        });
    }
}

async function saveFood(req, res) {
    try {
        const { foodId } = req.body;
        const user = req.user;

        const isAlreadySaved = await saveModel.findOne({
            user: user._id,
            food: foodId
        })

        if (isAlreadySaved) {
            await saveModel.deleteOne({
                user: user._id,
                food: foodId
            })

            await foodModel.findByIdAndUpdate(foodId, {
                $inc: { savesCount: -1 }
            })

            return res.status(200).json({
                message: "Food unsaved successfully",
                save: false
            })
        }

        const save = await saveModel.create({
            user: user._id,
            food: foodId
        })

        await foodModel.findByIdAndUpdate(foodId, {
            $inc: { savesCount: 1 }
        })

        res.status(201).json({
            message: "Food saved successfully",
            save: true
        })
    } catch (error) {
        console.error('Error saving food:', error);
        res.status(500).json({
            message: "Error saving food",
            error: error.message
        });
    }
}

async function getSaveFood(req, res) {
    try {
        const user = req.user;

        const savedFoods = await saveModel.find({ user: user._id }).populate('food');

        res.status(200).json({
            message: "Saved foods retrieved successfully",
            savedFoods: savedFoods || []
        });
    } catch (error) {
        console.error('Error fetching saved foods:', error);
        res.status(500).json({
            message: "Error fetching saved foods",
            error: error.message
        });
    }
}


module.exports = {
    createFood,
    getFoodItems,
    likeFood,
    saveFood,
    getSaveFood
}