import { Component } from '@angular/core';

import { TextSearchService } from '../../services/textsearch.service'

@Component({
    selector: 'text-search',
    templateUrl: './textsearch.component.html',
    styleUrls: ['./textsearch.component.css'],
})
export class TextSearchComponent {

    searchResults: string;

    constructor(
        private textSearchService: TextSearchService) {
    }

    onSearchPhraseChanged(event: KeyboardEvent) {
        let phrase = (<HTMLInputElement>event.target).value;
        this.textSearchService.search(phrase)
            .subscribe((results) => {
              this.searchResults = results; 
            });
    }
}
