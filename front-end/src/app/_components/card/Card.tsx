import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import Container from "@mui/material/Container";
import { SaleCard } from "./SaleCard";
import { MainFood } from "./MainFood";
import { Salat } from "./Salat";
import { Amttan } from "./Amttan";

export const Card = () => {
  return (
    <div>
      <div className="flex flex-col gap-[100px]">
        <SaleCard />

        <MainFood />
        <Salat />
        <Amttan />
      </div>
    </div>
  );
};
