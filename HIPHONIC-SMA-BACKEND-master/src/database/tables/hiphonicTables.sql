USE HIPHONICDB

CREATE TABLE tbl_user (
    UserID VARCHAR(255) PRIMARY KEY,
    Username VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    TagName VARCHAR(50),
    Location VARCHAR(100),
    welcomed BIT Default 0,
    isDeleted BIT DEFAULT 0,
    isSend BIT DEFAULT 0,
);

INSERT INTO tbl_user (userID, Username, Email, Password, TagName, Location)
VALUES
    ('1', 'JohnDoe', 'john.doe@example.com', 'hashed_password_1', 'Explorer', 'CityA'),
    ('2', 'AliceSmith', 'alice.smith@example.com', 'hashed_password_2', 'Adventurer', 'CityB'),
    ('3', 'BobJohnson', 'bob.johnson@example.com', 'hashed_password_3', 'Traveler', 'CityC'),
    ('4', 'EvaWilliams', 'eva.williams@example.com', 'hashed_password_4', 'Foodie', 'CityD'),
    ('5', 'ChrisBrown', 'chris.brown@example.com', 'hashed_password_5', 'Techie', 'CityE'),
    ('6', 'OliviaJones', 'olivia.jones@example.com', 'hashed_password_6', 'Gamer', 'CityF'),
    ('7', 'DavidMiller', 'david.miller@example.com', 'hashed_password_7', 'Artist', 'CityG'),
    ('8', 'SophieWilson', 'sophie.wilson@example.com', 'hashed_password_8', 'Reader', 'CityH'),
    ('9', 'MichaelLee', 'michael.lee@example.com', 'hashed_password_9', 'Coder', 'CityI'),
    ('10', 'EmmaDavis', 'emma.davis@example.com', 'hashed_password_10', 'Dreamer', 'CityJ');

