import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  // add other needed fields here
  { timestamps: true }
);

const Item = models?.Item || model("Item", schema);
export default Item;
