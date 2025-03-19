import { Component } from '@angular/core';
import { Size } from '../../../ngx-bootstrap-blocks/src/lib/models/column-size.type';
import { NgxBootstrapBlocksModule } from '../../../ngx-bootstrap-blocks/src/lib/ngx-bootstrap-blocks.module';

@Component({
  selector: 'app-root',
  imports: [NgxBootstrapBlocksModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  size?: Size = 4;

  toggleSize() {
    this.size = this.size ? undefined : 4;
  }
}
