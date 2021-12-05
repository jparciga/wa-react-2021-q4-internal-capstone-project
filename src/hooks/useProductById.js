import { useAPIData } from 'utils/hooks/useAPIData';

//retrieve multiple products by their id's
//https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=[[any%28document.id%2C+%5B%22YZWdwRIAACkAumb-%22%2C+%22YZWlSRIAACoAuoj9%22%5D%29]]
//TODO: extend this function to retrieve multiple products
const useProductById = (productId) => {
    const queries = [`:d = at(document.id, "${productId}")`];
    const mapFunction = (
        {  
            id,
            tags,
            data: { 
                name,
                sku,
                description: [{ text }],
                price,
                images,
                specs,
                category: { slug },
                stock
            },
          
        }) => {
        return {
            id,
            name,
            description: text,
            sku,
            tags,
            price,
            images,
            specs,      
            "category": slug,
            stock
        };

    };
    

    const [product] = useAPIData({queries}, mapFunction);
    return [product];
};

export default useProductById;