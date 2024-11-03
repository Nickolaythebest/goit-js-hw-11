import{S as f,i as s}from"./assets/vendor-5ObWk2rO.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const g="46842885-9f0c2ceed82c15a306e254aa9";function h(o){const n=`https://pixabay.com/api/?key=${g}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(n).then(t=>{if(!t.ok)throw new Error("Failed to fetch images");return t.json()}).then(t=>t.hits).catch(t=>{throw console.error("Error fetching images:",t),t})}let l;function p(o){const n=document.getElementById("gallery"),t=o.map(({webformatURL:i,largeImageURL:e,tags:r,likes:a,views:d,comments:m,downloads:u})=>`
    <li class="item gallery-item">
        <a href="${e}" class="image-card">
            <img src="${i}" alt="${r}" loading="lazy" class="gallery-image"/>
            <div class="image-info">
                <span>❤️ ${a}</span>
                <span>👁️ ${d}</span>
                <span>💬 ${m}</span>
                <span>⬇️ ${u}</span>
            </div>
        </a>
        </li>
    `).join("");n.innerHTML=t,l?l.refresh():l=new f(".gallery a",{captionsData:"alt",captionDelay:250})}function y(){document.getElementById("loader").classList.remove("hidden")}function E(){document.getElementById("loader").classList.add("hidden")}const L=document.getElementById("search-form"),c=document.getElementById("search-input"),I=document.getElementById("gallery");L.addEventListener("submit",o=>{o.preventDefault();const n=c.value.trim();if(!n){s.error({title:"Error",message:"Please enter a search term."});return}y(),I.innerHTML="",h(n).then(t=>{t.length===0?s.warning({message:"Sorry, there are no images matching your search query. Please try again!"}):p(t)}).catch(()=>{s.error({title:"Error",message:"Something went wrong. Please try again later."})}).finally(()=>{E(),c.value=""})});
//# sourceMappingURL=index.js.map
