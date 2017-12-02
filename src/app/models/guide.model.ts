import { Rule } from "./rule.model";

export interface Guide {
    title: string,
    description: string,
    rules: Rule[]
}