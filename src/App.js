import "./App.css";
import React from "react";
// import { clear } from "@testing-library/user-event/dist/clear";

function App() {
  const [expression, setExpression] = React.useState("");
  const [answer, setAnswer] = React.useState(0);
  //const operand = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9','.']
  //const decimal = document.querySelector('.decimal'); 
  //let resultArray = [];

  const display = (symbol) => {
    setExpression((prev) => prev + symbol);
    if (expression[expression.length - 1] === "=") {
      if (/[0-9.]/.test(symbol)) {
        setExpression(symbol);
      } else {
        setExpression(answer + symbol);
      }
    }

    // if (
    //   //expression[expression.length - 1] === "." ||
    //   expression[expression.length - 1] === "0"
    // ) {
    //   if (/[0.]/.test(symbol)) {
    //     setExpression();
    //   } else {
    //     setExpression();
    //   }
    // }
  };

  
// decimal.addEventListener('click', function(e) {

//     var decimalClicked  = e.target.textContent;
    
//     if(resultArray.includes(decimalClicked) == false){
//         resultArray.push(decimalClicked);
//         display.textContent += decimalClicked;
//     }
// });

  const calculate = () => {
    setAnswer(eval(expression));
    setExpression((prev) => prev + "=");
  };

  const allClear = () => {
    setExpression("");
    setAnswer(0);
  };
  const clear = () => {
    setExpression((prev) =>
      prev
        .split("")
        .slice(0, prev.length - 1)
        .join("")
    );
    setAnswer(0);
  };

  return (
    <div className="container">
      <div className="grid">
        <div className="dis" id="display">
          <input type="text" value={expression} placeholder="0" disabled />
          <div className="total">{answer}</div>
        </div>
        <div onClick={allClear} className="padButton AC orange" id="clear">
          AC
        </div>
        <div onClick={clear} className="padButton DEL orange">
          DEL
        </div>
        <div
          onClick={() => display("/")}
          className="padButton div operator"
          id="divide"
        >
          /
        </div>
        <div
          onClick={() => display("*")}
          className="padButton times operator"
          id="multiply"
        >
          *
        </div>
        <div
          onClick={() => display("7")}
          className="padButton seven dark-gray"
          id="seven"
        >
          7
        </div>
        <div
          onClick={() => display("8")}
          className="padButton eight dark-gray"
          id="eight"
        >
          8
        </div>
        <div
          onClick={() => display("9")}
          className="padButton nine dark-gray"
          id="nine"
        >
          9
        </div>
        <div
          onClick={() => display("-")}
          className="padButton minus operator"
          id="subtract"
        >
          -
        </div>
        <div
          onClick={() => display("4")}
          className="padButton four dark-gray"
          id="four"
        >
          4
        </div>
        <div
          onClick={() => display("5")}
          className="padButton five dark-gray"
          id="five"
        >
          5
        </div>
        <div
          onClick={() => display("6")}
          className="padButton six dark-gray"
          id="six"
        >
          6
        </div>
        <div
          onClick={() => display("+")}
          className="padButton plus operator"
          id="add"
        >
          +
        </div>
        <div
          onClick={() => display("1")}
          className="padButton one dark-gray"
          id="one"
        >
          1
        </div>
        <div
          onClick={() => display("2")}
          className="padButton two dark-gray"
          id="two"
        >
          2
        </div>
        <div
          onClick={() => display("3")}
          className="padButton three dark-gray"
          id="three"
        >
          3
        </div>
        <div
          onClick={calculate}
          className="padButton equal operator"
          id="equals"
        >
          =
        </div>
        <div
          onClick={() => display("0")}
          className="padButton zero dark-gray"
          id="zero"
        >
          0
        </div>
        <div
          onClick={() => display(".")}
          className="padButton dot operator"
          id="decimal"
        >
          .
        </div>
      </div>
    </div>
  );
}

export default App;
