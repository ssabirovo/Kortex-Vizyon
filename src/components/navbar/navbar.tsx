import { useState } from "react";
import cx from "classnames";
import Icon from "../../assets/icons/icon";
import cls from "./navbar.module.scss";
import { Langs } from "./inside";

function Navbar() {
  const [closed, setClosed] = useState(false);
  const [activeLang, setActiveLang] = useState("EN");

  const changeLang = (lang: string) => {
    setActiveLang(lang);
  };

  return (
    <section className={cls.navbar}>
      <div className={cls.left}>
        <img src="/src/assets/images/logo1.svg" alt="" />
        <img className={cls.logo2} src="/src/assets/images/logo2.svg" alt="" />
      </div>
      <div className={cls.center}>
        <p>Asosiy</p>
        <p>Maxsulotlar</p>
        <p>Bog'lanish</p>
      </div>
      <div className={cls.right}>
        <div className={cls.dropDown}>
          <div className={cls.header}>
            <Icon name="ChevronDown" />
            <p>{activeLang}</p>
          </div>

          <div className={cx(cls.menu)}>
            {Langs.map(
              (lang) =>
                lang !== activeLang && (
                  <p onClick={() => changeLang(lang)}> {lang}</p>
                )
            )}
          </div>
        </div>

        <div className={cls.hamIcon} onClick={() => setClosed(false)}>
          <Icon name="Bars" />
        </div>
      </div>
      <div className={cx(cls.hamModal, closed && cls.hamModalClose)}>
        <div className={cls.container}>
          <div className={cls.x} onClick={() => setClosed(true)}>
            <Icon name="xMark" />
          </div>
          <div className={cls.body}>
            <p>Asosiy</p>
            <p>Maxsulotlar</p>
            <p>Bog'lanish</p>
          </div>
          <div className={cls.footer}>
            <div className={cls.x}>
              <Icon name="Phone" />
            </div>
            <div className={cls.x}>
              <Icon name="Mail" />
            </div>
            <div className={cls.x}>
              <Icon name="WhatsApp" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
