import Icons from "../../assets/icons";
import cl from "./footer.module.scss";
import { mediaLinks } from "./inside";

function Footer() {
  return (
    <>
      <section className={cl.media}>
        {mediaLinks.map(({ title, links }) => (
          <div className={cl.left}>
            <div className={cl.title}>
              <h1>{title}</h1>
              <div className={cl.line}></div>
            </div>

            {links.map(({ icon, description, link }) => (
              <div className={cl.link}>
                <Icons name={icon} className={cl.icon} />
                <a href={link}>{description}</a>
              </div>
            ))}
          </div>
        ))}
      </section>
      <iframe
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
          <img src="/src/assets/images/foote-logo.svg" alt="" />
          <div>
            <a href="">Why recycled cotton ?</a>
            <a href="">How it’s made</a>
            <a href="">Blogs</a>
            <a href="">Contacts</a>
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
