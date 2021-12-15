import useExternalApiResource from './useExternalApiResource';
import { resourceSpecs } from 'Utils/constants';

export default function useProducts() {
  return useExternalApiResource(resourceSpecs.product, 12);
}
