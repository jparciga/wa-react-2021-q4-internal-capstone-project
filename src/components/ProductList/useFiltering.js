import {useState, useEffect} from 'react'

const useFiltering = (data) => {
    const [filters, setFilters] = useState([]);
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        filters.length > 0 ? setFilteredData(data.filter(({ category }) => 
            filters.includes(category))) : setFilteredData(data);
      
    }, [filters, data]);

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