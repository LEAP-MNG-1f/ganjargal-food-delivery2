"use client";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import Search from "./Search";

export const Header = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{ bgcolor: "#cfe8fc", height: "10vh" }} maxWidth="lg">
        <div className="flex  justify-around">
          <div className="flex gap-2">
            <img src="/pine.png" alt="" />
            <Button variant="text">НҮҮР</Button>
            <Button variant="text">ХООЛНЫ ЦЭС</Button>
            <Button variant="text">ХҮРГЭЛТИЙН БҮС</Button>
          </div>
          <div className="flex justify-center items-center gap-5">
            {" "}
            <div className="w-[260px] h-[10px] flex  items-center justify-center">
              <Search />
            </div>
            <AddShoppingCartIcon />
            <p>sags</p>
            <PersonIcon />
            <p> нэвтрэх</p>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};
