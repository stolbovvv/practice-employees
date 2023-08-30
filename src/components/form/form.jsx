import './form.css';

function Form() {
  return (
    <form className="form" action="">
      <input className="form__text-input input-text" type="text" placeholder="Type employee's name" />
      <button className="form__button-submit button" type="submit">
        Add
      </button>
    </form>
  );
}

export { Form };
