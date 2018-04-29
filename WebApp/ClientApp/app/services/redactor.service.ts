﻿import { Inject, Injectable } from '@angular/core';

@Injectable()
export class RedactorService {

    redactedColor = 'rgb(211, 211, 211)';

    constructor() {
    }

    public getRedactedHtml(html: string): string {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, "text/html") as Document;
        var root = doc.body as HTMLElement;
        this.removeRedacted(root);
        return root.innerHTML;
    }

    private removeRedacted(root: HTMLElement): void {

        var done = false;
        while (!done) {
            done = true;
            for (var i = 0; i < root.children.length; i++) {
                var child = root.children.item(i) as HTMLElement;
                let color = child.style.backgroundColor;
                if (color == this.redactedColor) {
                    var e = document.createElement("span");
                    e.innerHTML = "&nbsp;&nbsp;_____&nbsp;&nbsp;";
                    root.replaceChild(e, child);
                    done = false;
                    break;
                }
            }
        }

        for (var i = 0; i < root.children.length; i++) {
            var child = root.children.item(i) as HTMLElement;
            this.removeRedacted(child);
        }
    }
}