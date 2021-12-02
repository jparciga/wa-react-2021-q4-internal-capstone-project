import './Sidebar.css';
import React, {useContext} from 'react';
import ProductListContext from 'state/ProductListContext';

const Sidebar = ({data: { parsedData = [], isLoading }, title, filters, clickEvent, clearAllFilters}) => {
    const { productListState, productListDispatcher } = useContext(ProductListContext);

    return (
        <div>
            <h2>{title}</h2>
            <ul style={{listStyle: "none"}}>
            {parsedData.map( ({id, name }) => {
               return (<li key={id} 
                           className={`${productListState.filters.includes(id) ? "enabled" : "disabled"}`} 
                           onClick={() => productListDispatcher({type: "modify_filter", categoryId: id})}>
                               {name}
                           </li>) 
            })}
            </ul>
            <button onClick={() => productListDispatcher({type: "reset_filter"})}>Clear filters</button>
        </div>
    )
}

export default Sidebar;