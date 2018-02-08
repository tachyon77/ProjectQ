﻿CREATE TABLE [dbo].[Questions] (
    [Id]                    INT           IDENTITY (1, 1) NOT NULL,
    [AspNetUserId]               NVARCHAR(450)           NOT NULL,
    [Title]                 VARCHAR (200) NOT NULL,
    [Description]           VARCHAR (MAX) NOT NULL,
    [OriginDate]           DATETIME          NULL,
    [OfferedPrice]         DECIMAL (12)  NOT NULL,
    [IsPrivate]            BIT           NOT NULL,
    [HasMinQualification] BIT           NOT NULL,
    [IsDeleted] BIT NOT NULL DEFAULT 0, 
    PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Questions_AspNetUsers] FOREIGN KEY ([AspNetUserId]) REFERENCES [dbo].[AspNetUsers] ([Id])
);

