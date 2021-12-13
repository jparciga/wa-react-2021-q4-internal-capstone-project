export function productsWithCategory(products, categories) {
    return products.filter(product => categories.size === 0 || categories.has(product.data.category.id))
}