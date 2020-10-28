let app = new Vue ({
    el: "#app",
    data: {
        darkMode: false,
    },
    methods: {
        cambiarTema() {
            this.darkMode = this.darkMode ? false : true;
            document.querySelector("body").style.backgroundColor = this.darkMode ? "#000000" : "#FFFFFF";

        },
    }
});