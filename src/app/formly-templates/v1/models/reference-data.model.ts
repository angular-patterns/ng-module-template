import { Guid } from 'guid-typescript';
import { ReferenceDataItem } from './reference-data-item.model';

export class ReferenceData {
    public id: Guid;
    public code: string;
    public description: string;
    public referenceDataItems: ReferenceDataItem[];
}

