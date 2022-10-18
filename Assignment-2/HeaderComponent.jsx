import MenuComponent from "./MenuComponent";
import './css/header.css'
function HeaderComponent(props) {
    return(
        <div className="header-section">
           {props.name}
            <MenuComponent name='menu1'/>
            <MenuComponent name='menu2'/>
            <MenuComponent name='menu3'/>
            <MenuComponent name='memu4'/>
        </div>
    )
}
export default HeaderComponent;