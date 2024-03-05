// index.ts
import "reflect-metadata";
import { startServer } from './app';

async function main() {
    const app = await startServer();
    app.listen(3000, () => {
        console.log('Server running at http://localhost:3000/graphql');
    });
}

main();
