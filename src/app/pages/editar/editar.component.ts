import { Component, OnInit } from '@angular/core';
import { LivroService } from 'src/app/services/livro.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Livro } from 'src/app/models/Livros';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  btnAcao = 'Editar';
  btnTitulo = 'Editar Livro!';
  livro!: Livro;

  constructor(
    private livroService: LivroService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.livroService.GetLivro(id).subscribe((data) => {
      this.livro = data;
    });
  }

  async putLivro(livro: Livro) {
    this.livroService.PutLivro(livro).subscribe((data) => {
      this.router.navigate(['/']);
    });
  }
}
