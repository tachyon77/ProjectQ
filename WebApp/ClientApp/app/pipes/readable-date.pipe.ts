import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'readableDate' })
export class ReadableDatePipe implements PipeTransform {
    transform(utcDate: Date): string {

        let utcEvent = new Date(utcDate);
        let utcNow = new Date();

        var msec = utcNow.getTime() - utcEvent.getTime();
        var hh = Math.floor(msec / 1000 / 60 / 60);
        msec -= hh * 1000 * 60 * 60;
        var mm = Math.floor(msec / 1000 / 60);
        msec -= mm * 1000 * 60;
        var ss = Math.floor(msec / 1000);
        msec -= ss * 1000;

        if (hh < 24) {
            if (hh < 1) {
                if (mm < 1) {
                    if (ss < 30) {
                        return "just now";
                    }
                    return "a few seconds ago";
                } else if (mm < 2) {
                    return "about a minute ago"
                } else {
                    return "about " + mm + " minutes ago";
                }
            } else if (hh < 2) {
                return "about an hour ago";
            } else {
                "about " + hh + " hours ago";
            }
            return "about " + hh + " hours ago";
        } else if (hh < 48) {
            return "about a day ago";
        } else {
            var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            return "on " + utcEvent.toLocaleDateString("en-US", options);
        }
    }
}