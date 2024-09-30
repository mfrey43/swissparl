import type { DeferredContent } from "@odata2ts/odata-core";

export interface MemberParty {
  ID: number;
  Language: string;
  PartyNumber: number;
  PartyName: string | null;
  PersonNumber: number;
  PersonIdCode: number | null;
  FirstName: string | null;
  LastName: string | null;
  GenderAsString: string;
  PartyFunction: string | null;
  Modified: string | null;
  PartyAbbreviation: string | null;
  Parties: Party | DeferredContent;
  MembersCouncil: MemberCouncil | DeferredContent;
}

export interface Party {
  ID: number;
  Language: string;
  PartyNumber: number;
  PartyName: string | null;
  StartDate: string;
  EndDate: string | null;
  Modified: string | null;
  PartyAbbreviation: string | null;
  MembersParty: MemberParty[] | DeferredContent;
}

export interface Person {
  ID: number;
  Language: string;
  PersonNumber: number;
  PersonIdCode: number | null;
  Title: number | null;
  TitleText: string | null;
  LastName: string | null;
  GenderAsString: string;
  DateOfBirth: string | null;
  DateOfDeath: string | null;
  MaritalStatus: number | null;
  MaritalStatusText: string | null;
  PlaceOfBirthCity: string | null;
  PlaceOfBirthCanton: string | null;
  Modified: string | null;
  FirstName: string | null;
  OfficialName: string | null;
  MilitaryRank: number | null;
  MilitaryRankText: string | null;
  NativeLanguage: string | null;
  NumberOfChildren: number | null;
  PersonAddresses: PersonAddress[] | DeferredContent;
  PersonCommunications: PersonCommunication[] | DeferredContent;
  PersonInterests: PersonInterest[] | DeferredContent;
  Citizenships: Citizenship[] | DeferredContent;
  MembersCouncil: MemberCouncil | DeferredContent;
  PersonOccupations: PersonOccupation[] | DeferredContent;
  PersonEmployees: PersonEmployee[] | DeferredContent;
}

export interface PersonAddress {
  ID: string;
  Language: string;
  Modified: string | null;
  PersonNumber: number | null;
  AddressType: number | null;
  AddressTypeName: string | null;
  IsPublic: boolean;
  AddressLine1: string;
  AddressLine2: string | null;
  AddressLine3: string | null;
  City: string | null;
  CantonName: string | null;
  Comments: string | null;
  CantonNumber: number | null;
  Postcode: string | null;
  CantonAbbreviation: string | null;
  Persons: Person | DeferredContent;
}

export interface PersonCommunication {
  ID: string;
  Language: string;
  PersonNumber: number;
  Address: string | null;
  CommunicationType: number | null;
  CommunicationTypeText: string | null;
  Modified: string | null;
  Persons: Person | DeferredContent;
}

export interface PersonInterest {
  ID: string;
  Language: string;
  OrganizationType: number | null;
  OrganizationTypeText: string | null;
  OrganizationTypeShortText: string | null;
  FunctionInAgency: number | null;
  FunctionInAgencyText: string | null;
  FunctionInAgencyShortText: string | null;
  Agency: string;
  PersonNumber: number;
  Modified: string | null;
  InterestType: number | null;
  InterestTypeText: string | null;
  InterestTypeShortText: string | null;
  FirstName: string | null;
  LastName: string | null;
  InterestName: string;
  SortOrder: number | null;
  Paid: boolean;
  Persons: Person | DeferredContent;
}

export interface Session {
  ID: number;
  Language: string;
  SessionNumber: number;
  SessionName: string | null;
  Abbreviation: string | null;
  StartDate: string;
  EndDate: string;
  Title: string | null;
  Type: number | null;
  TypeName: string | null;
  Modified: string | null;
  LegislativePeriodNumber: number;
  Meetings: Meeting[] | DeferredContent;
  LegislativePeriods: LegislativePeriod | DeferredContent;
  Businesses: Business[] | DeferredContent;
  Votes: Vote[] | DeferredContent;
}

