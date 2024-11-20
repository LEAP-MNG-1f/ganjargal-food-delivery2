// src/components/FoodDeliveryApp.tsx

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
const categories = ["Breakfast", "Soup", "Main Course", "Dessert"];
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

const Productlist = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{ bgcolor: "#cfe8fc", height: "1400px" }} maxWidth="lg">
        <div className="min-h-screen flex flex-col bg-[#FFFFFF]">
          {/* Category Tabs */}
          <div className="flex justify-between  gap-4 py-4 bg-white shadow-md">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 border w-[300px] rounded-lg hover:bg-green-500 hover:text-white transition"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
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

          {/* Footer */}
        </div>
      </Container>
    </React.Fragment>
  );
};
export default Productlist;
