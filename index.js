require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8080;
const mountainRouter = require("./routes/mountain-routes");

app.use(cors());
app.use(express.json());


app.use("/api", mountainRouter );


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
