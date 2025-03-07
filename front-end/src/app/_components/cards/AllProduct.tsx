"use client";
import { Food } from "@/lib/types";
const ALLProduct = ({ food }: { food: Food }) => {
  return (
    <div>
      <div className="w-[264px] h-[155px] flex flex-col rounded-2xl justify-around">
        <div className="flex justify-start rounded-xl p-2">
          <img className="rounded-lg" src={food.image} alt="" />
        </div>
        <div className="p-2">
          <p className="text-[18px]">{food.name}</p>

          <div className="flex gap-1">
            <p className="text-[14px] text-[#272727]">{food.price}₮</p>
            {/* {food. && <p>{food.oldPrice}</p>} */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ALLProduct;
