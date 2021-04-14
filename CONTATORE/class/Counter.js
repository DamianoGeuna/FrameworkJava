class Counter {

    constructor(iniziale = 0,min = null,max = null){
        this.value = Number(iniziale);
        this.max=max;
        //console.log(this.value)
        //if (max !=null)
        //{
        //    this.max = max;
        //}

        this.min = min;

        if ((this.value<this.min) && (this.min != null))
        {
            throw new Error('initial è minore di min');
        }

        if((this.value>this.max) && (this.max != null))
        {
            throw  new Error('initial è maggiore di max');
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