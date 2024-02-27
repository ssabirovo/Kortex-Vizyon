import Product from "./components/product/product";
import cl from "./main.module.scss";
import { whyCards } from "./why-inside";

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
        <div className={cl.cards}>
          {whyCards.map(({ description, imgUrl, title }) => (
            <div className={cl.card}>
              <img src={imgUrl} alt="" />
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>
      <div className={cl.how}>
        <video
          src="/src/assets/videos/heros_video_process.mp4"
          autoPlay
          muted
          loop
        ></video>
        <section className={cl.container}>
          <div className={cl.content}>
            <h1>How it’s made ?</h1>
            <p>
              What is the process involved in creating our product from start to
              finish ?
            </p>
            <button>See more</button>
          </div>
        </section>
      </div>
      <section className={cl.blogs}>
        <div className={cl.head}>
          <div className={cl.left}>
            <h1>Blogs</h1>
            <div></div>
            <p>
              We share expert opinions and posts on recycled cotton, fostering
              knowledge and sustainable practices within fashion.
            </p>
          </div>
          <button>View all</button>
        </div>
        <div className={cl.cards}>
          <div className={cl.card}>
            <div className={cl.img}></div>
            <div className={cl.info}>
              <p className={cl.date}>Oct 23, 2023</p>
              <p className={cl.heading}>
                How SaaS Startup Funding Works and Tips to Land It
              </p>
              <div className={cl.author}>
                <img src="/src/assets/images/author.png" alt="" />
                <div>
                  <p className={cl.name}>Md. Mustafizur Rahman</p>
                  <p className={cl.position}>TC Lead & Regional TC Inspector</p>
                </div>
              </div>
            </div>
          </div>
          <div className={cl.card}>
            <div className={cl.img}></div>
            <div className={cl.info}>
              <p className={cl.date}>Oct 23, 2023</p>
              <p className={cl.heading}>
                How SaaS Startup Funding Works and Tips to Land It
              </p>
              <div className={cl.author}>
                <img src="/src/assets/images/author.png" alt="" />
                <div>
                  <p className={cl.name}>Md. Mustafizur Rahman</p>
                  <p className={cl.position}>TC Lead & Regional TC Inspector</p>
                </div>
              </div>
            </div>
          </div>
          <div className={cl.card}>
            <div className={cl.img}></div>
            <div className={cl.info}>
              <p className={cl.date}>Oct 23, 2023</p>
              <p className={cl.heading}>
                How SaaS Startup Funding Works and Tips to Land It
              </p>
              <div className={cl.author}>
                <img src="/src/assets/images/author.png" alt="" />
                <div>
                  <p className={cl.name}>Md. Mustafizur Rahman</p>
                  <p className={cl.position}>TC Lead & Regional TC Inspector</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
