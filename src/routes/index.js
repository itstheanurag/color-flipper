const express = require("express");
const router = new express.Router();
const { upload, uploadFileWithMulter } = require("../services/upload");
router.get("/", (req, res) => {
  console.log("routes hitting successfully");
  return res.json({ status: true, data: "routes hitted successfully" });
});
router.post("/", upload.single("upload"), uploadFileWithMulter);

module.exports = router;
