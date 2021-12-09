import ProductGrid from '../widget/ProductGrid';
import products from 'mocks/en-us/products.json';
import categories from 'mocks/en-us/product-categories.json';
import useProductsWithCategories from '../utils/hooks/useProductsWithCategory';
import { Fragment, useState } from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const CategorySection = styled.section`
    flex: 1 1 20%;
    min-width: 240px;
`;

const CategoryContainer = styled.fieldset`
    border: none;
`;

const ProductSection = styled.section`
    flex: 4 1 80%;
    box-sizing: border-box;
    padding-bottom: 1em;
`;

const Category = styled.label`
    ${({active}) => active && css`    
    font-weight: bold;
    `}
`;

export default function Products() {
    const fullProducts = useProductsWithCategories(products.results, categories.results);
    const [activeCategories, setActiveCategories] = useState(() => new Set());

    const handleChecked = event => {
        if (event.target.checked) {
            activeCategories.add(event.target.value);
        } else {
            activeCategories.delete(event.target.value);
        }
        setActiveCategories(new Set(activeCategories));
    };

    return (
        <div>        
            <h2>All Products</h2>
            <Wrapper>
                <CategorySection>
                    <h3>Categories</h3>
                    {categories ?
                    <CategoryContainer>
                        {categories.results.map((category, key) => {
                            const active = activeCategories.has(category.id)
                            return <Fragment key={category.id}>
                                <input 
                                    key={category.id} 
                                    name="selected-categories[]" 
                                    id={`category-${key}`} 
                                    type="checkbox" 
                                    defaultChecked={active} 
                                    onChange={handleChecked} 
                                    value={category.id} />
                                <Category htmlFor={`category-${key}`} active={active}>{category.data.name}</Category><br/>
                            </Fragment>})
                        }
                    </CategoryContainer> : null}
                </CategorySection>
                <ProductSection>
                    <ProductGrid entries={fullProducts.filter(product => activeCategories.size === 0 || activeCategories.has(product.data.category.id))} />
                    <div>Page: <span>&lt;</span> <span>1</span> <span>&gt;</span></div>
                </ProductSection>
            </Wrapper>
        </div>
    );
}