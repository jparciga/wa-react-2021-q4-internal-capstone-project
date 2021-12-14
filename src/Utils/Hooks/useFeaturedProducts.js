import useExternalApiResource from './useExternalApiResource';

const resourceSpec = { type: "product", tags: ["Featured"] };

export default function useFeaturedProducts() {
  const [response] = useExternalApiResource(resourceSpec, 16);

  return response;
}
