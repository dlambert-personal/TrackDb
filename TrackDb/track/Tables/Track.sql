CREATE TABLE [track].[Track] (
    [Id]   INT IDENTITY         NOT NULL,
	[TrackCode] VARCHAR(10) NULL,
    [Name] VARCHAR (50) NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

