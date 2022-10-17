//header that displays on all pages. onclick function passed onto row so it will go back to home when clicked
export default function Header(props) {
  return (
    <div className="container my-3 sticky-top">
      <div
        className="row text-center align-items-center hover text-white text-opacity-75 bg-dark rounded fst-italic"
        onClick={() => props.handleClick(props.text)}
      >
        <h5 className="col-4 cursive">la meilleure nourriture avec les meilleurs ingrédients</h5>
        <h1 className="col-4 cursive">Faire Réagir La Nourriture</h1>
        <h4 className="col-4 cursive">Open from 9-2 and 5-10 daily</h4>
      </div>
    </div>
  );
}
