function Clicked() {
    const AInput = document.getElementById('aInput').value;
    const BInput = document.getElementById('bInput').value;
    const CInput = document.getElementById('cInput').value;
    const POutput = document.getElementById('POut');
    const DOutput = document.getElementById('DOut');
    const X1Output = document.getElementById('X1Out');
    const X2Output = document.getElementById('X2Out');
    const Answer = document.getElementById('Answer');
    let dis = 0;
    let dis1 = 0;
    let x1 = 0;
    let x2 = 0;
    console.log(AInput, 'x^2 + ', BInput, 'x + ', CInput, '= 0');
    POutput.textContent = AInput && BInput && CInput ? `${AInput} x^2 + ${BInput} x + ${CInput} = 0` : 'Пожалуйста, введите значения для: A, B, C! ';
    dis = BInput * BInput - 4 * AInput * CInput;
    DOutput.textContent = `D = b^2 - 4 * a * c = ${BInput}^2 - 4 * ${AInput} * ${CInput} = ${dis}`;
    console.log(DOutput.textContent);
    if (dis >= 1) {
        dis1 = Math.sqrt(dis);
        x1 = BInput * (-1) - dis1;
        x1 = x1 / 2 * AInput;
        X1Output.textContent = `x1 = -b - √D / 2 * a = -${BInput} - ${dis1} / 2 * ${AInput} = ${x1}`;
        console.log(X1Output.textContent);
        x2 = BInput * (-1) + dis1;
        x2 = x2 / 2 * AInput;
        X2Output.textContent = `x2 = -b + √D / 2 * a = -${BInput} + ${dis1} / 2 * ${AInput} = ${x2}`;
        console.log(X2Output.textContent);
        Answer.textContent = `Ответ: x1 = ${x1}, x2 = ${x2}`;
        console.log(Answer.textContent);
    }
    else if (dis <= 0) {
        X1Output.textContent = 'Нет решения! D = 0';
        console.log(X1Output.textContent);
        Answer.textContent = '∅';
        console.log(Answer.textContent);
    }
    else {
        X1Output.textContent = 'D = 0. Нахожу только x1...'
        console.log(X1Output.textContent);
        dis1 = Math.sqrt(dis);
        x1 = BInput * (-1) - dis1;
        x1 = x1 / 2 * AInput;
        X2Output.textContent = `x1 = -b - √D / 2 * a = -${BInput} - ${dis1} / 2 * ${AInput} = ${x1}`;
        console.log(X2Output.textContent);
        Answer.textContent = `Ответ: x1 = ${x1} (т.к D = 0)`;
        console.log(Answer.textContent);
    }
}
