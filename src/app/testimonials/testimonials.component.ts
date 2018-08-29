import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'testimonials',
  templateUrl: './testimonials.component.html'
})
export class TestimonialsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];
  slideConfig = {
    slidesToShow : 2, 
    slidesToScroll : 2, 
    dots: true,
    infinite: false,
  };
 
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
 
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
 
  afterChange(e) {
    console.log('afterChange');
  }

}
