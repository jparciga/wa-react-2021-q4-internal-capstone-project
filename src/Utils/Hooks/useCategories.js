import useExternalApiResource from './useExternalApiResource';
import { resourceSpecs } from 'Utils/constants';

export default function useCategories() {
  const [response] = useExternalApiResource(resourceSpecs.category, 30);

  return response;
}
