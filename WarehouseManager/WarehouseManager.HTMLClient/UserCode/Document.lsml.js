/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.Document.created = function (entity) {
    // Write code here.
    entity.DocumentDate = new Date();
    entity.DocumentNumber = (Math.floor(Math.random() * 90000000000) + 10000000000).toString();
};