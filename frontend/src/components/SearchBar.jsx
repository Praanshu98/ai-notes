export default function SearchBar() {
  return (
    <div className="flex gap-2 items-center">
      <div className="flex flex-1 items-center gap-4 p-1 pl-1.5 border border-gray-200 rounded-3xl">
        <img
          src="../../assets/images/svg/search.svg"
          alt="Search icon"
          className="w-6 h-6"
        />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 mr-3 placeholder:text-gray-200 outline-none"
        />
      </div>
      <button className="flex items-center gap-2 p-1.5 rounded-3xl bg-gray-200">
        <img
          src="../../assets/images/png/filters.png"
          alt="Sort filters"
          className="w-5 h-5"
        />
        <span>Sort</span>
      </button>
    </div>
  );
}
