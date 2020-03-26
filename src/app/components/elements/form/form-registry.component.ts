import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'mb-form',
  templateUrl: './form-registry.component.html',
  styleUrls: ['./form-registry.component.scss']
})
export class FormComponent implements OnInit {
  public registryForm: FormGroup

  constructor(
    public fBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  public onSubmit() {
    console.log(this.registryForm);
  }

  public buildForm() {
    this.registryForm = this.fBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    });
  }

  public back() {
    this.router.navigate(['/home']);
  }

}
