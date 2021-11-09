// Create a class for the element
class SkillBar extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    

    // Settings
    const barHeight = '4px';

    // Create a shadow root
    const shadow = this.attachShadow({mode: 'open'});
    
    const data = document.createElement('span');
    data.setAttribute('class', 'data');

    const bar = document.createElement('div');
    bar.setAttribute('class', 'bar');
    
    // Get category and set colors
    const barCategory = this.getAttribute('data-type');
    if (barCategory == "design"){
      data.barColor =  '#FCBA57';
    } else{
      data.barColor = '#A790FF';
    }
    
    // Take attribute content and put it inside the info span
    const value = this.getAttribute('value');    
    const max = this.getAttribute('max');
    const percentage = value/max * 100;

    // Create some CSS to apply to the shadow dom
    const style = document.createElement('style');
    console.log(style.isConnected);

    style.textContent = `
      .bar {
        width: 100%;
        margin-bottom: 8px;
        background: rgba(240, 235, 228, 0.5);
        border-radius: 3px;
        height: ${barHeight};
      }
      .data {
        width: ${percentage}%;
        display: block;
        background-color: ${data.barColor};
        border-radius: 3px;
        height: ${barHeight};
      }
    `;

    // Attach the created elements to the shadow dom
    shadow.appendChild(style);
    console.log(style.isConnected);
    shadow.appendChild(bar);
    bar.appendChild(data);
  }
}

// Define the new element
customElements.define('skill-bar', SkillBar);