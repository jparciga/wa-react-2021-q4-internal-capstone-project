import { useLocation } from "react-router";
import Loading from "../../components/Loading";
import ProductFilter from "../../components/ProductFilter";
import { useCategories } from "../../utils/hooks/useCategories";
import { useProducts } from "../../utils/hooks/useProducts";

export default function Shop() {
  const { page = 1, filter = [] } = useLocation().state || {};
  const categoriesData = useCategories();
  const productsData = useProducts(page, filter);

  const categories = categoriesData.isLoading
    ? []
    : categoriesData.data.results.map(({ id, data }) => ({
        id,
        name: data.name,
      }));

  const products = productsData.isLoading
    ? []
    : productsData.data.results.map(({ data }) => ({
        typeId: data.category.id,
        image: data.mainimage.url,
        name: data.name,
        price: data.price,
      }));

  return categories.length === 0 || products.length === 0 ? (
    <Loading />
  ) : (
    <ProductFilter
      categories={categories}
      products={products}
      totalPages={productsData.data.total_pages}
    />
  );
}
