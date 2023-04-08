import { LitElement, html, css } from "lit";
//import '@lrnwebcomponents/simple-icon/simple-icon.js';
//import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class searchBar extends LitElement {
  static properties = {
    searchString: { type: String },
    searchList: { reflect: true, type: Array },
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
    }
    input:focus {
      outline: 1px solid grey;
    }
    input:hover:not(:focus) {
      border-bottom: 2px solid grey;
    }
    #searchbar {
      width: 100%;
      max-width: 500px;
    }
    /* .simple-icon {
      display: inline-block;
      --simple-icon-height: 20px;
      --simple-icon-width: 20px;
    } */
  `;

  constructor() {
    super();
    this.searchString = "";
    this.searchList = [];
    this.getData();
    this.searchThis(this.searchList, this.searchString);
  }

  render() {
    return html`
      <div class="wrapper">
        <!-- <simple-icon icon="search"></simple-icon> -->
        <input
          type="text"
          accent-color="black"
          id="searchbar"
          placeholder="Search Content, Topics, and People"
          @input="${this.wordChanged}"
        />
      </div>
    `;
  }

  searchThis(searchList, searchString) {
    const words = searchString.split(/\s+/);
    return searchList.filter((element) => {
      for (const word of words) {
        if (!element.badgeHeader.toLowerCase().includes(word.toLowerCase())) {
          return false;
        }
      }
      return true;
    });
  }

  wordChanged(e) {
    this.searchString = e.target.value;
    this.dispatchEvent(
      new CustomEvent("searchString", { detail: this.searchString })
    );
  }

  getData() {
    const address = new URL("../assets/search-data.json", import.meta.url).href;
    fetch(address)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return [];
      })
      .then((data) => {
        this.searchList = data;
      });
  }
}

customElements.define("search-bar", searchBar);
