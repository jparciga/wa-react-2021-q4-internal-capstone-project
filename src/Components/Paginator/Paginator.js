import { PageLink } from './Paginator.styles';

export default function Paginator({ pages, current, onPageChanged = () => {} }) {
    const prev = () => current > 1 && onPageChanged(current - 1);
    const next = () => current < pages && onPageChanged(current + 1);

    return (<div>Page: 
        { <PageLink active={current === 1} onClick={prev}>&lt;</PageLink> } 
        { Array.from({ length: pages }, (_, page) => <PageLink onClick={() => onPageChanged(page + 1)} active={page + 1 === current} key={page}>{page + 1}</PageLink>) }
        { <PageLink active={current === pages} onClick={next}>&gt;</PageLink> }
    </div>);
}