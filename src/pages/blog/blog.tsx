import { useParams } from "react-router-dom";
import c from "./blog.module.scss";
import { blogs } from "./inside";
import { sex } from "../main/main";

function Blog() {
  const { blogName } = useParams();

  const { author, date, title, imgUrl, content, blogUrl } =
    blogs[blogName as sex];

  return (
    <section className={c.wrapper}>
      <div className={c.container}>
        <img className={c.img} src={imgUrl} alt="" />
        <div className={c.header}>
          <h1>{title}</h1>
          <div className={c.bottom}>
            <div className={c.author}>
              <img src={author.imgUrl} alt="" />
              <div>
                <p>{author.name}</p>
                <p className={c.position}>{author.position}</p>
              </div>
            </div>
            <a target="_blank" href={blogUrl} className={c.btn}>
              Link to arcticle
            </a>
          </div>
          <p className={c.date}>{date}</p>
        </div>

        <div className={c.content}>
          {content.map((p) => (
            <p>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
