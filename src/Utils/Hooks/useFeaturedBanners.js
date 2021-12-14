import useExternalApiResource from './useExternalApiResource';

const resourceSpec = { type: "banner" };

export default function useFeaturedBanners() {
  const [response] = useExternalApiResource(resourceSpec);

  return response;
}
