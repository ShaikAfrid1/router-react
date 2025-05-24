import { useNavigate } from "react-router-dom";

const ServiceUpdate = () => {
  const nav = useNavigate();

  return (
    <div>
      <h1 className="mb-3 text-4xl font-thin">More Updates</h1>
      <h2 className="mb-5 text-2xl font-thin">Update your service...</h2>
      <button
        onClick={() => nav(-1)}
        className="bg-white text-black px-4 py-2 rounded"
      >
        Go Back
      </button>
    </div>
  );
};

export default ServiceUpdate;
