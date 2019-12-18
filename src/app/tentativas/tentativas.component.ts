import { Coracao } from './../shared/coracao.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  @Input() life = 3;

  public coracoes: Coracao[] = [
    new Coracao (true),
    new Coracao (true),
    new Coracao (true)
  ];

  public coracaoVazio = '/assets/coracao_vazio.png';
  public coracaoCheio = '/assets/coracao_cheio.png';
  constructor() { }

  ngOnInit() {
  }

}
