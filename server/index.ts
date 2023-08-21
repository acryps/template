import { StaticFileRoute } from "vlserver";
import { ManagedServer } from "./managed/server";
import { join } from "path";
import { DbClient } from "vlquery";

DbClient.connectedClient = new DbClient({});

DbClient.connectedClient.connect().then(async () => {
	const app = new ManagedServer();
	
	app.use(new StaticFileRoute('/', join(process.cwd(), '..', 'page', 'built')));
	app.use(new StaticFileRoute('/assets', join(process.cwd(), '..', 'page', 'assets')));

	app.prepareRoutes();
	app.use(new StaticFileRoute('*', join(process.cwd(), '..', 'page', 'built', 'index.html')));

	app.start(+process.env.PORT! || {{PORT}});
}