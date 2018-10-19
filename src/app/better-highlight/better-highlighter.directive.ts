import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlighter]'
})
export class BetterHighlighterDirective implements OnInit{

  constructor(private elementRef:ElementRef) { }
  ngOnInit()
  {
    //this.elementRef.nativeElement.style.backgroundColor='blue';
  }
  @HostListener('mouseenter') mouseovr(eventData:Event)
  {
    console.log(eventData);
    this.elementRef.nativeElement.style.backgroundColor='blue';

  }
  @HostListener('mouseleave') mouseleave(eventData:Event)
  {
    console.log(eventData);
    this.elementRef.nativeElement.style.backgroundColor='grey';

  }
}
