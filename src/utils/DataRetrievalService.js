//Retrieval function for mock files;
export const DataRetrievalService = {
    devSearch: (fileName, mapFunction, controllerSignal) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            
            const data = fetch(`wa-react-2021-q4-internal-capstone-project/${fileName}`, {
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 },
                 signal: controllerSignal
               })
                .then(response => response.json())
                .then((data) => {
                    const results = data.results;
                
                    var productCategoriesConverted = results.map(mapFunction);
                    return productCategoriesConverted;
                });
     
            resolve(data);
          }, 500);
        });
    },
    
    search: async (fileName, mapFunction, controllerSignal) => {      
      try {


      } catch (error) {
        throw new Error(error);
      }

    }
};

export default DataRetrievalService;