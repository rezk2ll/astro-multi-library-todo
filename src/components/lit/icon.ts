import { CSSResultGroup, html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import tailwindcss from 'tailwindcss/tailwind.css?inline';

export const tagName = 'lit-icon';

@customElement(tagName)
export class LitIcon extends LitElement {
  static styles?: CSSResultGroup | undefined = [unsafeCSS(tailwindcss)];

  @property({ attribute: true })
  declare size?: 'small' | 'big';

  constructor() {
    super();

    this.size = 'big';
  }

  render() {
    return html` <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      class="${this.size === 'small'
        ? 'w-6 h-6 hover:animate-pulse'
        : 'w-28 h-28'}"
    >
      <view id="flame" viewBox="0 0 160 200" />
      <view id="name" viewBox="240 78 185 122" />
      <path fill="#00e8ff" d="M40 120l20-60l90 90l-30 50l-40-40h-20" />
      <path
        fill="#283198"
        d="M80 160v-80l40-40v80M0 160l40 40l20-40l-20-40h-20"
      />
      <path
        fill="#324fff"
        d="M40 120v-80l40-40v80M120 200v-80l40-40v80M0 160v-80l40 40"
      />
      <path fill="#0ff" d="M40 200v-80l40 40" />
    </svg>`;
  }
}
