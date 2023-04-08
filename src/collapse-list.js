import { LitElement, html, css } from "lit";
import "../src/search-bar.js";

class collapseList extends LitElement {
  static properties = {
    search: { type: String },
    searchList: { type: Array },
  };

  static styles = css`
    :host {
      display: block;
      align-items: center;
    }
  `;
  constructor() {
    super();
    this.search = "";
    this.searchList = [];
    this.getSearchedData().then((data) => {
      this.searchList = data;
    });
  }

  render() {
    return html`
      <search-bar @value-changed="${this._handleSearch}"></search-bar>
      <div class="wrapper">
        ${this.searchList.map(
          (collapse) => html`
            <div class="item">
              <collapse-card
                badgeHeader="${collapse.badgeHeader}"
                badgeName="${collapse.badgeName}"
                badgeUrl="${collapse.badgeUrl}"
                badgeDescription="${collapse.badgeDescription}"
                badgeImage="${collapse.badgeImage}"
                badgeCreator="${collapse.badgeCreator}"
                timeToComplete="${collapse.timeToComplete}"
                stepsName="${collapse.stepsName}"
                stepsDescription="${collapse.stepsDescription}"
                stepsTime="${collapse.stepsTime}"
              ></collapse-card>
            </div>
          `
        )}
      </div>
    `;
  }

  async getSearchedData(search = "") {
    const address = `/api/search-api?search=${search}`;
    const results = await fetch(address)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return [];
      })
      .then((data) => {
        return data;
      });
      return results;
  }

  async _handleSearch(e) {
    this.searchList = await this.getSearchedData(e.detail.value);
  }
}

customElements.define("collapse-list", collapseList);
