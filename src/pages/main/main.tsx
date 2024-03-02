import { useNavigate } from "react-router-dom";
import Product from "./components/product/product";
import { whyCards } from "./why-inside";
import { blogs } from "../blog/inside";
import cl from "./main.module.scss";
import useHandleNavigate from "../../services/navigate";

export type sex = keyof typeof blogs;

function Main() {
  const navigate = useNavigate();
  const blogsNames: sex[] = ["blog1", "blog2", "blog3"];

  const handleNavigate = useHandleNavigate();

  return (
    <>
      <section id="main" className={cl.hero}>
        <div className={cl.left}>
          <img src="/src/assets/images/header-img.svg" alt="" />
          <p>
            Discover eco-chic style with our recycled cotton—fashion that's
            sustainable, soft, and planet-friendly
          </p>
          <a href="#contact">
            <button>Contact</button>
          </a>
        </div>
        <div className={cl.right}>
          <img
            className={cl.center}
            src="../../assets/images/eco-logo.svg"
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
          <h1>Why Recycled Cotton ?</h1>
          <div></div>
          <p>What are the main benefits of recycled cotton ?</p>
        </div>
        <div className={cl.cards}>
          {whyCards.map(({ description, imgUrl, title }) => (
            <div className={cl.card} key={title}>
              <img src={imgUrl} alt="" />
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>
      <div id="how" className={cl.how}>
        <video autoPlay muted loop>
          <source src="/src/assets/videos/heros_video_process.mp4" />
        </video>
        <section className={cl.container}>
          <div className={cl.content}>
            <h1>How it’s made ?</h1>
            <p>
              What is the process involved in creating our product from start to
              finish ?
            </p>
            <button
              onClick={() => {
                navigate("/process");
                window.scrollTo(0, 0);
              }}
            >
              See more
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
                  <p className={cl.date}>{blogs[name].date}</p>
                  <p className={cl.heading}>{blogs[name].title}</p>
                </div>
                <div className={cl.author}>
                  <img
                    src={blogs[name].author.imgUrl}
                    className={cl.img}
                    alt=""
                  />
                  <div>
                    <p className={cl.name}>{blogs[name].author.name}</p>
                    <p className={cl.position}>{blogs[name].author.position}</p>
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
