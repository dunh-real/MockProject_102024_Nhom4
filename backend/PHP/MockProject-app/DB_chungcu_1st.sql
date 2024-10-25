-- use master
-- go
-- drop database if exists ApartmentManagement
-- go
create database ApartmentManagement
go
use ApartmentManagement
CREATE TABLE Roles (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(100) NOT NULL
);

CREATE TABLE Functionality (
    id INT PRIMARY KEY IDENTITY(1,1),
    name_Function NVARCHAR(100) NOT NULL,
    describe NVARCHAR(255)
);

CREATE TABLE ServiceProvider (
    id INT PRIMARY KEY IDENTITY(1,1),
    name_SP NVARCHAR(100),
    contact_info NVARCHAR(255)
);

CREATE TABLE Building (
    id INT PRIMARY KEY IDENTITY(1,1),
    name_build NVARCHAR(100),
    location NVARCHAR(255),
    number_of_floors INT
);

CREATE TABLE ClassTraining (
    id INT PRIMARY KEY IDENTITY(1,1),
    topic_name NVARCHAR(100),
    description NVARCHAR(255)
);

CREATE TABLE Notify (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(100),
    date DATE,
    detail NVARCHAR(255)
);

CREATE TABLE Amenity (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(100),
    description NVARCHAR(255)
);

CREATE TABLE SupplyCompany (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(100),
    address NVARCHAR(255),
    contact_info NVARCHAR(255)
);

CREATE TABLE RoleFunction (
    role_id INT,
    function_id INT,
    PRIMARY KEY (role_id, function_id),
    FOREIGN KEY (role_id) REFERENCES Roles(id),
    FOREIGN KEY (function_id) REFERENCES Functionality(id)
);

CREATE TABLE Service (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(100),
    description NVARCHAR(255),
    provider_id INT,
    FOREIGN KEY (provider_id) REFERENCES ServiceProvider(id)
);

CREATE TABLE Admin (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(100),
    birth_date DATE,
    email NVARCHAR(100),
    phone_number NVARCHAR(20),
    avatar NVARCHAR(255),
    username NVARCHAR(100),
    password NVARCHAR(100),
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES Roles(id)
);

CREATE TABLE Landlord (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(100),
    birth_date DATE,
    email NVARCHAR(100),
    phone_number NVARCHAR(20),
    avatar NVARCHAR(255),
    username NVARCHAR(100),
    password NVARCHAR(100),
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES Roles(id)
);

CREATE TABLE Employee (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(100),
    birth_date DATE,
    email NVARCHAR(100),
    phone_number NVARCHAR(20),
    avatar NVARCHAR(255) NULL,
    username NVARCHAR(100),
    password NVARCHAR(100),
    role_id INT,
	status BIT,
    FOREIGN KEY (role_id) REFERENCES Roles(id)
);

CREATE TABLE Resident (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(100),
    birth_date DATE,
    email NVARCHAR(100),
    phone_number NVARCHAR(20),
    avatar NVARCHAR(255),
    username NVARCHAR(100),
    password NVARCHAR(100),
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES Roles(id)
);

CREATE TABLE Apartment (
    id INT PRIMARY KEY IDENTITY(1,1),
    building_id INT,
    unit_number NVARCHAR(50),
    floor_number INT,
    status BIT,
    FOREIGN KEY (building_id) REFERENCES Building(id)
);

CREATE TABLE Utility (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(100),
    price_rate DECIMAL(10, 2),
    description NVARCHAR(255),
    company_id INT,
    FOREIGN KEY (company_id) REFERENCES SupplyCompany(id)
);

CREATE TABLE TrainingSchedule (
    id INT PRIMARY KEY IDENTITY(1,1),
    class_training_id INT,
    date DATE,
    location NVARCHAR(100),
    time TIME,
    employee_id INT,
    FOREIGN KEY (employee_id) REFERENCES Employee(id),
    FOREIGN KEY (class_training_id) REFERENCES ClassTraining(id)
);

CREATE TABLE DayOff (
    id INT PRIMARY KEY IDENTITY(1,1),
    start_date DATE,
    end_date DATE,
    reason NVARCHAR(255),
    type NVARCHAR(50),
    is_approved int,
    status BIT,
    employee_id INT,
    FOREIGN KEY (employee_id) REFERENCES Employee(id)
);

CREATE TABLE EmployeeContract (
    id INT PRIMARY KEY IDENTITY(1,1),
    start_date DATE,
    end_date DATE,
	salary DECIMAL(10, 2),
    position NVARCHAR(100),
    employee_id INT,
    FOREIGN KEY (employee_id) REFERENCES Employee(id)
);

CREATE TABLE NotifyAccept (
    notify_id INT,
    employee_id INT,
    status BIT,
    PRIMARY KEY (notify_id, employee_id),
    FOREIGN KEY (notify_id) REFERENCES Notify(id),
    FOREIGN KEY (employee_id) REFERENCES Employee(id)
);

CREATE TABLE TimeKeeping (
    id INT PRIMARY KEY IDENTITY(1,1),
    date DATE,
    check_in_time TIME,
    check_out_time TIME,
    employee_id INT,
    FOREIGN KEY (employee_id) REFERENCES Employee(id)
);


CREATE TABLE WorkSchedule (
    id INT PRIMARY KEY IDENTITY(1,1),
    employee_id INT,
    date DATE,
    start_time TIME,
    end_time TIME,
    shift_type NVARCHAR(50),
    building_id INT,
    FOREIGN KEY (employee_id) REFERENCES Employee(id),
    FOREIGN KEY (building_id) REFERENCES Building(id)
);

CREATE TABLE ResidentUtility (
    resident_id INT,
    utility_id INT,
    type NVARCHAR(50),
    status BIT,
    PRIMARY KEY (resident_id, utility_id),
    FOREIGN KEY (resident_id) REFERENCES Resident(id),
    FOREIGN KEY (utility_id) REFERENCES Utility(id)
);

CREATE TABLE ServiceContract (
    building_id INT,
    service_id INT,
    signing_date DATE,
    expiration_date DATE,
    price DECIMAL(10, 2),
    FOREIGN KEY (building_id) REFERENCES Building(id),
    FOREIGN KEY (service_id) REFERENCES Service(id)
);

