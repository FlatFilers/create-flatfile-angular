import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SpaceModule, ISpace } from '@flatfile/angular-sdk'
import { workbook } from "./workbook";
import { listener } from "./listener";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SpaceModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'create-flatfile-angular';
  showSpace: boolean = false;
  data: any;

  constructor() {}

  toggleSpace() {
    this.showSpace = !this.showSpace;
  }

  closeSpace() {
    this.showSpace = false;
  }

  spaceProps: ISpace = {
    name: 'my space!',
    environmentId: 'us_env_1234',
    publishableKey: 'sk_1234',
    workbook,
    listener,
    closeSpace: {
      operation: 'submitActionFg',
      onClose: this.closeSpace.bind(this),
    },
    userInfo: {
      name: 'my space name'
    },
    spaceInfo: {
      name: 'my space name'
    },
    displayAsModal: true,
    spaceBody: {
      metadata: {
        random: 'param'
      }
    }
  }
}
