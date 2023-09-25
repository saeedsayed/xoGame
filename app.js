let restart = document.querySelector(".restartBtn");
let Boxes = document.querySelectorAll(".box");
let title = document.querySelector(".title");
let turn = "X";
let element = [];
let p = [];

restart.onclick = (_) => {
    Boxes.forEach((box) => {
        rest(box);
    });
};
Boxes.forEach((box) => {
    box.onclick = (_) => {
        add(box);
    };
});

function rest(el) {
    el.textContent = "";
    title.innerHTML = `<span class="X">X</span> <span class="O">O</span> Game`;
    turn = "X";
    Boxes.forEach((box) => {
        box.style.background = "transparent";
    });
}

function add(item) {
    if (turn === "X" && item.textContent == "") {
        item.textContent = turn;
        turn = "O";
        title.innerHTML = `turn <span class="${turn}">${turn}</span>`;
    } else if (turn === "O" && item.textContent == "") {
        item.innerHTML = `<span class="${turn}">${turn}</span>`;
        turn = "X";
        title.innerHTML = `turn <span class="${turn}">${turn}</span>`;
    }
    Winier();
}

function Winier() {
    element = [];
    p = [];
    Boxes.forEach((box) => {
        element.push(box.textContent);
        p.push(box);
    });
    if (
        element[0] !== "" &&
        element[1] !== "" &&
        element[2] !== "" &&
        element[3] !== "" &&
        element[4] !== "" &&
        element[5] !== "" &&
        element[6] !== "" &&
        element[7] !== "" &&
        element[8] !== ""
    ) {
                    title.innerHTML = "Tied Match";
    }

    
    if (
        element[0] === element[1] &&
        element[1] === element[2] &&
        element[1] !== ""
    ) {
        Finish(0, 1, 2);
    }
    if (
        element[3] === element[4] &&
        element[4] === element[5] &&
        element[3] !== ""
    ) {
        Finish(3, 4, 5);
    }
    if (
        element[6] === element[7] &&
        element[7] === element[8] &&
        element[7] !== ""
    ) {
        Finish(6, 7, 8);
    }
    if (
        element[0] === element[3] &&
        element[3] === element[6] &&
        element[3] !== ""
    ) {
        Finish(0, 3, 6);
    }
    if (
        element[1] === element[4] &&
        element[4] === element[7] &&
        element[4] !== ""
    ) {
        Finish(1, 4, 7);
    }
    if (
        element[2] === element[5] &&
        element[5] === element[8] &&
        element[5] !== ""
    ) {
        Finish(2, 5, 8);
    }
    if (
        element[0] === element[4] &&
        element[4] === element[8] &&
        element[4] !== ""
    ) {
        Finish(0, 4, 8);
    }
    if (
        element[2] === element[4] &&
        element[4] === element[6] &&
        element[6] !== ""
    ) {
        Finish(2, 4, 6);
    }
}


function Finish(num1, num2, num3) {
    title.innerHTML = `<span class="${element[num1]}">${element[num1]}</span> is winier`;
    p[num1].style.background = "#0d8ba1";
    p[num2].style.background = "#0d8ba1";
    p[num3].style.background = "#0d8ba1";
    turn = "";
}
