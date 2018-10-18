export class LancamentoContaLegado {

    constructor(readonly dataDeLancamento: Date, 
                readonly descricao: string, 
                readonly numero: number,
                readonly situacao: string,
                readonly dataDeConfirmacao: Date,
                readonly dadosBancarios: string,
                readonly valorFinal: number) {
    }


}