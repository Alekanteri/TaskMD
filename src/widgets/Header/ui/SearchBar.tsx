import React from "react";

export const SearchBar: React.FC = () => {
  return (
    <input
      className="outlineBorderForElement rounded-lg bg-secondary-bg-color-light m-2 p-2 dark:bg-secondary-bg-color-dark"
      type="search"
      placeholder="Search..."
    />
  );
};