CREATE TABLE LeaseContract (
    id INT PRIMARY KEY IDENTITY(1,1),
    start_date DATE,
    end_date DATE,
    rent_price DECIMAL(10, 2),
    status BIT,
    apartment_id INT,
    resident_id INT,
    employee_id INT,
    FOREIGN KEY (apartment_id) REFERENCES Apartment(id),
    FOREIGN KEY (resident_id) REFERENCES Employee(id),
    FOREIGN KEY (employee_id) REFERENCES Employee(id)
);

CREATE TABLE ResidentAmenity (
    resident_id INT,
    amenity_id INT,
    type NVARCHAR(50),
    price DECIMAL(10, 2),
    status BIT,
    PRIMARY KEY (resident_id, amenity_id),
    FOREIGN KEY (resident_id) REFERENCES Resident(id),
    FOREIGN KEY (amenity_id) REFERENCES Amenity(id)
);

CREATE TABLE Fine (
    id INT PRIMARY KEY IDENTITY(1,1),
    date DATE,
    fee DECIMAL(10, 2),
    reason NVARCHAR(255),
    status BIT,
    resident_id INT,
    FOREIGN KEY (resident_id) REFERENCES Resident(id)
);

CREATE TABLE Equipment (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(100),
    description NVARCHAR(255),
    buying_date DATE,
    price DECIMAL(10, 2),
    status BIT,
    warranty_period NVARCHAR(50),
    apartment_id INT,
    company_id INT,
    FOREIGN KEY (apartment_id) REFERENCES Apartment(id),
    FOREIGN KEY (company_id) REFERENCES ServiceProvider(id)
);

CREATE TABLE MaintenanceRequest (
    id INT PRIMARY KEY IDENTITY(1,1),
    date DATE,
    description NVARCHAR(255),
    status NVARCHAR(50),
    resident_id INT,
    employee_id INT,
    FOREIGN KEY (resident_id) REFERENCES Resident(id),
    FOREIGN KEY (employee_id) REFERENCES Employee(id)
);

CREATE TABLE Complaint (
    id INT PRIMARY KEY IDENTITY(1,1),
    date DATE,
    description NVARCHAR(255),
    status NVARCHAR(255),
    resident_id INT,
    employee_id INT,
	request_type NVARCHAR(255),
	solution NVARCHAR(255),
    FOREIGN KEY (resident_id) REFERENCES Resident(id),
    FOREIGN KEY (employee_id) REFERENCES Employee(id)
);

CREATE TABLE Candidate (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(100),
    email NVARCHAR(100),
    position_applied NVARCHAR(100),
    phone NVARCHAR(20),
    birthday DATE,
    education NVARCHAR(255),
    experience NVARCHAR(255),
    employee_id INT NULL,
    FOREIGN KEY (employee_id) REFERENCES Employee(id)
);

CREATE TABLE CandidateCV (
    id INT PRIMARY KEY IDENTITY(1,1),
    candidate_id INT,
    interviewer_id INT,
    status NVARCHAR(50),
    application_at DATE,
    FOREIGN KEY (candidate_id) REFERENCES Candidate(id),
    FOREIGN KEY (interviewer_id) REFERENCES Employee(id)
);

CREATE TABLE Payment (
    id INT PRIMARY KEY IDENTITY(1,1),
    date DATE,
    amount DECIMAL(10, 2),
    method NVARCHAR(50),
    resident_id INT,
    utility_id INT,
    amenity_id INT,
    fine_id INT,
    lease_contract_id INT,
    FOREIGN KEY (resident_id) REFERENCES Resident(id),
    FOREIGN KEY (utility_id) REFERENCES Utility(id),
    FOREIGN KEY (amenity_id) REFERENCES Amenity(id),
    FOREIGN KEY (fine_id) REFERENCES Fine(id),
    FOREIGN KEY (lease_contract_id) REFERENCES LeaseContract(id)
);
GO

INSERT INTO Roles (name) VALUES
('Admin'),
('Landlord'),
('Apartment Manager'),
('Staff'),
('Resident');
GO
INSERT INTO Functionality (name_Function, describe) VALUES
-- admin
('Account management', 'Manage employee accounts'),
('Candidate management', 'Manage employee accounts'),
('Employee contract management', 'Employee rental contract management'),
('Training management', 'Employee training schedule management'),
('Timekeeping management', 'Employee working time management'),
-- resident
('Edit profile', 'edit your profile information'),
('Maintenance request', 'send maintenance requests to employees'),
('Register for utilities', 'can register for utilities as needed'),
('View fees', 'View list of payment fees, penalties, etc.'),
-- employee, manager
('Lease Management', 'Manage lease agreements with tenants'),
('Rent Collection', 'Collect rent and track tenant payments'),
('Process requests', 'Processing tenant maintenance requests'),
('Building Security', 'Monitor and ensure building security'),
('Apartment management', 'Managing apartments in buildings'),
('Equipment management', 'Managing building equipment'),
('Amenity Management', 'Oversee tenant access to building amenities'),
('Tenant Screening', 'Screen potential tenants before leasing'),
('Legal Services', 'Handle legal matters and disputes'),
('Event Management', 'Coordinate community events and activities'),
('Contractor Management', 'Manage contracts with service providers'),
('Incident Management', 'Incident Management in Buildings'),
('Work Schedule & day off','View Work Schedule & schedule off work');
GO
INSERT INTO ServiceProvider (name_SP, contact_info) VALUES
('Super Clean Services', 'cleaning@superclean.com, +1 555 123 4567'),
('SafeGuard Security', 'info@safeguard.com, +1 555 987 6543'),
('ProTech Maintenance', 'support@protech.com, +1 555 789 1234'),
('Apex Landscaping', 'landscaping@apex.com, +1 555 321 4567'),
('Elite Plumbing Co.', 'service@eliteplumbing.com, +1 555 654 9871'),
('Green Energy HVAC', 'support@greenhvac.com, +1 555 111 2233'),
('LiftMaster Elevators', 'service@liftmaster.com, +1 555 222 3344'),
('SkyNet Internet', 'help@skynet.com, +1 555 333 4455'),
('Lightning Electrical', 'contact@lightningelectric.com, +1 555 444 5566'),
('PestFree Exterminators', 'pestcontrol@pestfree.com, +1 555 555 6677');

