import { OportunidadeService } from './../oportunidade.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';


@Component({
  selector: 'app-painel-negociacao',
  templateUrl: './painel-negociacao.component.html',
  styleUrls: ['./painel-negociacao.component.css']
})
export class PainelNegociacaoComponent implements OnInit {

  oportunidade = {};
  oportunidades = [];

  constructor(
    private oportunidadeService: OportunidadeService,
    private toast: MessageService) { }

  ngOnInit() {
      this.consultar();
  }

  consultar() {

    this.oportunidadeService.listar().subscribe(
      resposta => this.oportunidades = <any> resposta
    );

  }

  adicionar() {
    this.oportunidadeService.adicionar(this.oportunidade)
    .subscribe(
      () => {
        this.oportunidade = {};
        this.consultar();

        this.toast.add(
          {
            severity: 'success',
            summary: 'Oportunidade adicionar com sucesso'
          }
        );
      },
      resposta => {
          let msg = 'Erro inesperado, tente novamente.';

          if (resposta.error.message) {

            msg = resposta.error.message;

          }

        this.toast.add(
          {
            severity: 'error',
            summary: msg
          }
        );
      }
    );
  }
}
