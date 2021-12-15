import { useParams } from 'react-router-dom';
import useApiDocument from 'Utils/Hooks/useApiDocument';
import Slider from 'Components/Slider';
import { ActionButton } from 'Components/UI';
import { Wrapper, BasicInformation, DetailedInformation, Gallery, Overview, Tags, Tag } from './ProductDetail.style';

export default function ProductDetail() {
    const params = useParams();
    const { data: productData } = useApiDocument(params.productId);
    const categoryId = productData.results?.length ? productData.results[0].data.category.id : null;
    const { data: categoryData } = useApiDocument(categoryId);

    if (!productData.results?.length) {
        return null;
    }

    const { results: [{data: product, tags}]} = productData;
    const category = categoryData.results ? categoryData.results[0].data : { name: "" };

    const gallery = product.images.map(
        ({image: { url, alt }}) => {
            return {
                src: url,
                alt: alt,
                title: alt
            };
        }
    );

    return (<Wrapper>
        <BasicInformation>
            <Gallery>
                <Slider entries={gallery} />
            </Gallery>
            <Overview>
                <h2>{product.name}</h2>
                <p>SKU: {product.sku}</p>
                <p>$ {product.price}</p>
                <p>In {category?.name}</p>
                <Tags>
                {tags.map((tag, index) => {
                    return <Tag key={index}>{tag}</Tag>;
                })}
                </Tags>
                <input type="number" name="quantity" />
                <ActionButton>Add to Cart</ActionButton>
            </Overview>
        </BasicInformation>
        <DetailedInformation>
            <h3>More about it</h3>
            <p>{product.description[0].text}</p>
            <hr />
            <h4>Specs</h4>
            <ul>
                {product.specs.map(({spec_name: spec, spec_value: value}, index) => <li key={index}>{spec}: {value}</li> )}
            </ul>
        </DetailedInformation>
    </Wrapper>);
}