import { Component } from '@angular/core';
import { PetService } from 'src/app/services/pet-service.service';

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.css'],
})
export class AdoptComponent {
  availablePets: any[] = [];

  constructor(private petService: PetService) {}

  ngOnInit() {
    this.fetchAvailablePets();
  }

  fetchAvailablePets() {
    this.petService.getAvailablePets().subscribe((pets) => {
      this.availablePets = pets;
    });
  }

  adopt(pet: any) {
    this.petService.adoptPet(pet.id).subscribe({
      next: (response) => {
        if (response.success) {
          // Remove the adopted pet from the list
          this.availablePets = this.availablePets.filter(
            (p) => p.id !== pet.id
          );

          // Update the UI or show a confirmation message
          console.log('Adoption successful.');
        } else {
          // Handle adoption failure
          console.log('Adoption failed.');
        }
      },
      error: (error) => {
        console.error('Error adopting pet:', error);
      },
    });
  }
}
