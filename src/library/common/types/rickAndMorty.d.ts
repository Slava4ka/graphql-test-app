export type RickAndMortyData = {
	characters: {
		info: Info;
		results: Array<Character>;
	}
}

export type Info = {
    count: number;
    pages: number;
    next: number;
    prev: number;
};

export type Character = {
    id: string,
    name?: string;
    image?: string;
};
