const itemsModel = require("../Schemas/itemsSchema");


async function fetchingItems(req,res){
   const response = await itemsModel.find();
   res.send(response);
};

async function createItems(req, res) {
  try {
    const vendorId = req.vendor._id;  // coming from middleware

    const newItem = await itemsModel.create({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      image: req.body.image,
      vendor: req.vendor._id,    });

    res.status(201).json({ message: "Item created", newItem });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
}



module.exports = {fetchingItems,createItems};