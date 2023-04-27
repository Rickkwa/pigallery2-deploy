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

    // Analytics

});
