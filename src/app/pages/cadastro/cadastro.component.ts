import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LivroService } from 'src/app/services/livro.service';
import { Livro } from 'src/app/models/Livros';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  btnAcao = 'Cadastrar!';
  btnTitulo = 'Cadastrar Livro!';

  constructor(private livroService: LivroService, private router: Router) {}

  ngOnInit() {}

  PostLivro(livro: Livro) {
    this.livroService.PostLivro(livro).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
