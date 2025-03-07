export type Food = {
  _id: string;
  name: string;
  image: string;
  ingredient: string;
  price: number;
  categoryId: string;
  category: Category;
};
export type GroupedFoodType = {
  _id: string;
  items: Food[];
};

export type Category = {
  _id: string;
  name: string;
};
