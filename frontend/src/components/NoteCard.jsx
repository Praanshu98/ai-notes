export default function NoteCard() {
  return (
    <div className="border border-slate-200 rounded-2xl p-3 w-72 h-96 gap-2 flex flex-col relative">
      {/* Header Bar */}
      <div className="flex items-center text-sm justify-between">
        <div className="flex items-center text-slate-300">
          <div> Jan 30, 2025 </div>
          <span>.</span>
          <div>5:26PM</div>
        </div>

        <div className="bg-slate-300 p-1 px-1.5 rounded-2xl flex gap-0.5 items-center">
          <div className="bg-black w-3 h-3.5 flex justify-center">
            <p className="text-slate-200 text-xs">T</p>
          </div>
          <p>Text</p>
        </div>
      </div>

      {/* Note Heading */}
      <div className="font-bold truncate">
        Some Random Heading for Note card
      </div>

      <div className="text-slate-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio,
        iusto doloribus. Possimus expedita illum deserunt ad libero molestias
        officiis, nam magni provident placeat quisquam nihil animi nemo amet
        inventore! Ipsum?
      </div>

      <div className="flex gap-2 absolute bottom-3 items-center right-3">
        <img
          src="../../assets/images/png/clipboard.png"
          alt="clipboard icon"
          className="w-5 h-5"
        />
        <div>...</div>
      </div>
    </div>
  );
}
