import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  imports: [],
  template: `
    <h3>Comments!</h3>
    <img
      src="https://www.freepik.es/fotos-vectores-gratis/memes-graciosos-pensamientos"
    />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, vero
      corrupti quis ea sit deserunt excepturi! Minus obcaecati harum nostrum
      enim, quae repellat fugiat magnam labore ducimus accusantium numquam
      aspernatur.
    </p>
  `,
  styles: `
    img {
      max-width: 100%;
      height: auto;
    }
  `,
})
export class Comments {}
