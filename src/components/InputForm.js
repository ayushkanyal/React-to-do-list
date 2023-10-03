import { useState } from "react";
import styles from "./Button.module.css"
import style from './InputForm.module.css'

export default function InputForm(props) {
  const [isValid, setIsValid] = useState(true);

  function handleChange() {
    setIsValid(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const inputText = event.target.text;
    console.log(inputText.value.length);
    if (inputText.value.length === 0) {
      setIsValid(false);
      return;
    }

    props.onAdd(inputText.value);
  }

  return (
    <form  onSubmit={handleSubmit}>
      <div className={`${style['submit--form']} ${!isValid ? style["invalid"] : ""}`}>
        <label
          className="submit__label"
        >
          Course Goal
        </label>
        <input
          className="submit__input"
          onChange={handleChange}
          type="text"
          name="text"
        ></input>
        <button className={styles.button} type="submit">
          Add Goal
        </button>
      </div>
    </form>
  );
}
