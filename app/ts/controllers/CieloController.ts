import { LancamentoService } from '../services/LancamentoService';

export class CileoController {

    private _lancamentoService = new LancamentoService();

    constructor() {

        this.buscarLacamentos();
    }

    buscarLacamentos() {

        this._lancamentoService
            .buscarLacamentos(res => {

                if(res.ok) {
                    return res;
                } else {
                    throw new Error(res.statusText);
                }
            })
            .then(lancamentos => {

            //TODO: 

            })

        
    }

}

