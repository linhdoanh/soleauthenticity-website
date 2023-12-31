import { useState } from "react";
import productsSizes from "./../../../utils/data/products-sizes";
import { useDispatch, useSelector } from "react-redux";
import { some } from "lodash";
import { addProduct } from "store/reducers/cart";
import { toggleFavProduct } from "store/reducers/user";
import { ProductStoreType } from "types";
import { RootState } from "store";

// type ProductContent = {
//   product: ProductType;
// };

const Content = ({ product }: any) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState<number>(1);
  const [color, setColor] = useState<string>("");
  const [itemSize, setItemSize] = useState<string>("");

  const onClick = () => {
    setCount(c => c + 1);
  };
  const onClickDec = () => {
    setCount(c => Math.max(c - 1, 0));
  };

  const onColorSet = (e: string) => setColor(e);
  console.log(onColorSet);
  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setItemSize(e.target.value);

  const { favProducts } = useSelector((state: RootState) => state.user);
  const isFavourite = some(
    favProducts,
    (productId) => productId === product.id
  );

  const toggleFav = () => {
    dispatch(
      toggleFavProduct({
        id: product.id,
      })
    );
  };

  const addToCart = () => {
    const productToSave: ProductStoreType = {
      id: product.id,
      name: product.name,
      imgPath: product.imgPath,
      salePrice: product.currentPrice,
      noDiscount: product.price,
      count: count,
      color: color,
      size: itemSize,
    };

    const productStore = {
      count,
      product: productToSave,
    };

    dispatch(addProduct(productStore));
  };

  return (
    <section className="product-content">
      <div className="product-content__intro">
        <h5 className="product__id">Product ID: {product.id}</h5>
        <span className="product-on-sale">
          {product.currentPrice ? product.discount + "%" : product.discount === 'Sold Out' ? 'Sold Out' : "No Discount"}
        </span>
        <h2 className="product__name">{product.name}</h2>

        <div className="product__prices">
          <h4>{product.currentPrice ? product.currentPrice + "VNĐ" : ""}</h4>
          <h4>
            {product.currentPrice
              ? product.discount && (
                  <span style={{ textDecoration: "line-through" }}>
                    {product.price} VNĐ
                  </span>
                )
              : product.price + " " +"VNĐ"}
          </h4>
        </div>
      </div>

      <div className="product-content__filters">
        {/* <div className="product-filter-item">
          <h5>Color:</h5>
          <div className="checkbox-color-wrapper">
            {productsColors.map((type) => (
              <CheckboxColor
                key={type.id}
                type={"radio"}
                name="product-color"
                color={type.color}
                valueName={type.label}
                onChange={onColorSet}
              />
            ))}
          </div>
        </div> */}
        <div className="product-filter-item">
          <h5>
            Size: <strong>See size table</strong>
          </h5>
          <div className="checkbox-color-wrapper">
            <div className="select-wrapper">
              <select onChange={onSelectChange}>
                <option>Choose size</option>
                {productsSizes.map((type) => (
                  <option value={type.label}>{type.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="product-filter-item">
          <h5>Quantity:</h5>
          <div className="quantity-buttons">
            <div className="quantity-button">
              <button
                type="button"
                onClick={onClickDec}
                className="quantity-button__btn"
              >
                -
              </button>
              <span>{count}</span>
              <button
                type="button"
                onClick={onClick}
                className="quantity-button__btn"
              >
                +
              </button>
            </div>

            <button
              type="submit"
              onClick={() => addToCart()}
              className="btn btn--rounded btn--yellow"
              style={{
                pointerEvents:
                  product.discount === "Sold Out" ? "none" : "auto",
                opacity: product.discount === "Sold Out" ? 0.4 : '',
              }}
            >
              Add to cart
            </button>
            <button
              type="button"
              onClick={toggleFav}
              className={`btn-heart ${isFavourite ? "btn-heart--active" : ""}`}
            >
              <i className="icon-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
