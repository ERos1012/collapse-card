import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
const imageURL = new URL("../assets/open-wc-logo.svg", import.meta.url).href;


class CollapseCard extends LitElement {
  static properties = {
    badgeHeader: { type: String},
    badgeName: { type: String},
    badgeUrl: { type: String},
    badgeDescription: { type: String},
    badgeImage: { type: String},
    badgeCreator: { type: String },
    timeToComplete: { type: String},
    stepsName: { type: String},
    stepsDescription: { type: String},
    stepsTime: { type: String},
  };

  static styles = css`
    .wrapper {
      background-color: lightblue;
      border: 1px solid black;
      display: flex;
      align-items: center;
    }
    .image {
      display: inline-flex;
      width: 50px;
      height: 50px;
    }
    .item {
      display: inline-flex;
      flex-direction: column;
      align-items: left;
    }
    .badgeNamecss{
      font-size: 10px;
      color: black;
    }
    .backGroundColor{
      background-color: light blue;
      border-color: dark blue;
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
        <!--<img src="${this.badgeImage}" alt="Badge Image" /> -->
       <simple-icon accent-color="yellow" icon="hardware:device-hub"> </simple-icon> 
        </div>
        <div class="item">
          <div class = "badgeNamecss">
        <summary><h2>${this.badgeHeader}</h2></summary>
        </div>
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
