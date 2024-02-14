import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { FavoritesService } from '../favorites.service';
import { FormsModule } from '@angular/forms';
import { FiltrarPipe } from '../filtrar.pipe';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CardComponent, FormsModule, FiltrarPipe],
  templateUrl: './favoritos.component.html',
  styles: ``
})
export class FavoritosComponent {
  datos:any;
  patron:string = "";

  constructor(private favoritos:FavoritesService) {

  }

  getFavoritos() {
    return this.favoritos.getFavorites();
  }

  removeFav($event:any) {
    this.favoritos.removeFavorites($event)
  }
}
