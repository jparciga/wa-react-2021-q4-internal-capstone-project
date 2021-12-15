import { useMemo } from "react";

export default function useProductsWithCategories(products, categories) {
    const categoryNames = useMemo(() => {
        const map = new Map();
        categories.map(({id, data})=> map.set(id, data.name));

        return map;
    }, [categories]);

    const populatedProducts = useMemo(() => {
        return products.map((product) => {
            return {...product, data: {...product.data, category: {...product.data.category, name: categoryNames.get(product.data.category.id)}}};
        });
    }, [products, categoryNames]);

    return populatedProducts;    
}