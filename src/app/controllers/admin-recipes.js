const Admin = require('../models/Admin-recipes')

exports.index = function (req, res) { // Mostrar a lista de receitas
    Admin.all(function(recipes) {
        return res.render("admin/recipe/list", { recipes });
    })
}

exports.create = function (req, res) { // Mostrar formulário de nova receita
    return res.render("admin/recipe/create")
}


exports.show = function (req, res) { // Exibir detalhes de uma receita
    Admin.find(req.params.id, function(recipe){
        return res.render("admin/recipe/detail", { recipe })
    })
}

exports.edit = function (req, res) { // Mostrar formulários de edição de receita
    Admin.find(req.params.id, function(recipe){
        return res.render("admin/recipe/edit", { recipe })
    })
}

exports.post = function (req, res) { // Cadastrar nova receita
    Admin.create(req.body, function (recipe) {
        return res.redirect(`/admin/recipes/${recipe.id}`)
    })
}

exports.put = function (req, res) { // Editar uma receita  
    Admin.update(req.body, function(id) {
        return res.redirect(`/admin/recipes/${id}`);
    })
}

exports.delete = function (req, res) { // Deletar uma receita
    Admin.delete(req.body.id ,function() {
        return res.redirect(`/admin/recipes`)
    })
}