export interface Committee {
  ID: number;
  Language: string;
  CommitteeNumber: number;
  MainCommitteeNumber: number | null;
  SubCommitteeNumber: number;
  CommitteeName: string | null;
  Abbreviation: string | null;
  Abbreviation1: string | null;
  Abbreviation2: string | null;
  Council: number;
  CouncilName: string | null;
  Modified: string | null;
  CommitteeType: number;
  CommitteeTypeName: string | null;
  CommitteeTypeAbbreviation: string | null;
  CouncilAbbreviation: string | null;
  DisplayType: number;
  MembersCommittee: MemberCommittee[] | DeferredContent;
  BusinessRoles: BusinessRole[] | DeferredContent;
}

export interface MemberCommittee {
  ID: string;
  Language: string;
  CommitteeNumber: number;
  PersonNumber: number;
  PersonIdCode: number | null;
  CommitteeFunction: number | null;
  CommitteeFunctionName: string | null;
  FirstName: string | null;
  LastName: string | null;
  GenderAsString: string;
  PartyNumber: number | null;
  PartyName: string | null;
  Council: number;
  CouncilName: string | null;
  Canton: number | null;
  CantonName: string | null;
  Modified: string | null;
  ParlGroupNumber: number | null;
  ParlGroupName: string | null;
  ParlGroupAbbreviation: string | null;
  ParlGroupCode: string | null;
  PartyAbbreviation: string | null;
  CouncilAbbreviation: string | null;
  CantonAbbreviation: string | null;
  CommitteeName: string | null;
  Abbreviation: string | null;
  Abbreviation1: string | null;
  Abbreviation2: string | null;
  CommitteeType: number;
  CommitteeTypeName: string | null;
  CommitteeTypeAbbreviation: string | null;
  Committees: Committee | DeferredContent;
  MembersCouncil: MemberCouncil | DeferredContent;
}

export interface Canton {
  ID: number;
  Language: string;
  CantonNumber: number;
  CantonName: string | null;
  CantonAbbreviation: string | null;
  BusinessRoles: BusinessRole[] | DeferredContent;
}

export interface Council {
  ID: number;
  Language: string;
  CouncilName: string | null;
  CouncilAbbreviation: string | null;
  Modified: string | null;
  Businesses: Business[] | DeferredContent;
  Businesses2: Business[] | DeferredContent;
}

export interface Objective {
  ID: string;
  Language: string;
  PublicationDate: string;
  ReferenceType: number | null;
  ReferenceTypeName: string | null;
  ReferenceText: string | null;
  PublicationType: number;
  PublicationTypeName: string | null;
  PublicationText: string | null;
  PublicationVolume: string | null;
  PublicationYear: string | null;
  PublicationNumber: string | null;
  IsOldPublicationFormat: boolean;
  Modified: string | null;
  IdBusiness: string;
  IdBill: string;
  BusinessNumber: number | null;
  BusinessShortNumber: string | null;
  BillNumber: number;
  BusinessType: number;
  BusinessTypeName: string | null;
  BusinessTypeAbbreviation: string | null;
  PublicationTypeAbbreviation: string | null;
  ReferendumDeadline: string | null;
  Bills: Bill | DeferredContent;
}

export interface Resolution {
  ID: string;
  Language: string;
  ResolutionNumber: number;
  ResolutionDate: string;
  ResolutionId: number | null;
  ResolutionText: string | null;
  Council: number | null;
  CouncilName: string | null;
  Category: number | null;
  CategoryName: string | null;
  CommitteeType: number | null;
  CommitteeName: string | null;
  Modified: string | null;
  IdBill: string;
  CouncilAbbreviation: string | null;
  CommitteeAbbreviation: string | null;
  CommitteeAbbreviation1: string | null;
  CommitteeAbbreviation2: string | null;
  Committee: number | null;
  Bills: Bill | DeferredContent;
}

export interface Publication {
  ID: string;
  Language: string;
  PublicationType: number;
  PublicationTypeName: string | null;
  SortOrder: number | null;
  IsOldFormat: boolean;
  Title: string | null;
  Page: string | null;
  Volume: string | null;
  Year: string | null;
  Modified: string | null;
  BusinessNumber: number | null;
  BusinessShortNumber: string | null;
  PublicationTypeAbbreviation: string | null;
  Businesses: Business | DeferredContent;
}

export interface External {
  ID: string;
  Language: string;
  Name: string | null;
  Modified: string | null;
  BusinessRoles: BusinessRole[] | DeferredContent;
}

