import React from "react";

function Calc() {
  function clc() {
    return (document.getElementById("cal").value = "");
  }
  function display(e) {
    return (document.getElementById("cal").value += e.target.value);
  }

  function result() {
    let x = document.getElementById("cal").value;
    let y = eval(x);
    return (document.getElementById("cal").value = y);
  }

  return (
    <div class="table">
      <table class="table1">
        <tr>
          <td>
            <input class="buttonc" type="button" value="CC" onClick={clc} />
          </td>
          <td>
            <input class="buttont" type="text" id="cal" />
          </td>
        </tr>
      </table>
      <table class="table2">
        <tr>
          <td>
            <input class="button" type="button" value="+" onClick={display} />
          </td>
          <td>
            <input class="button" type="button" value="1" onClick={display} />
          </td>
          <td>
            <input class="button" type="button" value="2" onClick={display} />
          </td>
          <td>
            <input class="button" type="button" value="3" onClick={display} />
          </td>
        </tr>
        <tr>
          <td>
            <input class="button" type="button" value="-" onClick={display} />
          </td>
          <td>
            <input class="button" type="button" value="4" onClick={display} />
          </td>
          <td>
            <input class="button" type="button" value="5" onClick={display} />
          </td>
          <td>
            <input class="button" type="button" value="6" onClick={display} />
          </td>
        </tr>
        <tr>
          <td>
            <input class="button" type="button" value="*" onClick={display} />
          </td>
          <td>
            <input class="button" type="button" value="7" onClick={display} />
          </td>
          <td>
            <input class="button" type="button" value="8" onClick={display} />
          </td>
          <td>
            <input class="button" type="button" value="9" onClick={display} />
          </td>
        </tr>
        <tr>
          <td>
            <input class="button" type="button" value="/" onClick={display} />
          </td>
          <td>
            <input class="button" type="button" value="." onClick={display} />
          </td>
          <td>
            <input class="button" type="button" value="0" onClick={display} />
          </td>
          <td>
            <input class="button" type="button" value="=" onClick={result} />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Calc;
