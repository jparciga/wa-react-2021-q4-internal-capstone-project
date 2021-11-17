import CategoryPreview from '../CategoryPreview';
import { Content, Title, Cards } from './CategoriesGrid.styled';
import categories from '../../mocks/en-us/product-categories.json';

const CategoriesGrid = () => {
    return (
        <Content>
            <Title>Categories</Title>
            <Cards>
                {categories.results.map(category => (
                    <CategoryPreview key={category.id} category={category} />
                ))}
            </Cards>
        </Content>
    );
}

export default CategoriesGrid;