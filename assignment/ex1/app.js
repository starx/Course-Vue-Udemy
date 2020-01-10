var app = new Vue({
    el: "#exercise",
    data: {
        name: "A coder",
        age: 25,
        imageSrc: "https://vuejs.org/images/logo.png"
    },
    methods: {
        randomValue: () => Math.random()
    }
});