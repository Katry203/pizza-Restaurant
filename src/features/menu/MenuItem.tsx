import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helper";
import UpdataItemQuantity from "../cart/UpdataItemQuantity";
import DeleteItem from "../cart/DeleteItem";
import { motion } from "motion/react";
import type { MenuItem as Pizza } from "../../services/apiRestaurant";

interface MenuItemProps {
  pizza: Pizza;
}
function MenuItem({ pizza }: MenuItemProps) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.li
      initial="hidden"
      animate="visible"
      variants={itemVariants}
      className="menu-card flex flex-col overflow-hidden rounded-2xl p-4"
    >
      <div className="menu-card-image mb-4 flex h-48 items-center justify-center overflow-hidden rounded-xl">
        <img
          src={imageUrl}
          alt={name}
          className={`h-full w-full object-contain transition-transform duration-500 hover:scale-105 ${soldOut ? "opacity-70 grayscale" : ""}`}
        />
      </div>
      <div className="flex grow flex-col">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8 order-1">
              <UpdataItemQuantity pizzaId={id} />
              <DeleteItem pizzaId={id} />
            </div>
          )}
          {!soldOut ? (
            <p className="font-semibold">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500 order-2">
              Sold out
            </p>
          )}
          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </motion.li>
  );
}

export default MenuItem;
