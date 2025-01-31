import products from "../../data/products";

// Components
import ProductItem from "../product-item/index";

// Styles
import * as Styles from "./styles";

const Products = () => {
  return (
    <>
    <Styles.Title>| Todos os Produtos</Styles.Title>
    <Styles.Container>
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </Styles.Container>
    </>
  );
};

export default Products;
