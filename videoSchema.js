import mongoose from 'mongoose';

const videoSchema = mongoose.Schema({
    channel: String,
    desc: String,
    song: String,
    liked: Number,
    comments: Number,
    shared: Number,
    url: String
});
export default mongoose.model('videos', videoSchema);

/*

{
    channel: '@Super kanal6',
        desc: 'Jakis opis super kanalu6',
    song:  'Jakis song dla super kanalu6',
    liked: 767,
    comments: 345,
    shared: 543,
    url: 'https://v16m.tiktokcdn.com/a65bddae9b4a7bf488f56aa54f547ace/5f52b6ab/video/tos/useast2a/tos-useast2a-pve-0068/49ba09ce3adf4304ad49d4ba59fdf203/?a=1233&br=3296&bt=1648&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009041550250101891940813610A7DD&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M288NmhybmxndzMzNTczM0ApO2k4OGczPGU3NzxkMzk0OmdfaDFzYy0waTRfLS0wMTZzczAzMTIuNTFgNjJiMy4yYWE6Yw%3D%3D&vl=&vr='
}*/
