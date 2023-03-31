// useTokenCheck.js
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkTokenValidity } from "../redux/slices/authSlice";

export default function useTokenCheck() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    const checkToken = async () => {
      const isValid = await dispatch(checkTokenValidity(navigate));
      if (!isValid) {
        navigate("/", { replace: true });
      }
    };

    if (!isLoggedIn) {
      checkToken();
    }
  }, [dispatch, navigate, isLoggedIn]);
}
