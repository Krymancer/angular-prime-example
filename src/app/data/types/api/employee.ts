export default interface Employee
{
    employeeID: string;
    status: 'I' | 'A';
    adUserID: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
}