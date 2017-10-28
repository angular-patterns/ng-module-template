import { UserWidget } from "./user-widget.model";

export interface UserPortal {
    key: string,
    widgets: UserWidget[]
}