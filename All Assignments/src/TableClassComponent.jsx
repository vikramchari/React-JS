import React from 'react'

class TableClassComponent extends React.Component {
     
  render() {
    let books = [
        {
        id:'B-001',
        name1:'Vikram',
        author:'Kanitkar',
        publication:'World-pub'
        },
        {
        id:'B-001',
        name1:'Vikram',
        author:'Kanitkar',
        publication:'hello'}
        
        ]
        const tableRows = books.map(element=>{
            return(
                <tr>
                    <td>{element.id}</td>
                    <td>{element.name1}</td>
                    <td>{element.author}</td>
                    <td>{element.publication}</td>
                </tr>
            )
        })
      return(
        <div>
                <table>
                    <tbody>
                {tableRows}
                </tbody>
            </table>
        
     </div>
      )
  }
}

export default TableClassComponent;