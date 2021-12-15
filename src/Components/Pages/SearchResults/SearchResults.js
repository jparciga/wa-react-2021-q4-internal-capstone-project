import { useSearchParams } from 'react-router-dom';
import useProductSearch from 'Utils/Hooks/useProductSearch';
import Paginator from 'Components/Paginator';
import ProductGrid from 'Components/ProductGrid';
import useCategories from 'Utils/Hooks/useCategories';
import useProductsWithCategory from 'Utils/Hooks/useProductsWithCategory';

export default function SearchResults() {
    const [params] = useSearchParams();
    const searchTerm = params.get('q').trim();
    const { data: { results: categories = [] } } = useCategories();
    const [{ data: { page, total_pages: pages, total_results_size: count, results: products = [] } }, setPage] = useProductSearch(searchTerm);
    const fullProducts = useProductsWithCategory(products, categories);

    return (<div>
        {fullProducts.length > 0 ?
        <>
            <h2>{count} Product{count !== 1 && 's'} found for "{searchTerm}"</h2>
            <ProductGrid entries={fullProducts} />
            <br />
            <Paginator onPageChanged={setPage} current={page} pages={pages} />
        </>:
        searchTerm.length === 0 ?
        <h2>You search for nothing, you find nothing. Deep stuff, huh?</h2>:
        <h2>No results found for "{searchTerm}"</h2>}
    </div>);
}