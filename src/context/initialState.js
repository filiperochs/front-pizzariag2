import {
  fetchSessionUser,
  fetchSessionUserMode,
} from "../utils/fetchSessionData";

const sessionUser = fetchSessionUser();
const sessionUserMode = fetchSessionUserMode();
export const initialState = {
  user: sessionUser,
  foodItems: [
    {
      id: 1,
      title: "Pizza de Peperoni",
      price: "36.99",
      imageURL:
        "https://uploads-pizzaria.s3.sa-east-1.amazonaws.com/thumbnail_2c3125eb8597b442fad87e2c031423e6_XL_d387e89114.jpg",
      calories: "200",
      qty: "2",
      category: "pizzas",
    },
    {
      id: 2,
      title: "Guaraná",
      price: "4.99",
      imageURL:
        "https://uploads-pizzaria.s3.sa-east-1.amazonaws.com/foto_original_9b7d472b87.jpg",
      calories: "150",
      qty: "2",
      category: "bebidas",
    },
    {
      id: 3,
      title: "Pizza + Guaraná",
      price: "39.90",
      imageURL:
        "https://uploads-pizzaria.s3.sa-east-1.amazonaws.com/Whats_App_Image_2023_02_11_at_15_38_49_97b42b213b.jpeg",
      calories: "400",
      qty: "2",
      category: "combos",
    },
  ],
  showCart: false,
  showContactForm: false,
  cartItems: [],
  cartTotal: 0,
  adminMode: sessionUserMode,
  users: [],
  paymentMethod: "mobile_money",
  checkoutData: {},
};
