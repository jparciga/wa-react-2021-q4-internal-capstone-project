import React from 'react';
import { SidebarContent, SidebarItem } from './Sidebar.style';
export default function Sidebar({ onSelectCategory, categories }) {
  const selectCategoryHandler = (categoryId) => {
    onSelectCategory(categoryId);
  };

  return (
    <SidebarContent>
      <SidebarItem>
        <h3>
          <i>Categories</i>
        </h3>
      </SidebarItem>
      {categories.map(({ id, isSelected, data: { name } }) => {
        return (
          <SidebarItem key={id} onClick={() => selectCategoryHandler(id)}>
            <input type="checkbox" readOnly={true} checked={isSelected} />{' '}
            {name}
          </SidebarItem>
        );
      })}
    </SidebarContent>
  );
}
