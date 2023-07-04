import { useLayoutEffect, useRef } from "react";

import { FoodItem } from "../../../types";
import Loader from "../Loader";
import { SingleFoodItem } from "../FoodItem";
import { motion } from "framer-motion";
import NotFound from "../NotFound";
import { isAdmin } from "../../utils/functions";
import { useStateValue } from "../../context/StateProvider";

const Container = ({
  scrollOffset,
  col,
  items,
  className,
}: {
  scrollOffset: number;
  col?: boolean;
  items: FoodItem[];
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (null !== containerRef.current) {
      containerRef.current.scrollLeft += scrollOffset;
    }
  }, [scrollOffset]);
  const [{ user }, dispatch] = useStateValue();
  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className={`${className} w-full my-12 flex items-center ${
        (!items || col) && "justify-center"
      }   min-h-[200px] gap-4  px-2 ${
        !col
          ? "overflow-x-scroll scrollbar-hidden scroll-smooth"
          : "overflow-x-hidden flex-wrap"
      }`}
    >
      {items &&
        items.map((item: FoodItem) => (
          <SingleFoodItem
            key={item.id}
            item={item}
            col={col}
            admin={isAdmin(user)}
          />
        ))}
      {!items &&
        (!col ? (
          <Loader progress={"Buscando itens....."} />
        ) : (
          <NotFound text="Buscando itens..." />
        ))}
      {items && items.length <= 0 && (
        <NotFound text="Nenhuma comida encontrada" />
      )}
    </motion.div>
  );
};

export default Container;
