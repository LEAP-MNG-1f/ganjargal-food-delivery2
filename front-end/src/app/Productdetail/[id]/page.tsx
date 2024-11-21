const products = [
  {
    name: "Өглөөний хоол",
    price: "24,800₮",
    oldPrice: "26,800₮",
    discount: "20%",
    image: "breakfast1.jpg",
  },
  {
    name: "Зайрмаг",
    price: "4,800₮",
    oldPrice: "6,800₮",
    discount: "20%",
    image: "icecream.jpg",
  },
  { name: "Торт", price: "54,800₮", image: "cake.jpg" },
  { name: "Oreo shake", price: "14,800₮", image: "oreo.jpg" },
  { name: "Chocolate", price: "14,800₮", image: "chocolate.jpg" },
  { name: "Yoghurt", price: "14,800₮", image: "yoghurt.jpg" },
];
export const page = () => {
  return (
    <div>
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="relative">
            <img
              src={product.image}
              alt=""
              className="w-full h-40 object-cover"
            />
            {product.discount && (
              <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                {product.discount}
              </span>
            )}
          </div>
          <div className="p-4 text-center">
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-green-600 font-semibold">
              {product.price}{" "}
              {product.oldPrice && (
                <span className="line-through text-gray-400 text-sm ml-2">
                  {product.oldPrice}
                </span>
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
