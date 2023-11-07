export const Filter = ({onFilter}) => {
    
    return (
        <label>
            Find contacts by name
            <input type="text" name="filter" placeholder="Search" onChange={e => onFilter(e.target.value)} />
        </label>
    )
}