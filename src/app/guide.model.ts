import { Rule } from "./rule.model";

export interface Guide {
    title: string,
    source: string,
    description: string,
    rules: Rule[]
}