import { html } from 'lit';
import '../src/collapse-card.js';

export default {
  title: 'CollapseCard',
  component: 'collapse-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <collapse-card
      style="--collapse-card-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </collapse-card>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
