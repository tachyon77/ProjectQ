CREATE TABLE [dbo].[Employments]
(
	[Id] INT IDENTITY(1, 1) NOT NULL PRIMARY KEY, 
	[UserId] NVARCHAR(450) NOT NULL,
    [Position] NVARCHAR(200) NOT NULL, 
    [Company] NVARCHAR(200) NOT NULL, 
    [Start] DATETIME NULL, 
    [End] DATETIME NULL, 
    [IsCurrent] BIT NULL, 
    CONSTRAINT [FK_Employments_AspNetUsers] FOREIGN KEY ([UserId]) REFERENCES [AspNetUsers]([Id])
)
