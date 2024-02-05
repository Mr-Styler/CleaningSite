exports.getErrorPage = (req, res, next) => {
    res.status(404).render("404", {PageTitle: "Page not found", Path: ""})
}