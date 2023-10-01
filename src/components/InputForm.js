import "./InputForm.css";

export default function InputForm(props){

    function handleSubmit(event){
        event.preventDefault()
        const inputText = event.target.text;
        console.log(inputText.value);
        props.onAdd(inputText.value);
    }

    return (
        <form className="submit--form" onSubmit={handleSubmit}>
            <label className="submit__label">Course Goal</label>
            <input className="submit__input" type="text" name="text"></input>
            <button className="submit__button" type="submit">Add Goal</button>
        </form>
    )
}
