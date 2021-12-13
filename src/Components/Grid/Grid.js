import { Wrapper, GridContainer, GridItem } from './Grid.styles';

export default function Grid({ entries, Card }) {
    return (
        <Wrapper>
            <GridContainer>
                {entries.map(({id, ...entry}) => 
                <GridItem key={id}>
                    <Card {...entry} />
                </GridItem>)}
            </GridContainer>
        </Wrapper>
    );
}