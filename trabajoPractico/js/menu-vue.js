
Vue.component("barmenu",{
    template:`<nav class="navbar navbar-expand-lg navbar-light " style="z-index: 100;">
               
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav ml-auto ">
                        <li class="nav-item active ">
                        <a class="menu mr-2" href="index.html">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                        <a class="menu mr-2" href="about.html">About </a>
                        </li>
                        <li class="nav-item">
                        <a class="menu mr-2" href="projects.html">Projects</a>
                        </li>
                        <li class="nav-item">
                        <a class="menu mr-2" href="contact.html">Contact</a>
                        </li>
                        
                    </ul>
                </div>
         </nav>`,
})
let app= new Vue({
    el:"#app",
    data: {
     
    },

})


