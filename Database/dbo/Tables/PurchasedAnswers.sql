CREATE TABLE [dbo].[PurchasedAnswers]
(
	[Id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY, 
	[UserId] INT NOT NULL, 
    [AnswerId] INT NOT NULL, 
    [PurchaseDate] DATETIME NOT NULL, 
    [HtmlContent] NVARCHAR(MAX) NOT NULL , 
    CONSTRAINT [FK_PurchasedAnswers_Answers] FOREIGN KEY ([AnswerId]) REFERENCES [Answers]([Id]), 
    CONSTRAINT [FK_PurchasedAnswers_Users] FOREIGN KEY ([UserId]) REFERENCES [Users]([Id]), 
    CONSTRAINT [AK_PurchasedAnswers_UniquePerAnswerUser] UNIQUE ([AnswerId], [UserId])
)
