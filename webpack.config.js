const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist/app"), 
    filename: "app.js",
    },
// "This will create a webpack basic config"
watch: true,
};