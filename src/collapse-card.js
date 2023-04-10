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
    timeToComplete2: { type: String },
    stepsName: { type: String },
    stepsDescription: { type: String },
    stepsTime: { type: String },
    open: { type: Boolean },
    step1: {type: String},
    step2: {type: String},
    aproxTime: {type: String},
    infoLink: {type: String},

  };

  static styles = css`
    .card {
  border width: 0.5px 0.5px 0.5px 10px;
  border-style: solid;
  border-color: #0082cb;
  border radius: 5px;
  margin-left: 16px;
  margin-right: 16px;
  align-items: left;
  border-left: 15px solid #0082cb;
  background-color: #e4f6f8;
  
}
.card-header {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center; 
}
.card-content {
  display: none;
}
.card.open .card-content {
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 10px;
}
.badgeHeader {
  margin: 0;
  flex-grow: 1; 
}
.badgeDescription {
  color: purple;
  margin: 10px 0;
}
.phoneAndTime {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d3d3d3;
  border: solid;
  border-width: thin;
  border-color: #a5a5a5;
}
.phoneAndTime simple-icon {
  margin-right: 5px;
  background-color:#d3d3d3;
}
.arrowCard {
  margin: 20px;
}
.step1{
  margin-right: 15px;
}
.simple-icon {
  margin-right: 10px;
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
    this.step1= "Step 1";
    this.aproxTime ="10";
    this.infoLink= "info link";
    this.open = false;
  }

  render() {
    return html`
    
      <div class="card ${this.open ? "open" : ""}">
        <div class="card-header" @click=${this.toggleOpen}>
        <simple-icon accent-color="pink" icon="hardware:desktop-mac"></simple-icon>
          <h2 class="badgeHeader">${this.badgeHeader}</h2>

          <span class="arrowCard">${this.open ? "▲" : "▼"}</span>
        </div>
        <div class="card-content">
          <slot>
            
            <p>${this.badgeDescription}</p>
            <p>${"info link"}</p>

            <p> ${"------------------------------------------"}</p>
            <p>${"Badge Creator: "+ this.badgeCreator}</p>
            <p>${"Approximate Time: "+ this.aproxTime}</p>

            <h4> Steps to earn this badge </h4>
            <div class="badge-details phoneAndTime">
            <simple-icon accent-color="white" icon="av:play-circle-filled"></simple-icon>
            <p>${this.step1}</p>
           <p class="time-to-complete">${this.timeToComplete}</p>
           </div>
           <div class="badge-details phoneAndTime">
            <simple-icon accent-color="white" icon="av:featured-play-list"></simple-icon>
            <p>${this.step2}</p>
           <p class="time-to-complete">${this.timeToComplete2}</p>
           </div>
          </slot>
        </div>
      </div>
      <p>${"         "}</p>
    `;
  }
  
  
  

  toggleOpen() {
    this.open = !this.open;
  }
}

customElements.define("collapse-card", CollapseCard);
