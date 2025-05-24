import { useNavigate } from "react-router-dom";

const ServiceDetail = () => {
  const nav = useNavigate();

  return (
    <div>
      <h1 className="mb-3 text-4xl font-thin">More Services</h1>
      <h2 className="mb-5 text-2xl font-thin">Choose Us...</h2>
      <button
        onClick={() => nav(-1)}
        className="bg-white text-black px-4 py-2 rounded"
      >
        Go Back
      </button>
    </div>
  );
};

export default ServiceDetail;
