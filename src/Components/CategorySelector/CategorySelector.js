import { Fragment } from "react";
import { Category, CategoryContainer } from "./CategorySelector.styles";

export default function Fieldset({categories, activeCategories, handleChecked}) {
    return (
    <CategoryContainer>
        {categories.results.map((category, key) => {
            const active = activeCategories.has(category.id)
            return <Fragment key={category.id}>
                <input 
                    name="selected-categories[]" 
                    id={`category-${key}`} 
                    type="checkbox" 
                    defaultChecked={active} 
                    onChange={handleChecked} 
                    value={category.id} />
                <Category htmlFor={`category-${key}`} active={active}>{category.data.name}</Category><br/>
            </Fragment>})
        }
    </CategoryContainer>);
}
