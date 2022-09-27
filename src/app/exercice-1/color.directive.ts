import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appColor]",
})
export class ColorDirective {
  @HostListener("window:keydown.ArrowDown", ["$event"])
  handleKeyDown(event: KeyboardEvent) {
    this.el.nativeElement.style.color = "red";
  }

  @HostListener("window:keydown.ArrowUp", ["$event"])
  handleKeyUp(event: KeyboardEvent) {
    this.el.nativeElement.style.color = "green";
  }

  @HostListener("window:keydown.ArrowLeft", ["$event"])
  handleKeyLeft(event: KeyboardEvent) {
    this.el.nativeElement.style.color = "blue";
  }

  @HostListener("window:keydown.ArrowRight", ["$event"])
  handleKeyRight(event: KeyboardEvent) {
    this.el.nativeElement.style.color = "yellow";
  }

  constructor(private el: ElementRef<HTMLLIElement>) {}
}

// function HostListener(arg0: string, arg1: string[]) {
//   throw new Error("Function not implemented.");
// }
