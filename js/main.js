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

        bool: false,

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
        },
        hide(){
            if (this.lista.length == 0) {
                bool = false;
            } else {
                bool = true;
            }
        }
    }

    
})
