CREATE TABLE [dbo].[QuestionFollowers]
(
	[Id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY, 
    [AspNetUserId] NVARCHAR(450) NOT NULL, 
    [QuestionId] INT NOT NULL, 
    [IsFollowing] BIT NOT NULL, 
    [OriginDate] DATETIME NOT NULL, 
    CONSTRAINT [FK_QuestionFollowers_AspNetUsers] FOREIGN KEY ([AspNetUserId]) REFERENCES [AspNetUsers]([Id]), 
    CONSTRAINT [FK_QuestionFollowers_Questions] FOREIGN KEY ([QuestionId]) REFERENCES [Questions]([Id]), 
    CONSTRAINT [AK_QuestionFollowers_Column] UNIQUE ([AspNetUserId],[QuestionId])
)
