const mongoose = require('mongoose');
const userModel = require('./src/models/user.model');
const foodPartnerModel = require('./src/models/foodpartner.model');
const foodModel = require('./src/models/food.model');
require('dotenv').config();

async function seedData() {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');

        // Clear existing data
        await foodModel.deleteMany({});
        await userModel.deleteMany({});
        await foodPartnerModel.deleteMany({});

        // Create a test food partner
        const foodPartner = await foodPartnerModel.create({
            name: "Tasty Bites Restaurant",
            email: "test@tastybites.com",
            password: "$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi", // password
            phone: "+1234567890",
            address: "123 Main Street, Food City",
            contactName: "John Doe"
        });

        // Create a test user
        const user = await userModel.create({
            fullName: "Jane Smith",
            email: "jane@example.com",
            password: "$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi" // password
        });

        // Create some sample food items using the existing videos
        const sampleFoods = [
            {
                name: "Delicious Pasta",
                description: "Creamy alfredo pasta with fresh herbs and parmesan cheese",
                video: "http://localhost:3000/uploads/1583289-hd_712_1366_20fps.mp4",
                foodPartner: foodPartner._id,
                likeCount: 15,
                savesCount: 8,
                commentsCount: 3
            },
            {
                name: "Grilled Salmon",
                description: "Perfectly grilled salmon with lemon and dill",
                video: "http://localhost:3000/uploads/3198245-hd_720_1280_50fps.mp4",
                foodPartner: foodPartner._id,
                likeCount: 23,
                savesCount: 12,
                commentsCount: 5
            },
            {
                name: "Chocolate Cake",
                description: "Rich chocolate cake with vanilla frosting",
                video: "http://localhost:3000/uploads/3298011-hd_1080_2048_25fps.mp4",
                foodPartner: foodPartner._id,
                likeCount: 31,
                savesCount: 18,
                commentsCount: 7
            },
            {
                name: "Fresh Salad",
                description: "Healthy mixed greens with seasonal vegetables",
                video: "http://localhost:3000/uploads/4058071-hd_1080_2048_25fps.mp4",
                foodPartner: foodPartner._id,
                likeCount: 12,
                savesCount: 6,
                commentsCount: 2
            },
            {
                name: "BBQ Ribs",
                description: "Smoky BBQ ribs with homemade sauce",
                video: "http://localhost:3000/uploads/5900834-hd_1080_2048_25fps.mp4",
                foodPartner: foodPartner._id,
                likeCount: 28,
                savesCount: 15,
                commentsCount: 4
            },
            {
                name: "Sushi Roll",
                description: "Fresh salmon and avocado sushi roll",
                video: "http://localhost:3000/uploads/6202680-hd_1080_1920_25fps.mp4",
                foodPartner: foodPartner._id,
                likeCount: 19,
                savesCount: 9,
                commentsCount: 3
            }
        ];

        for (const food of sampleFoods) {
            await foodModel.create(food);
        }

        console.log('Sample data created successfully!');
        console.log('Test Food Partner: test@tastybites.com / password');
        console.log('Test User: jane@example.com / password');
        
    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        await mongoose.disconnect();
    }
}

seedData();
