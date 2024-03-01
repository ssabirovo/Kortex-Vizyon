import { useNavigate } from "react-router-dom";

const useHandleNavigate = () => {
  const navigate = useNavigate();
  return async (page: string, hash?: string) => {
    await navigate(page);
    hash ? (document.location.hash = hash) : window.scrollTo(0, 0);
  };
};

export default useHandleNavigate;
