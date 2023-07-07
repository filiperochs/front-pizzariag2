import { firebaseGetAllUsers } from "../Firebase";

export const fetchSessionUser = () => {
  const jwt =
    localStorage.getItem("jwt") !== "undefined"
      ? JSON.parse(localStorage.getItem("jwt"))
      : localStorage.clear();

  return jwt;
  // return null
};
export const fetchSessionCart = () => {
  const cartInfo =
    localStorage.getItem("cartItems") !== "undefined"
      ? JSON.parse(localStorage.getItem("cartItems"))
      : localStorage.clear();

  return cartInfo ? cartInfo : [];
};

// session usermode
export const fetchSessionUserMode = () => {
  const adminMode =
    localStorage.getItem("userMode") !== "undefined"
      ? JSON.parse(localStorage.getItem("adminMode"))
      : localStorage.clear();

  return adminMode ? adminMode : false;
};
