CREATE TABLE [dbo].[AnswerViewRights]
(
	[Id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY, 
    [AnswerId] INT NOT NULL, 
    [ViewerId] INT NOT NULL, 
    [GrantDate] DATETIME NOT NULL, 
    [IsDeleted] BIT NOT NULL DEFAULT 0, 
    CONSTRAINT [FK_AnswerViewRights_Answers] FOREIGN KEY ([AnswerId]) REFERENCES [Answers]([Id]), 
    CONSTRAINT [FK_AnswerViewRights_Users] FOREIGN KEY ([ViewerId]) REFERENCES [Users]([Id]), 
    CONSTRAINT [AK_AnswerViewRights_UniquePerAnswerUser] UNIQUE ([AnswerId], [ViewerId])
)
