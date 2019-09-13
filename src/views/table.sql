-- Create a new database called 'merchant_portal_user_management'
-- Connect to the 'master' database to run this snippet
USE master
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
    SELECT name
        FROM sys.databases
        WHERE name = N'merchant_portal_user_management'
)
CREATE DATABASE merchant_portal_user_management
GO

-- Create a new table called 'user' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('SchemaName.user', 'U') IS NOT NULL
DROP TABLE SchemaName.user
GO
-- Create the table in the specified schema
CREATE TABLE SchemaName.user
(
    userId INT NOT NULL PRIMARY KEY, -- primary key column
    Column1 [NVARCHAR](50) NOT NULL,
    Column2 [NVARCHAR](50) NOT NULL
    -- specify more columns here
);
GO