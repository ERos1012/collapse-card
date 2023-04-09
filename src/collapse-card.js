import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
const imageURL = new URL("../assets/open-wc-logo.svg", import.meta.url).href;

class CollapseCard extends LitElement {
  static properties = {
    badgesCount: {type: String},
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
  };

  static styles = css`
    .wrapper {
      border-left: solid:
      background-color: light blue;
      border-left-color: dark blue;
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
    
    .righttrial{
      position: absolute;
      right: 0;
    }
    .contentposition{
      position: absolute;
      left:0;
    }
    .details{
      display:none;
    }
    .summary::-webkit-details-marker {
    display: none
     }
     


  .details {
      font-size: 1rem;
      margin: 7em auto;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
        0 10px 10px -5px rgba(0, 0, 0, 0.04);
      width: 100%;
      background: light blue;
      border-radius: 8px;
      position: relative;
      width: 500px;
    }
    

  

	
  
	

	

  
  
    
    
  `;

  constructor() {
    super();
    this.badgesCount= "Badge Count";
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
          <details>
            <summary>
          <span class ="summary-title">
          ${this.badgeHeader}</span>
     <div class ="summary-chev-up">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down">
  <polyline points="6 9 12 15 18 9"></polyline></svg>
       
      </summary>

          <div class= "sum-con">
          
            <h3>${this.badgeName}</h3>
            
            
            <p>${this.badgeDescription}</p>
            <p>${this.badgeCreator}</p>
            ${this.badgeImage}<simple-icon accent-color="teal" icon="communication:stay-current-portrait">
             </simple-icon>
            <p>${this.timeToComplete}</p>
            <p>${this.stepsName}</p>
            <p>${this.stepsDescription}</p>
            <p>${this.stepsTime}</p>
            </div>
            <div class="summary-chev-down">
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15">
    </polyline></svg>
            </div>
          </details>
       
        
        

    `;
  }
}

customElements.define("collapse-card", CollapseCard);
