import './Sidebar.css';
import React, {useContext} from 'react';
import ProductListContext from 'state/ProductListContext';
import PropTypes from 'prop-types';

const Sidebar = ({data: { parsedData = [], isLoading }, title}) => {
    const { productListState, productListDispatcher } = useContext(ProductListContext);

    if(isLoading)
        return (<h1>Loading...</h1>);

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

Sidebar.propTypes = {
    data: PropTypes.shape({ 
        parsedData: PropTypes.array, 
        isLoading: PropTypes.bool
    }) , 
    title: PropTypes.string
};

export default Sidebar;