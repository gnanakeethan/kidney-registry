import { HoudiniClient } from '$houdini';
async function fetchQuery({ fetch, text = '', variables = {}, session, metadata }) {
    const url = import.meta.env.VITE_GRAPHQL_ENDPOINT || 'http://localhost:8080/v1/graphql';
    const result = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: text,
            variables
        })
    });
    return await result.json();
}
export default new HoudiniClient(fetchQuery);
//# sourceMappingURL=client.js.map