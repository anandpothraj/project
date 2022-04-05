const express = require("express");
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const patientRoutes = require("./routes/patientRoutes");
const inspectorRoutes = require("./routes/inspectorRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

dotenv.config();
connectDB();
app.use(express.json());
app.use(userRoutes);
app.use(doctorRoutes);
app.use(patientRoutes);
app.use(inspectorRoutes);
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.listen(PORT,console.log(`Server started on port ${PORT}`));