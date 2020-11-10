/**
 * starting
 */
const cont = new Vue ({
    el: '#container',
    data: {
        modello: '',
        lista: [
            // {

            //    voce: 'fare la spesa 1'
            // },
            // {

            //     voce: 'fare la spesa 2'
            // },
            // {

            //     voce: 'fare la spesa 3'
            // }
        ],
        

    },

    created(){
    //   console.log(this.input);
    },
    methods: {
        add(){
            this.lista.push(this.modello)
        }
    }
    
})

// prendere input

// prendere il valore da input

// al click pushare in un array

// v-for iterare sull'array e stampare tutto a schermo