import { WidgetRef } from "../../models/widget.model";


export interface DropEvent<T> {
    widget: WidgetRef;
    args: T
}