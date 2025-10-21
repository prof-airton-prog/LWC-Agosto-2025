import { LightningElement, track} from 'lwc';

export default class ConditionalDemo extends LightningElement {
    //A- Toggle Simples
    @track mostrarDetalhes = false;
    @track estado = 'idle';
    @track interligado = false;
    @track nota = 0;

    get botaoVisibilidadeLabel(){
        return this.mostrarDetalhes ? 'Esconder Detalhes' : 'Mostrar Detalhes';
    }

    toggleVisibilidade(){
        this.mostrarDetalhes = !this.mostrarDetalhes;
    }

    //B- Máquina de Estados
    
    get isLoading(){
        return this.estado === 'loading';
    }

    get isError(){
        return this.estado === 'error';
        // if(this.estado === 'error' && !this.interligado){
        //     this.interligado = true;
        //     return true;
        // }else{
        //     return false;
        // }
    }

    get isSuccess(){
        return this.estado === 'success';
        // if(this.estado === 'success' && this.interligado){
        //     this.interligado = false;
        //     return true;
        // }else{
        //     return false;
        // }
    }

    simularCarregando(){
        this.estado = 'loading';
    }

    simularErro(){
        this.estado = 'error';
    }

    simularSucesso(){
        this.estado = 'success';
    }

    // Condições derivadas de getters
    
    handleNotaChange(event) {
        const valor = Number(event.target.value)
        this.nota = isNaN(valor)? 0 : Math.max(0, Math.min(10, valor));         //é não numérico (se não número, retorna true, false se número)
    }

    get estaAprovado(){
        return this.nota >= 6;
    }
    
    get estaRecuperacao(){
        return this.nota >= 4 && this.nota < 6;
    }

    get estaReprovado(){
        return this.nota < 4;
    }
}