export interface Meeting {
  ID: string;
  Language: string;
  MeetingNumber: number;
  IdSession: number | null;
  SessionNumber: number | null;
  SessionName: string | null;
  Council: number | null;
  CouncilName: string | null;
  CouncilAbbreviation: string | null;
  Date: string | null;
  Begin: string;
  Modified: string;
  LegislativePeriodNumber: number | null;
  PublicationStatus: string;
  MeetingOrderText: string | null;
  SortOrder: number;
  Location: string;
  Sessions: Session | DeferredContent;
  Subjects: Subject[] | DeferredContent;
}

export interface Subject {
  ID: string;
  Language: string;
  IdMeeting: string;
  VerbalixOid: number;
  SortOrder: number;
  Modified: string;
  Meetings: Meeting | DeferredContent;
  SubjectsBusiness: SubjectBusiness[] | DeferredContent;
  Transcripts: Transcript[] | DeferredContent;
}

export interface Citizenship {
  ID: string;
  Language: string;
  PersonNumber: number | null;
  PostCode: string | null;
  City: string | null;
  CantonName: string | null;
  CantonAbbreviation: string | null;
  Modified: string | null;
  Persons: Person | DeferredContent;
  MembersCouncil: MemberCouncil | DeferredContent;
}

export interface Preconsultation {
  ID: string;
  Language: string;
  IdBill: string | null;
  BillNumber: number | null;
  BusinessNumber: number | null;
  BusinessShortNumber: string | null;
  BusinessTitle: string | null;
  CommitteeNumber: number | null;
  CommitteeName: string | null;
  CommitteeDisplayType: number;
  Abbreviation: string | null;
  Abbreviation1: string | null;
  Abbreviation2: string | null;
  PreconsultationDate: string;
  TreatmentCategory: string | null;
  Modified: string | null;
  BusinessType: number;
  BusinessTypeName: string | null;
  BusinessTypeAbbreviation: string | null;
  Businesses: Business | DeferredContent;
  Bills: Bill | DeferredContent;
}

export interface Bill {
  ID: string;
  Language: string;
  IdBusiness: string | null;
  BusinessNumber: number | null;
  BusinessShortNumber: string | null;
  BusinessType: number | null;
  BusinessTypeName: string | null;
  BusinessTypeAbbreviation: string | null;
  Title: string | null;
  BillNumber: number;
  BillType: number | null;
  BillTypeName: string | null;
  BusinessStatus: number | null;
  BusinessStatusText: string | null;
  BusinessStatusDate: string | null;
  Modified: string | null;
  SubmissionDate: string | null;
  Businesses: Business | DeferredContent;
  BillStates: BillStatus[] | DeferredContent;
  BillLinks: BillLink[] | DeferredContent;
  Objectives: Objective[] | DeferredContent;
  Preconsultations: Preconsultation[] | DeferredContent;
  Resolutions: Resolution[] | DeferredContent;
  Rapporteurs: Rapporteur[] | DeferredContent;
}

export interface BillLink {
  ID: string;
  IdBill: string;
  LinkText: string;
  LinkUrl: string;
  Language: string;
  Modified: string | null;
  LinkTypeId: number | null;
  LinkType: string | null;
  StartDate: string;
  Bills: Bill | DeferredContent;
}

export interface BillStatus {
  ID: string;
  IdBill: string;
  Status: number | null;
  StatusText: string | null;
  Council: number | null;
  CouncilName: string | null;
  CouncilAbbreviation: string | null;
  Category: number | null;
  CategoryName: string | null;
  CommitteeType: number | null;
  CommitteeName: string | null;
  CommitteeAbbreviation: string | null;
  CommitteeAbbreviation1: string | null;
  CommitteeAbbreviation2: string | null;
  Language: string;
  Modified: string | null;
  Bills: Bill | DeferredContent;
}

