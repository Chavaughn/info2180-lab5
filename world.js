window.addEventListener('load', () => {

    let sanitizeUrl;
    let sanitizeVal;

    document.getElementById("country").className += " load";
    document.getElementById("lookup").className += " load";
    document.getElementById("citylookup").className += " load";

    let heading = document.querySelector("header h1");
    heading.style.color = "#fff";
    heading.style.transition = "all 2s ease-in-out";

    let resultDiv = document.querySelector("div#result");
    document.querySelector("button#lookup").addEventListener("click", (event) => {
        sanitizeVal = document.querySelector("input#country").value.replace(/[-&\/\\#,+()$@|~%!.'":;*?<>{}]/g, '');
        sanitizeUrl = `world.php?country= ${sanitizeVal}`.replace(/"[^-0-9+@#/%?~_|!:,.;\(\)]"/g, '');
        ajaxCall(event);

    });

    document.querySelector("button#citylookup").addEventListener("click", (event) => {
        sanitizeVal = document.querySelector("input#country").value.replace(/[-&\/\\#,+()$@|~%!.'":;*?<>{}]/g, '');
        sanitizeUrl = `world.php?country= ${sanitizeVal}&context=cities`.replace(/"[^-0-9+@#/%?~_|!:,.;\(\)]"/g, '');
        ajaxCall(event);
    });

    let ajaxCall = (event) => {
        event.preventDefault();
        fetch(sanitizeUrl, { method: 'GET' })
            .then(resp => resp.text())
            .then(info => {
                resultDiv.innerHTML = '';
                resultDiv.innerHTML = info;
            })
    }


});