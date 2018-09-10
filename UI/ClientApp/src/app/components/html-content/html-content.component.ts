import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'

@Component({
    selector: 'html-content',
    templateUrl: './html-content.component.html',
    styleUrls: ['./html-content.component.css'],
})

export class HtmlContentComponent {
    safeHtmlContent: SafeHtml | undefined;

    @Input()
    set htmlString(html: string) {
        this.safeHtmlContent =
            this.sanitizer.bypassSecurityTrustHtml(html);
    }

    constructor(
        private sanitizer: DomSanitizer
    ) {
    }
}


