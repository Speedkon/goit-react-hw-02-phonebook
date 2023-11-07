export const ContactList = ({ allContacts, onDelete }) => {
    
    return (
            <ul>
            {allContacts.map(contact => {
                const { id, name, number } = contact;

                    return (
                        <div key={id}>
                            <span>{name}:</span>
                            <span>{number}</span>
                            <button type='button' onClick={() => onDelete(id)}>X</button>
                        </div>
                    )
                })}
        </ul>
    )
};