INSERT INTO Building (name_build, location, number_of_floors) VALUES
('Central Park Apartments', '123 5th Ave, New York, NY', 10),
('Ocean Breeze Condos', '456 Beach Blvd, Miami, FL', 10),
('Skyline Towers', '789 City Center Dr, Los Angeles, CA', 10),
('Riverfront Residences', '101 River St, Chicago, IL', 10),
('Mountain View Apartments', '202 Valley Rd, Denver, CO', 8);

GO
INSERT INTO ClassTraining (topic_name, description) VALUES
('Tenant Relations', 'Improving communication and relationships with tenants'),
('Fair Housing Laws', 'Overview of fair housing regulations in the USA'),
('Maintenance Best Practices', 'Effective property maintenance strategies'),
('Emergency Response Training', 'How to handle building emergencies and disasters'),
('Energy Efficiency', 'Implementing energy-saving practices in properties'),
('Conflict Resolution', 'Dealing with disputes between tenants or staff'),
('Security Protocols', 'Best practices for ensuring building security'),
('First Aid and CPR', 'Basic life-saving skills for emergencies'),
('Rent Collection Strategies', 'Methods for collecting rent efficiently'),
('Legal Compliance', 'Ensuring property management follows legal regulations');

GO
INSERT INTO Notify (name, date, detail) VALUES
('Annual Fire Drill', '2024-11-01', 'Mandatory fire drill for all residents and staff'),
('Holiday Party', '2024-12-15', 'Join us for a holiday celebration in the community hall'),
('Pool Maintenance', '2024-10-20', 'Scheduled pool maintenance, the pool will be closed for a day'),
('New Gym Equipment', '2024-11-05', 'We have installed new equipment in the fitness center'),
('Parking Lot Cleaning', '2024-11-10', 'The parking lot will be cleaned, please move your vehicles'),
('Elevator Inspection', '2024-11-07', 'Scheduled inspection of all elevators in the building'),
('Window Cleaning', '2024-10-25', 'Window cleaning service will take place on October 25th'),
('Security System Upgrade', '2024-11-18', 'We are upgrading the security system for better protection'),
('Water Outage', '2024-11-02', 'Planned water outage for repairs from 9 AM to 1 PM'),
('Power Outage Notice', '2024-11-03', 'Scheduled power outage for maintenance work');
GO
INSERT INTO Amenity (name, description) VALUES
('Swimming Pool', 'Outdoor pool with sun deck and lounge chairs'),
('Fitness Center', 'State-of-the-art gym with cardio and weight equipment'),
('Rooftop Lounge', 'Rooftop lounge area with city views'),
('Community Hall', 'Large hall available for resident events and gatherings'),
('Parking Garage', 'Secure parking garage with resident-only access'),
('Bicycle Storage', 'Secure indoor bicycle storage facility'),
('Pet Park', 'Outdoor park area for pets to play'),
('Sauna', 'Relaxing sauna for residents'),
('Business Center', 'Business center with computers and meeting rooms'),
('Children�s Playground', 'Outdoor playground for children');
GO
INSERT INTO SupplyCompany (name, address, contact_info) VALUES
('Urban Supplies Inc.', '100 Broadway, New York, NY', 'info@urbansupplies.com, +1 555 321 6547'),
('Eco HVAC Systems', '200 Green Rd, Miami, FL', 'contact@ecohvac.com, +1 555 789 2345'),
('Platinum Security', '300 Safe Blvd, Los Angeles, CA', 'support@platinumsecurity.com, +1 555 654 7890'),
('Greenfield Landscaping', '400 Park Ave, Chicago, IL', 'landscaping@greenfield.com, +1 555 123 9876'),
('CleanTech Services', '500 Ocean Dr, Miami, FL', 'service@cleantech.com, +1 555 321 6548'),
('Delta Electrical Solutions', '600 City Center Dr, San Francisco, CA', 'contact@deltaelectric.com, +1 555 789 6541'),
('BlueSky Internet', '700 Network St, Boston, MA', 'support@blueskyinternet.com, +1 555 987 6542'),
('AquaPlumb Services', '800 River Rd, Dallas, TX', 'info@aquaplumb.com, +1 555 123 4568'),
('SecureLift Elevators', '900 Tower St, Washington, DC', 'support@securelift.com, +1 555 654 7891'),
('EarthWise Waste Management', '1000 Recycle Ln, Seattle, WA', 'contact@earthwise.com, +1 555 987 6543');
GO
--hào
INSERT INTO RoleFunction (role_id, function_id) 
VALUES 
(1, 1),(1, 2),(1, 3),(1, 4),(1, 5),
(2, 1),(2, 2),(2, 3),(2, 4),(2, 5),
(3, 6),(3, 10),(3, 11),(3, 12),(3, 13),(3, 14),(3, 15),(3, 16),(3, 17),(3, 18),(3, 19),(3, 20),
(4, 6),(4, 10),(4, 12),(4, 21),(4, 22),
(5, 6),(5, 7),(5, 8),(5, 9);

INSERT INTO Service (name, description, provider_id) 
VALUES
('Cleaning Service', 'Daily building cleaning and waste removal', 1),  
('Security Service', '24/7 security monitoring', 2),  
('Maintenance Service', 'General maintenance and repairs', 3), 
('Landscaping Service', 'Garden maintenance and landscaping', 4),  
('Plumbing Service', 'Emergency plumbing and repair services', 5),  
('HVAC Service', 'Heating and air conditioning maintenance', 6),  
('Elevator Maintenance', 'Elevator repair and upkeep', 7),  
('Internet Service', 'High-speed internet for residents', 8),  
('Electrical Service', 'Electrical repairs and maintenance', 9),  
('Pest Control', 'Extermination and pest prevention services', 10);  
GO
INSERT INTO Admin (name, birth_date, email, phone_number, avatar, username, password, role_id) 
VALUES 
('John Doe', '1985-05-14', 'johndoe@example.com', '+1 555 123 4567', 'avatar1.png', 'admin_hao', 'password123', 1),  
('Jane Smith', '1990-07-22', 'janesmith@example.com', '+1 555 234 5678', 'avatar2.png', 'admin_janesmith', 'password456', 1);  

