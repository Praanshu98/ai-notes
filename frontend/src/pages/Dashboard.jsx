import CardArea from "../components/CardArea";
import NavBar from "../components/NavBar";
import NoteCreate from "../components/NoteCreate";
import SearchBar from "../components/SearchBar";

const Dashboard = () => {
  return (
    <div className="flex h-screen w-screen p-6">
      <NavBar />
      <div>
        <SearchBar />
        <CardArea />
        <NoteCreate />
      </div>
    </div>
  );
};

export default Dashboard;
