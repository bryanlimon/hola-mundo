import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-newtest',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `<p>newtest works!</p>`,
    styleUrl: './newtest.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewtestComponent { }
