CREATE TABLE [dbo].[Topics]
(
	[Id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY, 
    [Name] NVARCHAR(100) NOT NULL, 
    CONSTRAINT [AK_Topics_UniqueName] UNIQUE ([Name])
)
