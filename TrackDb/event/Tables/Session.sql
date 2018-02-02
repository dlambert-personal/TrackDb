CREATE TABLE [event].[Session]
(
	[Id] INT NOT NULL PRIMARY KEY,
	[SessionCode] VARCHAR(20) NULL,
	[EventID] INT,
	[EventCode] VARCHAR(20) NULL,
	[Name] VARCHAR (50) NULL
)
