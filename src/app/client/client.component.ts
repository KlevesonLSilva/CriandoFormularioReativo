import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Clientes } from '../clientes';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  formCliente: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }
  createForm(cliente: Clientes) {
    this.formCliente = new FormGroup({
      nome: new FormControl(cliente.nome),
      tipo: new FormControl(cliente.tipo),
      genero: new FormControl(cliente.genero),
      dataNascimento: new FormControl(cliente.dataNascimento),
      observacao: new FormControl(cliente.observecao),
      inativo: new FormControl(cliente.inativo)
    })
  }

  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formCliente.value);
    this.createForm(new Clientes());
  }
  
}
