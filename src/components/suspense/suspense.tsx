import c from "./suspense.module.scss";

function Loading() {
  return (
    <div className={c.wrapper}>
      <img className={c.logo1} src="/src/assets/images/logo1.svg" alt="" />
      <img className={c.logo2} src="/src/assets/images/logo2.svg" alt="" />
    </div>
  );
}

export default Loading;
