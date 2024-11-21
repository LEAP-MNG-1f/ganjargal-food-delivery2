// src/components/Amttan.tsx

import { FoodCard } from "../cards/FoodCard";
import { Typography, Button, Modal, Box } from "@mui/material";

export const Amttan = () => {
  const cards = [
    {
      imageSrc: "/foode.png",
      title: "Өглөөний хоол",
      price: "14,800₮",
      oldPrice: "16,800₮",
      description: "Өглөөний хамгийн амттай хоол.",
    },
    {
      imageSrc: "/foode.png",
      title: "Шуурхай хүргэлт",
      description: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      imageSrc: "/foode.png",
      title: "Эрүүл, баталгаат орц",
      description: "Эрүүл хоолны баталгаат орц.",
    },
    {
      imageSrc: "/foode.png",
      title: "Хоолны өргөн сонголт",
      description: "Сонголт таны хүссэнээр.",
    },
  ];

  const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "8px",
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between">
        <div className="flex gap-1">
          <img src="/Star.png" alt="Star Icon" />
          <p> Амттан</p>
        </div>
        <p>Бүгдийг харах</p>
      </div>

      {/* Cards Section */}
      <div className="flex justify-between">
        {cards.map((card, index) => (
          <FoodCard key={index} {...card} />
        ))}
      </div>

      {/* Modal */}
    </div>
  );
};
