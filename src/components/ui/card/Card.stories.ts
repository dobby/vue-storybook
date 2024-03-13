import type { Meta, StoryObj } from '@storybook/vue3';

import {Card,CardHeader, CardTitle, CardDescription, CardContent, CardFooter} from '../card/';

const meta: Meta<typeof Card> = {
    title: 'Marcando/Card',
    component: Card,
};

//👇 This default export determines where your story goes in the story list
export default meta;
type Story = StoryObj<typeof Card>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
    render: (args) => ({
        components: { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter },
        setup() {
            return { args };
        },
        template: `  
          <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                Card Content
              </CardContent>
              <CardFooter>
                Card Footer
              </CardFooter>
        </Card>
        `,
    }),
    args: {
        //👇 The args you need here will depend on your component
    },
};