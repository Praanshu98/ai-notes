import Notes from "../models/note.model.js";
import User from "../models/user.model.js";

const createNote = async (req, res) => {
  try {
    const { title, content, isAudio, userId } = req.body;

    if (!title || !content || !userId) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    let userExists = await User.findOne({ _id: userId });

    if (!userExists) {
      return res.status(400).json({ message: "User not found" });
    }

    if (isAudio) {
      if (!audoUrl) {
        return res.status(400).json({ message: "Missing audio url" });
      }
    }

    const notes = await Notes.create({
      title,
      content,
      isAudio,
      user: userId,
    });

    res.status(200).json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteNote = async (req, res) => {
  try {
    const { noteId, userId } = req.query;

    if (!noteId || !userId) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Check of user exists
    let user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if note exists
    let note = await Notes.findById(noteId);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    // Check if user is the owner of the note
    const isUserOwner = note.user == userId;

    if (!isUserOwner) {
      return res.status(403).json({ message: "Not authorized" });
    }

    note = await Notes.findByIdAndDelete(noteId);

    res.status(200).json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateNote = async (req, res) => {
  try {
    const { noteId, userId, title, content, isAudio, audoUrl } = req.body;

    if (!noteId || !userId) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Check of user exists
    let user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if note exists
    let note = await Notes.findById(noteId);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    // Check if user is the owner of the note
    const isUserOwner = note.user == userId;

    if (!isUserOwner) {
      return res.status(403).json({ message: "Not authorized" });
    }

    if (isAudio) {
      if (!audoUrl) {
        return res.status(400).json({ message: "Missing audio url" });
      }
    }

    note.title = title;
    note.content = content;
    note.isAudio = isAudio;
    note.audoUrl = audoUrl;

    const updatedNote = await note.save();

    res.status(200).json(updatedNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { createNote, deleteNote, updateNote };