INSERT INTO Landlord (name, birth_date, email, phone_number, avatar, username, password, role_id)
VALUES 
('Alice Johnson', '1970-02-01', 'alicejohnson@example.com', '+1 555 345 6789', 'avatar3.png', 'landlord_hao', 'passalice', 2),  
('Bob Williams', '1965-11-30', 'bobwilliams@example.com', '+1 555 456 7890', 'avatar4.png', 'landlord_bob', 'passbob', 2); 
GO
INSERT INTO Employee (name, birth_date, email, phone_number, avatar, username, password, role_id, status)
VALUES 
('Carlos Diaz', '1995-03-15', 'carlosdiaz@example.com', '+1 555 567 8901', 'avatar5.png', 'employee_carlos', 'passcarlos', 3, 1),  
('Jane Smith', '1988-08-25', 'jane.smith@example.com', '+234-567-8901', 'avatar9.png', 'employee_michael', 'passwordmike', 2, 1),  
('Alice Johnson', '1985-11-30', 'alice.j@example.com', '+345-678-9012', 'avatar6.png', 'employee_emily', 'passemily', 3, 1),  
('Jane Smith', '1988-08-25', 'jane.smith@example.com', '+234-567-8901', 'avatar9.png', 'employee_michael', 'passwordmike', 2, 1), 

('Sarah Wilson', '1991-11-22', 'sarahwilson@example.com', '+1 555 345 6789', 'avatar10.png', 'employee_sarah', 'passwordsarah', 4, 1), 

('Daniel Taylor', '1985-05-10', 'danieltaylor@example.com', '+1 555 456 7890', 'avatar11.png', 'employee_daniel', 'passworddan', 4, 1),  
('Laura White', '1993-03-28', 'laurawhite@example.com', '+1 555 567 8901', 'avatar12.png', 'employee_laura', 'passwordlaura', 4, 1),  
('James King', '1990-02-14', 'jamesking@example.com', '+1 555 678 9012', 'avatar13.png', 'employee_james', 'passwordking', 4, 1),  
('John Smith', '1985-07-12', 'john.smith@example.com', '+1 555 123 4567', 'avatar1.png', 'employee_john', 'password123', 4, 1),  
('Robert Johnson', '1987-11-18', 'robert.johnson@example.com', '+1 555 345 6789', 'avatar3.png', 'employee_robert', 'password789', 3, 1),  
('Jessica Lee', '1992-03-14', 'jessica.lee@example.com', '+1 555 456 7890', 'avatar4.png', 'employee_jessica', 'passwordjess', 4, 1),  
('David Martin', '1989-08-07', 'david.martin@example.com', '+1 555 567 8901', 'avatar5.png', 'employee_david', 'passworddave', 4, 1),  
('Susan Clark', '1983-05-22', 'susan.clark@example.com', '+1 555 678 9012', 'avatar6.png', 'employee_susan', 'passwordsue', 3, 1),  
('William Scott', '1995-09-30', 'william.scott@example.com', '+1 555 789 0123', 'avatar7.png', 'employee_william', 'passwordwill', 4, 1),
('Hao Smith', '1999-06-22', 'hao.smith@example.com', '+1 555 876 1209', 'avatar6.png', 'lengochao', 'lengochao', 4, 1),  
('LeNgoc Scott', '1997-01-30', 'lengoc.scott@example.com', '+1 555 987 3012', 'avatar7.png', 'matkhaula', 'password123', 4, 1);
GO
INSERT INTO Resident (name, birth_date, email, phone_number, avatar, username, password, role_id)
VALUES 
('Frank Miller', '1982-08-10', 'frankmiller@example.com', '+1 555 789 0123', 'avatar7.png', 'resident_frank', 'passfrank', 5),  
('Grace Lee', '1993-01-25', 'gracelee@example.com', '+1 555 890 1234', 'avatar8.png', 'resident_grace', 'passgrace', 5),  
('Olivia Johnson', '1992-09-19', 'oliviajohnson@example.com', '+1 555 789 0123', 'avatar14.png', 'resident_olivia', 'passwordolivia', 5), 
('Ethan Moore', '1980-04-03', 'ethanmoore@example.com', '+1 555 890 1234', 'avatar15.png', 'resident_ethan', 'passwordethan', 5),  
('Sophia Martinez', '1995-12-12', 'sophiamartinez@example.com', '+1 555 901 2345', 'avatar16.png', 'resident_sophia', 'passwordsophia', 5),  
('Liam Anderson', '1983-08-08', 'liamanderson@example.com', '+1 555 012 3456', 'avatar17.png', 'resident_liam', 'passwordliam', 5),  
('Ava Thompson', '1997-11-27', 'avathompson@example.com', '+1 555 123 4567', 'avatar18.png', 'resident_ava', 'passwordava', 5),
('Isabella Hernandez', '1990-07-15', 'isabella.hernandez@example.com', '+1 555 234 5678', 'avatar19.png', 'resident_isabella', 'passwordisabella', 5),  
('Mason Robinson', '1988-11-10', 'mason.robinson@example.com', '+1 555 345 6789', 'avatar20.png', 'resident_mason', 'passwordmason', 5),  
('Charlotte Davis', '1993-05-23', 'charlotte.davis@example.com', '+1 555 456 7890', 'avatar21.png', 'resident_charlotte', 'passwordcharlotte', 5),  
('Noah Williams', '1985-02-17', 'noah.williams@example.com', '+1 555 567 8901', 'avatar22.png', 'resident_noah', 'passwordnoah', 5),  
('Emily Brown', '1991-10-09', 'emily.brown@example.com', '+1 555 678 9012', 'avatar23.png', 'resident_emily', 'passwordemily', 5),  
('Lucas Harris', '1994-03-06', 'lucas.harris@example.com', '+1 555 789 0123', 'avatar24.png', 'resident_lucas', 'passwordlucas', 5);
GO
INSERT INTO Apartment (building_id, unit_number, floor_number, status) VALUES
(1, 'A101', 1, 1),(1, 'A102', 2, 1),(1, 'A201', 2, 0),(1, 'A202', 3, 0),(1, 'A301', 3, 0),(1, 'A302', 4, 0),(1, 'A401', 4, 0),(1, 'A402', 5, 0),
(1, 'A501', 5, 0),(1, 'A502', 6, 0),(1, 'A601', 6, 0),(1, 'A602', 7, 0),(1, 'A701', 7, 0),(1, 'A702', 8, 1),(1, 'A801', 8, 0),(1, 'A802', 9, 0),
(1, 'A901', 9, 1),(1, 'A902', 10, 0), 
(2, 'B101', 1, 1),(2, 'B102', 2, 0),(2, 'B201', 2, 1),(2, 'B202', 3, 0),(2, 'B301', 3, 1),(2, 'B302', 4, 0),(2, 'B401', 4, 0),(2, 'B402', 5, 0),
(2, 'B501', 5, 0),(2, 'B502', 6, 0),(2, 'B601', 6, 0),(2, 'B602', 7, 0),(2, 'B701', 7, 0),(2, 'B702', 8, 0),(2, 'B801', 8, 0),(2, 'B802', 9, 0),
(2, 'B901', 9, 0),(2, 'B902', 10, 0),(2, 'B1001', 10, 0),
(3, 'C101', 1, 1),(3, 'C102', 2, 0),(3, 'C201', 2, 1),(3, 'C202', 3, 0),(3, 'C301', 3, 0),(3, 'C302', 4, 0),(3, 'C401', 4, 1),(3, 'C402', 5, 0),
(3, 'C501', 5, 0),(3, 'C502', 6, 0),(3, 'C601', 6, 0),(3, 'C602', 7, 0),(3, 'C701', 7, 0),(3, 'C702', 8, 0),(3, 'C801', 8, 0),(3, 'C802', 9, 0),
(3, 'C901', 9, 0),(3, 'C902', 10, 0),
(4, 'D101', 1, 1),(4, 'D102', 2, 0),(4, 'D201', 2, 1),(4, 'D202', 3, 0),(4, 'D301', 3, 0),(4, 'D302', 4, 0),(4, 'D401', 4, 0),(4, 'D402', 5, 0),
(4, 'D501', 5, 0),(4, 'D502', 6, 0),(4, 'D601', 6, 0),(4, 'D602', 7, 0),(4, 'D701', 7, 0),(4, 'D702', 8, 0),(4, 'D801', 8, 0),(4, 'D802', 9, 0),
(4, 'D901', 9, 0),(4, 'D902', 10, 0),
(5, 'E101', 1, 0),(5, 'E102', 2, 0),(5, 'E201', 2, 0),(5, 'E202', 3, 1),(5, 'E301', 3, 0),(5, 'E302', 4, 0),(5, 'E401', 4, 0),(5, 'E402', 5, 0),
(5, 'E501', 5, 0),(5, 'E502', 6, 0),(5, 'E601', 6, 0),(5, 'E602', 7, 0),(5, 'E701', 7, 0),(5, 'E702', 8, 0);

