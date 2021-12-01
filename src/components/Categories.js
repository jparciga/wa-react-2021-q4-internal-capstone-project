import React, { useContext } from 'react';
import { Category, CategoriesContainer } from './Categories.styles';
import { useApi } from '../utils/hooks/useApi';
import ThemeContext from '../context/ThemeContext';

export default function Categories() {
  const response = useApi('category', 10, 1);

  const ThemeCtx = useContext(ThemeContext);

  return (
    <>
      {ThemeCtx.showMenu && (
        <CategoriesContainer>
          {response?.data?.results &&
            response.data.results.map((category) => {
              return (
                <Category key={category.id}>{category.data.name}</Category>
              );
            })}
        </CategoriesContainer>
      )}
    </>
  );
}
