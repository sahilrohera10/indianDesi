const adminModel = require("../Models/adminModel");

module.exports = {
  uploadProduct,
  getFoodByType,
};

async function uploadProduct(req, res, next) {
  try {
    var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        // Uploads is the Upload_folder_name
        cb(null, "./ImgUploads");
        // cb(null, path.join(__dirname, "/ImgUploads/"));
      },
      filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg");
      },
    });

    const maxSize = 10 * 2000 * 2000;

    var upload = multer({
      storage: storage,
      limits: { fileSize: maxSize },
      fileFilter: function (req, file, cb) {
        // Set the filetypes, it is optional
        var filetypes = /jpeg|jpg|png/;
        var mimetype = filetypes.test(file.mimetype);

        var extname = filetypes.test(
          path.extname(file.originalname).toLowerCase()
        );

        if (mimetype && extname) {
          return cb(null, true);
        }

        cb(
          "Error: File upload only supports the " +
            "following filetypes - " +
            filetypes
        );
      },

      // mypic is the name of file attribute
    }).single("image");

    upload(req, res, async function (err) {
      if (err) {
        return res.send(err);
      } else {
        // productsData.update({ imageId: req.file.filename }, { where: { id: 2 } });
        const data = await adminModel.create({
          imageId: req.file.filename,
          title: req.body.title,
        });
        const type = req.body.type;
        if (type == "breakfast") {
          data.type = "Breakfast";
        } else if (type == "lunch") {
          data.type == "Lunch";
        } else {
          data.type = "Dinner";
        }
        data.save();

        console.log("data uploaded :", data);
        return res.status(200).json("product uploaded successfully");
        // SUCCESS, image successfully uploaded
        // res.send("Success, Image uploaded!");
      }
    });
  } catch (error) {
    console.log("error : ", error);
    return next(error);
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

async function getFoodByType(req, res) {
  const { selectedMeal } = req.params;
  console.log("here");
  try {
    const meals = await adminModel.find({ type: selectedMeal });

    const shuffledMeals = shuffleArray(meals);
    console.log("data=>", shuffledMeals);
    res.status(200).json({ data: shuffledMeals });
  } catch (error) {
    console.log(error);
  }
}
