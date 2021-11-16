import Button from '../Button/Button';
import {results as data} from '../../utils/mocks/en-us/product-categories.json';
const Categories = () => {
  return (
    <div className={'categories-container'}>
      <h3>Categories</h3>
      {
        data.map(category => (
          <Button
            label={category.data.name}
            customClass={'featured-button'}
            key={category.id}
          />
        ))
      }
    </div>
  );
};

export default Categories;
