import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const nav = useNavigate();
  const params = useParams();
  // console.log(params);

  return (
    <div>
      <h1 className="mb-3 text-4xl font-thin">{params.name}</h1>
      <h2 className="mb-5 text-2xl font-thin">Product detail...</h2>
      <button
        onClick={() => nav(-1)}
        className="bg-white text-black px-4 py-2 rounded"
      >
        Go Back
      </button>
    </div>
  );
};

export default ProductDetail;
