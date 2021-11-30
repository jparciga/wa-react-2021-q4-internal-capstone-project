import React, { useEffect } from 'react';
import { Category, CategoriesContainer } from './Categories.styles';
import { useApi } from '../utils/hooks/useApi';

export default function Categories({ showMenu }) {
  const response = useApi('category', 10, 1);
  useEffect(() => {
    console.log('CATEOGRY', response);
  });
  return (
    <>
      {true && (
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
