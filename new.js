function Clicked() {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const c = document.getElementById("c").value;

    const p = document.getElementById("p");
    const d = document.getElementById("d");
    const x1 = document.getElementById("x1");
    const x2 = document.getElementById("x2");
    const answer = document.getElementById("answer");

    solve(a, b, c);

    function solve(a, b, c) {
        let dis = 0; let x1_solve; let x2_solve;

        dis = (b * b) - (4 * a * c);

        if (dis >= 1) {
            dis = Math.sqrt(dis);

            x1_solve = (b * (-1) - dis) / (2 * a);
            x2_solve = (b * (-1) + dis) / (2 * a);
            
            answer.textContent = `x1 = ${x1_solve} | x2 = ${x2_solve}`;

            p.textContent = `${a}^2 - ${b} - ${c} = 0`;
            d.textContent = `D = ${b}^2 - 4 x ${a} x ${c} = ${dis}`
            x1.textContent = `x1 = ${x1_solve}`;
            x2.textContent = `x2 = ${x2_solve}`;
        }
        else if (dis <= 0) { answer.textContent("Нет решения! D < 0"); }
        else {
            dis = Math.sqrt(dis);

            x1_solve = (b * (-1) - dis) / (2 * a);
            
            answer.textContent = `x1 = ${x1_solve} | x2 = ${x2_solve}`;

            p.textContent = `${a}^2 - ${b} - ${c} = 0`;
            d.textContent = `D = ${b}^2 - 4 x ${a} x ${c} = ${dis}`
            x1.textContent = `x1 = ${x1_solve}`;
            x2.textContent = "Так как D = 0, нахожу только x1!";
        }
    }
}