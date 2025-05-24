import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const nav = useNavigate();
  const goBack = () => {
    nav("/products");
  };
  return (
    <div>
      <h1 className="mb-5">Product Name</h1>
      <h2 className="mb-5">Product detail</h2>
      <button
        onClick={goBack}
        className="bg-white text-black px-4 py-2 rounded"
      >
        Go Back
      </button>
    </div>
  );
};

export default ProductDetail;
