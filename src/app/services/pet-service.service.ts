import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  private apiUrl = 'https://petsng.free.beeceptor.com'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getAvailablePets(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/pets/available`);
  }

  adoptPet(petId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/pets/adopt/${petId}`);
  }
}
