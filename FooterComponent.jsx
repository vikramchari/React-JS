function FooterComponent(props){
    return (
        <div className="footer">
            @copy; {props.copyright} <em>{props.company}</em>
            <p>{new Date().toDateString()}</p>
        </div>
    );
}

export default FooterComponent;