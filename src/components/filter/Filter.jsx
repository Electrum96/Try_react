import "./filter.scss";


const Filter = function({onFilter})  {
    
    return (
    <button className="filter-button" onClick={() => onFilter()} >Выделенные</button>)
    
}

export default Filter;

