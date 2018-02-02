CREATE TABLE [event].[Event]
(
	[Id] INT NOT NULL PRIMARY KEY,
	[EventCode] VARCHAR(20) NULL,
	[TrackID] INT,
	[TrackCode] VARCHAR(20) NULL,
	[Name] VARCHAR (50) NULL
)
