const ButtonComponent = (props) => (
	<button style={props.buttonStyle}>{props.content ? props.content : "banane"}</button>
);
export default ButtonComponent;
