namespace my;

entity Employees {
    key ID          : Integer;
    name           : String(100);
    position       : String(50);
    department     : String(50);
    salary         : Decimal(10,2);
    createdAt      : Timestamp;
    updatedAt      : Timestamp;
}