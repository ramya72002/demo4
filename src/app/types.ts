// types.ts (create this file in your project)
export interface EmployeeRecord {
    _id: string;
    Sl: number;
    Uan: string;
    'Member ID': string;
    Name: string;
    Gender: string;
    Dob: string;
    Doj: string;
    "Father's/Husband's Name": string;
    Relation: string;
    'Marital Status': string;
    Mobile: string;
    'Email ID': string;
    Aadhar: string;
    Pan: string;
    Bank: string;
    Nomination: string;
  }
  export interface Job {
    _id: string;
    jobId: string;
    jobOpening: string;
    clientName: string;
    targetDate: string;
    industry: string;
    numberOfPositions: number;
    jobDescription: string;
    clientManger: string;
    contactName: string;
    location: string;
    province: string;
    postalCode: string;
    accountManager?: string;
    clientManager: string;
    dateOpened: string;
    jobType: string;
    jobOpeningStatus: string;
    workExperience: string;
    requiredSkills: string;
    salary: string;
    revenuePerPosition: string;
  }
  export interface JobPosting {
    id: string;
    jobOpening: string;
  }
  export type CandidateStage = 'new' | 'inreview' | 'available' | 'engaged' | 'offered' | 'hired' | 'rejected';

  export interface Candidate {
  candidateId: string;
  name: string;
  email: string;
  phone: string;
  gender: string;
  location: string;
  state: string;
  experience: string;
  currentCTC: string;
  expectedCTC: string;
  noticePeriod: string;
  domain: string;
  skills: string[];
  linkedIn: string;
  candidateStage: CandidateStage;
  jobOpening:string;
  clientName:string;
  candidateDate:string;
}

export interface ContactPerson {
  name: string;
  email?: string;
  phone?: string;
}

export interface Client {
  agency: string;
  clientManager: string;
  clientName: string;
  email: string;
  phone: string;
  address: string;
  industry: string;
  contactPerson1: ContactPerson;
  contactPerson2: ContactPerson;
  clientId: string;
  clientOnBoardingDate: string;
  clientStatus:string;
}
