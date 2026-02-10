import { Minus, Plus, Trash } from "lucide-react";
import { useDispatch } from "react-redux";
import { updateItem , removeItem } from "../../redux/actions/basketActions";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(updateItem(product.id, product.amount + 1));
  };

  const handleMinus = () => {
    dispatch(updateItem(product.id, product.amount - 1));
  };

  const handleRemove = () => {
    dispatch(removeItem(product.id));
  }
  return (
    <div className="mb-10 p-4 border rounded flex gap-4">
      <img
        src={product.photo}
        alt={product.title}
        className="size-[100px] rounded-lg"
      />

      <div className="w-full flex flex-col justify-between">
        <Link to={`/restaurant/${product.restaurantID}`} className="text-lg font-semibold text-red-500">{product.title}</Link>

        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">{product.price} ₺</p>

          <div className="flex items-center gap-5">
            <div className="flex items-center border text-xl rounded-lg">
              <button className="basket-btn">
                <Minus onClick={product.amount > 1 ? handleMinus : handleRemove} className="size-4" />
              </button>

              <span>{product.amount}</span>

              <button className="basket-btn">
                <Plus onClick={handleAdd} className="size-4" />
              </button>
            </div>
            <button className="basket-btn">
              <Trash onClick={handleRemove} className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
