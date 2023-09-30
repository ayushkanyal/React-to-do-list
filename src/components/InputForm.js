import "./InputForm.css";

export default function InputForm(){


    return (
        <form className="submit--form">
            <label className="submit__label">Course Goal</label>
            <input className="submit__input" type="text"></input>
            <button className="submit__button" type="submit">Add Goal</button>
        </form>
    )
}