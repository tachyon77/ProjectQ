CREATE TABLE [dbo].[Answers] (
    [Id]          INT           IDENTITY (1, 1) NOT NULL,
    [QuestionId] INT           NOT NULL,
    [AspNetUserId]     NVARCHAR(450)           NOT NULL,
    [Text]        VARCHAR (MAX) NOT NULL,
    [OriginDate] DATE          NOT NULL,
    [IsPrivate]  BIT           NOT NULL,
    [ExpiryDate] DATE          NOT NULL,
    [IsDeleted] BIT NOT NULL DEFAULT 0, 
    PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Answers_Questions] FOREIGN KEY ([QuestionId]) REFERENCES [dbo].[Questions] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_Answers_AspNetUsers] FOREIGN KEY ([AspNetUserId]) REFERENCES [dbo].[AspNetUsers] ([Id]) ON DELETE CASCADE
);

