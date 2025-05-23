import Nav from "./Components/Nav";
import Mainroutes from "./Routes/Mainroutes";

const App = () => {
  return (
    <div className="w-screen h-screen bg-black text-white px-[10%]">
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
