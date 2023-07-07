import {
  GiFullWoodBucketHandle,
  GiFullPizza,
  GiGlassShot,
} from "react-icons/gi";

export const Categories = [
  {
    id: 1,
    name: "Pizzas",
    urlParam: "pizzas",
    icon: <GiFullPizza />,
  },
  {
    id: 2,
    name: "Combos",
    urlParam: "combos",
    icon: <GiFullWoodBucketHandle />,
  },
  {
    id: 3,
    name: "Bebidas",
    urlParam: "bebidas",
    icon: <GiGlassShot />,
  },
];
