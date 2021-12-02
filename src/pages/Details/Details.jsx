import { useParams } from "react-router";
import styled from "styled-components";
import Gallery from "../../components/Gallery/Gallery";
import Loading from "../../components/Loading";
import { useProduct } from "../../utils/hooks/useProduct";

const GalleryContainer = styled.div`
  grid-column: 2 / span 1;
`;

export default function Details() {
  const { productId } = useParams();
  const productData = useProduct(productId);

  return (
    <>
      {productData.isLoading ? (
        <Loading />
      ) : (
        <GalleryContainer>
          <Gallery images={productData.data.results[0].data.images} />
        </GalleryContainer>
      )}
    </>
  );
}
