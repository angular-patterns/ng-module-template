import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-embedded-frame',
  templateUrl: './embedded-frame.component.html',
  styleUrls: ['./embedded-frame.component.css']
})
export class EmbeddedFrameComponent implements OnInit {
  @ViewChild('iframe') iframe;
  @Input() url: string;
  styles: string;
  safeUrl: SafeUrl;

  constructor(private sanitizer : DomSanitizer) { 
  }

  onLoad() {
    var iframe = this.iframe.nativeElement;
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';

    
    var stylesElement = document.createElement("style");
     stylesElement.innerHTML = this.styles;

    iframe.contentWindow.document.head.appendChild(stylesElement);
  }


  ngOnInit() {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    this.styles = "body {  }"

  }

}
