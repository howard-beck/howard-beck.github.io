$ = (x, func) => {
    if (func == null) {
        return document.querySelector(x)
    } else {
        document.querySelectorAll(x).forEach(func)
    }
}

document.addEventListener("DOMContentLoaded", function () {
    url = window.location.href
    quest = url.split("?").pop()
    if (quest.indexOf("utm_source=chatgpt.com") > -1) {
        document.body.innerHTML = ""
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        return
    }

    $("#js-warning", d => document.body.removeChild(d))

    txt = "<br />"
    txt += '<a href="../">return to home page</a><br /><br />'

    div = document.createElement("div")
    div.innerHTML = txt

    document.body.appendChild(div)
})

navs = ["about", "notes", "shenanigans", "classes", "math travel blog"]

function iam(thenav) {
    for (i = 0; i < navs.length; i++) {
        elm = null;
        if (thenav == navs[i]) {
            elm = document.createElement("span")
        } else {
            elm = document.createElement("a")
            href = "./"
            if (navs[i] != "about") {
                href += navs[i].replaceAll(" ", "-")
            }

            if (thenav != "about") {
                href = "." + href
            }
            elm.href = href
        }
        elm.innerHTML = navs[i]

        $("#nav").appendChild(elm)
    }
}