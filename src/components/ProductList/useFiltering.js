import {useState, useEffect} from 'react'

const useFiltering = (data) => {
    const [filters, setFilters] = useState([]);
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        if(filters.length > 0){
            setFilteredData(data.filter(x => filters.includes(x.data.category.slug)));
        } else {
            setFilteredData(data);
        }
       
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