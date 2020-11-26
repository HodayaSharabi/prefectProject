import { PackageAddress } from './PackageAddress';

export class Packages {
    packageIdPac: number = 0;
    collectionAddressPac: string;
    cfloorPac: number;
    destinationPac: number;
    dfloorPac: number;
    firstNamePac: string;
    lastNamePac: string;
    emailPac: string;
    senderPhonePac: string;
    invoiceNamePac: string;
    phoneReceivesShippingPac: string;
    companyNamePac: string;
    fullNamePac: string;
    duringSendingPac: string;
    weigthPac: number = 0;
    dateNowPac: Date;
    descriptionPac: string;
    commendsPac: string;
    statusPac: string;
    packageAdress: PackageAddress = new PackageAddress();
}