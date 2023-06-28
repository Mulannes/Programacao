class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <style>
      .wrapper {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 100%);
        overflow: hidden;
        scroll-behavior: smooth;
    }
    
    .wrapper section {
        width: 100%;
        position: relative;
        display: grid;
        grid-template-columns: repeat(5, auto);
        margin: 20px 0px;
    }
    
    .wrapper section .item0
    {
        padding: 0 2px;
        transition: 250ms all;
    }
    
    .wrapper section .item0:hover
    {
        margin: 0 40px;
        transform: scale(1.2);
    }
    
    .wrapper section a {
        position: absolute;
        color: #fff;
        text-decoration: none;
        font-size: 6em;
        background: black;
        width: 80px;
        padding: 20px;
        text-align: center;
        z-index: 1;
    }
    
    .wrapper section a:nth-of-type(1) {
        top: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(-90deg, rgba(0, 0, 0, 0) 0%, black 100%);
    }
    
    .wrapper section a:nth-of-type(2) {
        top: 0;
        bottom: 0;
        right: 0;
        background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, black 100%);
    }
    
    .popup-wrapper {
        background-color: rgba(0, 0, 0, .7);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: none;
    }
    
    .popup {
        position: relative;
        text-align: center;
        margin: 10% auto;
        padding: 20px;
        background-color: var(--dark-gray);
        width: 75%;
        height: 70%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: auto;
        place-items: center;
    }
    
    .popup a {
        background-color: gainsboro;
        color: black;
        text-decoration: none;
        padding: 6px 10px;
    }
    
    .popup-close {
        display: flex;
        position: absolute;
        color: white;
        top: 8px;
        right: 8px;
        cursor: pointer;
        padding: 10px 27px;
        font-size: 2em;
        text-align: center;
        align-items: center;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-weight: 800;
        background: linear-gradient(blue 0 0) var(--p, 0)/var(--p, 0) no-repeat;
        transition: .4s, background-position 0s;
        background-color: red;
    }
    
    .popup-close:hover {
        --p: 100%;
        color: #fff;
    }
    
    .popup-content-left {
        grid-column-start: 1;
        grid-column-end: 1;
        grid-row-start: 1;
        grid-row-end: 4;
    }
    
    .popup-content-right {
        grid-column-start: 2;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 4;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    
    
    .popup-link {
        width: 50%;
        height: 50%;
        grid-column-start: 1;
        grid-column-end: 5;
    }
    
    </style>
      <div class="item0">
        <img src="https://occ-0-1567-1123.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABRvngexxF8H1-OzRWFSj6ddD-aB93tTBP9kMNz3cIVfuIfLEP1E_0saiNAwOtrM6xSOXvoiSCMsihWSkW0dq808-R7_lBnr6WHbjkKBX6I3sD0uCcS8kSPbRjEDdG8CeeVXEAEV6spQ.webp"
        alt="film image">
            </div>
      `;
    }
  }
  
  customElements.define("teste-2", Header);