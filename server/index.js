const express = require("express");
const app = express();
const cors = require('cors');


require('dotenv').config();
const PORT = process.env.PORT || 4000;


app.use(cors());
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(express.json());
const fileupload = require("express-fileupload");
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

require("./config/database").connect();

const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

//route import and mount
const user = require("./routes/routes");
app.use("/api/v1", user);
//actuivate

app.options('*', cors());

app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
})