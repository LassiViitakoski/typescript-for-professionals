export type SubmitRequest = {
  transactionId: string;
  personal: {
    title: string;
    driverFirstName: string;
    driverMiddleName: string;
    driverLastName: string;
    email: string;
    phone: string;
    previousAliases: {
      firstName: string;
      middleName: string;
      lastName: string;
    }[];
    gender: string;
    dob: string;
    birthCountry: string;
  };
  driver: {
    licenceNumber: string;
    expiryDate: string;
    hasLicenceForMin6Months: boolean;
    hasTerritoryLicence: boolean;
    territoryLicenceStates?: string[];
    hasDriverAccreditation: boolean;
    driverAccreditationNumber?: string;
    vehicleClasses: string[];
    tandc: true;
  };
  consent: {
    understandInformation: boolean;
    informationTrue: boolean;
    informationConsidered: boolean;
    medicalVicRoadsPoliceCheckConsent: boolean;
    consentToDisclosing: boolean;
    indemnifyAgainstLiability: boolean;
    acicCheckConsent: boolean;
    childrenCheckConsent: boolean;
    personalInfoCheckConsent: boolean;
    trafficOffences: boolean;
    assessAcicCheckConsent: boolean;
    criminalOffences: boolean;
    licenceCancelledSuspended: boolean;
    sexOffendersReporting: boolean;
    ausWorkRights: boolean;
    additionalInformation: string;
  };
  payment: {
    creditCardToken: string;
  };
};

// prettier-ignore
export type PreviousAliasRequest = SubmitRequest['personal']['previousAliases'][0];
export type PaymentRequest = SubmitRequest['payment'];

export const getPayment = (): PaymentRequest => {
  return {
    creditCardToken: '12352334325234562465',
  };
};

export const getPreviousAliases = (): PreviousAliasRequest[] => {
  return [
    { firstName: 'Lassi', middleName: 'Elmeri', lastName: 'Viitakoski' },
    { firstName: 'Keijo', middleName: 'Einari', lastName: 'Huntunen' },
  ];
};
