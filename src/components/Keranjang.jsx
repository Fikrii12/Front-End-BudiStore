import React from "react";
import { Button } from "react-bootstrap";

const KeranjangBelanja = ({
  cart,
  removeFromCart,
  buyAllProducts,
  productCounts,
}) => {
  return (
    <div>
      <h2>Keranjang Belanja</h2>
      <div>
        {cart.map((product) => (
          <div key={product.id}>
            <span>{product.name}</span>
            <span> RP{product.price}</span>

            <Button
              onClick={() => removeFromCart(product.id)}
              variant="primary"
              type="submit"
            >
              Remove
            </Button>
            <br></br>
            <br></br>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <Button onClick={buyAllProducts} variant="primary" type="submit">
          Beli Semua
        </Button>
      )}
    </div>
  );
};

export default KeranjangBelanja;
