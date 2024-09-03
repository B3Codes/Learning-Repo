import { useRef } from "react"

function TextInputWithFocusButton() {
  const inputEl = useRef(null);

  const onButttonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };


  return (
  <>
  
    <input ref={inputEl} type="text"/>
    <button onClick={onButttonClick}>Focus the Input</button>

    <br/>
    <ul>
      <li>
        using the <strong>ref</strong> attribute on the input element,
        we can access the <strong>current value</strong> and <strong>invoke the focus()</strong> method it,
        thereby focusing the input field.
      </li>
    </ul>
  
  </>
  );
}
export default TextInputWithFocusButton;