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

        return () => controller.abort();
    }, []);
    
    return [parsedData];
}

export default useData;