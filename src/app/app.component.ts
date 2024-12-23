import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MainComponent, FooterComponent, RouterOutlet, ReactiveFormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit {
  audioPath =
    'https://archive.org/download/videoplayback_20241220_0827/videoplayback.m4a';
  @ViewChild('audio')
  audio!: ElementRef;
  @ViewChild('options')
  text!: ElementRef;
  @ViewChild('button')
  btn!: ElementRef;

  ngAfterViewInit(): void {
    this.audio.nativeElement.play();
    this.text.nativeElement.innerHTML = `autoplay: ${
      this.audio.nativeElement.autoplay ? 'on' : 'off'
    } loop: ${this.audio.nativeElement.loop} muted: ${
      this.audio.nativeElement.muted
    }`;

    this.btn.nativeElement.click();
    this.audio.nativeElement.play();
  }
}
