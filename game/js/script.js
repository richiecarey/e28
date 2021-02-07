window.addEventListener("load", () => {
    let state = [0, 0, 0];
    const choices = ["rock", "paper", "scissors"];
    const resultMap = new Map();

    resultMap.set("reset", {
        message: "Rock, Paper, Scissors",
        computer: 0,
        player: 0,
    });
    resultMap.set("tie", {
        message: "Tie. Try again.",
        computer: 0,
        player: 0,
    });
    resultMap.set("rock_paper", {
        message: "You win! Paper covers rock.",
        computer: 0,
        player: 1,
    });
    resultMap.set("rock_scissors", {
        message: "Computer wins. Rock smashes scissors.",
        computer: 1,
        player: 0,
    });
    resultMap.set("paper_rock", {
        message: "Computer wins. Paper covers rock.",
        computer: 1,
        player: 0,
    });
    resultMap.set("paper_scissors", {
        message: "You win! Scissors cuts paper.",
        computer: 0,
        player: 1,
    });
    resultMap.set("scissors_rock", {
        message: "You win! Rock smashes scissors.",
        computer: 0,
        player: 1,
    });
    resultMap.set("scissors_paper", {
        message: "Computer wins. Scissors cuts paper.",
        computer: 1,
        player: 0,
    });

    const play = () => {
        const random = Math.floor(Math.random() * choices.length);
        const computer = choices[random];
        const player = event.target.dataset.button;
        state[2]++;
        view(outcome(computer, player));
    };

    const outcome = (computer, player) => {
        const play = computer === player ? "tie" : computer + "_" + player;
        return resultMap.get(play);
    };

    const view = (result) => {
        const resultTxt = document.getElementById("result");
        state[0] += result.computer;
        state[1] += result.player;

        if (result.computer===1) {
            resultTxt.classList.remove("text-secondary","text-danger","text-success","text-primary");
            resultTxt.classList.add("text-danger");
        }
        else if (result.player===1) {
            resultTxt.classList.remove("text-secondary","text-danger","text-success","text-primary");
            resultTxt.classList.add("text-success");
        }
        else {
            resultTxt.classList.remove("text-secondary","text-danger","text-success","text-primary");
            resultTxt.classList.add("text-secondary");
        }

        document.getElementById("computer").innerHTML = state[0];
        document.getElementById("player").innerHTML = state[1];
        document.getElementById("round").innerHTML = state[2];
        document.getElementById("result").innerHTML = result.message;
    };

    document.body.addEventListener("click", (event) => {
        if (event.target.nodeName === "BUTTON") {
            if (event.target.dataset.button === "reset") {
                location.reload();
            }
            else {
                play();
            }
        }
    });
});
