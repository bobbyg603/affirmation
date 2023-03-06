import assert from 'node:assert';
import { AffirmationClient } from ".";

(async() => {
    const client = new AffirmationClient();
    
    const response = await client.get();
    console.log(response);

    assert(response.affirmation);
})();