import { useState } from "react";
import { colorObj, colors } from "./inside";
import cx from "classnames";
import cl from "./product.module.scss";
import Icon from "../../../../assets/icons/icon";

function Product() {
  const [activeColor, setActiveColor] = useState<colorObj>({
    name: "White",
    code: "d 100-1223(1)",
    hexCode: "#EDE8E1",
    cottonUrl: "/src/assets/images/white.png",
    fabricUrl: "/src/assets/images/fabric-white.png",
  });
  const [isFabric, setIsBabric] = useState(false);

  return (
    <>
      <section className={cl.header} id="products">
        <h1>Our product</h1>
        <div></div>
        <p>Explore our product in various colors and forms</p>
      </section>
      <section className={cl.product}>
        <div
          className={cl.left}
          style={{
            backgroundImage: `url(${
              isFabric ? activeColor.fabricUrl : activeColor.cottonUrl
            })`,
          }}
        >
          <div className={cl.switcher} onClick={() => setIsBabric(!isFabric)}>
            <Icon name="Cotton" />
            <Icon name="Fabric" />
            <div className={cx(cl.circle, isFabric && cl.fabric)}></div>
          </div>
        </div>

        <div className={cl.right}>
          <div className={cl.title}>
            <h1>Recycled cotton</h1>
            <p>{isFabric ? "In fabric form" : "In cotton form"}</p>
          </div>
          <div>
            <h3>{activeColor.name}</h3>
            <p>{activeColor.code}</p>
            <div className={cl.colors}>
              {colors.map(({ hexCode, code, name, cottonUrl, fabricUrl }) => (
                <div
                  key={code}
                  onClick={() => {
                    setActiveColor({
                      code,
                      hexCode,
                      cottonUrl,
                      fabricUrl,
                      name,
                    });
                  }}
                  className={cx(
                    activeColor.hexCode == hexCode && cl.activeColor
                  )}
                  style={{ backgroundColor: hexCode }}
                ></div>
              ))}
            </div>
          </div>
          <a href="#contact">
            <button>Order</button>
          </a>
        </div>
      </section>
    </>
  );
}

export default Product;
