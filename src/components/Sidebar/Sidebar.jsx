import { Content, Text } from './Sidebar.styled';
import { useState, useEffect } from 'react';
import categoriesData from '../../mocks/en-us/product-categories.json';

const Sidebar = ({ filterProducts }) => {

    const [categories, setCategories] = useState(categoriesData.results.map(category => ({...category, selected: true })));
    
    const onCategorySelected = (event) => {
        const id = event.target.getAttribute('name');

        const results = categories.map(c => {
            if (id === c.id) {
                c.selected = !c.selected;
            }
            return c;
        });

        setCategories(results);
    }

    useEffect(() => {
        filterProducts(categories.filter(category => category.selected).map(category => category.data.name.toLowerCase()));
    }, [categories, filterProducts]);

    return (
        <Content>
            {
                categories.map(category =>(
                    <Text 
                        onClick={onCategorySelected}
                        name={category.id}
                        key={category.id}
                        selected={category.selected}
                    >
                        {category.data.name}
                    </Text>
                ))
            }
        </Content>
    );
};

export default Sidebar;