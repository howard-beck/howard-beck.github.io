document.addEventListener("DOMContentLoaded", function () {
    document.body.removeChild(document.getElementById("js-warning"))

    txt = "<br />"
    txt += '<a href="../">return to home page</a><br /><br />'

    div = document.createElement("div")
    div.innerHTML = txt

    document.body.appendChild(div)
})

navs = ["about", "notes", "shenanigans"]

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

        document.getElementById("nav").appendChild(elm)
    }
}