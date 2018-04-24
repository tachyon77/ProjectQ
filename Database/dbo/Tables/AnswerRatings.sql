CREATE TABLE [dbo].[AnswerRatings]
(
	[Id] INT IDENTITY(1, 1) NOT NULL PRIMARY KEY, 
    [UserId] INT NOT NULL, 
    [AnswerId] INT NOT NULL, 
    [OriginDate] DATETIME NOT NULL, 
    [LastUpdated] DATETIME NOT NULL, 
    [IsDeleted] BIT NOT NULL DEFAULT 0, 
    [Rating] INT NOT NULL DEFAULT 0, 
    CONSTRAINT [FK_AnswerRatings_Users] FOREIGN KEY ([UserId]) REFERENCES [Users]([Id]) ON DELETE CASCADE, 
    CONSTRAINT [FK_AnswerRatings_Answers] FOREIGN KEY ([AnswerId]) REFERENCES [Answers]([Id]), 
    CONSTRAINT [AK_AnswerLikes_UniqueUserAnswer] UNIQUE ([UserId], [AnswerId])
)
