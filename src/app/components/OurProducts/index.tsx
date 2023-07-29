import React, { useState } from "react";

const OurProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState<string>("Grekompost");

  return (
    <div>
      <div>
        <div>Our products</div>
        <div>{selectedProduct}</div>
      </div>
    </div>
  );
};

export default OurProducts;
