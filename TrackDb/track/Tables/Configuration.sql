CREATE TABLE [track].[Configuration]
(
	[Id] INT IDENTITY NOT NULL PRIMARY KEY,
	[TrackId] INT NOT NULL,
	[ConfigurationCode] VARCHAR(10) NOT NULL,
	[Name] VARCHAR(50)
)
