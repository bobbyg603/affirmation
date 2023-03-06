
export class AffirmationClient {
    constructor(private url = 'https://www.affirmations.dev/') { }

    async get(): Promise<AffirmationResponse> {
        const response = await fetch(this.url);
        const json = await response.json();
        return json as AffirmationResponse;
    }
}

export type AffirmationResponse = {
    affirmation: string;
}
