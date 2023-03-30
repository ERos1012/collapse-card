import { LitElement, html, css } from "lit";

class searchBar extends LitElement {
  static properties = {
    search: { type: String },
    searchList: { type: Array },
  };

  static styles = css`
    :host {
      display: block;
      padding: 30px;
    }
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .item {
      display: inline-flex;
    }
    input {
      font-size: 20px;
      font-weight: bold;
      border: none;
      border-bottom: 1px solid black;
      transition: all 0.3s ease-in-out;
    }
    input:focus {
      border-bottom: 2px solid blue;
      outline: 1px solid grey;
      outline-offset: 4px;
    }
    input:hover:not(:focus) {
      border-bottom: 2px solid grey;
    }
    .searchbar {
      width: 100%;
      max-width: 500px;
    }

    /** accessibility enhancement to not animate the changes possibly
    for users that have motion activated disabilities **/
    @media (prefers-reduced-motion) {
      input {
        transition: none;
      }
    }
  `;

  constructor() {
    super();
    this.search = "";
    this.searchList = [];
  }

  render() {
    return html`
      <div class="wrapper">
        <input type="text" class="searchbar" placeholder="Search"
        @input="${this.inputListener}"/>
      </div>
    `;
  }

  inputListener(e) {
    const value = e.target.value;
    console.log(value);
    console.log(this.searchList);
  }

 
}

customElements.define("search-bar", searchBar);
