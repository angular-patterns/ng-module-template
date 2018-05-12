import { WidgetSettings } from "../../dynamic/shared/widget-settings.model";
import { Widget } from "../../dynamic/shared/widget.model";

export class TableSettings extends WidgetSettings {
    id: string;
    rows: number;
    cols: number;
    widgets: any;
}