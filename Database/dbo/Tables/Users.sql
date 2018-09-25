CREATE TABLE [dbo].[Users]
(
	[Id] INT IDENTITY(1, 1) NOT NULL PRIMARY KEY, 
	[UniqueName] NVARCHAR(300) NOT NULL,
    [Name] NVARCHAR(200) NOT NULL, 
    [Introduction] NVARCHAR(MAX) NOT NULL DEFAULT '', 
    [PictureUrl] NVARCHAR(500) NULL , 
    [Email] NVARCHAR(256) NULL, 
    CONSTRAINT [AK_Users_UniqueName] UNIQUE ([UniqueName]) 
)