GO
--Vy
GO
INSERT INTO Utility (name, price_rate, description, company_id) VALUES 
('Water Supply', 25.00, 'Monthly charge for water supply services.', 1), 
('Heating and Cooling', 150.00, 'HVAC system maintenance and repair.', 2), 
('Security System', 200.00, 'Monthly fee for building security services.', 3), 
('Landscaping', 100.00, 'Monthly landscaping services for the complex.', 4),
('Waste Management', 30.00, 'Monthly charge for waste disposal.', 5),
('Electrical Maintenance', 80.00, 'Monthly electrical maintenance services.', 6),
('Internet Services', 60.00, 'High-speed internet connection.', 7), 
('Plumbing Services', 70.00, 'Monthly plumbing maintenance.', 8), 
('Elevator Maintenance', 90.00, 'Monthly elevator inspection and maintenance.', 9), 
('Recycling Services', 25.00, 'Monthly recycling collection service.', 10); 

--end Vy
GO

INSERT INTO TrainingSchedule (class_training_id, date, location, time, employee_id)
VALUES
-- Tenant Relations
(1, '2024-10-21', 'Room A1', '09:00:00', 1),
(1, '2024-10-21', 'Room A1', '09:00:00', 2),
(1, '2024-10-21', 'Room A1', '09:00:00', 3),
-- Fair Housing Laws
(2, '2024-10-22', 'Room B2', '10:30:00', 4),
(2, '2024-10-22', 'Room B2', '10:30:00', 5),
(2, '2024-10-22', 'Room B2', '10:30:00', 6),
-- Maintenance Best Practices
(3, '2024-10-23', 'Room C3', '13:00:00', 7),
(3, '2024-10-23', 'Room C3', '13:00:00', 8),
(3, '2024-10-23', 'Room C3', '13:00:00', 9),
-- Emergency Response Training
(4, '2024-10-24', 'Room D4', '14:30:00', 10),
(4, '2024-10-24', 'Room D4', '14:30:00', 11),
(4, '2024-10-24', 'Room D4', '14:30:00', 12),
-- Energy Efficiency
(5, '2024-10-25', 'Room E5', '15:00:00', 1),
(5, '2024-10-25', 'Room E5', '15:00:00', 3),
(5, '2024-10-25', 'Room E5', '15:00:00', 4),
-- Conflict Resolution
(6, '2024-10-26', 'Room F6', '11:00:00', 5),
(6, '2024-10-26', 'Room F6', '11:00:00', 6),
(6, '2024-10-26', 'Room F6', '11:00:00', 7),
-- Security Protocols
(7, '2024-10-27', 'Room G7', '12:00:00', 8),
(7, '2024-10-27', 'Room G7', '12:00:00', 9),
(7, '2024-10-27', 'Room G7', '12:00:00', 10),
-- First Aid and CPR
(8, '2024-10-28', 'Room H8', '09:30:00', 11),
(8, '2024-10-28', 'Room H8', '09:30:00', 12),
(8, '2024-10-28', 'Room H8', '09:30:00', 1),
-- Rent Collection Strategies
(9, '2024-10-29', 'Room I9', '10:00:00', 2),
(9, '2024-10-29', 'Room I9', '10:00:00', 3),
(9, '2024-10-29', 'Room I9', '10:00:00', 4),
-- Legal Compliance
(10, '2024-10-30', 'Room J10', '11:30:00', 5),
(10, '2024-10-30', 'Room J10', '11:30:00', 6),
(10, '2024-10-30', 'Room J10', '11:30:00', 7);
--end hào
GO


