import { Directive, ElementRef, Renderer2, AfterViewInit, Input } from '@angular/core';

@Directive({
    selector: '[background-image]',
})

export class BackgroundImageDirective implements AfterViewInit {
    @Input('background-image') imageURL: string;

    constructor(
        private el: ElementRef<HTMLDivElement>,
        private renderer: Renderer2,
    ) { }

    ngAfterViewInit() {
        this.renderer.setStyle(this.el.nativeElement, 'background-image', 'url("' + this.imageURL + '")');
        // this.renderer.setStyle(this.el.nativeElement, 'background', '');
    }
}