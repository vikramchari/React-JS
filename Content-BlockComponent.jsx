import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

function ContentBlockComponent() {
    return(
        <div className="mid-content">
            <LeftContent name='about'/>
            <RightContent name='quicklinks'/>
        </div>
    )
}

export default ContentBlockComponent;