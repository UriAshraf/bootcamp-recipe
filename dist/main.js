const fetch = function() {
    const input = $(`#input`).val().toLowerCase()
    $.get(`/recipes/${input}`, function (response) {
        render(response)
    })
}