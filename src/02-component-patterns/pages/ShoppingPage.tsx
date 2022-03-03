import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";

import "../styles/custom-styles.css";

export const ShoppingPage = () => {
  const { onProductCountChange } = useShoppingCart();
  return (
    <div style={{ marginLeft: "20px" }}>
      <h2>Shopping Store</h2>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            className="bg-dark text-white"
            onChange={onProductCountChange}
            initialValues={{
              count: 4,
              maxCount: 10,
            }}
          >
            {({ reset, count, increaseBy, isMaxCountReached, maxCount }) => (
              <>
                <ProductImage className="custom-image" />
                <ProductTitle className="text-bold" />
                <ProductButtons className="custom-buttons" />
                <button onClick={reset}>Reset</button>
                {!isMaxCountReached && (
                  <button onClick={() => increaseBy(2)}>+2</button>
                )}
                <button onClick={() => increaseBy(-2)}>-2</button>

                <span>
                  {count} - {maxCount}
                </span>
              </>
            )}
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
