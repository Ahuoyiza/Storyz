import mongoose, { Schema } from "mongoose";

const BookSchema = new Schema({
  chapter: {
    type: String,
  },

  content: {
    type: String,
  },

  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  book_form: {
    type: Schema.Types.ObjectId,
    ref: "BookForm",
  },
  viewers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});
export default mongoose.model("Book", BookSchema);
