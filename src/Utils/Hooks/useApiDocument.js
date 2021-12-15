import useExternalApiResource from "./useExternalApiResource";

const specs = new Map();
const voidSpec = {};

function getSpecForId(documentId) {
    if (!documentId) {
        return voidSpec;
    }
    if (!specs.has(documentId)) {
        specs.set(documentId, {
            id: documentId
        });
    }

    return specs.get(documentId);
}

export default function useApiDocument(documentId) {
    const spec = getSpecForId(documentId);
    const [response] = useExternalApiResource(spec);

    return response;
}