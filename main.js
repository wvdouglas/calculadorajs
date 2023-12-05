function Calculadora(){

this.inputCalc = document.querySelector('.input-calc');

this.inicia = () => {
    this.btn();
}

this.btn = () => {
    document.addEventListener('click' , (event) => {
        const element = event.target;
        if(element.classList.contains('btn')) this.addNum(element);
        if(element.classList.contains('btn-clear')) this.clearDisplay();
        if(element.classList.contains('btn-apagar')) this.clearElement();
        if(element.classList.contains('btn-igual')) this.calcular();
    })
}

//metodos

this.calcular = () =>{
    try{
        const conta = eval(this.inputCalc.value)
        if(!conta){
            alert('Conta invalida!!')
            return;
        }
        this.inputCalc.value = conta; 
    }catch (e){
        alert('Conta invalida!!')
        return;
    }
}

this.addNum = (element) => {
    this.inputCalc.value += element.innerText;
}

this.clearDisplay = () => {
    this.inputCalc.value = '';
}

this.clearElement = () => {
    this.inputCalc.value = this.inputCalc.value.slice(0, -1);
}

}

const calculadora = new Calculadora();
calculadora.inicia();



