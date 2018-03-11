CREATE TABLE [dbo].[AnswerRatings]
(
	[Id] INT IDENTITY(1, 1) NOT NULL PRIMARY KEY, 
    [AspNetUserId] NVARCHAR(450) NOT NULL, 
    [AnswerId] INT NOT NULL, 
    [OriginDate] DATETIME NOT NULL, 
    [LastUpdated] DATETIME NOT NULL, 
    [IsDeleted] BIT NOT NULL DEFAULT 0, 
    [Rating] INT NOT NULL DEFAULT 0, 
    CONSTRAINT [FK_AnswerRatings_AspNetUsers] FOREIGN KEY ([AspNetUserId]) REFERENCES [AspNetUsers]([Id]) ON DELETE CASCADE, 
    CONSTRAINT [FK_AnswerRatings_Answers] FOREIGN KEY ([AnswerId]) REFERENCES [Answers]([Id]), 
    CONSTRAINT [AK_AnswerLikes_UniqueUserAnswer] UNIQUE ([AspNetUserId], [AnswerId])
)
