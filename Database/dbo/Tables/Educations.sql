﻿CREATE TABLE [dbo].[Educations]
(
	[Id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY, 
    [UserId] INT NOT NULL, 
    [School] NVARCHAR(400) NOT NULL, 
    [Concentration] NVARCHAR(200) NOT NULL, 
    [SecondaryConcentration] NVARCHAR(200) NULL, 
    [DegreeType] NVARCHAR(100) NULL, 
    [GraduationYear] INT NULL, 
    CONSTRAINT [FK_Educations_Users] FOREIGN KEY ([UserId]) REFERENCES [Users]([Id])
)
