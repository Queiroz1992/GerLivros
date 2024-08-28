import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/models/Livros';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css'],
})
export class DetalhesComponent implements OnInit {
  livro?: Livro;
  id!: number;

  constructor(
    private livroService: LivroService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.livroService.GetLivro(this.id).subscribe((data) => {
      const dados = data;
      this.livro = dados;
    });
  }
}
