CREATE TABLE [dbo].[QuestionFollowers]
(
	[Id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY, 
    [UserId] INT NOT NULL, 
    [QuestionId] INT NOT NULL, 
    [IsFollowing] BIT NOT NULL, 
    [OriginDate] DATETIME NOT NULL, 
    CONSTRAINT [FK_QuestionFollowers_Users] FOREIGN KEY ([UserId]) REFERENCES [Users]([Id]), 
    CONSTRAINT [FK_QuestionFollowers_Questions] FOREIGN KEY ([QuestionId]) REFERENCES [Questions]([Id]), 
    CONSTRAINT [AK_QuestionFollowers_Column] UNIQUE ([UserId],[QuestionId])
)
