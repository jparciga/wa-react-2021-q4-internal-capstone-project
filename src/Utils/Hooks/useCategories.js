import useExternalApiResource from './useExternalApiResource';

const resourceSpec = { type: "category" };

export default function useCategories() {
  const [response] = useExternalApiResource(resourceSpec, 30);

  return response;
}
