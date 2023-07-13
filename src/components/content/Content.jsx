import { useState } from "react";

const Content = () => {
  const [displayText, setDisplayText] = useState("");

  const handleButtonClick = (event) => {
    event.preventDefault();
    setDisplayText(document.getElementById("textArea").value);
  };
  return (
    <div className="py-2">
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3">
            <form>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  placeholder="Leave the text here"
                  id="textArea"
                  style={{ height: 100 }}
                  defaultValue={""}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleButtonClick}
              >
                Display Text
              </button>
            </form>
            <p className="mt-3">{displayText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
