export default function Header(props) {
  return (
    <div className="container my-3">
      <div
        className="row text-center align-items-center hover text-white text-opacity-75 bg-dark rounded fst-italic"
        onClick={() => props.handleClick(props.text)}
      >
        <div className="col-4">la meilleure nourriture avec les meilleurs ingrédients</div>
        <h1 className="col-4">Faire Réagir La Nourriture</h1>
        <h4 className="col-4">Open from 9-2 and 5-10 daily</h4>
      </div>
    </div>
  );
}
