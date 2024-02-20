import Product from "./components/product/product";
import cl from "./main.module.scss";

function Main() {
  return (
    <>
      <section className={cl.hero}>
        <div className={cl.left}>
          <img src="/src/assets/images/header-img.svg" alt="" />
          <p>
            Discover eco-chic style with our recycled cotton—fashion that's
            sustainable, soft, and planet-friendly
          </p>
          <button>Contact</button>
        </div>
        <div className={cl.right}>
          <img
            className={cl.center}
            src="/src/assets/images/eco-logo.svg"
            alt=""
          />
          <div className={cl.shirt}></div>
          <div className={cl.cotton}></div>
          <div className={cl.yarn}></div>
          <div className={cl.active}></div>
        </div>
      </section>
      <Product />
      <section className={cl.why}>
        <div className={cl.title}>
          <h1>Why Recycled Cotton ?</h1>
          <div></div>
          <p>What are the main benefits of recycled cotton ?</p>
        </div>
      </section>
    </>
  );
}

export default Main;
