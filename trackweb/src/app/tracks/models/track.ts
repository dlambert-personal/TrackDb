
export interface Track {
    id: number;
    trackCode: string;
    name: string;
    configurations: TrackConfig[];
}

export interface TrackConfig {
    id: number;
    trackId: number;
    configurationCode: string;
    name: string;
}

