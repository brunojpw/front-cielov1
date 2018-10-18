import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LancamentoService } from '../services/LancamentoService';

import { LancamentoContaLegado } from '../models/LacamentoContaLegado';

@Component({
    selector: 'app',
    templateUrl: './index.html'
  })
export class CileoController implements OnInit {

    private _lancamentoService = new LancamentoService();

    public _lancamentoContaLegado = new LancamentoContaLegado[];

    constructor() {
    }

    ngOnInit() {

        this._lancamentoService
            .buscarLacamentos(res => {

                if(res.ok) {
                    return res;
                } else {
                    throw new Error(res.statusText);
                }
            })
            .then(lancamentos => this._lancamentoContaLegado)

        
    }

}

