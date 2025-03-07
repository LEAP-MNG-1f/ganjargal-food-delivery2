"use clients";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { LogoWhite } from "../svg/LogoWhite";

export const Footer = () => {
  return (
    <footer
      className="w-full h-auto bg-[#18BA51] bg-cover bg-center"
      style={{
        backgroundImage: "url('./HeroBgImage.png')",
      }}
    >
      <div className="w-[1200px] mx-auto py-10 flex flex-col items-center gap-6">
        {/* Лого ба нэр */}
        <div className="flex items-center gap-2">
          <LogoWhite />
          <p className="text-2xl font-bold text-white">Food Delivery</p>
        </div>

        {/* Холбоосууд */}
        <div className="flex flex-wrap justify-center gap-6">
          {[
            "Нүүр",
            "Холбоо барих",
            "Хоолны цэс",
            "Үйлчилгээний нөхцөл",
            "Хүргэлтийн бүс",
            "Нууцлалын бодлого",
          ].map((link, index) => (
            <button
              key={index}
              className="text-base text-white font-medium border-b-2 border-transparent hover:border-white hover:text-gray-200 transition-all duration-200"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Нийгмийн сүлжээний холбоосууд */}
        <div className="flex gap-4">
          <button
            className="hover:scale-110 transition-transform duration-200"
            aria-label="Facebook"
          >
            <Facebook />
          </button>
          <button
            className="hover:scale-110 transition-transform duration-200"
            aria-label="Instagram"
          >
            <Instagram />
          </button>
          <button
            className="hover:scale-110 transition-transform duration-200"
            aria-label="Twitter"
          >
            <Twitter />
          </button>
        </div>

        {/* Тусгаарлагч шугам */}
        <div className="w-full border-t border-white"></div>

        {/* Хууль эрх зүйн мэдээлэл */}
        <div className="text-center">
          <p className="text-base text-white">© 2024 Pinecone Foods LLC</p>
          <p className="text-base text-white">
            Зохиогчийн эрх хуулиар хамгаалагдсан.
          </p>
        </div>
      </div>
    </footer>
  );
};
