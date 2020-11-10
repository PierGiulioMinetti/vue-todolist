/**
 * starting
 */
const cont = new Vue ({
    el: '#container',
    data: {
        modello: '',
        lista: [
            'vai a fare la spesa',
            'compra il giornale',
            'vai a fare benzina'
        ],
        

    },

    created(){
    //   console.log(this.input);
    },
    methods: {
        add(){
            this.lista.push(this.modello)
        },
        remove(index){
            this.lista.splice(index);
        }
    }
    
})

// prendere input

// prendere il valore da input

// al click pushare in un array

// v-for iterare sull'array e stampare tutto a schermo