export interface Business {
  ID: number;
  Language: string;
  BusinessShortNumber: string | null;
  BusinessType: number;
  BusinessTypeName: string | null;
  BusinessTypeAbbreviation: string | null;
  Title: string | null;
  Description: string | null;
  InitialSituation: string | null;
  Proceedings: string | null;
  DraftText: string | null;
  SubmittedText: string | null;
  ReasonText: string | null;
  DocumentationText: string | null;
  MotionText: string | null;
  FederalCouncilResponseText: string | null;
  FederalCouncilProposal: number | null;
  FederalCouncilProposalText: string | null;
  FederalCouncilProposalDate: string | null;
  SubmittedBy: string | null;
  BusinessStatus: number;
  BusinessStatusText: string | null;
  BusinessStatusDate: string | null;
  ResponsibleDepartment: number | null;
  ResponsibleDepartmentName: string | null;
  ResponsibleDepartmentAbbreviation: string | null;
  IsLeadingDepartment: boolean | null;
  Tags: string | null;
  Category: string | null;
  Modified: string | null;
  SubmissionDate: string | null;
  SubmissionCouncil: number | null;
  SubmissionCouncilName: string | null;
  SubmissionCouncilAbbreviation: string | null;
  SubmissionSession: number | null;
  SubmissionLegislativePeriod: number | null;
  FirstCouncil1: number | null;
  FirstCouncil1Name: string | null;
  FirstCouncil1Abbreviation: string | null;
  FirstCouncil2: number | null;
  FirstCouncil2Name: string | null;
  FirstCouncil2Abbreviation: string | null;
  TagNames: string | null;
  BusinessResponsibilities: BusinessResponsibility[] | DeferredContent;
  RelatedBusinesses: RelatedBusiness[] | DeferredContent;
  BusinessRoles: BusinessRole[] | DeferredContent;
  Publications: Publication[] | DeferredContent;
  LegislativePeriods: LegislativePeriod | DeferredContent;
  Sessions: Session | DeferredContent;
  Preconsultations: Preconsultation[] | DeferredContent;
  Bills: Bill[] | DeferredContent;
  Councils: Council | null | DeferredContent;
  BusinessTypes: BusinessType | DeferredContent;
  Votes: Vote[] | DeferredContent;
  SubjectsBusiness: SubjectBusiness[] | DeferredContent;
  BusinessStates: BusinessStatus[] | DeferredContent;
  Council: Council | null | DeferredContent;
  Transcripts: Transcript[] | DeferredContent;
}

export interface BusinessResponsibility {
  ID: string;
  Language: string;
  BusinessNumber: number | null;
  DepartmentNumber: number;
  DepartmentName: string | null;
  DepartmentAbbreviation: string | null;
  IsLeading: boolean;
  Modified: string | null;
  BillNumber: number;
  Businesses: Business | DeferredContent;
}

export interface BusinessRole {
  ID: string;
  Language: string;
  Role: number | null;
  RoleName: string | null;
  BusinessNumber: number | null;
  IdExternal: string | null;
  ParlGroupNumber: number | null;
  CantonNumber: number | null;
  CommitteeNumber: number | null;
  MemberCouncilNumber: number | null;
  ReturnType: number | null;
  Modified: string | null;
  BusinessShortNumber: string | null;
  BusinessTitle: string | null;
  BusinessSubmissionDate: string | null;
  BusinessType: number;
  BusinessTypeName: string | null;
  BusinessTypeAbbreviation: string | null;
  MembersCouncil: MemberCouncil | DeferredContent;
  ParlGroups: ParlGroup | DeferredContent;
  Businesses: Business | DeferredContent;
  Cantons: Canton | DeferredContent;
  Externals: External | DeferredContent;
  Committees: Committee | null | DeferredContent;
}

export interface LegislativePeriod {
  ID: number;
  Language: string;
  LegislativePeriodNumber: number;
  LegislativePeriodName: string | null;
  LegislativePeriodAbbreviation: string | null;
  StartDate: string;
  EndDate: string;
  Modified: string | null;
  Businesses: Business[] | DeferredContent;
  Sessions: Session[] | DeferredContent;
  Votes: Vote[] | DeferredContent;
}

