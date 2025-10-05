const ImageKit = require("imagekit");
const fs = require("fs");
const path = require("path");

// Check if ImageKit environment variables are available
const hasImageKitConfig = process.env.IMAGEKIT_PUBLIC_KEY && 
                         process.env.IMAGEKIT_PRIVATE_KEY && 
                         process.env.IMAGEKIT_URL_ENDPOINT;

let imagekit = null;

if (hasImageKitConfig) {
    imagekit = new ImageKit({
        publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
        privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
        urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
    });
} else {
    console.warn("ImageKit configuration missing. Using local file storage for development.");
}

async function uploadFile(file, fileName) {
    if (imagekit) {
        // Use ImageKit if configured
        const result = await imagekit.upload({
            file: file, // required
            fileName: fileName, // required
        });
        return result;
    } else {
        // Fallback to local file storage for development
        const uploadsDir = path.join(__dirname, '../../uploads');
        
        // Create uploads directory if it doesn't exist
        if (!fs.existsSync(uploadsDir)) {
            fs.mkdirSync(uploadsDir, { recursive: true });
        }
        
        const filePath = path.join(uploadsDir, fileName);
        fs.writeFileSync(filePath, file);
        
        // Return a mock result with local URL
        return {
            url: `http://localhost:3000/uploads/${fileName}`,
            fileId: fileName
        };
    }
}

module.exports = {
    uploadFile
}