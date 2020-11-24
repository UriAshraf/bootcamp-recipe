const render = function (data) {
    const source = $(`#recipes-template`).html()
    const template = Handlebars.compile(source)
    const newHTML = template({data});
    $(`#recipes`).empty().append(newHTML)

}