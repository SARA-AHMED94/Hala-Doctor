import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slides = [
    {img: "../../assets/images/topSpecialist/Component 1.svg",descriptin:"Diabetes"},
    {img: "../../assets/images/topSpecialist/Component 1-1.svg",descriptin:"Radiology"},
    {img: "../../assets/images/topSpecialist/Component 1-2.svg",descriptin:"Neurology"},
    {img: "../../assets/images/topSpecialist/Component 1-3.svg",descriptin:"Otology"},
    {img: "../../assets/images/topSpecialist/Component 1-4.svg",descriptin:"Ophthalmology"},
    {img: "../../assets/images/topSpecialist/Component 1-5.svg",descriptin:"Rhinology"},
    {img: "../../assets/images/topSpecialist/Component 1-6.svg",descriptin:"Oral health"},
    {img: "../../assets/images/topSpecialist/Component 1-7.svg",descriptin:"Cardiology"},
  ];
  slideConfig = {"slidesToShow":8, "slidesToScroll": 1,"arrows": false,'responsive': [ { 'breakpoint': 1000, 'settings': { 'slidesToShow': 4, 'slidesToScroll': 1, } }, { 'breakpoint': 600, 'settings': { 'slidesToShow': 2, 'slidesToScroll': 1, } } ]};

  constructor() { }

  ngOnInit() {
  }
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }
  
}