INSERT INTO DayOff (start_date, end_date, reason, type, is_approved, status, employee_id) VALUES
('2024-11-01', '2024-11-02', 'Family emergency', 'Sick leave', 1, 0, 1),
('2024-11-10', '2024-11-10', 'Doctors appointment', 'Sick leave', 1, 0, 2),
('2024-12-05', '2024-12-08', 'Vacation', 'Sick leave', 2, 0, 3),
('2024-10-15', '2024-10-16', 'Sick leave', 'Sick leave', 0, 0, 1),
('2024-12-20', '2024-12-23', 'Personal leave', 'Sick leave', 0, 0, 5),
('2024-11-12', '2024-11-14', 'Conference', 'Sick leave', 2, 0, 2),
('2024-10-22', '2024-10-22', 'Court appearance', 'Sick leave', 2, 0, 7),
('2024-10-30', '2024-11-01', 'Funeral', 'Sick leave', 1, 1, 8),
('2024-11-18', '2024-11-19', 'Training seminar', 'Sick leave', 1, 1, 9),
('2023-12-01', '2023-12-03', 'Relocation', 'Sick leave', 0, 1, 5);
GO
INSERT INTO EmployeeContract (start_date, end_date,salary, position, employee_id) VALUES
('2024-01-01', '2025-01-01', 1200.00,'Maintenance Staff', 2),
('2023-05-01', '2024-05-01',1500.00, 'Leasing Agent', 15),
('2023-07-15', '2024-07-15',1800.00, 'Security Staff', 14),
('2022-10-10', '2024-10-10', 1500.00,'Concierge', 4),
('2024-09-01', '2025-09-01', 1000.00,'Staff', 5),
('2024-09-01', '2025-10-18',1000.00, 'Staff', 13),
('2024-02-01', '2025-02-01', 1500.00,'Cleaning Crew', 6),
('2024-03-01', '2025-03-01',1500.00, 'Cleaning Crew', 7),
('2024-04-01', '2025-04-01',1700.00, 'Technical staff', 8),
('2024-06-01', '2025-06-01',1600.00, 'Legal Advisor', 11),
('2024-07-01', '2025-07-01',1300.00, 'Customer Service Staff', 10),
('2024-07-01', '2026-08-01',3000.00, 'Event management', 9),
('2024-07-01', '2026-09-01',5000.00, 'Apartment management', 12),
('2024-07-01', '2026-03-01',4000.00, 'Equipment management', 1),
('2024-07-01', '2026-05-01',4000.00, 'Utilities management', 3);
GO
INSERT INTO NotifyAccept (notify_id, employee_id, status) VALUES
(1, 1, 1),
(2, 2, 0),
(3, 3, 1),
(4, 4, 0),
(5, 5, 1),
(6, 6, 0),
(7, 7, 1),
(8, 8, 0),
(9, 9, 1),
(10, 10, 1),
(1, 11, 1),
(2, 12, 0),
(3, 13, 1),
(4, 14, 0),
(5, 15, 1);
Go
INSERT INTO TimeKeeping (date, check_in_time, check_out_time, employee_id) VALUES
('2024-10-15', '08:00', '17:00', 1),
('2024-10-16', '09:00', '18:00', 2),
('2024-10-17', '08:30', '17:30', 3),
('2024-10-18', '07:45', '16:45', 4),
('2024-10-19', '08:00', '17:00', 5),
('2024-10-20', '08:15', '17:15', 6),
('2024-10-21', '08:00', '16:00', 7),
('2024-10-22', '08:30', '17:30', 8),
('2024-10-23', '09:00', '18:00', 9),
('2024-10-24', '08:00', '17:00', 10),
('2024-10-25', '08:00', '18:00', 11),
('2024-10-26', '08:00', '17:30', 12),
('2024-10-27', '08:00', '18:00', 13),
('2024-10-28', '08:00', '17:00', 14),
('2024-10-29', '08:00', '18:00', 15);
GO
INSERT INTO WorkSchedule (employee_id, date, start_time, end_time, shift_type, building_id) VALUES
(1, '2024-10-20', '08:00', '16:00', 'Morning', 1),
(2, '2024-10-21', '16:00', '00:00', 'Evening', 2),
(3, '2024-10-22', '00:00', '08:00', 'Night', 3),
(4, '2024-10-23', '08:00', '16:00', 'Morning', 4),
(5, '2024-10-24', '16:00', '00:00', 'Evening', 5),
(6, '2024-10-25', '00:00', '08:00', 'Night', 1),
(7, '2024-10-26', '08:00', '16:00', 'Morning', 2),
(8, '2024-10-27', '16:00', '00:00', 'Evening', 3),
(9, '2024-10-28', '00:00', '08:00', 'Night', 4),
(10, '2024-10-29', '08:00', '16:00', 'Morning', 1),
(11, '2024-10-30', '16:00', '00:00', 'Evening', 2),
(12, '2024-10-31', '00:00', '08:00', 'Night', 5),
(13, '2024-11-01', '08:00', '16:00', 'Morning', 3),
(14, '2024-11-02', '16:00', '00:00', 'Evening', 5),
(15, '2024-11-03', '00:00', '08:00', 'Night', 4);
GO
INSERT INTO ResidentUtility (resident_id, utility_id, type, status) VALUES   -- 1 Active; 0 Inactive
(1, 1, 'Electricity', 1),(1, 2, 'Water', 1),(1, 3, 'Internet', 0),(1, 4, 'Gas', 1),
(2, 5, 'Cable TV', 0),(2, 1, 'Electricity', 1),(2, 2, 'Water', 1),(2, 3, 'Internet', 1),
(3, 4, 'Gas', 0),(3, 5, 'Cable TV', 1),
(4, 1, 'Electricity', 1),(4, 2, 'Water', 1),(4, 3, 'Internet', 1),(4, 4, 'Gas', 0),
(5, 1, 'Electricity', 0),(5, 2, 'Water', 1),(5, 5, 'Cable TV', 1),(5, 3, 'Internet', 0),
(6, 1, 'Electricity', 1),(6, 4, 'Gas', 1),(6, 5, 'Cable TV', 0),
(7, 2, 'Water', 0),(7, 3, 'Internet', 1),(7, 4, 'Gas', 1),(7, 5, 'Cable TV', 1),
(8, 1, 'Electricity', 1),  (8, 2, 'Water', 1),  (8, 3, 'Internet', 0),  (8, 4, 'Gas', 1),  
(9, 1, 'Electricity', 1),  (9, 2, 'Water', 0),  (9, 3, 'Internet', 1),  (9, 5, 'Cable TV',1),  
(10, 1, 'Electricity', 0),  (10, 2, 'Water', 1),  (10, 4, 'Gas', 0),  (10, 5, 'Cable TV', 1),  
(11, 1, 'Electricity', 1),  (11, 2, 'Water', 1),  (11, 3, 'Internet', 1),  (11, 4, 'Gas', 0),  
(12, 1, 'Electricity', 1),  (12, 2, 'Water', 1),  (12, 3, 'Internet', 0),  (12, 5, 'Cable TV', 1),  
(13, 1, 'Electricity', 1),  (13, 3, 'Internet', 1),  (13, 4, 'Gas', 0),  (13, 5, 'Cable TV', 1);
GO
INSERT INTO ServiceContract (building_id, service_id, signing_date, expiration_date, price) VALUES
(1, 1, '2024-01-01', '2025-01-01', 15000.00),
(2, 2, '2024-03-01', '2025-03-01', 10000.00),
(3, 3, '2024-05-01', '2025-05-01', 20000.00),
(4, 4, '2024-07-01', '2025-07-01', 18000.00),
(5, 5, '2024-09-01', '2025-09-01', 12000.00),
(1, 6, '2024-02-01', '2025-02-01', 16000.00),
(2, 7, '2024-04-01', '2025-04-01', 11000.00),
(3, 8, '2024-06-01', '2025-06-01', 21000.00),
(4, 9, '2024-08-01', '2025-08-01', 19000.00),
(5, 10, '2024-10-01', '2025-10-01', 13000.00);
GO
INSERT INTO LeaseContract (start_date, end_date, rent_price, status, apartment_id, resident_id, employee_id) VALUES  
('2024-01-01', '2025-01-01', 12000.00, 0, 1, 3, 2),    -- 1 Active; 0 Terminated
('2024-02-01', '2025-02-01', 15000.00, 0, 2, 4, 5),
('2024-03-01', '2025-03-01', 18000.00, 1, 14, 4, 8),
('2024-04-01', '2025-04-01', 20000.00, 0, 17, 3, 10),
('2024-05-01', '2025-05-01', 22000.00, 0, 19, 7, 7),
('2024-06-01', '2025-06-01', 25000.00, 0, 21, 6, 6),
('2024-07-01', '2025-07-01', 27000.00, 1, 23, 10, 11),
('2024-08-01', '2025-08-01', 13000.00, 0, 38, 2, 13),
('2024-09-01', '2025-09-01', 16000.00, 0, 40, 9, 4),
('2024-10-01', '2025-10-01', 14000.00, 1, 44, 8, 14),
('2024-02-01', '2025-02-01', 15000.00, 0, 56, 4, 5),
('2024-03-01', '2025-03-01', 18000.00, 1, 58, 4, 6),
('2024-04-01', '2025-04-01', 20000.00, 0, 74, 3, 7);

