const Game = {
    
    data() {
        return {
            computer: '',
            computerScore: 0,
            message: "Rock, Paper, Scissors",
            messageClass: '',
            player: '',
            playerScore: 0,
            round: 0,
            rounds: [
                { number: 1, winner: 'Player' },
                { number: 2, winner: 'Player' },
                { number: 3, winner: 'Computer' },
            ],            
        }
    },
    watch: {
        round() {
            if (this.computer === this.player) {
                this.message = "Tie. Try again.";
                this.messageClass = "text-secondary";
            }
            else if (this.computer==="rock" && this.player==="scissors") {
                this.message = "Computer wins. Rock smashes scissors.";
                this.computerScore++;
                this.messageClass = "text-danger";
            }
            else if (this.computer==="rock" && this.player==="paper") {
                this.message = "You win! Paper covers rock.";
                this.playerScore++;
                this.messageClass = "text-success";
            }
            else if (this.computer==="paper" && this.player==="rock") {
                this.message = "Computer wins. Paper covers rock.";
                this.computerScore++;
                this.messageClass = "text-danger";
            }
            else if (this.computer==="paper" && this.player==="scissors") {
                this.message = "You win! Scissors cuts paper.";
                this.playerScore++;
                this.messageClass = "text-success";
            }
            else if (this.computer==="scissors" && this.player==="paper") {
                this.message = "Computer wins. Scissors cuts paper.";
                this.computerScore++;
                this.messageClass = "text-danger";
            }
            else if (this.computer==="scissors" && this.player==="rock") {
                this.message = "You win! Rock smashes scissors.";
                this.playerScore++;
                this.messageClass = "text-success";
            }
            else {
                return;
            }
        }
    },
    methods: {
        play(player) {
            const choices = ["rock", "paper", "scissors"];
            const random = Math.floor(Math.random() * choices.length);
            const computer = choices[random];
            this.computer = computer;
            this.player = player;
            this.round++;
        }
    }
}

// Define the options of our component
const RoundDetail = {
    name: 'RoundDetail',
    data() {
        return {
            deleted: false,
        }
    },
    methods: {
        deleteRound() {
            this.deleted = true
        }
    },
    props: ['number', 'winner'],
    template: '#round-detail',
};

const app = Vue.createApp(Game);

app.component('round-detail', RoundDetail);

app.mount('#app');
