import useExternalApiResource from './useExternalApiResource';
import { resourceSpecs } from 'Utils/constants';

export default function useFeaturedBanners() {
  const [response] = useExternalApiResource(resourceSpecs.banner);

  return response;
}
