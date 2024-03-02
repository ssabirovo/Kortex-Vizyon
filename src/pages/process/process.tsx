import c from "./index.module.scss";
import cx from "classnames";
import { steps } from "./inside";
import { useTranslation } from "react-i18next";

function Process() {
  const { t } = useTranslation();

  return (
    <>
      <div className={c.video}>
        <video
          autoPlay
          muted
          loop
          src="/src/assets/videos/heros_video_process.mp4"
        ></video>
      </div>

      <section className={c.process}>
        <div className={c.title}>
          <h1>{t("main.how.title")}</h1>
          <div></div>
          <p>{t("main.how.description")}</p>
        </div>

        {steps.map(({ step, title, img, description }, index) => (
          <div key={index} className={cx(c.step, index % 2 !== 0 && c.step2)}>
            <div>
              <b>{t(step)}</b>
              <h1>{t(title)}</h1>
              <p>{t(description)}</p>
            </div>
            <img src={t(img)} alt="" />
          </div>
        ))}
      </section>
    </>
  );
}

export default Process;
