import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mb-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})

export class LoaderComponent implements OnInit {
  @Input() isLoading: boolean = true;
  constructor() { }
  ngOnInit() {
    
  }
}
