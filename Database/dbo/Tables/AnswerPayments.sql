/*
Only to store payments made for purchasing answers.
[UserId]: Buyer
[Token]: Represents the authorization from the user + payment gateway that
 the charge was accepted.
*/
CREATE TABLE [dbo].[AnswerPayments] (
    [Id]          INT           IDENTITY (1, 1) NOT NULL,
    [AnswerId] INT           NOT NULL,
    [UserId]     INT           NOT NULL,
    [Time] DATETIME          NOT NULL,
    [PaymentTypeId] INT NOT NULL, 
    [Amount] INT NOT NULL , 
    [Token] VARCHAR(100) NOT NULL, 
    PRIMARY KEY CLUSTERED ([Id] ASC), 
    CONSTRAINT [FK_AnswerPayments_Users] FOREIGN KEY ([UserId]) REFERENCES [Users]([Id]), 
    CONSTRAINT [FK_AnswerPayments_Answers] FOREIGN KEY ([AnswerId]) REFERENCES [Answers]([Id]), 
    CONSTRAINT [FK_AnswerPayments_PaymentTypes] FOREIGN KEY ([PaymentTypeId]) REFERENCES [PaymentTypes]([Id]),
);

