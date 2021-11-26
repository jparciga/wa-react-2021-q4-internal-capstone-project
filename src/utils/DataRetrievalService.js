//Retrieval function for mock files;
export const devSearch = (fileName, mapFunction, controllerSignal) => {
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
  };

// export const search = async (query, maxResults = 20) => {
//     try {
//       const REQUESTURL = `${BASEURL}search?part=snippet&q=${query}&maxResults=${maxResults}${KEY}`;
//       const response = await fetch(REQUESTURL);
//       const data = await response.json();
//       const vids = mapVideosData(data.items);
//       return vids;
//     } catch (error) {
//       throw new Error(error);
//     }
//   };