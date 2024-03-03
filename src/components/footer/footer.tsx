import Icons from "../../assets/icons";
import { mediaLinks } from "./inside";
import useHandleNavigate from "../../services/navigate";
import { useTranslation } from "react-i18next";
import footeLogo from "/src/assets/images/foote-logo.svg";
import cl from "./footer.module.scss";

function Footer() {
  const handleNavigate = useHandleNavigate();
  const { t } = useTranslation();

  return (
    <>
      <section id="contact" className={cl.media}>
        {mediaLinks.map(({ title, links }, i) => (
          <div key={i} className={cl.left}>
            <div className={cl.title}>
              <h1>{t(title)}</h1>
              <div className={cl.line}></div>
            </div>

            {links.map(({ icon, description, link }, i) => (
              <div key={i} className={cl.link}>
                <Icons name={icon} className={cl.icon} />
                <a href={link}>{t(description)}</a>
              </div>
            ))}
          </div>
        ))}
      </section>
      <iframe
        id="location"
        className={cl.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.9002793507207!2d71.13970427592879!3d40.565879346548286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bae34055afde2d%3A0x738ab23cd51c0e5e!2sKortex%20Vizyon!5e0!3m2!1sru!2s!4v1708949594421!5m2!1sru!2s"
        width="100%"
        height="300"
        style={{ border: "none" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <section className={cl.footer}>
        <div className={cl.top}>
          <img src={footeLogo} alt="" />
          <div>
            <a onClick={() => handleNavigate("/", "#why")}>
              Why recycled cotton ?
            </a>
            <a onClick={() => handleNavigate("/", "#how")}>
              {t("main.why.title")}
            </a>
            <a onClick={() => handleNavigate("/", "#blogs")}>
              {t("main.how.title")}
            </a>
            <a onClick={() => handleNavigate("/", "#contact")}>
              {t("footer.contacts")}
            </a>
          </div>
        </div>
        <div className={cl.top}>
          <p>©2023 KORTEX VIZYON</p>
          <p>The Services are licensed</p>
        </div>
      </section>
    </>
  );
}

export default Footer;
