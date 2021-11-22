import React from "react";

const Sidebar = ({ categories, event }) => {
  return (
    <div className="Sidebar">
      {categories.map((category, index) => {
        if (category.selected) {
          return (
            <div className="Selected-sidebar-element" onClick={() => event(category.id)} key={category.id}>
              {category.name}
            </div>
          );
        } else {
          return (
            <div className="Sidebar-element" onClick={() => event(category.id)} key={category.id}>
              {category.name}
            </div>
          );
        }
      })}
    </div>
  );
};

export default Sidebar;
