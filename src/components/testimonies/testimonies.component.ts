import { Component } from '@angular/core';
import { ForwardIconComponent } from '../icons/forward-icon/forward-icon.component';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-testimonies',
  imports: [ForwardIconComponent, NgIf, NgClass, NgFor],
  templateUrl: './testimonies.component.html',
})
export class TestimoniesComponent {
  comments = [
    {
      avatar: '../../assets/testifier-desktop.png',
      text: 'Before I found Reetaila, the idea of running an online store felt overwhelming. I didn’t have the technical know-how or the budget for expensive platforms. But with Reetaila, I was able to set up my store in just a few hours. The templates are beautiful and easy to customize, and the dashboard makes managing my inventory and orders stress-free. Now, I focus on growing my business while Reetaila handles the heavy lifting. It’s like having a tech team I can actually afford!',
      subtext: '“...I was able to set up my store in just a few hours...”',
      business: 'Boutique Owner',
      name: 'Aisha 0.',
    },

    {
      avatar: '../../assets/testifier-image2.jpg',
      text: 'Before I found Reetaila, I struggled to turn my hobby into a business. I wasn’t sure where to start, and most e-commerce platforms felt complicated and expensive. But with Reetaila, I built my store in just a few hours. The setup was intuitive, the templates were stunning, and the built-in tools made managing my business effortless. Now, I spend more time creating and less time worrying about logistics. Reetaila truly made my dream a reality!',
      subtext: '“...I turned my passion into profit in no time...”',
      business: 'Handmade Jewelry Designer',
      name: 'Mary B.',
    },

    {
      avatar: '../../assets/testifier-image3.jpg',
      text: 'I always wanted to take my business online, but the idea of dealing with coding and complicated setups held me back. Reetaila changed everything! Their simple drag-and-drop tools let me create a professional store without any headaches. Plus, the automated inventory and order tracking keep things running smoothly. Now, I can focus on what I do best—curating amazing products for my customers.',
      subtext:
        '“...I finally launched my online store without any tech stress...”',
      business: 'Home Decor Shop Owner',
      name: 'Tolu A.',
    },
  ];

  currentSlide = 0;

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.comments.length;
  }

  previousSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.comments.length) % this.comments.length;
  }

  isOddNumber(j: number) {
    return j % 2 === 0;
  }
}
