import { useAPIData } from 'utils/hooks/useAPIData';

//retrieve multiple products by their id's
//https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=[[any%28document.id%2C+%5B%22YZWdwRIAACkAumb-%22%2C+%22YZWlSRIAACoAuoj9%22%5D%29]]
//TODO: extend this function to retrieve multiple products
const useProductById = (productIds = [], pageSize) => {

    const concatenatedProductIds = productIds.map((productId)=> `"${productId}"`).join(',');
    const queries = [`any(document.id, [${concatenatedProductIds}])`];
    const mapFunction = (
        {  
            id,
            tags,
            data: { 
                name,
                sku,
                description: [{ text }],
                price,
                mainimage: { url },
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
            url,
            images,
            specs,      
            "category": slug,
            stock
        };

    };
    

    const [product] = useAPIData({queries, pageSize}, mapFunction);
    if(productIds.length === 0) 
        product.parsedData = [];
    return [product];
};

export default useProductById;