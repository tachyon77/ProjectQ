﻿/* DEBIT, CREDIT, PAYPAL etc*/
CREATE TABLE [dbo].[PaymentTypes]
(
	[Id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY, 
    [Name] VARCHAR(25) NULL
)
