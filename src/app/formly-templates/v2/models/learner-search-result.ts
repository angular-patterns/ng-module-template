import { Guid } from 'guid-typescript';

export class LearnerSearchResult {

    FirstName: string;
    LastName: string;
    BirthDate: Date;

    SIN: number;
    ASN: number;
    GenderID: Guid;
    LearnerID: Guid;
    LearnerVersionId: Guid;

    CitizenshipStatusID: Guid;
    AboriginalHeritageStatusID: Guid;

    ApartmentBoxNumber: string;
    StreetAddress: string;
    ProvinceStateID: string;
    CityTown: string;
    PostalZipCode: string;
    CountryID: string;

    PhoneNumber: string;
    MobileNumber: string;
    FaxNumber: string;
    EmailAddress: string;
}
