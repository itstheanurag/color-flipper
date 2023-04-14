const express = require("express");
const path = require("path");
const config = require("../config");
// const multer = require('multer');

// const sharp = require('sharp');
const routes = require('./routes')
const app = express();
const APP_PORT = config.development.port;
// Set the public folder as the static directory
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// const upload = multer({
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
//             return cb(new Error('Please upload a valid image file'))
//         }
//         cb(undefined, true)
//     }
// })

// app.post('/image', upload.single('upload'), async (req, res) => {
//     try {
//          await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toFile(__dirname + `public/images/${req.file.originalname}`)
//          res.status(201).send('Image uploaded succesfully')
//     } catch (error) {
//         console.log(error)
//         res.status(400).send(error)
//     }
// })

app.use("/image", routes)

// Listen on port 3000
app.listen(APP_PORT, () => {
  console.log("Server started on port: ", APP_PORT);
});
