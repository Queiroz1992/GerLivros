import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/models/Livros';
import { LivroService } from 'src/app/services/livro.service';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirComponent } from 'src/app/components/excluir/excluir.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  livros: Livro[] = [];
  livroGeral: Livro[] = [];

  columnsToDisplay = [
    'Titulo',
    'Autor',
    'Genero',
    'AnoPublicacao',
    'Ações',
    'Teste',
  ];

  constructor(public livroService: LivroService, public matDialog: MatDialog) {}

  ngOnInit(): void {
    this.livroService.GetLivros().subscribe((data: any) => {
      this.livros = data;
      this.livroGeral = data;
    });
  }

  search(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.livros = this.livroGeral.filter((livro) => {
      return livro.autor.toLowerCase().includes(value);
    });
  }

  openDialog(id: number) {
    this.matDialog.open(ExcluirComponent, {
      width: '350px',
      height: '350px',
      data: {
        id: id,
      },
    });
  }
}
