// @ts-ignore
import Fab from './index.svelte';

export default {
	title: 'Action/Fab',
	component: Fab,
	argTypes: {
		tabindex: {
			control: 'number',
			defaultValue: 0
		},
		test: {
			control: 'text',
			defaultValue: ''
		},
		title: {
			control: 'text',
			defaultValue: ''
		},
		click: { action: 'click' }
	}
};
const Template = (args) => ({
	Component: Fab,
	props: args,
	on: {
		click: args.click
	}
});

export const Primary = Template.bind({});
