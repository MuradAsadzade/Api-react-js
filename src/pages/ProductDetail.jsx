import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../api/BaseConfig";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


const ProductDetail = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);

  const getProductById = (myId) => {
    fetch(`${BASE_URL}/product/${myId}`)
      .then((pr) => pr.json())
      .then((pr) => setSingleProduct(pr));
  };
  useEffect(() => {
    getProductById(id);
  }, [id]);
  return (
    <div className="container">
      {singleProduct !== null ? (
        <div className="row justify-content-between">
          <div className="col-lg-5">
            {singleProduct.productGalleries && (
              <img
                className="img-fluid"
                src={singleProduct.productGalleries[0].photo}
                alt=""
              />
            )}
          </div>
          <div className="col-lg-6">
            <div className="product-right">
              <h4>{singleProduct.title}</h4>
              <span>{singleProduct.sellerName}</span>
              {singleProduct.discount > 0 ? (
                <>
                  <h5>
                    <del>{singleProduct.priceNoDiscount} Azn</del>{" "}
                    {singleProduct.currentPrice} Azn
                  </h5>
                </>
              ) : (
                <p>{singleProduct.priceNoDiscount} Azn</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="row justify-content-around">
          <div className="col-lg-5">
            <Skeleton width="100%" count={10} />
          </div>
          <div className="col-lg-6">
            <Skeleton width="100%" count={1} />
            <Skeleton width="80%" count={1} />
            <Skeleton width="70%" count={1} />
            <Skeleton width="40%" count={1} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
