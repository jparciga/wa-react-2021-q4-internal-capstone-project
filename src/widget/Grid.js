import './Widget.css';

export default function Grid({ entries, Card }) {
    return (
        <div className="grid-wrapper">
            <ul className="grid">
                {entries.map(({id, ...entry}) => 
                <li key={id}>
                    <Card {...entry} />
                </li>)}
            </ul>
        </div>
    );
}