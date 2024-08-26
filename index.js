require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8080;
const mountainRouter = require("./routes/mountain-routes");
const trailMapRouter = require("./routes/trailmap-routes");
const liveCamRouter = require("./routes/livecam-routes");

const corsOptions = {
  origin: 'https://codeia94.github.io/',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());


app.use("/api", mountainRouter );
app.use("/api", trailMapRouter);
app.use("/api", liveCamRouter);
app.use('/icons', express.static('public/icons'));
app.use('/images', express.static('public/images'));
app.use('/trailmaps', express.static('public/trailmaps'));

app.get('/', function (req, res) {
  res.send('Server is working')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
