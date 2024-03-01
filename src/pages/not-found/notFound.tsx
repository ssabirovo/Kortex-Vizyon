import c from "./notFound.module.scss";

function NotFound() {
  return (
    <div className={c.wrapper}>
      <h1>
        <b>OOPS!</b>
        Page not found
      </h1>
      <h3>404</h3>
      <button>Back to home</button>
    </div>
  );
}

export default NotFound;
