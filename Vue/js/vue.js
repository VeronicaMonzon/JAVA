var app=new Vue({
    el:"#app",
    data:{
       message:"Iniciada en " + new Date().toLocaleDateString()
    }
})
var app1=new Vue({
    el:"#app1",
    data:{
       seen:true,
    }
})
var app2=new Vue({
    el:"#app2",
    data:{
    
        todos: [
            { text: 'Estudio JavaScript'},
            { text:'Estudio css' },
            { text: 'html'}, 
            { text: 'Programo FrontEnd' },
         ]

    }
})