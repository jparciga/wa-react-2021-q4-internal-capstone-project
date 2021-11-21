import {useState, useEffect} from 'react'

const useFiltering = (data) => {
    const [filters, setFilters] = useState([]);
    console.log("Data: ", data);
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        if(filters.length > 0){
            setFilteredData(data.filter(x => filters.includes(x.data.category.slug)));
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
        console.log(newFilter + " added!");
;    };
    
    return [filteredData, handleCustomFilering];
}

export default useFiltering;