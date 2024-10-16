const express = require("express");

const app = express();

const cors = require("cors");

app.use(cors());

app.use(express.json());

require("dotenv").config();

const PORT = process.env.PORT || 7000;

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`⚡⚡⚡ Server is running on http://127.0.0.1:${PORT}`);
});

const connectDB = require("./config/connectDB");

connectDB();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/Vehicles", require("./routes/vehicles"));
app.use("/api/RealEstate", require("./routes/realEstate"));
app.use("/api/Fashion", require("./routes/fashion"));
app.use("/api/HomeGarden", require("./routes/homegarden"));
app.use("/api/Vacation", require("./routes/vacation"));


app.use('/api/auth', require('./routes/authRoutes'))

//app.use('/api/users', require('./routes/userRoutes'))
