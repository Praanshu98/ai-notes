import NoteCard from "./NoteCard";

export default function CardArea() {
  return (
    <div className="p-3 gap-3 flex flex-wrap">
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
    </div>
  );
}
