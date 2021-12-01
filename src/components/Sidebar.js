import React, { useContext } from 'react';
import { SidebarContent, SidebarItem } from './Sidebar.style';
import ThemeContext from '../context/ThemeContext';
const Sidebar = ({ showMenu, onSelectCategory, categories }) => {
  const ThemeCtx = useContext(ThemeContext);
  const selectCategoryHandler = (categoryId) => {
    onSelectCategory(categoryId);
  };

  return (
    <SidebarContent className={ThemeCtx.showMenu && 'active'}>
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
    </SidebarContent>
  );
};
export default Sidebar;
