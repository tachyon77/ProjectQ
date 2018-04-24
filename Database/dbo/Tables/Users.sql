CREATE TABLE [dbo].[Users]
(
	[Id] INT IDENTITY(1, 1) NOT NULL PRIMARY KEY, 
	[UniqueName] NVARCHAR(300) NOT NULL,
    [Name] NVARCHAR(200) NOT NULL, 
    [Introduction] NVARCHAR(MAX) NOT NULL DEFAULT '', 
    CONSTRAINT [AK_Users_UniqueName] UNIQUE ([UniqueName]) 
)
