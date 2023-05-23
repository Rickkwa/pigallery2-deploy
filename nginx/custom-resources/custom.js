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
    searchExpandBtn.className = searchExpandBtn.className.replace("btn-light", "").replace("btn", "");
    searchExpandBtn.querySelector("span").className = searchExpandBtn.querySelector("span").className.replace("oi-chevron-bottom", "oi-magnifying-glass");

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
