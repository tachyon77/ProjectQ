CREATE TABLE [dbo].[Questions] (
    [Id]                    INT           IDENTITY (1, 1) NOT NULL,
    [UserId]               INT           NOT NULL,
    [Title]                 VARCHAR (200) NOT NULL,
    [Description]           VARCHAR (MAX) NOT NULL,
    [OriginDate]           DATE          NOT NULL,
    [OfferedPrice]         DECIMAL (12)  NOT NULL,
    [IsPrivate]            BIT           NOT NULL,
    [HasMinQualification] BIT           NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Questions_Users] FOREIGN KEY ([UserId]) REFERENCES [dbo].[Users] ([Id])
);

