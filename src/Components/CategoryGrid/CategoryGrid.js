import Category from './Category';
import Grid from 'Components/Grid';

export default function CategoryGrid({ entries }) {
    return (
        <Grid Card={Category} entries={entries} />
    );
}