import { Frase } from './../shared/frase.model';
import { Component, OnInit, Input } from '@angular/core';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public vida = 3;

  public instrucao = 'Traduza a Frase:';

  public frases: Frase[] = FRASES;

  public resposta = '';

  public rodada = 0;

  public progresso = 0;

  constructor() { }

  ngOnInit() {
  }

  atualizaResposta(event): void {
    this.resposta = event.target.value;
  }

  verificarResposta() {
    console.log('Verificar resposta:', this.resposta);
    if (this.frases[this.rodada].frasePtBr === this.resposta) {
      this.rodada++;
      this.progresso = this.progresso + (100 / this.frases.length);
      this.resposta = '';
      console.log('Acertou');
    } else {
      console.log('ERRROOOOOUUUU');
      this.vida--;
    }
    if (!this.vida) {
      this.vida = 3;
      this.rodada = 0;
      this.progresso = 0;
    }
  }

}
