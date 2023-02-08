import { Component, OnInit } from '@angular/core';
import BlogJson from '../../assets/BlogJson.json';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  news = BlogJson;
  constructor() { }

  ngOnInit(): void {
  }

}
