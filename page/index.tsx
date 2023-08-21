import { Component, PathRouter, Router } from '@acryps/page';
import { registerDirectives } from '@acryps/page-default-directives';
import { PageComponent } from './page';
import { HomeComponent } from './home';

export class Application {
	static router: Router;

	static async main() {
		this.router = new PathRouter(PageComponent
			.route('/', HomeComponent)
		);
		
		registerDirectives(Component, this.router);

		this.router.host(document.body);
	}
}

Application.main();