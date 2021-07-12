const router = require("express").Router();

const File = require("../models/file");

router.get("/:uuid", async (req, res) => {
  try {
    const file = await File.findOne({ uuid: req.params.uuid });

    if (!file) {
      return res.render("download", { error: error.message });
    }
    const filePath = `${__dirname}/../${file.path}`;
    res.download(filePath);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
