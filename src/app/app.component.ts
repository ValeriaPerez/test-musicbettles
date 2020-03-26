import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public setIsLoading: boolean = true;
  constructor() { }

  ngOnInit() {
    this.setLoading();
  }

  setLoading() {
    setTimeout(()=>{
      this.setIsLoading = false;
    }, 4000);
  }
}
