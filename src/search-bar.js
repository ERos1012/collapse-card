import { LitElement, html, css } from "lit";

class searchBar extends LitElement {
  static properties = {
    searchString: { type: String },
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
    this.searchList = this.searchThis(this.searchList, this.searchString);
    console.log(this.searchList);
    console.log(this.searchString);
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
