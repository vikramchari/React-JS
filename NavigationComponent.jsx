import NavMiniComponentComponent from "./NavMiniComponent";

function NavigationComponent(props) {
    return(
        <div className="Navigation-section">
           <NavMiniComponentComponent name='Navigation..'></NavMiniComponentComponent>
           <NavMiniComponentComponent></NavMiniComponentComponent>
           <NavMiniComponentComponent></NavMiniComponentComponent>
           <NavMiniComponentComponent></NavMiniComponentComponent>
        </div>
    )
}
export default NavigationComponent;