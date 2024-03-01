import c from "./index.module.scss";
import cx from "classnames";
import { steps } from "./inside";

function Process() {
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
          <h1>How it’s made ?</h1>
          <div></div>
          <p>
            What is the process involved in creating our product from start to
            finish ?
          </p>
        </div>

        {steps.map(({ step, title, img, description }, index) => (
          <div key={index} className={cx(c.step, index % 2 !== 0 && c.step2)}>
            <div>
              <b>{step}</b>
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
            <img src={img} alt="" />
          </div>
        ))}
      </section>
    </>
  );
}

export default Process;
