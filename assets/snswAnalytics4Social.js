(({behaviors:n},e)=>{e.events.socialShareLinkClick=(n,t)=>{const i=e.componentIds(n.currentTarget,"#socialSharingMenu a");dataLayer.push({event:"component_interaction",component_type:"link_social_share",component_text:t,section_id:i.section_id||null,position_id:i.position_id||null,destination_url:decodeURIComponent(n.currentTarget.href)})},n.SnswAnalytics4Social={attach(n){window.addEventListener("DOMContentLoaded",()=>{const t=n.querySelectorAll("#socialSharingMenu a");t&&t.forEach(n=>{const t=e.getAriaAttribute(n,"aria-label");n.addEventListener("click",n=>e.events.socialShareLinkClick(n,t))})})}}})(Drupal,SnswAnalytics);