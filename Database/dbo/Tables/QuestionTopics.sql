CREATE TABLE [dbo].[QuestionTopics]
(
	[Id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY, 
    [QuestionId] INT NOT NULL, 
    [TopicId] INT NOT NULL, 
    CONSTRAINT [AK_QuestionTopics_Unique] UNIQUE ([QuestionId], [TopicId]), 
    CONSTRAINT [FK_QuestionTopics_Questions] FOREIGN KEY ([QuestionId]) REFERENCES [Questions]([Id]), 
    CONSTRAINT [FK_QuestionTopics_Topics] FOREIGN KEY ([TopicId]) REFERENCES [Topics]([Id])
)
