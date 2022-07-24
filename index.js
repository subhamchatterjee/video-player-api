const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors());

const s3VideoUrl = 'https://subham-project-bucket.s3.ap-south-1.amazonaws.com/Roller+Coaster.mp4';

const getVideo = (req, res) => {
  return res.json({ status: true, url: s3VideoUrl });
}

app.get("/video", getVideo);

app.listen(8000, () => {
  console.log("server is running at http://localhost:8000");
});