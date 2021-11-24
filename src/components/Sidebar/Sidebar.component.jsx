import './Sidebar.css';

const Sidebar = ({data, title, filters, clickEvent}) => {
    return (
        <div>
            <h2>{title}</h2>
            <ul style={{listStyle: "none"}}>
            {data.map( ({id, name }) => {
               return (<li key={id} 
                           className={`${filters.includes(name.toLowerCase()) ? "enabled" : "disabled"}`} 
                           onClick={() => clickEvent(name.toLowerCase())}>
                               {name}
                           </li>) 
            })}
            </ul>
        </div>
    )
}

export default Sidebar;