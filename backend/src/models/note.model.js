import mongoose from "mongoose";

const notesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },

    isAudio: {
      type: Boolean,
      default: false,
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
    audoUrl: {
      type: String,
      required: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

notesSchema.post("save", async function () {
  try {
    const note = this; // The newly created note
    const user = await mongoose.model("User").findById(note.user);

    if (user) {
      // Push the note ID into the user's notes array if it's not already there
      if (!user.notes.includes(note._id)) {
        user.notes.push(note._id);
        await user.save();
      }
    }
  } catch (error) {
    console.error("Error updating user's notes array on note creation:", error);
  }
});

notesSchema.post("remove", async function () {
  try {
    const note = this; // The note being deleted
    await mongoose.model("User").findByIdAndUpdate(
      note.user,
      { $pull: { notes: note._id } }, // Remove the note ID from the user's notes array
      { new: true },
    );
  } catch (error) {
    console.error("Error updating user's notes array on note deletion:", error);
  }
});

const Notes = mongoose.model("Notes", notesSchema);

export default Notes;
