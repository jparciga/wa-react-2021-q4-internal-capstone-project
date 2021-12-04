import useProductDetail from '../utils/hooks/useProductDetail';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import {
  ProductDetailPageContent,
  ProductName,
  ProductPrice,
  ProductCarousel,
  ProductDescription,
  ProductActions,
  InStock,
  ProductTags,
  ProductSKU,
  ProductSpecs,
  ProductCategory,
} from './ProductDetailPage.style';
import AddToCart from '../components/AddToCart';

export default function ProductDetailPage() {
  const [product, images] = useProductDetail();

  return (
    <>
      {product && (
        <ProductDetailPageContent>
          <ProductCarousel style={{ width: '90%' }}>
            {images && (
              <Carousel
                hasThumbnailsAtMax={false}
                isMaximized={false}
                hasSizeButton={false}
                hasSizeButtonAtMax={false}
                hasIndexBoard={false}
                hasMediaButton={false}
                style={{ width: '900ox' }}
                images={images}
              />
            )}
          </ProductCarousel>

          <div>
            <ProductName>{`Name ${product?.data?.name}`}</ProductName>
            <ProductPrice>
              {`Price: $${product?.data?.price.toFixed(2)}`}
            </ProductPrice>
            <ProductSKU> {`SKU ${product?.data?.sku}`}</ProductSKU>
            <ProductCategory>
              {`Category ${product?.data?.category.slug}`}
            </ProductCategory>
            <ProductDescription>
              {product?.description && product?.description[0].text}
            </ProductDescription>

            <ProductSpecs>
              {product &&
                product?.data?.specs.map((spec, index) => {
                  return (
                    <li
                      key={index}
                    >{`${spec.spec_name} ${spec.spec_value} `}</li>
                  );
                })}
            </ProductSpecs>
            <div>
              {product?.tags &&
                product?.tags.map((tag, index) => {
                  return <ProductTags key={index}> #{tag}</ProductTags>;
                })}
            </div>
          </div>

          <ProductActions>
            <InStock>{`In Stock (${product?.data?.stock} pieces) `} </InStock>
            <AddToCart productId={product?.id} />
          </ProductActions>
        </ProductDetailPageContent>
      )}
    </>
  );
}
