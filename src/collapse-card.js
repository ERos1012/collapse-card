import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

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
    icon: { type: String},
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
    this.icon = "hardware:device-hub";
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="image">
        <!--<img src="${this.badgeImage}" alt="Badge Image" /> -->
       <simple-icon accent-color="yellow" icon="${this.icon}"> </simple-icon> 
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
