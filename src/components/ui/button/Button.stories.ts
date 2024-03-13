import type { Meta, StoryObj } from '@storybook/vue3'
import {Button} from "@/components/ui/button/index.ts";

//👇 This default export determines where your story goes in the story list
const meta= {
    title: 'Marcando/Button',
    component: Button,
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
        },
        size: {
            control: { type: 'select' },
            options: ['default', 'sm', 'lg', 'icon'],
        },
        // onClick: { action: 'clicked' },
    },
} satisfies Meta<typeof Button>

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    render: (args) => ({
        components: { Button },
        setup() {
            return { args };
        },
        template: `  
          <Button>Click me!</Button>
        `,
    }),
    args: {
        //👇 The args you need here will depend on your component
    },
};