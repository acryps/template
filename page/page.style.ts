import { root, child, padding, margin, display } from "@acryps/style";

export const applicationStyle = () => root(
	child('body', 
		padding(0),
		margin(0),
		
		child('ui-page',
			display('block')
		)
	)
);
