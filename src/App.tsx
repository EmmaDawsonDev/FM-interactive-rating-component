import "./App.css";

function App() {
  return (
    <main>
      <form action="" className="formContainer">
        <fieldset>
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="input-container">
            <div>
              <input
                type="radio"
                id="rating1"
                name="rating"
                value="1"
                className="visually-hidden"
              />
              <label htmlFor="rating1">
                <div className="label">1</div>
              </label>
            </div>

            <div>
              <input
                type="radio"
                id="rating2"
                name="rating"
                value="2"
                className="visually-hidden"
              />
              <label htmlFor="rating2">
                <div className="label">2</div>
              </label>
            </div>

            <div>
              <input
                type="radio"
                id="rating3"
                name="rating"
                value="3"
                className="visually-hidden"
              />
              <label htmlFor="rating3">
                <div className="label">3</div>
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="rating4"
                name="rating"
                value="4"
                className="visually-hidden"
              />
              <label htmlFor="rating4">
                <div className="label">4</div>
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="rating5"
                name="rating"
                value="5"
                className="visually-hidden"
              />
              <label htmlFor="rating5">
                <div className="label">5</div>
              </label>
            </div>
          </div>
        </fieldset>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </main>
  );
}

export default App;
