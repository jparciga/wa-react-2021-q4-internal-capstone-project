import { useState, useEffect } from "react";

const useData = (fileName, mapFunction) => {
    const [parsedData, setParsedData] = useState([]);

    const convertData = (data) => {
        const results = data.results;

        var productCategoriesConverted = results.map(mapFunction);
        setParsedData(productCategoriesConverted);
    }
   
    useEffect(() => {
        fetch(fileName, {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
           })
            .then(response => response.json())
            .then(convertData)
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    });
    
    return [parsedData];
}

export default useData;