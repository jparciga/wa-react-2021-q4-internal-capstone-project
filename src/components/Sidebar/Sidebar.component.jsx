import './Sidebar.css';

const Sidebar = ({data: { parsedData = [], isLoading }, title, filters, clickEvent}) => {
    return (
        <div>
            <h2>{title}</h2>
            <ul style={{listStyle: "none"}}>
            {parsedData.map( ({id, name }) => {
               return (<li key={id} 
                           className={`${filters.includes(name.toLowerCase()) ? "enabled" : "disabled"}`} 
                           onClick={() => clickEvent(name.toLowerCase())}>
                               {name}
                           </li>) 
            })}
            </ul>
            <button>Clear all</button>
        </div>
    )
}

export default Sidebar;