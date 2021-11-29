import React from 'react';
import { Category, CategoriesContainer } from './Categories.styles';
import { useApi } from '../utils/hooks/useApi';

export default function Categories({ showMenu }) {
  const response = useApi('category');

  return (
    <>
      {true && (
        <CategoriesContainer>
          {response?.data?.results &&
            response.data.results.map((category) => {
              return (
                <Category key={category.id}>{category.data.title}</Category>
              );
            })}
        </CategoriesContainer>
      )}
    </>
  );
}
