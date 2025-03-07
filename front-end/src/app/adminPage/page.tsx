"use client";
import * as React from "react";
import { useMongo } from "@/cotext/useMongo";

import { CssBaseline, Container } from "@mui/material"; // Corrected import of Container
import { Product } from "@/app/_components/card/Produtc";

const Admin = () => {
  const { foods } = useMongo();
  console.log("foods inside card BKAB:", foods);

  const categories = ["all", "dessert", "sale"]; // Added "all" to show all items
  const [selectedCategory, setSelectedCategory] = React.useState("all"); // State to track the selected category

  if (!Array.isArray(foods)) {
    return <div>Loading or No Foods Available</div>;
  }

  // Filter foods based on the selected category
  const filteredFoods =
    selectedCategory === "all"
      ? foods
      : foods.filter((groupFood) => groupFood._id === selectedCategory);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{ bgcolor: "", height: "788px" }} maxWidth="lg">
        {/* Category Buttons */}
        <div className="flex ">
          <div className="flex flex-col gap-4 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 border w-[150px] rounded-lg transition ${
                  selectedCategory === category
                    ? "bg-green-500 text-white"
                    : "hover:bg-green-500 hover:text-white"
                }`}
                onClick={() => setSelectedCategory(category)} // Update the selected category
              >
                {category}
              </button>
            ))}
          </div>

          {/* Render Filtered Foods */}
          <div className="flex flex-col   gap-[50px]">
            <p className=" w-20 h-10 rounded-lg items-center justify-center  bg-green-500 flex text-white ">
              add Cart
            </p>
            {filteredFoods.map((groupFood) => (
              <Product key={groupFood._id} groupedFoods={groupFood} />
            ))}
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Admin;
