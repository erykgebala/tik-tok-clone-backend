import express from 'express';
import mongoose from 'mongoose';
import VideoSchema from './videoSchema.js'
//const url = 'mongodb://192.168.99.100:27017/'; - local server url

const url = "mongodb+srv://admin:AaOxKdqIkzF8qWNB@cluster0.y4tf3.gcp.mongodb.net/tiktokclone?retryWrites=true&w=majority";

mongoose.connect(url,  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db  = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
})
const port = process.env.PORT || 9000;

app.get("/v1/videos", (req, res) => {
    VideoSchema.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    });
});

app.post('/v1/videos', (req, res) => {
    VideoSchema.create(req.body, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
});

app.listen(port, () => console.log("on port... " + port));
