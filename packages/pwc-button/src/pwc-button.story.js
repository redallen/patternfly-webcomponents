import { html } from 'lit-html';
import { storiesOf } from '@storybook/polymer';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { BUTTON_KIND } from '../pwc-button.js';

const variants = {
  [`Primary button (${BUTTON_KIND.PRIMARY})`]: BUTTON_KIND.PRIMARY,
  [`Secondary button (${BUTTON_KIND.SECONDARY})`]: BUTTON_KIND.SECONDARY,
  [`Tertiary button (${BUTTON_KIND.TERTIARY})`]: BUTTON_KIND.TERTIARY,
  [`Danger button (${BUTTON_KIND.DANGER})`]: BUTTON_KIND.DANGER,
  [`Link button (${BUTTON_KIND.LINK})`]: BUTTON_KIND.LINK,
  [`Plain button (${BUTTON_KIND.PLAIN})`]: BUTTON_KIND.PLAIN,
  [`Inline button (${BUTTON_KIND.INLINE})`]: BUTTON_KIND.INLINE,
};

const createProps = () => ({
  variant: select('Button variant (variant)', variants, BUTTON_KIND.PRIMARY),
  disabled: boolean('Disabled (disabled)', false),
  onClick: action('click'),
  additionalClasses: text('Additional classes', ''),
});

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const { variant, disabled, onClick, additionalClasses } = createProps();
    return html`
      <section class="pf-c-page__main-section" style="padding: 20px">
        <h1 class="pf-c-title pf-m-3xl">Button Variations</h1>
        <br />
        <pwc-button variant="primary" @click=${onClick}>
          Primary Button
        </pwc-button>
        <pwc-button variant="secondary" @click=${onClick}>
          Secondary Button
        </pwc-button>
        <pwc-button variant="tertiary" @click=${onClick}>
          Tertiary Button
        </pwc-button>
        <pwc-button variant="danger" @click=${onClick}>
          Danger Button
        </pwc-button>
        <pwc-button variant="link" @click=${onClick}>
          <span class="pf-c-button__icon">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>
          Link Button
        </pwc-button>
        <pwc-button variant="plain" @click=${onClick} aria-label="Remove">
          <i class="fas fa-times" aria-hidden="true"></i>
        </pwc-button>
        <pwc-button variant="inline" class="pf-m-link" @click=${onClick}>
          Inline link button
        </pwc-button>
        <br />
        <br />
        <h1 class="pf-c-title pf-m-2xl">Knob Controlled Button</h1>
        <br />
        <pwc-button variant=${variant} ?disabled=${disabled} @click=${onClick} class=${additionalClasses}>
          Button
        </pwc-button>
        <br />
      </section>
    `;
  });
