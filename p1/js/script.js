const Game = {
    data() {
        return {
            playerName: 'Sam',
            profileUrl: 'http://www.yahoo.com/',
        }
    }
}

const app = Vue.createApp(Game).mount('#container');
