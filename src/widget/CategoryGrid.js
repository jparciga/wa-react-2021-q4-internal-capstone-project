import Category from './card/Category';
import Grid from './Grid';

export default function CategoryGrid({ entries }) {
    return (
        <Grid Card={Category} entries={entries} />
    );
}