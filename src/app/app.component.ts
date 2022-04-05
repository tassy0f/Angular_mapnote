import { AfterViewInit, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { TimerService } from './timer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  
  constructor(private timerService: TimerService) {}

  public ngAfterViewInit() {
    this.timerService.start();
  }

  public productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    price: new FormControl(null, [Validators.required, Validators.min(0)]),
    categories: new FormControl(),
  });

  public onClickGenerateID(): void {
    this.productForm.get('id').setValue('_' + Math.random().toString(36).substr(2, 9));
  }

  public onSubmit(): void {
    if (this.productForm.invalid) {
      alert('Form is not valid');
      return;
    }

    console.log(this.productForm.value);
  }
}