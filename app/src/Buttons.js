export default function Buttons(props) {
  return (
    <h5
      className="col-2 text-center text-white text-opacity-75 hover"
      onClick={() => props.handleClick(props.text)}
    >
      {props.text}
    </h5>
  );
}
