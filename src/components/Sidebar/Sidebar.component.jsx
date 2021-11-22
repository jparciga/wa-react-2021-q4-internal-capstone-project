import './Sidebar.css';

const Sidebar = ({data, title, filters, clickEvent}) => {
    return (
        <div>
            <h2>{title}</h2>
            <ul style={{listStyle: "none"}}>
            {data.map( obj => {
               return (<li key={obj.id} className={`${filters.includes(obj.data.name.toLowerCase()) ? "enabled" : "disabled"}`} onClick={() => clickEvent(obj.data.name.toLowerCase())}>{obj.data.name}</li>) 
            })}
            </ul>
        </div>
    )
}

export default Sidebar;