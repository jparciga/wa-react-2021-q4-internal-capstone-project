import useExternalApiResource from './useExternalApiResource';

const resourceSpec = { type: "product" };

export default function useProducts() {
  return useExternalApiResource(resourceSpec, 12);
}
