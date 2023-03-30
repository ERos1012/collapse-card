import { LitElement, html, css } from "lit";

const imageURL = new URL("../assets/open-wc-logo.svg", import.meta.url).href;

class CollapseCard extends LitElement {
  static properties = {
    badgeHeader: { type: String, attribute: "badge-header"},
    badgeName: { type: String, attribute: "badge-name"},
    badgeUrl: { type: String, attribute: "badge-url"},
    badgeDescription: { type: String, attribute: "badge-description"},
    badgeImage: { type: String, attribute: "badge-image" },
    badgeCreator: { type: String, attribute: "badge-creator" },
    timeToComplete: { type: String, attribute: "time-to-complete" },
    stepsName: { type: String, attribute: "steps-name" },
    stepsDescription: { type: String, attribute: "steps-description" },
    stepsTime: { type: String, attribute: "steps-time" },
  };

  static styles = css`
    .wrapper {
      border: 1px solid black;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
    .image {
      display: inline-flex;
      width: 100px;
      height: 100px;
    }
    .item {
      display: inline-flex;
      flex-direction: column;
      align-items: left;
    }
  `;

  constructor() {
    super();
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
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="image">
          <img src="${this.badgeImage}" alt="Badge Image" />
        </div>
        <div class="item">
        <summary><h2>${this.badgeHeader}</h2></summary>
          <details>
            <h3>${this.badgeName}</h3>
            <p>${this.badgeDescription}</p>
            <p>${this.badgeCreator}</p>
            <p>${this.timeToComplete}</p>
            <p>${this.stepsName}</p>
            <p>${this.stepsDescription}</p>
            <p>${this.stepsTime}</p>
          </details>
        </div>
      </div>
    
    `;
  }
}

customElements.define("collapse-card", CollapseCard);
