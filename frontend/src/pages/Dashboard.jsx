import CardArea from "../components/CardArea";
import NavBar from "../components/NavBar";
import NoteCreate from "../components/NoteCreate";
import SearchBar from "../components/SearchBar";

const Dashboard = () => {
  return (
    <div className="flex p-3 gap-6 h-screen">
      <NavBar />
      <div className="flex flex-col flex-1">
        <SearchBar />

        <div className="flex-1 overflow-auto">
          <CardArea />
        </div>
        <NoteCreate />
      </div>
    </div>
  );
};

export default Dashboard;
