/**
 * starting
 */
const cont = new Vue ({
    el: '#container',
    data: {
        input: document.getElementById('input').value,
        modello: [
            'lavare i piatti',
            'fare la spesa',
            'comprare il pane',
        ],
        

    },

    created(){
    //   console.log(this.input);
    },
    methods: {
        pushare(){

        }
    }
    
})

// prendere input

// prendere il valore da input

// al click pushare in un array

// v-for iterare sull'array e stampare tutto a schermo