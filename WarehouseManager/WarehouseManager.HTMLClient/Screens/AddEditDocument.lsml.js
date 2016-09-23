/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditDocument.DocumentNumber_postRender = function (element, contentItem) {
    // Write code here.
    if ($(element).val == null) {
        $(element).val = Math.floor(Math.random() * 90000) + 10000;
    };
};
myapp.AddEditDocument.GenerateDocumentNumber_execute = function (screen) {
    // Write code here.

};
myapp.AddEditDocument.Remove_Books_execute = function (screen) {
    // Write code here.
    var selItem = screen.details.properties.screenEntity.value.selectedItem;
};