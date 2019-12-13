import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  @Input() public life = 3;

  public coracaoVazio = '/assets/coracao_vazio.png';
  public coracaoCheio = '/assets/coracao_cheio.png';
  constructor() { }

  ngOnInit() {
  }

}
