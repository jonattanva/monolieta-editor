// @ts-ignore
import Search from './index.svelte';

export default {
	title: 'Input/Search',
	component: Search,
	argTypes: {
		delay: {
			control: 'number',
			defaultValue: 500
		},
		test: {
			control: 'text',
			defaultValue: ''
		},
		placeholder: {
			control: 'text',
			defaultValue: 'Search'
		},
		search: { action: 'search' }
	}
};

const Template = (args) => ({
	Component: Search,
	props: args,
	on: {
		click: args.search
	}
});

export const Primary = Template.bind({});
