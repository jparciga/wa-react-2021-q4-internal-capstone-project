import {useState, useEffect} from 'react'

const useFiltering = ({ parsedData, isLoading }) => {
    const [filters, setFilters] = useState([]);
    const [filteredData, setFilteredData] = useState(parsedData);

    useEffect(() => {
        filters.length > 0 ? setFilteredData(parsedData.filter(({ category }) => 
            filters.includes(category))) : setFilteredData(parsedData);
      
    }, [filters, parsedData]);

    const handleCustomFilering = (newFilter) => {
        setFilters((prevFilter) => { 
            
            if(!prevFilter.includes(newFilter))
                return [...prevFilter, newFilter] 
            else {         
                return prevFilter.filter(x => x !== newFilter);
            }
        });
;    };
    
    return [filteredData, filters, handleCustomFilering];
}

export default useFiltering;