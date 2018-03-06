CREATE TABLE [dbo].[Notifications]
(
	[Id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY, 
    [AspNetUserId] NVARCHAR(450) NOT NULL, 
    [IsSeen] BIT NOT NULL DEFAULT 0, 
    [OriginDate] DATETIME NOT NULL, 
    [EventDescription] NVARCHAR(MAX) NOT NULL, 
    CONSTRAINT [FK_Notifications_AspNetUsers] FOREIGN KEY ([AspNetUserId]) REFERENCES [AspNetUsers]([Id]) ON DELETE CASCADE
)
