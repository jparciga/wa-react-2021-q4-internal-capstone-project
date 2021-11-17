import { Content, Title } from "./CategoryPreview.styled";

const CategoryPreview = ({ category }) => {
    let { data: { name } } = category;
    return (
        <Content>
            <Title>{name}</Title>
        </Content>
    );

};

export default CategoryPreview;