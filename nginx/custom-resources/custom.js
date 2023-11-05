const enableCustomJS = true;

if (enableCustomJS != undefined && enableCustomJS) {
    activateCustomJS();
}
else {
    console.debug("Skipping loading custom JS");
}

function activateCustomJS() {
    document.addEventListener("DOMContentLoaded", function () {
        // Load custom theme
        let themeTag = document.createElement("link");
        themeTag.rel = "stylesheet";
        themeTag.href = "/custom-resources/theme.css";
        document.head.appendChild(themeTag);

        // Find the word "Photography" in the title and wrap it in <span> tag with white color
        let titleEl = document.querySelector(".navbar-brand strong")
        titleEl.innerHTML = titleEl.innerHTML.replace(/(photography)/ig, "<span style='color: white'>$1</span>")

        // Edit favicon
        let faviconLink = document.querySelector("link[rel~='icon']");
        if (!faviconLink) {
            faviconLink = document.createElement('link');
            faviconLink.rel = 'icon';
            document.head.appendChild(faviconLink);
        }
        faviconLink.href = '/custom-resources/favicon/favicon.ico';

        // Edit icon for the Search button in navbar
        let searchExpandBtn = document.querySelector("app-gallery-search > form > div > button:last-of-type");
        let searchExecuteBtn = document.querySelector("app-gallery-search > form > div > button:first-of-type");
        searchExpandBtn.querySelector("svg").parentNode.appendChild(searchExecuteBtn.querySelector("svg").cloneNode(true));
        searchExpandBtn.querySelector("svg").parentNode.style = ""; // Remove style here so custom css can take place
        searchExpandBtn.querySelector("svg:first-of-type").remove();

        // Change maps icon and move it to breadcrumb bar rightside
        // This is paired with some css changes in theme.css
        let mapIntervalID = setInterval(function() {
            let mapEl = document.querySelector("app-gallery-map");
            if (!mapEl) {
                console.debug("Map not ready yet");
                return;
            }
            let mapBtn = mapEl.querySelector("div#map");
            mapEl.querySelectorAll("div#map > div:not(.overlay)").forEach(el => {el.remove()}) // Leave only the .overlay div
            // Add the map SVG
            let overlayEl = mapBtn.querySelector("div.overlay");
            overlayEl.innerHTML = `<ng-icon name="ionFunnelOutline" title="Map" style="--ng-icon__size: 1em;"> <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" style="width:var(--ng-icon__size, 1em);height:var(--ng-icon__size, 1em)"><path d="M313.27 124.64L198.73 51.36a32 32 0 00-29.28.35L56.51 127.49A16 16 0 0048 141.63v295.8a16 16 0 0023.49 14.14l97.82-63.79a32 32 0 0129.5-.24l111.86 73a32 32 0 0029.27-.11l115.43-75.94a16 16 0 008.63-14.2V74.57a16 16 0 00-23.49-14.14l-98 63.86a32 32 0 01-29.24.35zM328 128v336M184 48v336" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 32)"/></svg> </ng-icon>`;
            // Move to bar
            mapEl.className = mapEl.className.replace("rounded", "btn btn-outline-secondary btn-navigator")
            let photoCountEl = document.querySelector("app-gallery-navbar div.photos-count");
            let divider = document.querySelector("app-gallery-navbar div.divider")
            photoCountEl.insertAdjacentElement("afterend", mapEl);
            photoCountEl.insertAdjacentElement("afterend", divider.cloneNode(true));
            console.debug("Map is ready, clearing interval", mapIntervalID);
            clearInterval(mapIntervalID);
        }, 200);

        // Analytics
        let metricsTag = document.createElement("script")
        metricsTag.src = "https://www.googletagmanager.com/gtag/js?id=G-KLLP7S6226";
        metricsTag.async = true;
        document.body.appendChild(metricsTag);

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-KLLP7S6226');
    });
}
