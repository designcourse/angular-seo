import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(meta: Meta, title: Title) { 

    title.setTitle('My about page');

    meta.addTags([ 
      {
        name: 'author', content: 'Gary Simon'
      },
      {
        name: 'keywords', content: 'kws'
      },
      {
        name: 'description', content: 'aaaaaaaaaaaaaaaaaaaaaa.'
      },
    ])

  }

  ngOnInit() {
  }

}
