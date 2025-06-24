async function handleRequest<T>(requestFn: () => Promise<Response>): Promise<T> {
    try {
        const response = await requestFn();

        return await response.json();
    }
    catch (error) {
        console.log(`Imaginable log: ${requestFn.name} failed.`)

        throw error;
    }
}