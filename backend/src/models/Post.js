import mongoose, { mongo } from "mongoose"

const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    comments : [
        {
            text: {type: String, required: true},
            author_name : {type: String, required: true},
        }
    ]
});

const Post = mongoose.model("Post", postSchema); 

export default Post;

