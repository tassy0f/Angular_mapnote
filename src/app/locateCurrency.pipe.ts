import { Pipe, PipeTransform  } from "@angular/core";

@Pipe({
    name: 'locateCurrency'
})
export class LocateCurrencyPipe implements PipeTransform {
    transform(value: number, locate: string): string {
        return value.toLocaleString(locate);
    }
}