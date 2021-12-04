import React, { useContext } from 'react';
import { SidebarContent, SidebarItem } from './Sidebar.style';
import ThemeContext from '../context/ThemeContext';
const Sidebar = ({ onSelectCategory, categories }) => {
  const { showMenu } = useContext(ThemeContext);
  const selectCategoryHandler = (categoryId) => {
    onSelectCategory(categoryId);
  };
  const clearCategories = () => {};

  return (
    <SidebarContent className={showMenu && 'active'}>
      <SidebarItem>
        <h3>
          <i>Categories</i>
        </h3>
      </SidebarItem>
      {categories.map(({ id, isSelected, data: { name } }) => {
        return (
          <SidebarItem key={id} onClick={() => selectCategoryHandler(id)}>
            <input type="checkbox" readOnly={true} checked={isSelected} />
            {` ${name}`}
          </SidebarItem>
        );
      })}
      <SidebarItem key={9} onClick={() => clearCategories()}>
        Clear categories
      </SidebarItem>
    </SidebarContent>
  );
};
export default Sidebar;
