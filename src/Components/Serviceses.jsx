import { useNavigate, Outlet } from "react-router-dom";

const Serviceses = () => {
  const nav = useNavigate();
  return (
    <div>
      <h1 className="text-5xl font-thin mb-5">Service</h1>
      <button
        onClick={() => nav("/serviceses/detail")}
        className="bg-white text-black px-4 py-2 rounded mr-2"
      >
        More Details!
      </button>
      <button
        onClick={() => nav("/serviceses/update")}
        className="bg-white text-black px-4 py-2 rounded"
      >
        More Details!
      </button>
      <hr className="my-10" />
      <Outlet />
    </div>
  );
};

export default Serviceses;
