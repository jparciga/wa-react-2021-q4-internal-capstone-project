import { Fragment } from "react";
import { Category, CategoryContainer } from "./CategorySelector.styles";
import { ActionButton } from 'Components/UI';

export default function Fieldset({categories, activeCategories, handleChecked, clearFilters = () => {}}) {
    return (
    <CategoryContainer>
        {categories.map((category, key) => {
            const active = activeCategories.has(category.id)
            return <Fragment key={category.id}>
                <input 
                    name="selected-categories[]" 
                    id={`category-${key}`} 
                    type="checkbox" 
                    checked={active} 
                    onChange={handleChecked} 
                    value={category.id} />
                <Category htmlFor={`category-${key}`} active={active}>{category.data.name}</Category><br/>
            </Fragment>})
        }
        {
            activeCategories.size > 0 && <ActionButton style={{"marginTop": "0.75em"}} onClick={clearFilters}>Clear filters</ActionButton>
        }
    </CategoryContainer>);
}
