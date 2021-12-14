import { Wrapper, GridContainer, GridItem } from './Grid.styles';

export default function Grid({ entries, Card }) {
    return (
        <Wrapper>
            <GridContainer>
                {entries.map((entry) => 
                <GridItem key={entry.id}>
                    <Card {...entry} />
                </GridItem>)}
            </GridContainer>
        </Wrapper>
    );
}