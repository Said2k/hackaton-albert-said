import React from "react";
import Footer from "../Footer/Footer";
import "../ProductCard/ProductCards.css";
const ProductCards = () => {
  return (
    <>
      <div className="backCards">
        <nav className="navLinks navLinksSticky">
          <div>
            <a href="/products">
              <img
                src="https://dlcdnwebimgs.asus.com/gain/5DBD796D-6613-4949-8848-BCC0D9D81D83/w240/h175"
                alt=""
              />
            </a>
            <h2>
              <a href="/products">Мониторы</a>
            </h2>
            <p>Идеальные игрове мониторы</p>

            {/* <button>
              <a href="/products">ПОДРОБНЕЕ</a>
            </button> */}
          </div>

          <div>
            <a href="/products">
              <img
                src="https://dlcdnwebimgs.asus.com/gain/A8895516-3C00-4DA2-97CA-04F258098672/w240/h175"
                alt=""
              />
            </a>
            <h2>
              <a href="/products">ROG Phone 6 D</a>
            </h2>
            <p>Игровые Смартфоны</p>
            <p></p>
            {/* <button>
              <a href="/products">ПОДРОБНЕЕ</a>
            </button> */}
          </div>

          <div>
            <a href="/products">
              <img
                src="https://dlcdnwebimgs.asus.com/gain/868C3307-DD02-4624-8BA7-31B62EE4A38F/w240/h175"
                alt=""
              />
            </a>

            <h2>
              <a href="/products">ROG STRIX G17</a>
            </h2>
            <p>Мощный игровой ноутбук</p>

            {/* <button>
              <a href="/products">ПОДРОБНЕЕ</a>
            </button> */}
          </div>

          <div>
            <a href="">
              <img
                src="https://dlcdnwebimgs.asus.com/gain/F919198E-4F2B-4A8A-969A-E6E4757674AC/w240/h175"
                alt=""
              />
            </a>

            <h2>
              <a href="/products">ROG Strix Impact III</a>
            </h2>
            <p>Современный игровые мышки</p>
            {/* <button>
              <a href="/products">ПОДРОБНЕЕ</a>
            </button> */}
          </div>
        </nav>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default ProductCards;
