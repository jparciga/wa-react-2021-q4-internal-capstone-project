import { useSearchParams } from "react-router-dom";
import Grid from "../../components/Grid";
import Loading from "../../components/Loading/Loading";
import ProductCard from "../../components/ProductCard";
import { useCategories } from "../../utils/hooks/useCategories";
import { useSearch } from "../../utils/hooks/useSearch";
import { NotFound, SearchResults } from "./Search.styled";

export default function Search() {
  const [searchParams] = useSearchParams();
  const categoriesData = useCategories();
  const productData = useSearch(searchParams.get("q") || "");

  let productsList;
  if (!categoriesData.isLoading && !productData.isLoading) {
    let categoryNames = {};
    categoriesData.data.results.forEach(({ id, data: { name } }) => {
      categoryNames = { ...categoryNames, [id]: name };
    });

    productsList = productData.data.results.map(
      ({ id, data: product }, index) => (
        <ProductCard
          key={index}
          productId={id}
          image={product.mainimage.url}
          category={categoryNames[product.category.id]}
          name={product.name}
          price={product.price}
          description={product.short_description}
        />
      )
    );
  }

  return (
    <>
      {categoriesData.isLoading || productData.isLoading ? (
        <Loading />
      ) : (
        <>
          {productsList.length === 0 ? (
            <NotFound>Nothing was Found :(</NotFound>
          ) : (
            <SearchResults>
              <Grid>{productsList}</Grid>
            </SearchResults>
          )}
        </>
      )}
    </>
  );
}
