import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { Information } from "./Information";
import { Card } from "../card/Card";

export const Category = () => {
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container sx={{ bgcolor: "#cfe8fc", height: "1400px" }} maxWidth="lg">
          <div className="flex flex-col gap-9">
            <Information />
            <Card />
          </div>
        </Container>
      </React.Fragment>
    </div>
  );
};
