import { Guid } from 'guid-typescript';

export class HighSchool {
    public id: Guid;
    public highSchoolCode: number;
    public highSchoolName: string;
    public apartmentBoxNumber: string;
    public streetAddress: string;
    public cityTown: string;
    public provinceStateId: Guid;
    public countryId: Guid;
    public postalZip: string;
}

