const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");

const app = express();

// Load Envs
dotenv.config({ path: "./config/config.env" });

// Middlewares
const logger = require("./middleware/logger");

// Routes Files
const bootcamps = require("./routes/bootcamps");


// Use Middleware
app.use(logger);
if (process.env.NODE_ENV !== "production") app.use(morgan('dev'));

// Mount routes
app.get("/", (req, res) => {
  res.status(404).json({ success: false });
});

app.use("/api/v1/bootcamps", bootcamps);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server is in ${process.env.NODE_ENV} mode, and is listening on ${PORT}`.yellow.bold
  );
});

// app.get("/", (req, res) => {
//   // res.send("Hello Express!")
//   // res.json({ name: 'Haider Rizvi'})
//   // res.send('<h1>Hello Express</h1>')
//   // res.sendStatus(400)
//   res.status(404).json({ success: false });
// });
