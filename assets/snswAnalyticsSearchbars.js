(({behaviors:e},t,n)=>{t.events.searchSubmit=(e,r)=>{200!==n.internal_response_status&&(r="Search_404"),t.dlPush({event:"Search_Submit",event_category:r,event_action:"Submit",event_label:e})},e.homeSearchSubmit={attach(e){const n=e.querySelectorAll(".page-hero--search form");n&&n.forEach(e=>{e.addEventListener("submit",e=>{const n=e.currentTarget.querySelector('[name="q"]').value;t.events.searchSubmit(n,"Home_Hero")})})}},t.events.suggestionClick=(e,n,r)=>{const a=Array.prototype.slice.call(e.parentElement.querySelectorAll("li")).indexOf(e),c=e.innerText;t.dlPush({event:"Search_Suggestion_Link_Click",event_category:r,event_action:"Click",event_label:`${n}:${c}:${a}`})}})(Drupal,SnswAnalytics,drupalSettings);
