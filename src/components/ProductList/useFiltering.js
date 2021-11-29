import {useState, useEffect} from 'react'

const useFiltering = ({ parsedData, isLoading }, queryString) => {
    const [filters, setFilters] = useState((queryString !== null) ? [ queryString ] : []);
    const [filteredData, setFilteredData] = useState(parsedData);

    useEffect(() => {
        filters.length > 0 ? setFilteredData(parsedData.filter(({ category }) => 
            filters.includes(category))) : setFilteredData(parsedData);
      
    }, [filters, parsedData]);

    const handleCustomFiltering = (newFilter) => {
        setFilters((prevFilter) => { 
            
            if(!prevFilter.includes(newFilter))
                return [...prevFilter, newFilter] 
            else {         
                return prevFilter.filter(x => x !== newFilter);
            }
        });
    };

    const clearAllFilters = () => {
        setFilters([]);
    };
    
    return [filteredData, filters, handleCustomFiltering, clearAllFilters];
}

export default useFiltering;