CREATE TABLE [dbo].[QuestionViews]
(
	[Id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY, 
    [QuestionId] INT NOT NULL, 
    [UserId] INT NOT NULL, 
    [EventTime] DATETIME NOT NULL, 
    [IPAddress] VARCHAR(50) NOT NULL DEFAULT '0.0.0.0', 
    CONSTRAINT [FK_QuestionViews_Questions] FOREIGN KEY ([QuestionId]) REFERENCES [Questions]([Id]), 
    CONSTRAINT [FK_QuestionViews_Users] FOREIGN KEY ([UserId]) REFERENCES [Users]([Id])
)
