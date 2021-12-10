import ListCard from 'components/SearchResults/List/ListCard/ListCard.styles';
import ListPaginator from './ListPaginator/ListPaginator.styles';
import useSearch from 'hooks/useSearch';
import PropTypes from 'prop-types';

import { useSelector } from "react-redux";


const ListComponent = ({className, searchTerm, noElementsCustomMessage}) => {
    
    const { currentPage } = useSelector((state) => state.searchResults);
    const [{parsedData, isLoading}] = useSearch({pageSize: 20, searchTerm: searchTerm, page: currentPage});

    if(isLoading)
        return(<h3>Loading...</h3>);

    return (
        parsedData.length > 0 ? 
        <div className={className}>
            <ListPaginator />
            <div className="list-cards">
                {
                    parsedData.map((data) => {
                        return (<ListCard key={data.id} data={data} />)
                    })
                }
            </div>
            <ListPaginator />         
        </div>
        :
        <h4 style={{textAlign: "center"}}>{noElementsCustomMessage}</h4>
    )
}

ListComponent.propTypes = {
    className: PropTypes.string,
    searchTerm: PropTypes.string,
    noElementsCustomMessage: PropTypes.string
};

export default ListComponent;