function TableComponent() {
    let books = [
        {
        id:'B-001',
        name1:'Vikram',
        author:'Kanitkar',
        publication:'World-pub'
        }
        ]
    return(
        <div>
            {books.map(item=> {
                return (
                    <table>
                    <tr>
                        <th>{item.id}</th>
                        <th>{item.name1}</th>
                        <th>{item.author}</th>
                        <th>{item.publication}</th>
                    </tr>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name1}</td>
                        <td>{item.author}</td>
                        <td>{item.publication}</td>
                    </tr>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name1}</td>
                        <td>{item.author}</td>
                        <td>{item.publication}</td>
                    </tr>
       
                </table>
                )
            })}
         
        </div>
    )
}

export default TableComponent;