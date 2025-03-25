using { my as db } from '../db/schema';

service EmployeeService @(restrict: [
    { grant: ['READ'], to: ['employee', 'manager'] },
    { grant: ['CREATE', 'UPDATE'], to: ['manager'] }
]) {
    entity Employees as projection on db.Employees;
}
