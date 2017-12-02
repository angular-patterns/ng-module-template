import { Tip } from "./tip.model";

export interface Rule {
    title: string,
    source: string,
    code: string,
    description: string,
    tips: Tip[]

}