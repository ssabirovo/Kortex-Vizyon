import { useState } from "react";
import cx from "classnames";
import Icon from "../../assets/icons/icon";
import { Langs } from "./inside";
import cls from "./navbar.module.scss";
import useHandleNavigate from "../../services/navigate";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [closed, setClosed] = useState(true);
  const [activeLang, setActiveLang] = useState("EN");

  const changeLang = (lang: string) => {
    setActiveLang(lang);
  };
  const navigate = useNavigate();
  
  const handleNavigate = useHandleNavigate();

  return (
    <>
      <section className={cls.navbar}>
        <div className={cls.left}>
          <img
            onClick={() => navigate("/")}
            src="/src/assets/images/logo1.svg"
            alt=""
          />
          <img
            onClick={() => navigate("/")}
            className={cls.logo2}
            src="/src/assets/images/logo2.svg"
            alt=""
          />
        </div>
        <div className={cls.center}>
          <p
            onClick={() => {
              handleNavigate("/", "#main");
            }}
          >
            Asosiy
          </p>
          <p
            onClick={() => {
              handleNavigate("/", "#products");
            }}
          >
            Maxsulotlar
          </p>
          <p
            onClick={() => {
              handleNavigate("/", "#contact");
            }}
          >
            Bog'lanish
          </p>
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
                    <p key={lang} onClick={() => changeLang(lang)}>
                      {" "}
                      {lang}
                    </p>
                  )
              )}
            </div>
          </div>

          <div className={cls.hamIcon} onClick={() => setClosed(false)}>
            <Icon name="Bars" />
          </div>
        </div>
      </section>
      <div className={cx(cls.hamModal, closed && cls.hamModalClose)}>
        <div className={cls.container}>
          <div className={cls.x} onClick={() => setClosed(true)}>
            <Icon name="xMark" />
          </div>
          <div className={cls.body}>
            <p onClick={() => handleNavigate("/", "#main")}>Asosiy</p>
            <p onClick={() => handleNavigate("/", "#products")}>Maxsulotlar</p>
            <p onClick={() => handleNavigate("/", "#contact")}>Bog'lanish</p>
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
    </>
  );
}

export default Navbar;
