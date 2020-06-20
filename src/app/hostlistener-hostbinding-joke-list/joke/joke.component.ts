import {
    Component,
    Directive,
    Renderer,
    ElementRef,
    NgModule,
    HostListener,
    HostBinding,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

export class Joke {
  public setup: string;
  public punchline: string;
  public hide: boolean;

  constructor(setup: string, punchline: string) {
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
  }

  toggle() {
    this.hide = !this.hide;
  }
}
@Directive({
  selector: "[ccCardHover]"
})
export class CardHoverDirective {
   @HostBinding('class.card-outline-primary')private ishovering: boolean;

  constructor(private el: ElementRef,
              private renderer: Renderer) {
    // renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
  }

  @HostListener('mouseover', ["'dali'", '$event']) onMouseOver(v, v1) {
    console.log("test")
    let part = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setElementStyle(part, 'display', 'block');
    this.ishovering = true;
  }

  @HostListener('mouseout') onMouseOut() {
    let part = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setElementStyle(part, 'display', 'none');
    this.ishovering = false;
  }
}

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent  {

  @Input('joke') data: Joke;

}
