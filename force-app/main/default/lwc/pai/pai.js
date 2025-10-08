import { LightningElement } from 'lwc';

export default class Pai extends LightningElement {
    cursos = [
        {
            id: '1',
            nome: 'Apex Essentials',
            descricao: 'Lógica, SOQL e Triggers',
            categoria: 'Backend',
            cargaHoraria: 10,
            nivel: 'Iniciante'
        },
        {
            id: '2',
            nome: 'LWC',
            descricao: 'Componentização',
            categoria: 'Frontend',
            cargaHoraria: 20,
            nivel: 'Intermediário'
        },
        {
            id: '3',
            nome: 'API',
            descricao: 'Lógica, SOQL e Triggers',
            categoria: 'Backend',
            cargaHoraria: 30,
            nivel: 'Avançado'
        }
    ];

    handleIngressar(event) {
        const curso = event.detail;
        console.log('Ingressar no curso: ');
        //Abrir uma modal - Chamar um método Apex
    }
}