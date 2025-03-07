"use client";
import { GroupedFoodType } from "@/lib/types";
import { log } from "console";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

// interface Food {
//   _id: string;
//   name: string;
//   price: number;
// }

interface ApiResponse {
  success: boolean;
  data: GroupedFoodType[];
}

interface MongoContextType {
  foods: GroupedFoodType[];
}

const MongoContext = createContext<MongoContextType | undefined>(undefined);

export const useMongo = () => {
  const context = useContext(MongoContext);
  if (!context) throw new Error("useMongo must be used within a MongoProvider");
  return context;
};

export const MongoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [foods, setFoods] = useState<GroupedFoodType[]>([]);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/food`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data: ApiResponse = await response.json();
        if (data.success) {
          setFoods(data.data);
        } else {
          console.error("Error fetching food data:", data);
        }
      } catch (error) {
        console.error("Network error fetching foods:", error);
      }
    };

    fetchFoods();
  }, []);

  return (
    <MongoContext.Provider value={{ foods }}>{children}</MongoContext.Provider>
  );
};
