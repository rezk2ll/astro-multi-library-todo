import {
  css,
  CSSResultGroup,
  html,
  LitElement,
  TemplateResult,
  unsafeCSS,
} from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { autorun } from 'mobx';
import { store } from '../../store';
import type { Todo } from '../../types';

import './checkbox';
import tailwindcss from 'tailwindcss/tailwind.css?inline';

export const tagName = 'display-list';

@customElement(tagName)
export class DisplayList extends LitElement {
  static styles?: CSSResultGroup | undefined = [unsafeCSS(tailwindcss)];

  @property({ attribute: false })
  declare list: Todo[];

  _disposer: (() => void) | undefined;

  constructor() {
    super();

    this.list = [];
  }

  connectedCallback(): void {
    super.connectedCallback();

    this._disposer = autorun(() => {
      this.list = store.todos;
      super.requestUpdate();
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();

    this._disposer && this._disposer();
  }

  render(): TemplateResult {
    return html` <div class="flex flex-col space-y-3 mr-0">
      ${this.list.map(
        (item, index) => html` <div
          key=${index}
          class="flex flex-row space-y-2 h-full flex-grow text-gray-900  shadow-lg bg-white focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-3 text-center items-center dark:focus:ring-gray-500 mr-2"
        >
          <div class="pt-1 mr-5">
            <check-box ?completed=${item.completed} id=${item.id} />
          </div>
          <div
            class="pb-2 grow flex items-start overflow-hidden text-ellipsis whitespace-nowrap"
          >
            <p class="text-base font-bold text-slate-800">${item.text}</p>
          </div>
          <button @click=${() => store.removeTodo(item.id)} class="ml-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="h-6 w-6"
            >
              <path
                d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
              />
            </svg>
          </button>
        </div>`
      )}
    </div>`;
  }
}
