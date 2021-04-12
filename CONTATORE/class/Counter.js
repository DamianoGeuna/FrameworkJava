class Counter {

    constructor(iniziale = 0,min = null,max = null){
        this.value = parseInt(iniziale);
        console.log(this.value)
        if (max !=null)
        {
            this.max = parseInt(max);
        }

        this.min = parseInt(min);
        if (this.value<this.min)
        {
            throw'initial è minore di min';
        }

        if((this.value>this.max) && (this.max != null))
        {
            throw 'initial è maggiore di max';
        }
    }

    increment(){

        if(this.max === null) {
            this.value++
        }else if(this.value < this.max ){
            this.value++ 
        }
        
    }

    decrement(){
       
        if(this.min === null) {
            this.value--
        }else if(this.value > this.min ){
            this.value-- 
        }
    }
}

export default Counter; //renderla disponibile all'esterno