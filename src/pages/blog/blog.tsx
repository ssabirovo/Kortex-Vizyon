import { useParams } from "react-router-dom";
import c from "./blog.module.scss";
import { blogs } from "./inside";
import { sex } from "../main/main";
import { useTranslation } from "react-i18next";

function Blog() {
  const { blogName } = useParams();
  const { t } = useTranslation();

  const { author, date, title, imgUrl, content, blogUrl } =
    blogs[blogName as sex];

  return (
    <section className={c.wrapper}>
      <div className={c.container}>
        <img className={c.img} src={imgUrl} alt="" />
        <div className={c.header}>
          <h1>{t(title)}</h1>
          <div className={c.bottom}>
            <div className={c.author}>
              <img src={author.imgUrl} alt="" />
              <div>
                <p>{author.name}</p>
                <p className={c.position}>{t(author.position)}</p>
              </div>
            </div>
            <a target="_blank" href={blogUrl} className={c.btn}>
              {t("blogs.linkBtn")}
            </a>
          </div>
          <p className={c.date}>{t(date)}</p>
        </div>

        <div className={c.content}>
          {content.map((num) => (
            <p>{t(`blogs.${blogName}.content.blog` + num)}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
