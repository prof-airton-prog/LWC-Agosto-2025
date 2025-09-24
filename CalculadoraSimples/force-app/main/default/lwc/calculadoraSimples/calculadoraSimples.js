import { LightningElement, track } from 'lwc';
    
export default class CalculadoraSimples extends LightningElement {
    @track displayValue = '0';
    @track operationText = '';
    @track showOperation = false;

    waitingForNewValue = false;
    previousValue = null;
    currentOperation = null;

    inputNumber(event) {
        const number = event.target.dataset.number;

        if(this.waitingForNewValue) {
            this.displayValue = number;
            this.waitingForNewValue = false;
        } else {
            this.displayValue = this.displayValue === '0' ? number : this.displayValue + number;
        }
    }

    inputDecimal() {
        if(this.waitingForNewValue) {
            this.displayValue = '0.';
            this.waitingForNewValue = false;
        }else if(this.displayValue.indexOf('.') === -1){ 
        //Checa se o "ponto" não está presente na string (true) //=== compara o dado e o tipo do dado 
        //== compara os caracteres e ignora o tipo do dado. ex: 10 == '10'? (true) ou 10 === '10'? (false)
            this.displayValue += '.';
        }
    }

    setOperation(event) {
        const operation = event.target.dataset.operation;
        
        if(this.previousValue === null){
            this.previousValue = parseFloat(this.displayValue);
        }else if(this.currentOperation && !this.waitingForNewValue){
            this.performCalculation();
        }

        this.currentOperation = operation;
        this.waitingForNewValue = true;
        this.updateOperationDisplay();
    }

    updateOperationDisplay() {
        if(this.currentOperation && this.previousValue !== null){
            const operationSymbols = {
                'add': '+',
                'subtract' : '-',
                'multiply' : 'x',
                'divide': '÷'
            };
            this.operationText = `${this.previousValue} ${operationSymbols[this.currentOperation]}`; //this.previousValue + ' ' + map[chave]
            this.showOperation = true;
        }else{
            this.showOperation = false;
        }
    }

    calcular(){
        if(this.currentOperation && this.previousValue !== null && !this.waitingForNewValue){
            this.performCalculation();
            this.currentOperation = null;
            this.previousValue = null;
            this.waitingForNewValue = true;
            this.showOperation = false;
        }
    }

    performCalculation(){
        const currentValue = parseFloat(this.displayValue);
        let result;

        switch(this.currentOperation) {
            case 'add':
                result = this.previousValue + currentValue;
                break;
            case 'subtract':
                result = this.previousValue - currentValue;
                break;
            case 'multiply':
                result = this.previousValue * currentValue;
                break;
            case 'divide':
                if(currentValue === 0){
                    this.displayValue = 'Erro';
                    return;
                }
                result = this.previousValue / currentValue;
                break;
            default:
                return;
        }

        this.displayValue = result.toString();
        this.previousValue = result;
    }

    formatResult(result) {
        
        if(Math.abs(result) > 999999999999 || Math.abs(result) < 0.000001 && result != 0){
            const rounded = Math.round(result * 10000000000 / 10000000000); //Explicar o porque desse cálculo

            return parseFloat(rounded.toString()).toString(); //Explicar porque 2x o toString()
        }
    }

    clearAll(){
        this.displayValue = '0';
        this.operationText = '';
        this.showOperation = false;
        this.waitingForNewValue = false;
        this.previousValue = null;
        this.currentOperation = null;
    }
}


