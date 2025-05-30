import { useState } from "react";
import { AddCategory, GifGrids } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Piece"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      {categories.map((category) => {
        return <GifGrids key={category} category={category} />;
      })}
    </>
  );
};
