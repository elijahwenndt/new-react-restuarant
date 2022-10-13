export default function Buttons(props) {
    return(
        <button className ='btn btn-primary text-center' onClick={() => props.handleClick(props.text)}>
            {props.text}
        </button>
    )
}