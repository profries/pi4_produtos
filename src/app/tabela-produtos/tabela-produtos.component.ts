import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent implements OnInit {
  nomes = ['Produto 1', 'Produto 2', 'Produto 3'];

  constructor() { }

  ngOnInit(): void {
  }

}
