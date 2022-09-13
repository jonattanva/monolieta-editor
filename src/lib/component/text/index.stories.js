// @ts-ignore
import Text from './index.svelte';

export default {
    title: 'Input/Text',
    component: Text,
};

const Template = (args) => ({
	Component: Text,
	props: args,
	on: {
		click: args.search
	}
});

export const Primary = Template.bind({});
