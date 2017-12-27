CREATE TABLE [dbo].[Answers] (
    [Id]          INT           IDENTITY (1, 1) NOT NULL,
    [QuestionId] INT           NOT NULL,
    [UserId]     INT           NOT NULL,
    [Text]        VARCHAR (MAX) NOT NULL,
    [OriginDate] DATE          NOT NULL,
    [IsPrivate]  BIT           NOT NULL,
    [ExpiryDate] DATE          NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Answers_Questions] FOREIGN KEY ([QuestionId]) REFERENCES [dbo].[Questions] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_Answers_Users] FOREIGN KEY ([UserId]) REFERENCES [dbo].[Users] ([Id]) ON DELETE CASCADE
);

