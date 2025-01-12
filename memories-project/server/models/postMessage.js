import mongoose from "mongoose";

// creating schema
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFiles: String,
  likeCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
});

// converting schema to model
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;