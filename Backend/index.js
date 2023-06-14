const express = require("express");

const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
const path = require("path");
const bodyParser = require("body-parser");

const itemRouter = require("./routes/item");
app.use("/item", itemRouter);
const customerRouter = require("./routes/customer");
app.use("/customer", customerRouter);
const salesRouter = require("./routes/sales");
app.use("/sales", salesRouter);
const cartRouter = require("./routes/cart");
app.use("/cart", cartRouter);

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const db = require("./models/index");

app.get("/", (req, res) => {
  res.send("hello moka");
});

db.sequelize
  .sync()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log("This server is running ... ");
    });
  })
  .catch((error) => {
    console.log(error);
  });
