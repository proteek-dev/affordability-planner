(({behaviors:e},t,n)=>{t.events.globalHeaderLinkClick=e=>{const n=t.componentIds(e.currentTarget,"#global-header [class^='NavLink__link'],[class*='MenuButton__mobileNav'],[class*='MenuButton__globalHeader']");dataLayer.push({event:"component_interaction",component_type:"link_menu_global",component_text:t.linkText(e.currentTarget),section_id:n.section_id||null,position_id:n.position_id||null,destination_url:e.currentTarget.href})},e.SnswAnalytics4GlobalHeaderLinks={mounted(e){const n=e.querySelectorAll("[class^='NavLink__link'], [class*='MenuButton__mobileNav'], [class*='MenuButton__globalHeader']");n&&n.forEach(e=>{e.addEventListener("click",t.events.globalHeaderLinkClick)})}},t.events.changeLanguageClick=e=>{const{language:n}=e.currentTarget.dataset,a=t.componentIds(e.currentTarget,"[class^='Translate__link']");dataLayer.push({event:"component_interaction",component_type:"language_translate",component_text:n,section_id:a.section_id||null,position_id:a.position_id||null})},e.SnswAnalytics4ChangeLanguage={mounted(e){const n=e.querySelectorAll("[class^='Translate__link']");n&&n.forEach(e=>{e.addEventListener("click",t.events.changeLanguageClick)})}},t.events.globalFooterLinkClick=e=>{const n=t.componentIds(e.currentTarget,"#global-footer a");dataLayer.push({event:"component_interaction",component_type:"link_menu_global",component_text:t.linkText(e.currentTarget),section_id:n.section_id||null,position_id:n.position_id||null,destination_url:e.currentTarget.href})},e.SnswAnalytics4GlobalFooterLinks={mounted(e){const n=e.querySelectorAll("#global-footer a");n&&n.forEach(e=>{e.addEventListener("click",t.events.globalFooterLinkClick)})}},e.SnswAnalytics4GlobalHeaderSearchSuggestions={mounted(e){const n=e.querySelector("[id^='search-bar-listbox']");new MutationObserver(n=>{n.forEach(({addedNodes:n})=>{n.forEach(({firstChild:n})=>{n.addEventListener("click",n=>{const a=e.querySelector("[class^='SearchBar__form'] [name=q]").value;t.events.searchSuggestionClick(n.currentTarget,a,"header_global")})})})}).observe(n,{childList:!0})}},e.SnswAnalytics4GlobalHeaderSearchSubmit={mounted(e){const n=e.querySelector("[class^='SearchBar__button']");n&&n.addEventListener("click",()=>{const n=e.querySelector("[class^='SearchBar__form'] [name=q]").value;t.events.searchSubmitBtnClick(n,"search_global","header_global")})}},e.SnswAnalytics4GlobalNav={attach(t){const a=n("ga4-global-header","#global-header",t),o=n("ga4-global-footer","#global-footer",t);if(0===a.length||0===o.length)return;const l=a.shift(),s=t=>setTimeout(()=>{e.SnswAnalytics4GlobalHeaderLinks.mounted(t),e.SnswAnalytics4ChangeLanguage.mounted(t),e.SnswAnalytics4GlobalHeaderSearchSubmit.mounted(t),e.SnswAnalytics4GlobalHeaderSearchSuggestions.mounted(t)},3e3),r=o.shift(),i=t=>setTimeout(()=>{e.SnswAnalytics4GlobalFooterLinks.mounted(t)},3e3),c="data-mounted";if(l.hasAttribute(c)||r.hasAttribute(c))return l.hasAttribute(c)&&s(l),void(r.hasAttribute(c)&&i(r));const u={attributes:!0},d=new MutationObserver((e,t)=>{e.forEach(({target:e,attributeName:n})=>{e===l&&n===c&&(s(l),t.disconnect()),e===r&&n===c&&(i(r),t.disconnect())})});d.observe(l,u),d.observe(r,u)}}})(Drupal,SnswAnalytics,once);