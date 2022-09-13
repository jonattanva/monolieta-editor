// @ts-ignore
import Color from './index.svelte';

export default {
	title: 'Input/Color',
	component: Color,
	argTypes: {
		value: {
			control: 'color'
		}
	}
};

const Template = (args) => ({
	Component: Color,
	props: args,
	on: {
		click: args.click
	}
});

export const Primary = Template.bind({});
