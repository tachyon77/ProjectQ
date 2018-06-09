CREATE TABLE [dbo].[InvitationRequests]
(
	[Id] INT IDENTITY(1, 1) NOT NULL PRIMARY KEY, 
    [Name] NVARCHAR(200) NOT NULL, 
    [Email] NVARCHAR(200) NOT NULL , 
    [Time] DATETIME NOT NULL, 
    [IP] VARCHAR(50) NOT NULL , 
    CONSTRAINT [AK_Users_UniqueEmail] UNIQUE ([Email]) 
)
