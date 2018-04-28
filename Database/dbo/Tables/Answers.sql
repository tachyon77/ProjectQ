CREATE TABLE [dbo].[Answers] (
    [Id]          INT           IDENTITY (1, 1) NOT NULL,
    [QuestionId] INT           NOT NULL,
    [UserId]     INT           NOT NULL,
	[RedactedHtmlContent]        VARCHAR (MAX) NULL,
    [HtmlContent]        VARCHAR (MAX) NULL,
    [OriginDate] DATETIME          NOT NULL,
    [IsPrivate]  BIT           NOT NULL,
    [ExpiryDate] DATE          NOT NULL,
    [IsDeleted] BIT NOT NULL DEFAULT 0, 
    PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Answers_Questions] FOREIGN KEY ([QuestionId]) REFERENCES [dbo].[Questions] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_Answers_Users] FOREIGN KEY ([UserId]) REFERENCES [dbo].[Users] ([Id]) ON DELETE CASCADE
);

