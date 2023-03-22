import { CSSResultGroup, html, LitElement, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { store } from '../../store';
import tailwindcss from 'tailwindcss/tailwind.css?inline';

export const tagName = 'input-field';

@customElement(tagName)
export class InputField extends LitElement {
  static styles?: CSSResultGroup | undefined = [unsafeCSS(tailwindcss)];

  @state()
  declare input: string;

  @state()
  declare valid: boolean;

  constructor() {
    super();
    this.input = '';
    this.valid = true;
  }

  private _handleAdd() {
    if (!this.input.length) {
      this.valid = false;
      return;
    }

    store.addTodo({
      completed: false,
      text: this.input,
      id: Date.now(),
    });

    this.valid = true;
    this.input = '';
  }

  private _handleEnter(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this._handleAdd();
    }
  }

  private _handleChange(e: Event) {
    this.input = (e.target as HTMLInputElement).value;
  }

  render() {
    return html`
      <div class="relative w-full">
        <input
          @keyup="${this._handleEnter}"
          @input="${this._handleChange}"
          .value="${this.input}"
          type="text"
          id="input"
          placeholder="write something to do"
          class="block w-full p-4 pl-10 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:ring-1 focus:outline-none ${this
            .valid
            ? 'focus:ring-blue-300 border-green-300'
            : 'focus:ring-red-500 border-red-300'}"
          required
        />
        <button
          type="submit"
          @click="${this._handleAdd}"
          class="text-gray-900 absolute right-2.5 bottom-2.5 bg-green-400 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          Add
        </button>
      </div>
    `;
  }
}
