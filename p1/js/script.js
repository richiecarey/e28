const Game = {
    data() {
        return {
            project: 'Project 1',
        }
    },
    methods: {
        play(player) {
            console.log(player)
        }
    }
}

const app = Vue.createApp(Game).mount('#container');