GO
-- Updated: 19/10/2024
INSERT INTO ResidentAmenity (resident_id, amenity_id, type, price, status) VALUES
(1, 1, 'Gym', 30.00, 1),     --  1 Active; 0 Inactive
(2, 2, 'Pool', 25.00, 1),
(3, 3, 'Sauna', 40.00, 1),
(4, 4, 'Parking', 20.00, 1),
(5, 5, 'Laundry', 15.00, 1),
(6, 1, 'Gym', 30.00, 0),
(7, 2, 'Pool', 25.00, 1),
(8, 3, 'Sauna', 40.00, 0),
(9, 4, 'Parking', 20.00, 1),
(10, 5, 'Laundry', 15.00, 0),
(11, 4, 'Parking', 20.00, 1),
(12, 5, 'Laundry', 15.00, 1),
(13, 1, 'Gym', 30.00, 0);
GO
INSERT INTO Fine (date, fee, reason, status, resident_id) VALUES    -- 1 Paid; 0 Unpaid
('2024-10-01', 50.00, 'Late Payment', 0, 1),
('2024-10-02', 100.00, 'Damage', 1, 2),
('2024-10-03', 75.00, 'Noise Complaint', 0, 3),
('2024-10-04', 200.00, 'Pet Violation', 1, 4),
('2024-10-05', 50.00, 'Unauthorized Guest', 0, 5),
('2024-10-06', 50.00, 'Late Payment', 1, 6),
('2024-10-07', 100.00, 'Damage', 0, 7),
('2024-10-08', 75.00, 'Noise Complaint', 1, 8),
('2024-10-09', 200.00, 'Pet Violation', 0, 9),
('2024-10-10', 50.00, 'Unauthorized Guest', 1, 10),
('2024-10-01', 50.00, 'Late Payment', 0, 11),
('2024-10-01', 50.00, 'Late Payment', 0, 12),
('2024-10-01', 50.00, 'Late Payment', 1, 13);
GO
INSERT INTO Equipment (name, description, buying_date, price, status, warranty_period, apartment_id, company_id) VALUES
('Boiler', 'Hot water supply', '2023-01-10', 500.00, 1, '5 years', 1, 1),    -- 1 Action; 
('Air Conditioner', 'Cooling system', '2023-02-15', 750.00, 1, '3 years', 2, 2),
('Generator', 'Emergency power supply', '2023-03-20', 1200.00, 1, '7 years', 14, 3),
('Washing Machine', 'For public use', '2023-04-25', 300.00, 1, '2 years', 17, 4),
('Dishwasher', 'Kitchen appliance', '2023-05-30', 250.00, 1, '3 years', 19, 5),
('Refrigerator', 'Food storage', '2023-06-05', 600.00, 1, '5 years', 21, 6),
('Microwave', 'Kitchen appliance', '2023-07-10', 100.00, 1, '2 years', 23, 7),
('Television', 'Common area entertainment', '2023-08-15', 800.00, 1, '4 years', 38, 8),
('Fire Extinguisher', 'Safety equipment', '2023-09-20', 50.00, 1, '10 years', 40, 9),
('Gym Equipment', 'Fitness room', '2023-10-25', 1500.00, 1, '5 years', 44, 10),
('Television', 'Common area entertainment', '2023-08-15', 800.00, 1, '4 years', 56, 8),
('Television', 'Common area entertainment', '2023-08-15', 800.00, 1, '4 years', 58, 8),
('Air Conditioner', 'Cooling system', '2023-02-15', 750.00, 1, '3 years', 74, 2);
GO
INSERT INTO MaintenanceRequest (date, description, status, resident_id, employee_id) VALUES
('2024-10-01', 'Leaky faucet in bathroom', 'Pending', 1, 1),
('2024-10-02', 'Broken window lock', 'Resolved', 2, 2),
('2024-10-03', 'AC unit not working', 'In Progress', 3, 3),
('2024-10-04', 'Clogged toilet', 'Pending', 4, 4),
('2024-10-05', 'Electrical short in kitchen', 'Resolved', 5, 5),
('2024-10-06', 'Broken gym equipment', 'In Progress', 6, 6),
('2024-10-07', 'Garage door not opening', 'Pending', 7, 7),
('2024-10-08', 'Smoke detector beeping', 'Resolved', 8, 8),
('2024-10-09', 'Water pooling in laundry room', 'In Progress', 9, 9),
('2024-10-10', 'Elevator maintenance required', 'Pending', 10, 10);
GO
INSERT INTO Complaint (date, description, status, resident_id, employee_id, request_type, solution) VALUES
('2024-10-01', 'Loud music from neighbor','Completed', 1, 1, 'Noise', 'Warn Resident'), 
('2024-10-02', 'Parking space blocked', 'Completed', 2, 2, 'Parking', 'Car Moved'),
('2024-10-03', 'Garbage not picked up', 'Completed', 3, 3, 'Sanitation', 'Schedule Extra Pickup'),
('2024-10-04', 'Water leak in ceiling', 'Completed', 4, 4, 'Maintenance', 'Repaired Leak'),
('2024-10-05', 'Pet off leash','Rejected', 5, 5, 'Pet Policy', 'Warn Resident'),
('2024-10-06', 'Gym equipment broken', 'Rejected', 6, 6, 'Facility', 'Repair Scheduled'),
('2024-10-07', 'Unauthorized guest in building', 'Pending', 7, 7, 'Security', 'Increased Surveillance'),
('2024-10-08', 'Elevator not working', 'Pending', 8, 8, 'Maintenance', 'Repair Technician Called'),
('2024-10-09', 'Smoke smell in hallway', 'Pending', 9, 9, 'Safety', 'Inspect for Fire Hazards'),
('2024-10-10', 'Broken laundry machine', 'Pending', 10, 10, 'Facility', 'Repair Scheduled');
GO
INSERT INTO Candidate (name, email, position_applied, phone, birthday, education, experience, employee_id) VALUES
('John Doe', 'john.doe@example.com', 'Manager', '123-456-7890', '1990-05-15', 'MBA', '5 years in management', null),
('Jane Smith', 'jane.smith@example.com', 'Accountant', '234-567-8901', '1988-08-25', 'Bachelors in Accounting', '3 years in accounting', 2),
('Alice Johnson', 'alice.j@example.com', 'Security Officer', '345-678-9012', '1985-11-30', 'High School Diploma', '10 years in security', 3),
('Bob Brown', 'bob.brown@example.com', 'Maintenance Worker', '456-789-0123', '1992-07-20', 'Associates in Maintenance', '2 years in maintenance', null),
('Carol White', 'carol.white@example.com', 'HR Coordinator', '567-890-1234', '1993-03-15', 'Bachelors in Human Resources', '4 years in HR', null),
('David Green', 'david.green@example.com', 'IT Support', '678-901-2345', '1989-09-05', 'Bachelors in Computer Science', '3 years in IT support', null),
('Eva Black', 'eva.black@example.com', 'Receptionist', '789-012-3456', '1994-12-10', 'High School Diploma', '1 year as a receptionist', null),
('Frank Gray', 'frank.gray@example.com', 'Chef', '890-123-4567', '1987-06-30', 'Culinary Arts Degree', '5 years as a chef', null),
('Gina Red', 'gina.red@example.com', 'Lifeguard', '901-234-5678', '1996-02-14', 'Certified Lifeguard', '2 years as a lifeguard', null),
('Hank Blue', 'hank.blue@example.com', 'Janitor', '012-345-6789', '1991-10-22', 'High School Diploma', '3 years in janitorial services', null);
GO
INSERT INTO CandidateCV (candidate_id, interviewer_id, status, application_at) VALUES
(1, 1, 'Pending', '2024-10-01'),
(2, 2, 'Pass', '2024-10-02'),
(3, 3, 'Pass', '2024-10-03'),
(4, 4, 'Fail', '2024-10-04'),
(5, 5, 'Pending', '2024-10-05'),
(6, 6, 'Accepted', '2024-10-06'),
(7, 7, 'Accepted', '2024-10-07'),
(8, 8, 'Accepted', '2024-10-08'),
(9, 9, 'Pending', '2024-10-09'),
(10, 10, 'Rejected', '2024-10-10');
GO
INSERT INTO Payment (date, amount, method, resident_id, utility_id, amenity_id, fine_id, lease_contract_id) VALUES
('2024-10-01', 1000.00, 'Credit Card', 1, 1, 1, 1, 1),
('2024-10-02', 1500.00, 'Bank Transfer', 2, 2, 2, 2, 2),
('2024-10-03', 750.00, 'Credit Card', 3, 3, 3, 3, 3),
('2024-10-04', 1250.00, 'Bank Transfer', 4, 4, 4, 4, 4),
('2024-10-05', 600.00, 'Credit Card', 5, 5, 5, 5, 5),
('2024-10-06', 1100.00, 'Bank Transfer', 6, 6, 6, 6, 6),
('2024-10-07', 1300.00, 'Credit Card', 7, 7, 7, 7, 7),
('2024-10-08', 800.00, 'Bank Transfer', 8, 8, 8, 8, 8),
('2024-10-09', 950.00, 'Credit Card', 9, 9, 9, 9, 9),
('2024-10-10', 700.00, 'Bank Transfer', 10, 10, 10, 10, 10),
('2024-10-03', 750.00, 'Credit Card', 11, 3, 6, 11, 9),
('2024-10-03', 750.00, 'Credit Card', 12, 4, 7, 12, 10),
('2024-10-03', 750.00, 'Credit Card', 13, 5, 8, 13, 1);
GO



SELECT * FROM LeaseContract;
SELECT * FROM LeaseContract WHERE start_date = '2024-12-01' AND apartment_id = 5;
SELECT * FROM Roles;
SELECT * FROM EmployeeContract;
-- Auth
select * from Employee; 
select * from Admin;
select * from Resident;
select * from Landlord;

