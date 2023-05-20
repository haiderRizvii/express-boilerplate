const express = require("express");
const dotenv = require("dotenv");

// Routes Files
const bootcamps = require("./routes/bootcamps");

// Load Envs
dotenv.config({ path: "./config/config.env" });

const app = express();

app.get("/", (req, res) => {
  // res.send("Hello Express!")
  // res.json({ name: 'Haider Rizvi'})
  // res.send('<h1>Hello Express</h1>')
  // res.sendStatus(400)
  res.status(404).json({ success: false });
});

// Mount routes
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server is in ${process.env.NODE_ENV} mode, and is listening on ${PORT}`
  );
});
