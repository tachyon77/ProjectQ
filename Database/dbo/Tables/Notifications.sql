CREATE TABLE [dbo].[Notifications]
(
	[Id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY, 
    [UserId] INT NOT NULL, 
    [IsSeen] BIT NOT NULL DEFAULT 0, 
    [OriginDate] DATETIME NOT NULL, 
    [EventDescription] NVARCHAR(MAX) NOT NULL, 
    [Link] NVARCHAR(450) NULL, 
    CONSTRAINT [FK_Notifications_Users] FOREIGN KEY ([UserId]) REFERENCES [Users]([Id]) ON DELETE CASCADE
)
