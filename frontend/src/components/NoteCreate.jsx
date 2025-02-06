export default function NoteCreate() {
  return (
    <div className="bg-white">
      <div className="flex items-center gap-4 h-12 p-2 border border-gray-200 rounded-3xl">
        <div className="flex gap-2">
          <img
            src="../../assets/images/png/pen.png"
            alt="Pen icon"
            className="w-5 h-5"
          />
          <img
            src="../../assets/images/png/picture.png"
            alt="Image icon"
            className="w-5 h-5"
          />
        </div>
        <input
          type="text"
          className="flex-1 mr-3 placeholder:text-gray-200 outline-none"
          placeholder="Take a note..."
        />
        <button className="bg-red-500 flex items-center gap-2 text-white px-3 rounded-2xl py-1.5">
          <div className="rounded-full h-2 w-2 bg-white"></div>
          <p className="text-sm">Start Recording</p>
        </button>
      </div>
    </div>
  );
}
