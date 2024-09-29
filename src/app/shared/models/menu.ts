import { SafeHtml } from "@angular/platform-browser";

export interface IMenuItem {
    title?: string;
    icon?: SafeHtml;
    url?: string;
    children?: IMenuItem[];
}