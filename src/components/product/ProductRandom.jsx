import queryString from "query-string";
import { getRandomProduct } from "../../helpers/getRandomProducts";
import { ProductCard } from "./ProductCard";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { getProductByName } from "../../helpers/getProductByName";

export const ProductRandom = () => {
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  let filteredProducts = useMemo(() => getProductByName(q), [q]);

  console.log(filteredProducts);
  console.log("q " + q);

  const randomProduct = getRandomProduct(9);

  return (
    <div className="row">
      {q === "" ? (
        <div className="alert alert-info">Buscar un héroe</div>
      ) : filteredProducts.length === 0 && (
        randomProduct.map((product) => (
          <ProductCard size="col-xl-4" key={product.id} {...product} />
        )
      )
      )}

      {filteredProducts.map((product) => (
        <ProductCard size="col-xl-4" key={product.id} {...product} />
      ))}
    </div>
  );
};
