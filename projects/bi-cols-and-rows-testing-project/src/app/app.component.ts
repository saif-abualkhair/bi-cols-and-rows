import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Size } from '../../../bi-cols-and-rows/src/lib/models/column-size.type';
import { BiColsAndRowsModule } from '../../../bi-cols-and-rows/src/lib/bi-cols-and-rows.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BiColsAndRowsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  size?: Size = 4;

  toggleSize() {
    this.size = this.size ? undefined : 4;
  }
}
