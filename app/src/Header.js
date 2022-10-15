export default function Header(props) {
  return (
    <div className="container my-3">
      <div
        className="row text-center align-items-center hover"
        onClick={() => props.handleClick(props.text)}
      >
        <div className="col-4">LOGO goes here</div>
        <h1 className="col-4 fst-italic">Faire Réagir La Nourriture</h1>
        <h4 className="col-4 fst-italic">Open from 9-2 and 5-10 daily</h4>
      </div>
    </div>
  );
}
