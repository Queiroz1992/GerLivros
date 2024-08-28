import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LivroService } from 'src/app/services/livro.service';
import { Livro } from 'src/app/models/Livros';

@Component({
  selector: 'app-livro-form',
  templateUrl: './livro-form.component.html',
  styleUrls: ['./livro-form.component.css'],
})
export class LivroFormComponent {
  @Output() onSubmit = new EventEmitter<Livro>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosLivro: Livro | null = null;

  livroForm!: FormGroup;

  constructor(private livroService: LivroService, private router: Router) {}

  ngOnInit(): void {
    this.livroForm = new FormGroup({
      id: new FormControl(this.dadosLivro ? this.dadosLivro.id : 0),
      titulo: new FormControl(this.dadosLivro ? this.dadosLivro.titulo : '', [
        Validators.required,
      ]),
      autor: new FormControl(this.dadosLivro ? this.dadosLivro.autor : '', [
        Validators.required,
      ]),
      genero: new FormControl(this.dadosLivro ? this.dadosLivro.genero : '', [
        Validators.required,
      ]),
      anoPublicacao: new FormControl(
        this.dadosLivro ? this.dadosLivro.anoPublicacao.toString() : null,
        [Validators.required]
      ),
    });
  }

  get titulo() {
    return this.livroForm.get('titulo');
  }

  submit() {
    console.log(this.livroForm.value);
    this.onSubmit.emit(this.livroForm.value);
  }
}
