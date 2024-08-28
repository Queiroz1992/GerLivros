import { Component, Inject, OnInit } from '@angular/core';
import { Livro } from 'src/app/models/Livros';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css'],
})
export class ExcluirComponent {
  inputdata: any;
  livro!: Livro;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private livroService: LivroService,
    private router: Router,
    private ref: MatDialogRef<ExcluirComponent>
  ) {}

  ngOnInit(): void {
    this.inputdata = this.data;

    this.livroService.GetLivro(this.inputdata.id).subscribe((data) => {
      this.livro = data;
    });
  }

  excluirLivro() {
    this.livroService.DeleteLivro(this.inputdata.id).subscribe((data) => {
      this.ref.close();
      window.location.reload();
    });
  }
}
