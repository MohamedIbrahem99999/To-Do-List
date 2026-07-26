import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  imgLogo: string = "../assets/logo.png";

  isDark = false;

  ngOnInit(): void {

    this.isDark = localStorage.getItem('theme') === 'dark';

    if (this.isDark) {
      document.body.classList.add('dark-theme');
    }

  }

  toggleTheme(): void {

    this.isDark = !this.isDark;

    if (this.isDark) {

      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');

    } else {

      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');

    }

  }

}