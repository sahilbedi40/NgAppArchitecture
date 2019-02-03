import {BaseModel} from "../base/base-model.model";

export class Account extends BaseModel {
    public id: number;
    public accountNumber: string;
    public externalAccountNumber: string;
    public customerNumber: string;
    public branchName: string;
    public acctType: string;
}