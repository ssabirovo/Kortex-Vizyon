import { useState } from "react";
import { colorObj, colors } from "./inside";
import cx from "classnames";
import cl from "./product.module.scss";

function Product() {
  const [activeColor, setActiveColor] = useState<colorObj>({
    name: "White",
    code: "d 100-1223(1)",
    hexCode: "#EDE8E1",
    imgUrl: "/src/assets/images/white.png",
  });

  return (
    <section className={cl.product}>
      <img className={cl.left} src={activeColor.imgUrl} alt="" />
      <div className={cl.right}>
        <div className={cl.title}>
          <h1>Recycled cotton</h1>
          <div></div>
        </div>
        <div>
          <h3>{activeColor.name}</h3>
          <p>{activeColor.code}</p>
          <div className={cl.colors}>
            {colors.map(({ hexCode, imgUrl, code, name }) => (
              <div
                onClick={() => {
                  setActiveColor({ code, hexCode, imgUrl, name });
                }}
                className={cx(activeColor.hexCode == hexCode && cl.activeColor)}
                style={{ backgroundColor: hexCode }}
              ></div>
            ))}
          </div>
        </div>
        <button>Order</button>
      </div>
    </section>
  );
}

export default Product;
