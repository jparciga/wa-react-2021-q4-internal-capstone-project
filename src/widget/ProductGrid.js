import Product from './card/Product';
import Grid from './Grid';

export default function ProductGrid({ entries }) {
    return (
        <Grid Card={Product} entries={entries} />
    );
}