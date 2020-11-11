/**
 * starting
 */
const cont = new Vue ({
    el: '#container',
    data: {
        modello: '',

        lista: [
            // 'vai a fare la spesa',
            // 'compra il giornale',
            // 'vai a fare benzina'
        ],


    },

    created(){
    //   console.log(this.input);
    },
    methods: {
        add(){
            if (this.modello.trim() !== '') {
                this.lista.push(this.modello);
            }
            this.modello = '';
        },
        remove(index){
            this.lista.splice(index, 1);
        },
        
    }

    
})
