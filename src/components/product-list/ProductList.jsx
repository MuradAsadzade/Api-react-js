import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../api/BaseConfig';

const ProductList = ({categoryName,bannerName}) => {

    //useContext
    const [mainProducts, setMainProducts] = useState(null);

    const getProducts = () => {
      fetch(BASE_URL + "/Home/HomeScroll")
        .then((pro) => pro.json())
        .then((result) => setMainProducts(result));
    };
    useEffect(() => {
      getProducts();
    }, []);
  
  return (
    <section className="my-5">
    <div className="container my-5">
      <div className="row">
        {mainProducts!==null? (
          <>
            {/* <div className="col-lg-3">
            <h5>{mainProducts[`${categoryName}`].name}</h5>

              <img className="img-fluid"
               src={mainProducts[`${categoryName}`][`${bannerName}`][0].banner} 
              alt={mainProducts[`${categoryName}`][`${bannerName}`][0].alt}/>
            </div> */}

            <div className="col-lg-9">
              <div className="row">
                {mainProducts[`${categoryName}`].products.map((pro) => (
                  <div className="col-lg-4">
                    <div className="product-item p-4 text-center">
                      <img
                        style={{ height: "120px", objectFit: "contain" }}
                        src={pro.photo}
                        width="100%"
                        alt=""
                      />
                      {pro.discount > 0 ? (
                        <>
                          <h5>
                            <del>{pro.priceNoDiscount}</del>{" "}
                            {pro.currentPrice}
                          </h5>
                        </>
                      ) : (
                        <h5>{pro.priceNoDiscount}</h5>
                      )}
                      <p>
                        <Link to={`/mehsullar/${pro.id}`}>{pro.title}</Link>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <p>loading</p>
        )}
      </div>
    </div>
    </section>  )
}

export default ProductList