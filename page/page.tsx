import { Component } from '@acryps/page';

export class PageComponent extends Component {
	render(child) {
		return <ui-page>
			<ui-navigation>
				
			</ui-navigation>

			{child}
		</ui-page>;
	}
}