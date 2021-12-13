import Product from './Product/Product';
import Grid from 'Components/Grid';

export default function ProductGrid({ entries }) {
    return (
        <Grid Card={Product} entries={entries} />
    );
}