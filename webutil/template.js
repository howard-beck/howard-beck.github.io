$ = (x, func) => {
    if (func == null) {
        return document.querySelector(x)
    } else {
        document.querySelectorAll(x).forEach(func)
    }
}

document.addEventListener("DOMContentLoaded", function () {
    $("#js-warning", d => document.body.removeChild(d))

    txt = "<br />"
    txt += '<a href="../">return to home page</a><br /><br />'

    div = document.createElement("div")
    div.innerHTML = txt

    document.body.appendChild(div)
})

navs = ["about", "notes", "shenanigans", "classes"]

function iam(thenav) {
    for (i = 0; i < navs.length; i++) {
        elm = null;
        if (thenav == navs[i]) {
            elm = document.createElement("span")
        } else {
            elm = document.createElement("a")
            href = "./"
            if (navs[i] != "about") {
                href += navs[i]
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