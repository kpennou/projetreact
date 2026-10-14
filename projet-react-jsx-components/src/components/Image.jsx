import product from "./product";

const Image = () => {
  return (
    <div>
      <img 
        src={product.image} 
        alt={product.name} 
      />
    </div>
  );
};

export default Image;