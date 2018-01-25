import { elementClass } from "@angular/core/src/render3/instructions";

export class ErrorInfo {
    id: number;
    name: string;
    message: string;
    stack: string;
    status: number;
    statusText: string;
    url: string;
    headers: string;
    createdOn: Date;
}