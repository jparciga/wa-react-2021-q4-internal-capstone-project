import { useState, useEffect } from "react";

const useData = (service, fileName, mapFunction) => {
    const [parsedData, setParsedData] = useState([]);
   
    useEffect(() => {
        const controller = new AbortController();

        service(fileName, mapFunction, controller.signal)
            .then((response) => {
                setParsedData(response);
            }).catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });

        // fetch(`wa-react-2021-q4-internal-capstone-project/${fileName}`, {
        //     headers : { 
        //       'Content-Type': 'application/json',
        //       'Accept': 'application/json'
        //      },
        //      signal: controller.signal
        //    })
        //     .then(response => response.json())
        //     .then((data) => {
        //         const results = data.results;
        
        //         var productCategoriesConverted = results.map(mapFunction);
        //         setParsedData(productCategoriesConverted);
        //     })
        //     .catch(error => {
        //         console.error('There has been a problem with your fetch operation:', error);
        //     });

        return () => controller.abort();
    }, []);
    
    return [parsedData];
}

export default useData;