const value1Input = document.getElementById("value1");
const value2Input = document.getElementById("value2");
const operatorSelect = document.getElementById("choice");
const resultArea = document.getElementById("result");
const formulaArea = document.getElementById("formula");

value1Input.addEventListener("input", calculate);
value2Input.addEventListener("input", calculate);
operatorSelect.addEventListener("change", calculate);

function calculate(){
    const value1 = parseFloat(value1Input.value);
    const value2 = parseFloat(value2Input.value);
    const operator = operatorSelect.value;

    if (isNaN(value1) || isNaN(value2)) {
        formulaArea.textContent ="計算式：";
        resultArea.textContent ="両方の数値を入力してください.";
        return;
    }

    let result;
    let symbol;

    if (operator === "addition") {
        result = value1 + value2;
        symbol = "+";    
    } else if (operator === "subtraction"){
        result = value1 - value2;
        symbol = "-";
    } else if (operator === "multiplication"){
        result = value1 * value2; 
        symbol ="×"; 
    } else if (operator ==="division") {
        if (value2 === 0){
            formulaArea.textContent = "計算式:";
            resultArea.textContent = "0で割ることはできません。";
            return;
        }

        result =value1 / value2;
        symbol = "÷";
    } else {
        formulaArea.textContent = "計算式:";
        resultArea.textContent = "演算子が正しくありません。";
        return;
    }

    formulaArea.textContent = `計算式: ${value1} ${symbol} ${value2}`;
    resultArea.textContent = `計算結果:${result}`;
}