﻿CREATE TABLE [dbo].[AspNetRoles] (
    [Id]               INT NOT NULL,
    [ConcurrencyStamp] NVARCHAR (MAX) NULL,
    [Name]             NVARCHAR (256) NULL,
    [NormalizedName]   NVARCHAR (256) NULL,
    CONSTRAINT [PK_AspNetRoles] PRIMARY KEY CLUSTERED ([Id] ASC)
);


GO
CREATE NONCLUSTERED INDEX [RoleNameIndex]
    ON [dbo].[AspNetRoles]([NormalizedName] ASC);

