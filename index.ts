
export class AffirmationClient {
    async get(): Promise<AffirmationResponse> {
        const response = await fetch('https://www.affirmations.dev/');
        const json = await response.json();
        return json as AffirmationResponse;
    }
}

export type AffirmationResponse = {
    affirmation: string;
}
