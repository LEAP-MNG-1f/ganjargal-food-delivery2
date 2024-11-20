import { MainProps } from "../cards/MainProps";

export const MainFood = () => {
  const cards = [
    {
      imageSrc: "/foods.png",
      title: "Өглөөний хоол",
      price: "14,800",
      oldPrice: "16,800",
    },
    {
      imageSrc: "/foods.png",
      title: "Шуурхай хүргэлт",
      description: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      imageSrc: "/foods.png",
      title: "Эрүүл, баталгаат орц",
      description: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      imageSrc: "/foods.png",
      title: "Хоолны өргөн сонголт",
      description: "Захиалга бэлтгэлийн явцыг хянах",
    },
  ];
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-1">
          <img src="/Star.png" alt="" />
          <p> Үндсэн хоол</p>
        </div>

        <p>Бүгдийг харах</p>
      </div>

      <div className="flex justify-between">
        {cards.map((card, index) => (
          <MainProps key={index} {...card} />
        ))}
      </div>
    </div>
  );
};
