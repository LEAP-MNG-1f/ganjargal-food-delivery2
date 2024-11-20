import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
export const Hero = () => {
  return (
    <div className="w-full bg-[#18BA51]">
      <React.Fragment>
        <CssBaseline />
        <Container sx={{ bgcolor: "#18BA51", height: "788px" }} maxWidth="lg">
          <div className="flex items-center justify-center gap-[200px]">
            <div className="w-[384px] flex flex-col h-[114px]">
              <p className="flex  text-[55px] text-[#FFFFFF] ">
                Pinecone food delivery{" "}
              </p>
              <p className="text-[22px] text-[#FFFFFF]">
                Horem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className=" flex justify-center items-center top-14 relative ">
              <img className="w-[442px] " src="/food.png" alt="" />{" "}
            </div>
          </div>
        </Container>
      </React.Fragment>
    </div>
  );
};
