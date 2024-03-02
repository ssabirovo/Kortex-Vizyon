import { useState } from "react";
import { colorObj, colors } from "./inside";
import cx from "classnames";
import cl from "./product.module.scss";
import Icon from "../../../../assets/icons/icon";
import { useTranslation } from "react-i18next";

function Product() {
  const [activeColor, setActiveColor] = useState<colorObj>({
    name: "White",
    code: "d 100-1223(1)",
    hexCode: "#EDE8E1",
    cottonUrl: "/src/assets/images/white.png",
    fabricUrl: "/src/assets/images/fabric-white.png",
  });
  const [isFabric, setIsBabric] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <section className={cl.header} id="products">
        <h1>{t("main.product.title")}</h1>
        <div></div>
        <p>{t("main.product.description")}</p>
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
            <h1>{t("main.product.name")}</h1>
            <p>
              {t(`main.product.${isFabric ? "statusFabric" : "statusCotton"}`)}
            </p>
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
            <button>{t("main.product.order")}</button>
          </a>
        </div>
      </section>
    </>
  );
}

export default Product;
