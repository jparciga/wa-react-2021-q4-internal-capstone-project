import { useState, useEffect } from "react";

const useData = (fileName, mapFunction) => {
    const [parsedData, setParsedData] = useState([]);
   
    useEffect(() => {
        const abortController = new AbortController();

        fetch(`${fileName}`, {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
           })
            .then(response => response.json())
            .then((data) => {
                const results = data.results;
        
                var productCategoriesConverted = results.map(mapFunction);
                setParsedData(productCategoriesConverted);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });

        return () => abortController.abort();
    }, []);
    
    return [parsedData];
}

export default useData;