export interface MemberCouncil {
  ID: number;
  Language: string;
  IdPredecessor: string | null;
  PersonNumber: number;
  PersonIdCode: number | null;
  Active: boolean | null;
  FirstName: string | null;
  LastName: string | null;
  GenderAsString: string;
  Canton: number | null;
  CantonName: string | null;
  CantonAbbreviation: string | null;
  Council: number | null;
  CouncilName: string | null;
  CouncilAbbreviation: string | null;
  ParlGroupNumber: number | null;
  ParlGroupName: string | null;
  ParlGroupAbbreviation: string | null;
  ParlGroupFunction: number | null;
  ParlGroupFunctionText: string | null;
  Party: number | null;
  PartyName: string | null;
  PartyAbbreviation: string | null;
  MilitaryRank: number | null;
  MilitaryRankText: string | null;
  MaritalStatus: number | null;
  MaritalStatusText: string | null;
  Nationality: string | null;
  BirthPlace_City: string | null;
  BirthPlace_Canton: string | null;
  Mandates: string | null;
  AdditionalMandate: string | null;
  AdditionalActivity: string | null;
  OfficialName: string | null;
  DateJoining: string;
  DateLeaving: string | null;
  DateElection: string;
  DateOath: string;
  DateResignation: string | null;
  Modified: string | null;
  NumberOfChildren: number | null;
  Citizenship: string | null;
  DateOfBirth: string | null;
  DateOfDeath: string | null;
  MembersParty: MemberParty[] | DeferredContent;
  Persons: Person[] | DeferredContent;
  MembersParlGroup: MemberParlGroup[] | DeferredContent;
  MembersCommittee: MemberCommittee[] | DeferredContent;
  BusinessRoles: BusinessRole[] | DeferredContent;
  Citizenships: Citizenship[] | DeferredContent;
  MembersCommitteeHistory: MemberCommitteeHistory[] | DeferredContent;
  MemberCouncilHistories: MemberCouncilHistory[] | DeferredContent;
  Votings: Voting[] | DeferredContent;
  Transcripts: Transcript[] | DeferredContent;
}

export interface MemberParlGroup {
  ID: number;
  Language: string;
  PersonNumber: number;
  PersonIdCode: number | null;
  FirstName: string | null;
  LastName: string | null;
  OfficialName: string | null;
  GenderAsString: string;
  PartyNumber: number | null;
  PartyName: string | null;
  PartyAbbreviation: string | null;
  CantonNumber: number | null;
  CantonName: string | null;
  CantonAbbreviation: string | null;
  ParlGroupNumber: number;
  ParlGroupName: string | null;
  ParlGroupAbbreviation: string | null;
  ParlGroupFunction: number | null;
  ParlGroupFunctionName: string | null;
  CouncilNumber: number;
  CouncilName: string | null;
  CouncilAbbreviation: string | null;
  Modified: string | null;
  MembersCouncil: MemberCouncil | DeferredContent;
  ParlGroups: ParlGroup | DeferredContent;
}

export interface ParlGroup {
  ID: number;
  Language: string;
  ParlGroupNumber: number;
  IsActive: boolean;
  ParlGroupCode: string | null;
  ParlGroupName: string | null;
  ParlGroupAbbreviation: string | null;
  NameUsedSince: string | null;
  Modified: string | null;
  ParlGroupColour: string | null;
  MembersParlGroup: MemberParlGroup[] | DeferredContent;
  BusinessRoles: BusinessRole[] | DeferredContent;
}

export interface PersonOccupation {
  ID: string;
  Language: string;
  PersonNumber: number;
  Occupation: number | null;
  OccupationName: string | null;
  StartDate: string;
  EndDate: string | null;
  Modified: string | null;
  Employer: string | null;
  JobTitle: string | null;
  Persons: Person | DeferredContent;
}

export interface RelatedBusiness {
  ID: string;
  Language: string;
  BusinessNumber: number | null;
  BusinessTitle: string | null;
  BusinessShortNumber: string | null;
  RelatedBusinessNumber: number | null;
  RelatedBusinessShortNumber: string | null;
  RelatedBusinessTitle: string | null;
  PriorityCode: string | null;
  Modified: string | null;
  RelatedBusinessType: number;
  RelatedBusinessTypeName: string | null;
  RelatedBusinessTypeAbbreviation: string | null;
  Businesses: Business | DeferredContent;
}

export interface BusinessStatus {
  ID: string;
  Language: string;
  BusinessNumber: number | null;
  BusinessStatusId: number;
  BusinessStatusName: string;
  BusinessStatusDate: string;
  IsMotionInSecondCouncil: boolean | null;
  NewKey: number | null;
  Modified: string | null;
  Business: Business | DeferredContent;
}

export interface BusinessType {
  ID: number;
  BusinessTypeName: string | null;
  BusinessTypeAbbreviation: string | null;
  Language: string;
  Modified: string | null;
  Businesses: Business[] | DeferredContent;
}

