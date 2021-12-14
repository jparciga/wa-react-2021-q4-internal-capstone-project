export const productsByProductIdMapFunction = (
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