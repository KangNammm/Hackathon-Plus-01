import React, { useState } from "react";
import banhmi from "./image/banh mi.jpg";
import bunbo from "./image/bun bo hue.jpg";
import buncha from "./image/bun cha.jpg";
import comga from "./image/com ga.jpg";
import comsuon from "./image/com suon.jpg";
import phobo from "./image/pho bo.jpg";
import Cart from "./Cart";

export default function ShoppingCart() {
  const [products, setProducts] = useState(() => {
    const listProducts = JSON.parse(localStorage.getItem("products")) || [];
    return listProducts;
  });

  const [listProduct, setlistProduct] = useState([
    {
      name: " Bánh mì",
      price: "300$",
      image:
        "https://assets.epicurious.com/photos/562e49d300392e9c31da8947/master/pass/EP_10212015_BanhMi-4.jpg",
      id: 1,
    },
    {
      name: " Bún bò",
      price: "400$",
      image:
        "https://th.bing.com/th/id/OIP.SXfegdkWCvC_Hbc3A4eW4wHaE7?pid=ImgDet&rs=1",
      id: 2,
    },
    {
      name: " Bún chả",
      price: "250$",
      image:
        "https://th.bing.com/th/id/OIP.OvGytZHrM2Rbf9cSWnTsCAHaE8?pid=ImgDet&rs=1",
      id: 3,
    },
    {
      name: " Cơm gà",
      price: "500$",
      image: "https://cdn.tgdd.vn/2021/01/CookProduct/1-1200x676-22.jpg",
      id: 4,
    },
    {
      name: " Cơm sườn",
      price: "550$",
      image:
        "https://i.pinimg.com/originals/61/18/af/6118afcf46b7a07a74d8b340a14a7230.jpg",
      id: 5,
    },
    {
      name: " Phở bò",
      price: "350$",
      image:
        "https://th.bing.com/th/id/R.3bd84035e9f6fea3278f41378b35f25b?rik=rwcwgtPtgGxtXQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-SYaF0KHskGk%2fTesyEI2XqHI%2fAAAAAAAAAn4%2fz7znZmFX-Og%2fs1600%2fimg_2278.jpg&ehk=tXB%2byQLn4gytfuC32gyrrcFxCHqDu7GvtIkToLBUeek%3d&risl=&pid=ImgRaw&r=0",
      id: 6,
    },
  ]);

  const [show, setShow] = useState(false);

  const handleShowCart = () => {
    setShow(true);
  };

  const handleCloseCart = () => {
    setShow(false);
  };

  const [product, setProduct] = useState("");
  const handleAddToCart = (product) => {
    const newCart = [...products, product];
    setProducts(newCart);
    localStorage.setItem("products", JSON.stringify(newCart));
  };
  return (
    <>
      <>{show ? <Cart handleCloseCart={handleCloseCart} /> : <></>}</>
      <section>
        <div style={{ margin: 60 }}>
          <h2 style={{}}>Shopping Cart</h2>
          <i
            style={{ fontSize: "2rem", marginLeft: "75rem" }}
            className="fa-solid fa-cart-shopping"
            onClick={handleShowCart}
          ></i>
        </div>

        <div className="container text-center">
          <div className="row row-cols-3">
            {listProduct.map((listProduct) => (
              <div className="col">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    style={{ height: "15rem" }}
                    src={listProduct.image}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{listProduct.name}</h5>
                    <p className="card-text">{listProduct.price}</p>
                    <a
                      href="#"
                      className="btn btn-primary"
                      onClick={() => handleAddToCart(listProduct)}
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