export interface MemberCouncilHistory {
  ID: string;
  Language: string;
  IdPredecessor: string | null;
  PersonNumber: number;
  PersonIdCode: number | null;
  Active: boolean | null;
  FirstName: string | null;
  LastName: string | null;
  GenderAsString: string;
  Canton: number | null;
  CantonName: string | null;
  CantonAbbreviation: string | null;
  Council: number | null;
  CouncilName: string | null;
  CouncilAbbreviation: string | null;
  ParlGroupNumber: number | null;
  ParlGroupName: string | null;
  ParlGroupAbbreviation: string | null;
  ParlGroupFunction: number | null;
  ParlGroupFunctionText: string | null;
  Party: number | null;
  PartyName: string | null;
  PartyAbbreviation: string | null;
  MilitaryRank: number | null;
  MilitaryRankText: string | null;
  MaritalStatus: number | null;
  MaritalStatusText: string | null;
  Nationality: string | null;
  BirthPlace_City: string | null;
  BirthPlace_Canton: string | null;
  Mandates: string | null;
  AdditionalMandate: string | null;
  AdditionalActivity: string | null;
  OfficialName: string | null;
  DateJoining: string;
  DateLeaving: string | null;
  DateElection: string;
  DateOath: string;
  DateResignation: string | null;
  Modified: string | null;
  Citizenship: string | null;
  DateOfBirth: string | null;
  DateOfDeath: string | null;
  MembersCouncil: MemberCouncil | DeferredContent;
}

export interface MemberCommitteeHistory {
  ID: string;
  Language: string;
  PersonNumber: number;
  PersonIdCode: number | null;
  FirstName: string | null;
  LastName: string | null;
  GenderAsString: string;
  CommitteeNumber: number | null;
  CommitteeName: string | null;
  Abbreviation: string | null;
  Abbreviation1: string | null;
  Abbreviation2: string | null;
  CommitteeFunction: number | null;
  CommitteeFunctionName: string | null;
  DateJoining: string | null;
  DateLeaving: string | null;
  ParlGroupNumber: number | null;
  ParlGroupName: string | null;
  ParlGroupAbbreviation: string | null;
  ParlGroupCode: string | null;
  PartyNumber: number | null;
  PartyName: string | null;
  PartyAbbreviation: string | null;
  Council: number | null;
  CouncilName: string | null;
  CouncilAbbreviation: string | null;
  Canton: number | null;
  CantonName: string | null;
  CantonAbbreviation: string | null;
  Modified: string | null;
  MembersCouncil: MemberCouncil | DeferredContent;
}

export interface Vote {
  ID: number;
  Language: string;
  RegistrationNumber: number;
  BusinessNumber: number | null;
  BusinessShortNumber: string | null;
  BusinessTitle: string | null;
  BusinessAuthor: string | null;
  BillNumber: number | null;
  BillTitle: string | null;
  IdLegislativePeriod: number | null;
  IdSession: number | null;
  SessionName: string | null;
  Subject: string | null;
  MeaningYes: string | null;
  MeaningNo: string | null;
  VoteEnd: string | null;
  VoteEndWithTimezone: string | null;
  Votings: Voting[] | DeferredContent;
  Businesses: Business | DeferredContent;
  LegislativePeriods: LegislativePeriod | DeferredContent;
  Sessions: Session | DeferredContent;
}

export interface Voting {
  ID: number;
  Language: string;
  IdVote: number;
  RegistrationNumber: number;
  PersonNumber: number | null;
  FirstName: string | null;
  LastName: string | null;
  Canton: string | null;
  CantonName: string | null;
  ParlGroupCode: string | null;
  ParlGroupColour: string | null;
  ParlGroupName: string | null;
  ParlGroupNameAbbreviation: string | null;
  Decision: number | null;
  DecisionText: string | null;
  BusinessNumber: number | null;
  BusinessShortNumber: string | null;
  BusinessTitle: string | null;
  BillTitle: string | null;
  IdLegislativePeriod: number | null;
  IdSession: number | null;
  VoteEnd: string | null;
  MeaningYes: string | null;
  MeaningNo: string | null;
  CantonID: number | null;
  Subject: string | null;
  VoteEndWithTimezone: string | null;
  Votes: Vote | DeferredContent;
  MembersCouncil: MemberCouncil | DeferredContent;
}

