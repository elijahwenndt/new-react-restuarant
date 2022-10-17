//passes in the onclick props onto buttons
export default function Buttons(props) {
  return (
    <h5
      className="col-md-2 col-12 text-center text-white text-opacity-75 hover fst-italic"
      onClick={() => props.handleClick(props.text)}
    >
      {props.text}
    </h5>
  );
}
