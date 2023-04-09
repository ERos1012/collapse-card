import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
const imageURL = new URL("../assets/open-wc-logo.svg", import.meta.url).href;

class CollapseCard extends LitElement {
  static properties = {
    badgesCount: { type: String },
    badgeHeader: { type: String },
    badgeName: { type: String },
    badgeUrl: { type: String },
    badgeDescription: { type: String },
    badgeImage: { type: String },
    badgeCreator: { type: String },
    timeToComplete: { type: String },
    stepsName: { type: String },
    stepsDescription: { type: String },
    stepsTime: { type: String },
    open: { type: Boolean },
  };

  static styles = css`
    .card {
      border: 1px solid #ccc;
      margin-left: 16px;
      margin-right: 16px;
      align-items: center;
      border-left: solid;
      background-color: lightblue;
      border-left-color: darkblue;
      border: 1px solid black;
    }
    .card-header {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
    }
    .card-content {
      display: none;
    }
    .card.open .card-content {
      display: block;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: white;
      padding: 10px;
    }
    .badgeHeader {
      margin: 20px;
    }

    .badgeDesicription {
      color: purple;
    }

    .arrowCard {
      margin: 20px;
    }
  `;

  constructor() {
    super();
    this.badgesCount = "Badge Count";
    this.badgeHeader = "Badge Header";
    this.badgeName = "Badge Name";
    this.badgeUrl = "Badge Url";
    this.badgeDescription = "Badge Description";
    this.badgeImage = imageURL;
    this.badgeCreator = "Badge Creator";
    this.timeToComplete = "0";
    this.stepsName = "Steps Name";
    this.stepsDescription = "Steps Description";
    this.stepsTime = "0";
    this.open = false;
  }

  render() {
    return html`

      <div class="card ${this.open ? "open" : ""}">
        <div class="card-header" @click=${this.toggleOpen}>
          <h2 class="badgeHeader">${this.badgeHeader}</h2>
          <span class="arrowCard">${this.open ? "▲" : "▼"}</span>
        </div>
        <div class="card-content">
          <slot>
            <h3>${this.badgeName}</h3>
            <p>${this.badgeDescription}</p>
            <simple-icon
              accent-color="teal"
              icon="communication:stay-current-portrait"
            ></simple-icon>
            <p>${this.timeToComplete}</p>
          </slot>
        </div>
      </div>
    `;
  }

  toggleOpen() {
    this.open = !this.open;
  }
}

customElements.define("collapse-card", CollapseCard);
