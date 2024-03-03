import { useNavigate } from "react-router-dom";
import Product from "./components/product/product";
import { whyCards } from "./why-inside";
import { blogs } from "../blog/inside";
import useHandleNavigate from "../../services/navigate";
import { useTranslation } from "react-i18next";
import ecoLogo  from "/src/assets/images/eco-logo.svg"
import video from "/src/assets/videos/heros_video_process.mp4";
import cl from "./main.module.scss";

export type sex = keyof typeof blogs;

function Main() {
  const navigate = useNavigate();
  const blogsNames: sex[] = ["blog1", "blog2", "blog3"];
  const { t } = useTranslation();

  const handleNavigate = useHandleNavigate();

  return (
    <>
      <section id="main" className={cl.hero}>
        <div className={cl.left}>
          <h1>
            <b>{t("main.hero.b")}</b> <br />
            {t("main.hero.title")}
          </h1>

          <p>{t("main.hero.description")}</p>
          <a href="#products">
            <button>{t("navbar.productBtn")}</button>
          </a>
        </div>
        <div className={cl.right}>
          <img
            className={cl.center}
            src={ecoLogo}
            alt=""
          />
          <div className={cl.shirt}></div>
          <div className={cl.cotton}></div>
          <div className={cl.yarn}></div>
          <div className={cl.active}></div>
        </div>
      </section>
      <Product />
      <section id="why" className={cl.why}>
        <div className={cl.title}>
          <h1>{t("main.why.title")}</h1>
          <div></div>
          <p>{t("main.why.description")}</p>
        </div>
        <div className={cl.cards}>
          {whyCards.map(({ description, imgUrl, title }) => (
            <div className={cl.card} key={title}>
              <img src={imgUrl} alt="" />
              <h3>{t(title)}</h3>
              <p>{t(description)}</p>
            </div>
          ))}
        </div>
      </section>
      <div id="how" className={cl.how}>
        <video autoPlay muted loop>
          <source src={video} />
        </video>
        <section className={cl.container}>
          <div className={cl.content}>
            <h1>{t("main.how.title")}</h1>
            <p>{t("main.how.description")}</p>
            <button
              onClick={() => {
                navigate("/process");
                window.scrollTo(0, 0);
              }}
            >
              
              {t("main.how.btn")}
            </button>
          </div>
        </section>
      </div>
      <section id="blogs" className={cl.blogs}>
        <div className={cl.head}>
          <div className={cl.left}>
            <h1>Blogs</h1>
            <div></div>
            <p>
              We share expert opinions and posts on recycled cotton, fostering
              knowledge and sustainable practices within fashion.
            </p>
          </div>
          {/* <button>View all</button> */}
        </div>
        <div className={cl.cards}>
          {blogsNames.map((name) => (
            <div
              key={name}
              className={cl.card}
              onClick={() => handleNavigate(`/blog/${blogs[name].path}`)}
            >
              <div
                className={cl.img}
                style={{ backgroundImage: `url(${blogs[name].imgUrl})` }}
              ></div>
              <div className={cl.info}>
                <div>
                  <p className={cl.date}>{t(blogs[name].date)}</p>
                  <p className={cl.heading}>{t(blogs[name].title)}</p>
                </div>
                <div className={cl.author}>
                  <img
                    src={blogs[name].author.imgUrl}
                    className={cl.img}
                    alt=""
                  />
                  <div>
                    <p className={cl.name}>{blogs[name].author.name}</p>
                    <p className={cl.position}>{t(blogs[name].author.position)}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Main;
