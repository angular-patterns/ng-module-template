import { Guid } from 'guid-typescript';

export class ReferenceDataItem {
    public id: Guid;
    public code: string;
    public displayValue: string;
    public displayOrder: number;
}
