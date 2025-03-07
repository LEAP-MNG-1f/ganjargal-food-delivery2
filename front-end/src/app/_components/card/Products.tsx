// "use client";
// import * as React from "react";

// import { SaleCard } from "./SaleCard";
// import { MainFood } from "./MainFood";

// import { useMongo } from "@/cotext/useMongo";

// export const Products = () => {
//   const { foods } = useMongo();
//   console.log("foods inside card BKAB:", foods);
//   if (!Array.isArray(foods)) {
//     return <div>Loading or No Foods Available</div>; //
//   }
//   return (
//     <div>
//       <div className="flex flex-col gap-[100px]">
//         {foods.map((groupFood) => (
//           <Products key={groupFood._id} groupedFoods={groupedFood} />
//         ))}
//       </div>
//     </div>
//   );
// };
