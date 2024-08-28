import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../models/Livros';

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  private apiUrl = 'https://localhost:7146/api/Livros';

  constructor(private http: HttpClient) {}

  GetLivros(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.apiUrl);
  }

  GetLivro(id: number): Observable<Livro> {
    return this.http.get<Livro>(`${this.apiUrl}/${id}`);
  }

  PostLivro(livro: Livro): Observable<Livro[]> {
    return this.http.post<Livro[]>(`${this.apiUrl}`, livro);
  }

  PutLivro(livro: Livro): Observable<Livro[]> {
    return this.http.put<Livro[]>(`${this.apiUrl}`, livro);
  }

  DeleteLivro(id: number): Observable<Livro> {
    return this.http.delete<Livro>(`${this.apiUrl}?id=${id}`);
  }
}
