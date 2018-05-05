CREATE TABLE [dbo].[AnswerDrafts] (
    [Id]          INT           IDENTITY (1, 1) NOT NULL,
    [QuestionId] INT           NOT NULL,
    [UserId]     INT           NOT NULL,
	[RedactedHtmlContent]        VARCHAR (MAX) NULL,
    [OriginDate] DATETIME          NOT NULL,
    [IsProtected]  BIT           NOT NULL,
    [ExpiryDate] DATE          NOT NULL,
    [IsDeleted] BIT NOT NULL DEFAULT 0, 
    [ProtectedAnswerContentId] INT NOT NULL, 
    PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_AnswerDrafts_Questions] FOREIGN KEY ([QuestionId]) REFERENCES [dbo].[Questions] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_AnswerDrafts_Users] FOREIGN KEY ([UserId]) REFERENCES [dbo].[Users] ([Id]) ON DELETE CASCADE, 
    CONSTRAINT [FK_AnswerDrafts_ProtectedAnswerContents] FOREIGN KEY ([ProtectedAnswerContentId]) REFERENCES [ProtectedAnswerContents]([Id]), 
    CONSTRAINT [AK_AnswerDrafts_UniqueProtectedAnswerContent] UNIQUE ([ProtectedAnswerContentId]), 
    CONSTRAINT [AK_AnswerDrafts_UniquePerUserQuestion] UNIQUE ([UserId], [QuestionId])
);

