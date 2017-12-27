CREATE TABLE [dbo].[Users] (
    [Id]         INT           IDENTITY (1, 1) NOT NULL,
    [FirstName] VARCHAR (100) NOT NULL,
    [LastName]  VARCHAR (100) NOT NULL,
    [Email]      VARCHAR (100) NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

