import { Lancamento } from "../models/Lancamento";
import { LancamentoContaLegado } from "../models/LacamentoContaLegado";

export class LancamentoService {

    buscarLacamentos(handler: HandlerFunction): Promise<Lancamento[]> {

        return fetch('http://localhost:8080/api/cielo/conta-legado/buscar-lacamento') 
            .then(res => handler(res))
            .then(res => res.json())
            .then((dados: Lancamento[]) => 
                dados
                    .map(dado => new LancamentoContaLegado(
                        dado.dataDeLancamento, 
                        dado.descricao,
                        dado.numero,
                        dado.situacao,
                        dado.dataDeConfirmacao,
                        dado.dadosBancarios,
                        dado.valorFinal)) 
            );
    }

}

export interface HandlerFunction {

    (res: Response): Response;
}