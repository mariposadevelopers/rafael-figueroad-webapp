import Post from "../models/Post.js";

export async function getAllPosts (req, res){
    try {
        const posts = await Post.find();
        res.status(201).json(posts);
    } catch(error){
        res.status(500).json(error)
    }
}

export async function getPostById (req, res) {
    try{
        const post = await Post.findById(req.params.id);
        if(!post){
            return res.status(404).json({message: "Post not found"});
        }
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({message: "Internal server error."})
    }
}

export async function postPost (req, res) {
    try {
        const {title, content, comments} = req.body; 
        const post = new Post({title, content, comments});
        const savedPost = await post.save(); 
        res.status(201).json({savedPost});
    } catch (error) {
        console.error("Error creating post:", error); 
        res.status(500).json(error); 
    }
}

// export async function updatePost (req, res) {
//     try {
//         const {name, email, role} = req.body;
//         const updatedUser = await User.findByIdAndUpdate(req.params.id, {name, email, role});
//         if (!updatedUser) {
//             return res.status(404).json({message: "User not found"});
//         }
//         res.status(201).json({message : "update completed succesfully "})    
//     } catch (error) {
//         res.status(500).json({message: "Internal server error. "})    
//     }
// }
// export async function deleteUser (req, res) {

//     try {
//         const deletedUser = await User.findByIdAndDelete(req.params.id);
//         if(!deleteUser){
//             return res.status(404).json({message: "User not found"});
//         }
//         res.status(201).json({message : "delete completed succesfully "})   

//     } catch (error) {
//         res.status(500).json({message: "Internal server error."})
//     }
// };