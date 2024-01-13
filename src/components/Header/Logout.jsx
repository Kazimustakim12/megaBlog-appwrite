// import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { Logout } from "../../store/authSlice";
import Button from "../Button/Button";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService
      .logout()
      .then(() => {
        dispatch(Logout());
      })
      .catch((err) => {
        console.log(err, "error in logout");
      });
  };
  return (
    <Button
      onClick={() => logoutHandler}
      type={"button"}
      title={"Logout"}
      varient={"danger"}
      isActive={false}
    />
  );
};

export default LogoutBtn;
