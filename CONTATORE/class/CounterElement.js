import Counter from "./Counter.js"

class CounterElement {

    constructor(selector){
        // .class
        const el = document.querySelector(selector)

        this.title= el.dataset.title || 'predefinito';
        this.max=el.dataset.max|| null;
        this.min=el.dataset.min || null;
        this.initial=el.dataset.initial || 0;

        console.log(this.title,this.max,this.min,this.initial);

        if(el.dataset.title === undefined){
            this.title='pippo'
        }

        //console.log("Valore di data-title: ",el.dataset.title)

        //this.title=el.dataset.title;


        //alt 96  per il ` , ossia il backtick

        el.innerHTML =  ` <div class="name">${this.title}</div>
            <button class="btn-less">-</button>
            <span class="display">${this.initial}</span>
            <button class="btn-add">+</button> `
        
        this.addBtn = el.querySelector('.btn-add')
        this.lessBtn = el.querySelector('.btn-less')
        this.display = el.querySelector('.display')
        
        this.addBtn.addEventListener('click',this.addBtnHandler)
        this.lessBtn.addEventListener('click',this.lessBtnHandler)
        
        //composizione
        this.counter = new Counter(this.initial,this.min,this.max);
        //console.log("constructor",this)
    }

    addBtnHandler = () => {
        this.counter.increment()
        // console.log(this.counter.value)
        this.display.innerHTML = this.counter.value
    }

    lessBtnHandler = () => {
        this.counter.decrement()
        //console.log(this.counter.value) 
        this.display.innerHTML = this.counter.value
    }
}

export default CounterElement