import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <a class="form_footer" href="./pages/contacto.html">CONTACTANOS</a>
      <div class="redes_title">Visitanos en Nuestras Redes Sociales</div>
      <div class="iconos">
        <a class="icon" href="#"> <i class="fa-brands fa-instagram"></i>"</a>
        <a
          class="icon"
          href="https://www.facebook.com/Learning-languages-1726380900949320"
        >
          <i class="fa-brands fa-square-facebook"></i>
          <a
            class="icon"
            href="https://www.linkedin.com/in/maria-elena-flores-diaz-87a85a14a/"
          >
            <i class="fa-brands fa-linkedin"></i>"</a
          >
          <a
            class="icon"
            href="https://wa.me/541133377588?text=Hola%20necesito%20información"
          >
            <i class="fa-brands fa-square-whatsapp"></i>"</a
          >
        </a>
      </div>
    </footer>
  `,
  styles: [],
})
export class FooterComponent {}
