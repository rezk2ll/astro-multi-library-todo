import { LitElement, html, CSSResultGroup, unsafeCSS, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { store } from '../../store';
import tailwindcss from 'tailwindcss/tailwind.css?inline';


@customElement('check-box')
export class CheckBox extends LitElement {
  static styles?: CSSResultGroup | undefined = [
    unsafeCSS(tailwindcss),
    css`
      .toggle-checkbox:checked {
        @apply: right-0 border-green-400;
        right: 0;
        border-color: #68d391;
      }
      .toggle-checkbox:checked + .toggle-label {
        @apply: bg-green-400;
        background-color: #68d391;
      }
    `,
  ];

  @property({ type: Number })
  declare Id: number;

  @property({ type: Boolean })
  declare completed: boolean;

  constructor() {
    super();

    this.Id = 0;
    this.completed = false;
  }

  render() {
    return html`
      <div
        class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
      >
        <input
          type="checkbox"
          name="toggle"
          id="toggle-${this.Id}"
          ?checked=${this.completed == true}
          class="toggle-checkbox absolute block w-6 h-6
        rounded-full bg-white border-4 appearance-none cursor-pointer"
          @click="${() => store.toggle(this.Id)}"
        />
        <label
          for="toggle-${this.Id}"
          class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        />
      </div>
    `;
  }
}
