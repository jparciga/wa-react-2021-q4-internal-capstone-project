import './Sidebar.css';
import React from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { productListActionCreators } from 'state/index';

const Sidebar = ({data: { parsedData = [], isLoading }, title}) => { 
    const filters = useSelector(({productList: { filters } }) => filters);
    const dispatch = useDispatch();

    const { modifyFilter, resetFilter } = bindActionCreators(productListActionCreators, dispatch);

    if(isLoading)
        return (<h1>Loading...</h1>);

    return (
        <div>
            <h2>{title}</h2>
            <ul style={{listStyle: "none"}}>
            {parsedData.map( ({id, name }) => {
                return (<li key={id} 
                            className={`${filters.includes(id) ? "enabled" : "disabled"}`} 
                            onClick={() => modifyFilter(id) }>
                                {name}
                            </li>) 
            })}
            </ul>
            <button onClick={() => resetFilter() }>Clear filters</button>
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