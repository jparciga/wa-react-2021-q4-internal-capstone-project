import useExternalApiResource from './useExternalApiResource';
import { resourceSpecs } from 'Utils/constants';

export default function useFeaturedProducts() {
  const [response] = useExternalApiResource(resourceSpecs.featuredProduct, 16);

  return response;
}
