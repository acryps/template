import { Component } from '@acryps/page';

export class PageComponent extends Component {
	render(child) {
		return <ui-page>
			<ui-navigation>
				{{APPLICATION}}
			</ui-navigation>

			{child}
		</ui-page>;
	}
}
