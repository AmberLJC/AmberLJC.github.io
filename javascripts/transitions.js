$(document).ready(function() {
    window.onpageshow = function(event) {
        if (event.persisted) {
            document.body.classList.remove('fade-out');
        }
    };

    $("a").on("click", function(event) {
        const link = $(this);
        const href = link.attr("href");

        // Use try-catch for invalid URL hrefs like "javascript:void(0)"
        try {
            const url = new URL(href, window.location.origin);
            // If it's an external link, let the browser handle it.
            if (url.hostname !== window.location.hostname) {
                return;
            }
        } catch (e) {
            // if the URL is invalid, it's not a page navigation link.
            return;
        }


        // If it's an anchor on the same page, or special protocols, let the browser handle it.
        if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
            return;
        }

        // If it's a file download, let the browser handle it.
        if (href.includes(".pdf") || href.includes(".zip")) { // or other extensions
            return;
        }
        
        // if it is a link with a target, let the browser handle it.
        if(link.attr("target")){
            return;
        }

        event.preventDefault();
        document.body.classList.add("fade-out");
        setTimeout(function() {
            window.location.href = href;
        }, 500);
    });
}); 