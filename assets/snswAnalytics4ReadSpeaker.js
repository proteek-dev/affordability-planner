(({behaviors:e},t)=>{t.events.readSpeakerButtonClick=({currentTarget:e},t=null)=>{var n,l,r;const{parentElement:a}=e||{};let o=null!==(n=null!==(l=null!==(r=null!=t?t:a.ariaLabel)&&void 0!==r?r:e.getAttribute("title"))&&void 0!==l?l:a.getAttribute("title"))&&void 0!==n?n:a.innerText;switch(o){case"Automatic Scrolling":var s,c;o="scrolloff"===(null!==(s=null!==(c=e.getAttribute("data-scroll-state"))&&void 0!==c?c:a.getAttribute("data-scroll-state"))&&void 0!==s?s:null)?o+" On":o+" Off";break;case"Listen to this page using ReadSpeaker":case"clicklisten":o="Listen";break;case"Close Player":o="Close";break;case"Play":o="Resume"}dataLayer.push({event:"component_interaction",component_type:"readspeaker",component_text:o,section_id:"page_content",position_id:1,destination_url:"(not set)"})},e.SnswAnalytics4ReadSpeaker={attach(e){const n=e.querySelector("a.rsbtn_play");n&&n.addEventListener("click",n=>{t.events.readSpeakerButtonClick(n);const l=document.querySelector("#readspeaker_button");if(l){new MutationObserver((n,l)=>{n.forEach(({type:n})=>{if("childList"===n||"attributes"===n){const n=e.querySelectorAll(".rsicn:not([class*='rsicn-logo']), .rs-controlpanel-scroll-label");n&&n.forEach(e=>{e.addEventListener("click",t.events.readSpeakerButtonClick)})}}),l.disconnect()}).observe(l,{childList:!0,attributes:!0})}});const l=n=>{const l=n.target.classList;if(!l.contains("rspopup_btn")&&!l.contains("rspopup_label"))return;t.events.readSpeakerButtonClick(n,"Listen");const r=e.querySelectorAll(".rsicn:not([class*='rsicn-logo']), .rs-controlpanel-scroll-label");r&&r.forEach(e=>{e.addEventListener("click",t.events.readSpeakerButtonClick)})};document.addEventListener("selectionchange",()=>{""!==document.getSelection().toString()?document.body.addEventListener("click",l):document.body.removeEventListener("click",l)})}}})(Drupal,SnswAnalytics);
