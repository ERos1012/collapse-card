import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class searchBar extends LitElement {
  static get properties() {
    return {
      value: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      simple-icon {
        display: inline-block;
        --simple-icon-height: 30px;
        --simple-icon-width: 30px;
      }
      .wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 20px;
      }
      #searchbar {
        width: 100%;
        max-width: 500px;
        filter: drop-shadow(0px 2px 3px #383838);
      }
      input {
        font-size: 20px;
        border: none;
        font-family: "Roboto", "Noto", sans-serif;
      }
      input:focus {
        outline: 1px solid grey;
      }
    `;
  }

  constructor() {
    super();
    this.value = "";
  }

  render() {
    return html`
      <div class="wrapper">
        <simple-icon icon="icons:search"></simple-icon>
        <input
          type="text"
          id="searchbar"
          placeholder="Search Content, Topics, and People"
          value="${this.value}"
          @input="${this._handleInput}"
        />
      </div>
    `;
  }
  _handleInput(e) {
    this.value = e.target.value;
    this.dispatchEvent(
      new CustomEvent("value-changed", {
        detail: {
          value: this.value,
        },
      })
    );
    console.log(this.value);
  }
}

customElements.define("search-bar", searchBar);
