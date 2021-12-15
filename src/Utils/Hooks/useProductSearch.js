import useExternalApiResource from './useExternalApiResource';
import { resourceSpecs } from '../constants';

const specs = new Map();
const voidSpec = [];

function getSpecForQuery(query) {
    if (!query) {
        return voidSpec;
    }
    if (!specs.has(query)) {
        specs.set(query, [...resourceSpecs.product, {
            operator: 'fulltext',
            field: 'document',
            value: query
        }]);
    }

    return specs.get(query);
}

export default function useProductSearch(query) {
  return useExternalApiResource(getSpecForQuery(query), 20);
}