export interface SubjectBusiness {
  IdSubject: string;
  BusinessNumber: number;
  Language: string;
  BusinessShortNumber: string | null;
  Title: string | null;
  SortOrder: number;
  PublishedNotes: string | null;
  Modified: string;
  TitleDE: string | null;
  TitleFR: string | null;
  TitleIT: string | null;
  Subjects: Subject | DeferredContent;
  Businesses: Business | DeferredContent;
}

export interface Transcript {
  ID: string;
  Language: string;
  IdSubject: string | null;
  VoteId: string | null;
  PersonNumber: number | null;
  Type: number;
  Text: string | null;
  MeetingCouncilAbbreviation: string | null;
  MeetingDate: string | null;
  MeetingVerbalixOid: number | null;
  IdSession: string | null;
  SpeakerFirstName: string | null;
  SpeakerLastName: string | null;
  SpeakerFullName: string | null;
  SpeakerFunction: string | null;
  CouncilId: number | null;
  CouncilName: string | null;
  CantonId: number | null;
  CantonName: string | null;
  CantonAbbreviation: string | null;
  ParlGroupName: string | null;
  ParlGroupAbbreviation: string | null;
  SortOrder: number;
  Start: string | null;
  End: string | null;
  Function: string | null;
  DisplaySpeaker: boolean | null;
  LanguageOfText: string | null;
  Modified: string;
  StartTimeWithTimezone: string | null;
  EndTimeWithTimezone: string | null;
  VoteBusinessNumber: number | null;
  VoteBusinessShortNumber: string | null;
  VoteBusinessTitle: string | null;
  Subjects: Subject | DeferredContent;
  MembersCouncil: MemberCouncil | DeferredContent;
  Businesses: Business | null | DeferredContent;
}

export interface ParlGroupHistory {
  ID: string;
  Language: string;
  ParlGroupNumber: number;
  ParlGroupColour: string | null;
  IsActive: number;
  ParlGroupName: string | null;
  ParlGroupAbbreviation: string | null;
  NameUsedSince: string;
  Modified: string | null;
}

export interface Tags {
  ID: number;
  Language: string;
  TagName: string | null;
}

export interface SeatOrganisationNr {
  ID: number;
  SeatNumber: number;
  PersonNumber: number | null;
  PersonIdCode: number | null;
  FirstName: string | null;
  LastName: string | null;
  CantonAbbreviation: string | null;
  ParlGroupNumber: number | null;
  ParlGroupName: string | null;
  Language: string;
}

export interface PersonEmployee {
  ID: string;
  Language: string;
  PersonNumber: number;
  LastName: string;
  FirstName: string;
  Employer: string;
  JobTitle: string;
  Modified: string | null;
  Persons: Person | DeferredContent;
}

export interface Rapporteur {
  ID: string;
  BusinessNumber: number | null;
  BusinessShortNumber: string | null;
  BusinessTitle: string | null;
  IdBill: string;
  CommitteeNumber: number | null;
  MemberCouncilNumber: number | null;
  LastName: string | null;
  FirstName: string | null;
  Language: string;
  Modified: string | null;
  Bill: Bill | DeferredContent;
}

export interface Mutation {
  ID: string;
  LastName: string | null;
  FirstName: string | null;
  PersonNumber: number | null;
  ReplacementLastName: string | null;
  ReplacementFirstName: string | null;
  ReplacementPersonNumber: number;
  Canton: string | null;
  ParlGroupCode: string | null;
  CouncilCode: number;
  Council: string | null;
  ReplacementDate: string;
  ExitDate: string | null;
  ExitReasonText: string | null;
  FreeTextExitReasonText: string | null;
  Language: string;
  LegislativePeriodNumber: number;
  LegislativePeriodStartDate: string;
  LegislativePeriodEndDate: string;
}

export interface SeatOrganisationSr {
  ID: number;
  SeatNumber: number;
  PersonNumber: number | null;
  PersonIdCode: number | null;
  FirstName: string | null;
  LastName: string | null;
  CantonAbbreviation: string | null;
  ParlGroupNumber: number | null;
  ParlGroupName: string | null;
  Language: string;
}
