const express = require("express");
const cors = require('cors');
const port = process.env.PORT || 8000;

const app = express();
app.use(cors());

const s3VideoUrl = 'https://subham-project-bucket.s3.ap-south-1.amazonaws.com/Roller+Coaster.mp4';

const getVideo = (req, res) => {
  return res.json({ success: true, url: s3VideoUrl });
}

app.get("/video", getVideo);

app.listen(port, () => {
  console.log("server is running");
});