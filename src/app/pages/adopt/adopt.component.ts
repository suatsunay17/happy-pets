import { Component } from '@angular/core';
import { PetService } from 'src/app/services/pet-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.css'],
})
export class AdoptComponent {
  availablePets: any[] = [];

  constructor(private petService: PetService, private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.fetchAvailablePets();
  }

  fetchAvailablePets() {
    this.petService.getAvailablePets().subscribe((pets) => {
      this.availablePets = pets;
    });
  }

  adopt(pet: any) {
    this.availablePets = this.availablePets.filter((p) => p.id !== pet.id);

    this._snackBar.open(
      'You adopted this pet,we will reach you for additional info',
      'Ok',
      { duration: 3000 }
    );
  }
}
