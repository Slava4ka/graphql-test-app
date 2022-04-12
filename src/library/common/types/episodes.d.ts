export type Episode = {
    id: string;
    name?: string;
    air_date?: string;
    episode?: string;
    characters?: string[];
    created?: Date
  }

export type Info = {
    pages: number;
    count: number;
    next: string | null;
    prev: string | null;
}

export type EpisodesResponse = {
    info: Partial<Info>;
    results: Array<Episode>;
}
