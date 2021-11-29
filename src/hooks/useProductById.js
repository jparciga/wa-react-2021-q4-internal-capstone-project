import { useAPIData } from 'utils/hooks/useAPIData';

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
                category: { slug }
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
            "category": slug
        };

    };
    

    const [product] = useAPIData({queries}, mapFunction);
    return [product];
};

export default useProductById;