import express from 'express';
import mongoose from 'mongoose';
import VideoSchema from './videoSchema.js'
const url = 'mongodb://192.168.99.100:27017/';

mongoose.connect(url,  { useNewUrlParser: true, useUnifiedTopology: true });

const db  = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
})
const port = 9000;

app.get("/", (req, res) => {
    db.collection('videos').find().toArray()
        .then(results => {
            res.status(200).send(results);
        })

});

app.post('/add', (req, res) => {

    VideoSchema.create({
        channel: '@Jakis channel',
        desc: 'Jakis opis',
        song:  'Jakis song',
        liked: 200,
        comments: 4343,
        shared: 122,
        url: 'https://v16m.tiktokcdn.com/a65bddae9b4a7bf488f56aa54f547ace/5f52b6ab/video/tos/useast2a/tos-useast2a-pve-0068/49ba09ce3adf4304ad49d4ba59fdf203/?a=1233&br=3296&bt=1648&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009041550250101891940813610A7DD&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M288NmhybmxndzMzNTczM0ApO2k4OGczPGU3NzxkMzk0OmdfaDFzYy0waTRfLS0wMTZzczAzMTIuNTFgNjJiMy4yYWE6Yw%3D%3D&vl=&vr='
    }, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
    res.status(200).send(data);
});

app.listen(port, () => console.log("on port... " + port));
