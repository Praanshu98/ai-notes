export default function NavBar() {
  return (
    <div className="min-w-52 w-1/5 p-3 max-w-56 border border-gray-200 rounded-3xl flex flex-col h-full overflow-hidden">
      {/* Logo */}
      <div className="flex gap-3 items-center pb-3">
        <img
          src="../../assets/images/png/notes.png"
          alt="AI Notes Logo"
          className="w-8 h-8"
        />
        <p>AI Notes</p>
      </div>

      {/* Divider */}
      <div className="border-gray-200 border"></div>

      {/* Main section */}
      <div className="flex flex-col justify-between pt-3 flex-1">
        {/* Home/Favourites section expands to fill available space */}
        <div className="flex flex-col flex-1">
          <div className="flex gap-2 items-center">
            <img
              src="../../assets/images/svg/home_default.svg"
              alt="Home"
              className="w-4 h-4"
            />
            <p>Home</p>
          </div>
          <div className="flex gap-2 items-center pt-3">
            <img
              src="../../assets/images/png/fav_default.png"
              alt="Favourites"
              className="w-4 h-4"
            />
            <p>Favourites</p>
          </div>
        </div>

        {/* Profile section stays at the bottom */}
        <div className="flex justify-around">
          <div className="rounded-full text-white bg-black w-6 h-6 flex justify-center">
            P
          </div>
          <p>Praanshu Grover</p>
          <div className="flex flex-col justify-center">
            <img
              src="../../assets/images/png/down.png"
              alt="Change user"
              className="w-4 h-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
