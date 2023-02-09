import { Component } from '@angular/core';
import { json } from 'body-parser';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  img!: string;
  constructor(public imgOfTheDaya: NasaService) {

  }


    
  ngOnInit(): void {
    this.imgOfTheDaya.getImageOfTheDay().subscribe( data => {
      this.img = data.hdurl;
      console.log(data.hdurl);
    })
    
  }




}
