import { CSSResultGroup, html, css, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import "./display";
import "./input";
import "./icon";
import tailwindcss from "tailwindcss/tailwind.css?inline";

export const tagName = "todo-list";

@customElement(tagName)
export class TodoList extends LitElement {
  static styles?: CSSResultGroup | undefined = [
    css`
      :host {
        display: block;
        height: 100%;
      }
    `,
    unsafeCSS(tailwindcss),
    css`
      @keyframes float {
        0% {
          opacity: 1;
          transform: translate3d(0, 0px, 0);
        }
        50% {
          opacity: 0.8;
          transform: translate3d(40px, -40px, 0);
        }
        100% {
          opacity: 1;
          transform: translate3d(0, 0px, 0);
        }
      }

      .animate-float {
        transform: translateY(0px);
        -webkit-animation: float 15s ease infinite;
        -moz-animation: float 15s ease infinite;
        animation: float 15s ease-in-out infinite;
      }
    `,
  ];
  protected render(): TemplateResult {
    return html`
      <div class="fixed animate-float shadow-none top-20 left-[60%] md:top-1/3 md:left-[80%]">
        <lit-icon></lit-icon>
      </div>
      <div class="flex flex-col h-full">
        <div class="flex-grow overflow-x-auto">
          <display-list></display-list>
        </div>
        <div>
          <input-field></input-field>
        </div>
      </div>
    `;
  }
}
