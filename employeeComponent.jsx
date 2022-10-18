import  './css/ContentComponent.css';

function ContentComponent(props){
return (
    <div className="content">
        <table className="tbl">
            <tr><th>ID</th><th>Name</th><th>Dept</th><th>Desg</th></tr>
        {
            props.employees.map((employee)=>
            <tr><td>{employee.id}</td><td>{employee.name}</td>
            <td>{employee.dept}</td><td>{employee.desg}</td>
            </tr>
            )
        }
        </table>
       
    </div>
);
}

export default ContentComponent;