import { LitElement, html, css } from "lit";

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
    this.getData();
  }

  render() {
    return html`
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

customElements.define("collapse-list", collapseList);
