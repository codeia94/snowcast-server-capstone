require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8080;
const mountainRouter = require("./routes/mountain-routes");
const trailMapRouter = require("./routes/trailmap-routes");

app.use(cors());
app.use(express.json());


app.use("/api", mountainRouter );
app.use("/api", trailMapRouter);
app.use('/icons', express.static('public/icons'));
app.use('/images', express.static('public/images'));


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
