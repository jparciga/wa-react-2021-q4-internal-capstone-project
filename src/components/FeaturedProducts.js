import React from "react";
import Categories from "../mocks/en-us/product-categories.json";

const FeaturedProducts = ({ products }) => {
  var categoryList = Categories.results;

  return (
    <div className="Featured">
      {products.map((product, index) => {
        return (
          <div className="Product" key={index}>
            <div className="Container-product">
              <img
                src={product.data.mainimage.url}
                alt={"product " + (index + 1)}
                className="Product-image"
              />
              <span className="Product-info">
                <div className="Product-category">
                  {
                    categoryList.find(
                      (category) => category.id === product.data.category.id
                    ).data.name
                  }
                  {product.data.category.name}
                </div>
                <div className="Product-name">{product.data.name}</div>
                <div className="Product-price">Price $ {product.data.price}</div>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedProducts;
