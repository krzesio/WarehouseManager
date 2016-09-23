/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddEditBook.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditBook
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditBook,
            data: lightSwitchApplication.AddEditBook,
            value: lightSwitchApplication.AddEditBook
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditBook,
            data: lightSwitchApplication.AddEditBook,
            value: lightSwitchApplication.Book
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditBook,
            data: lightSwitchApplication.Book,
            value: lightSwitchApplication.Book
        },
        Quantity: {
            _$class: msls.ContentItem,
            _$name: "Quantity",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditBook,
            data: lightSwitchApplication.Book,
            value: Number
        },
        Title: {
            _$class: msls.ContentItem,
            _$name: "Title",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditBook,
            data: lightSwitchApplication.Book,
            value: String
        },
        Author: {
            _$class: msls.ContentItem,
            _$name: "Author",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditBook,
            data: lightSwitchApplication.Book,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditBook,
            data: lightSwitchApplication.Book,
            value: lightSwitchApplication.Book
        },
        PublicationDate: {
            _$class: msls.ContentItem,
            _$name: "PublicationDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditBook,
            data: lightSwitchApplication.Book,
            value: Date
        },
        Shelf: {
            _$class: msls.ContentItem,
            _$name: "Shelf",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditBook,
            data: lightSwitchApplication.Book,
            value: lightSwitchApplication.Shelf
        },
        ShelfTemplate: {
            _$class: msls.ContentItem,
            _$name: "ShelfTemplate",
            _$parentName: "Shelf",
            screen: lightSwitchApplication.AddEditBook,
            data: lightSwitchApplication.Shelf,
            value: lightSwitchApplication.Shelf
        },
        Symbol: {
            _$class: msls.ContentItem,
            _$name: "Symbol",
            _$parentName: "ShelfTemplate",
            screen: lightSwitchApplication.AddEditBook,
            data: lightSwitchApplication.Shelf,
            value: String
        },
        Warehouse: {
            _$class: msls.ContentItem,
            _$name: "Warehouse",
            _$parentName: "ShelfTemplate",
            screen: lightSwitchApplication.AddEditBook,
            data: lightSwitchApplication.Shelf,
            value: lightSwitchApplication.Warehouse
        },
        Symbol1: {
            _$class: msls.ContentItem,
            _$name: "Symbol1",
            _$parentName: "Warehouse",
            screen: lightSwitchApplication.AddEditBook,
            data: lightSwitchApplication.Warehouse,
            value: String
        },
        AdditionalInfo: {
            _$class: msls.ContentItem,
            _$name: "AdditionalInfo",
            _$parentName: "Warehouse",
            screen: lightSwitchApplication.AddEditBook,
            data: lightSwitchApplication.Warehouse,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditBook
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditBook, {
        /// <field>
        /// Called when a new AddEditBook screen is created.
        /// <br/>created(msls.application.AddEditBook screen)
        /// </field>
        created: [lightSwitchApplication.AddEditBook],
        /// <field>
        /// Called before changes on an active AddEditBook screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditBook screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditBook],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditBook().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditBook().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditBook().findContentItem("left"); }],
        /// <field>
        /// Called after the Quantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Quantity_postRender: [$element, function () { return new lightSwitchApplication.AddEditBook().findContentItem("Quantity"); }],
        /// <field>
        /// Called after the Title content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Title_postRender: [$element, function () { return new lightSwitchApplication.AddEditBook().findContentItem("Title"); }],
        /// <field>
        /// Called after the Author content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Author_postRender: [$element, function () { return new lightSwitchApplication.AddEditBook().findContentItem("Author"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditBook().findContentItem("right"); }],
        /// <field>
        /// Called after the PublicationDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PublicationDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditBook().findContentItem("PublicationDate"); }],
        /// <field>
        /// Called after the Shelf content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Shelf_postRender: [$element, function () { return new lightSwitchApplication.AddEditBook().findContentItem("Shelf"); }],
        /// <field>
        /// Called after the ShelfTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShelfTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditBook().findContentItem("ShelfTemplate"); }],
        /// <field>
        /// Called after the Symbol content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Symbol_postRender: [$element, function () { return new lightSwitchApplication.AddEditBook().findContentItem("Symbol"); }],
        /// <field>
        /// Called after the Warehouse content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Warehouse_postRender: [$element, function () { return new lightSwitchApplication.AddEditBook().findContentItem("Warehouse"); }],
        /// <field>
        /// Called after the Symbol1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Symbol1_postRender: [$element, function () { return new lightSwitchApplication.AddEditBook().findContentItem("Symbol1"); }],
        /// <field>
        /// Called after the AdditionalInfo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AdditionalInfo_postRender: [$element, function () { return new lightSwitchApplication.AddEditBook().findContentItem("AdditionalInfo"); }]
    });

    lightSwitchApplication.AddEditBooksForDocument.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditBooksForDocument
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditBooksForDocument,
            data: lightSwitchApplication.AddEditBooksForDocument,
            value: lightSwitchApplication.AddEditBooksForDocument
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditBooksForDocument,
            data: lightSwitchApplication.AddEditBooksForDocument,
            value: lightSwitchApplication.BooksForDocument
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditBooksForDocument,
            data: lightSwitchApplication.BooksForDocument,
            value: lightSwitchApplication.BooksForDocument
        },
        Quantity: {
            _$class: msls.ContentItem,
            _$name: "Quantity",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditBooksForDocument,
            data: lightSwitchApplication.BooksForDocument,
            value: Number
        },
        Book: {
            _$class: msls.ContentItem,
            _$name: "Book",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditBooksForDocument,
            data: lightSwitchApplication.BooksForDocument,
            value: lightSwitchApplication.Book
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Book",
            screen: lightSwitchApplication.AddEditBooksForDocument,
            data: lightSwitchApplication.Book,
            value: lightSwitchApplication.Book
        },
        Quantity1: {
            _$class: msls.ContentItem,
            _$name: "Quantity1",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditBooksForDocument,
            data: lightSwitchApplication.Book,
            value: Number
        },
        Title: {
            _$class: msls.ContentItem,
            _$name: "Title",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditBooksForDocument,
            data: lightSwitchApplication.Book,
            value: String
        },
        Author: {
            _$class: msls.ContentItem,
            _$name: "Author",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditBooksForDocument,
            data: lightSwitchApplication.Book,
            value: String
        },
        PublicationDate: {
            _$class: msls.ContentItem,
            _$name: "PublicationDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditBooksForDocument,
            data: lightSwitchApplication.Book,
            value: Date
        },
        Shelf: {
            _$class: msls.ContentItem,
            _$name: "Shelf",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditBooksForDocument,
            data: lightSwitchApplication.Book,
            value: lightSwitchApplication.Shelf
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditBooksForDocument,
            data: lightSwitchApplication.BooksForDocument,
            value: lightSwitchApplication.BooksForDocument
        },
        Document: {
            _$class: msls.ContentItem,
            _$name: "Document",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditBooksForDocument,
            data: lightSwitchApplication.BooksForDocument,
            value: lightSwitchApplication.Document
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "Document",
            screen: lightSwitchApplication.AddEditBooksForDocument,
            data: lightSwitchApplication.Document,
            value: lightSwitchApplication.Document
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditBooksForDocument
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditBooksForDocument, {
        /// <field>
        /// Called when a new AddEditBooksForDocument screen is created.
        /// <br/>created(msls.application.AddEditBooksForDocument screen)
        /// </field>
        created: [lightSwitchApplication.AddEditBooksForDocument],
        /// <field>
        /// Called before changes on an active AddEditBooksForDocument screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditBooksForDocument screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditBooksForDocument],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditBooksForDocument().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditBooksForDocument().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditBooksForDocument().findContentItem("left"); }],
        /// <field>
        /// Called after the Quantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Quantity_postRender: [$element, function () { return new lightSwitchApplication.AddEditBooksForDocument().findContentItem("Quantity"); }],
        /// <field>
        /// Called after the Book content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Book_postRender: [$element, function () { return new lightSwitchApplication.AddEditBooksForDocument().findContentItem("Book"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditBooksForDocument().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Quantity1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Quantity1_postRender: [$element, function () { return new lightSwitchApplication.AddEditBooksForDocument().findContentItem("Quantity1"); }],
        /// <field>
        /// Called after the Title content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Title_postRender: [$element, function () { return new lightSwitchApplication.AddEditBooksForDocument().findContentItem("Title"); }],
        /// <field>
        /// Called after the Author content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Author_postRender: [$element, function () { return new lightSwitchApplication.AddEditBooksForDocument().findContentItem("Author"); }],
        /// <field>
        /// Called after the PublicationDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PublicationDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditBooksForDocument().findContentItem("PublicationDate"); }],
        /// <field>
        /// Called after the Shelf content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Shelf_postRender: [$element, function () { return new lightSwitchApplication.AddEditBooksForDocument().findContentItem("Shelf"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditBooksForDocument().findContentItem("right"); }],
        /// <field>
        /// Called after the Document content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Document_postRender: [$element, function () { return new lightSwitchApplication.AddEditBooksForDocument().findContentItem("Document"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditBooksForDocument().findContentItem("RowTemplate1"); }]
    });

    lightSwitchApplication.AddEditBookstore.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditBookstore
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditBookstore,
            data: lightSwitchApplication.AddEditBookstore,
            value: lightSwitchApplication.AddEditBookstore
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditBookstore,
            data: lightSwitchApplication.AddEditBookstore,
            value: lightSwitchApplication.Bookstore
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditBookstore,
            data: lightSwitchApplication.Bookstore,
            value: lightSwitchApplication.Bookstore
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditBookstore,
            data: lightSwitchApplication.Bookstore,
            value: String
        },
        Address: {
            _$class: msls.ContentItem,
            _$name: "Address",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditBookstore,
            data: lightSwitchApplication.Bookstore,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditBookstore,
            data: lightSwitchApplication.Bookstore,
            value: lightSwitchApplication.Bookstore
        },
        Owner: {
            _$class: msls.ContentItem,
            _$name: "Owner",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditBookstore,
            data: lightSwitchApplication.Bookstore,
            value: lightSwitchApplication.Owner
        },
        OwnerTemplate: {
            _$class: msls.ContentItem,
            _$name: "OwnerTemplate",
            _$parentName: "Owner",
            screen: lightSwitchApplication.AddEditBookstore,
            data: lightSwitchApplication.Owner,
            value: lightSwitchApplication.Owner
        },
        Name1: {
            _$class: msls.ContentItem,
            _$name: "Name1",
            _$parentName: "OwnerTemplate",
            screen: lightSwitchApplication.AddEditBookstore,
            data: lightSwitchApplication.Owner,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "OwnerTemplate",
            screen: lightSwitchApplication.AddEditBookstore,
            data: lightSwitchApplication.Owner,
            value: String
        },
        PhoneNumber: {
            _$class: msls.ContentItem,
            _$name: "PhoneNumber",
            _$parentName: "OwnerTemplate",
            screen: lightSwitchApplication.AddEditBookstore,
            data: lightSwitchApplication.Owner,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditBookstore
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditBookstore, {
        /// <field>
        /// Called when a new AddEditBookstore screen is created.
        /// <br/>created(msls.application.AddEditBookstore screen)
        /// </field>
        created: [lightSwitchApplication.AddEditBookstore],
        /// <field>
        /// Called before changes on an active AddEditBookstore screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditBookstore screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditBookstore],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditBookstore().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditBookstore().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditBookstore().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditBookstore().findContentItem("Name"); }],
        /// <field>
        /// Called after the Address content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Address_postRender: [$element, function () { return new lightSwitchApplication.AddEditBookstore().findContentItem("Address"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditBookstore().findContentItem("right"); }],
        /// <field>
        /// Called after the Owner content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Owner_postRender: [$element, function () { return new lightSwitchApplication.AddEditBookstore().findContentItem("Owner"); }],
        /// <field>
        /// Called after the OwnerTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OwnerTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditBookstore().findContentItem("OwnerTemplate"); }],
        /// <field>
        /// Called after the Name1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name1_postRender: [$element, function () { return new lightSwitchApplication.AddEditBookstore().findContentItem("Name1"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditBookstore().findContentItem("LastName"); }],
        /// <field>
        /// Called after the PhoneNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PhoneNumber_postRender: [$element, function () { return new lightSwitchApplication.AddEditBookstore().findContentItem("PhoneNumber"); }]
    });

    lightSwitchApplication.AddEditDocument.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditDocument
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.AddEditDocument,
            value: lightSwitchApplication.AddEditDocument
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.AddEditDocument,
            value: lightSwitchApplication.Document
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.Document,
            value: lightSwitchApplication.Document
        },
        DocumentNumber: {
            _$class: msls.ContentItem,
            _$name: "DocumentNumber",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.Document,
            value: String
        },
        DocumentDate: {
            _$class: msls.ContentItem,
            _$name: "DocumentDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.Document,
            value: Date
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.Document,
            value: lightSwitchApplication.Document
        },
        Bookstore: {
            _$class: msls.ContentItem,
            _$name: "Bookstore",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.Document,
            value: lightSwitchApplication.Bookstore
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Bookstore",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.Bookstore,
            value: lightSwitchApplication.Bookstore
        },
        BooksForDocuments: {
            _$class: msls.ContentItem,
            _$name: "BooksForDocuments",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.AddEditDocument,
            value: lightSwitchApplication.AddEditDocument
        },
        BooksForDocuments1: {
            _$class: msls.ContentItem,
            _$name: "BooksForDocuments1",
            _$parentName: "BooksForDocuments",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.AddEditDocument,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditDocument,
                _$entry: {
                    elementType: lightSwitchApplication.BooksForDocument
                }
            }
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "BooksForDocuments1",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.BooksForDocument,
            value: lightSwitchApplication.BooksForDocument
        },
        Quantity: {
            _$class: msls.ContentItem,
            _$name: "Quantity",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.BooksForDocument,
            value: Number
        },
        Book: {
            _$class: msls.ContentItem,
            _$name: "Book",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.BooksForDocument,
            value: lightSwitchApplication.Book
        },
        Quantity1: {
            _$class: msls.ContentItem,
            _$name: "Quantity1",
            _$parentName: "Book",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.Book,
            value: Number
        },
        Title: {
            _$class: msls.ContentItem,
            _$name: "Title",
            _$parentName: "Book",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.Book,
            value: String
        },
        Author: {
            _$class: msls.ContentItem,
            _$name: "Author",
            _$parentName: "Book",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.Book,
            value: String
        },
        PublicationDate: {
            _$class: msls.ContentItem,
            _$name: "PublicationDate",
            _$parentName: "Book",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.Book,
            value: Date
        },
        Shelf: {
            _$class: msls.ContentItem,
            _$name: "Shelf",
            _$parentName: "Book",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.Book,
            value: lightSwitchApplication.Shelf
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditDocument
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditDocument, {
        /// <field>
        /// Called when a new AddEditDocument screen is created.
        /// <br/>created(msls.application.AddEditDocument screen)
        /// </field>
        created: [lightSwitchApplication.AddEditDocument],
        /// <field>
        /// Called before changes on an active AddEditDocument screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditDocument screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditDocument],
        /// <field>
        /// Called to determine if the Remove_Books method can be executed.
        /// <br/>canExecute(msls.application.AddEditDocument screen)
        /// </field>
        Remove_Books_canExecute: [lightSwitchApplication.AddEditDocument],
        /// <field>
        /// Called to execute the Remove_Books method.
        /// <br/>execute(msls.application.AddEditDocument screen)
        /// </field>
        Remove_Books_execute: [lightSwitchApplication.AddEditDocument],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("left"); }],
        /// <field>
        /// Called after the DocumentNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentNumber_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("DocumentNumber"); }],
        /// <field>
        /// Called after the DocumentDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("DocumentDate"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("right"); }],
        /// <field>
        /// Called after the Bookstore content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Bookstore_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("Bookstore"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the BooksForDocuments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BooksForDocuments_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("BooksForDocuments"); }],
        /// <field>
        /// Called after the BooksForDocuments1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BooksForDocuments1_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("BooksForDocuments1"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the Quantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Quantity_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("Quantity"); }],
        /// <field>
        /// Called after the Book content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Book_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("Book"); }],
        /// <field>
        /// Called after the Quantity1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Quantity1_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("Quantity1"); }],
        /// <field>
        /// Called after the Title content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Title_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("Title"); }],
        /// <field>
        /// Called after the Author content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Author_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("Author"); }],
        /// <field>
        /// Called after the PublicationDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PublicationDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("PublicationDate"); }],
        /// <field>
        /// Called after the Shelf content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Shelf_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("Shelf"); }]
    });

    lightSwitchApplication.AddEditOwner.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditOwner
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditOwner,
            data: lightSwitchApplication.AddEditOwner,
            value: lightSwitchApplication.AddEditOwner
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditOwner,
            data: lightSwitchApplication.AddEditOwner,
            value: lightSwitchApplication.Owner
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditOwner,
            data: lightSwitchApplication.Owner,
            value: lightSwitchApplication.Owner
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditOwner,
            data: lightSwitchApplication.Owner,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditOwner,
            data: lightSwitchApplication.Owner,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditOwner,
            data: lightSwitchApplication.Owner,
            value: lightSwitchApplication.Owner
        },
        PhoneNumber: {
            _$class: msls.ContentItem,
            _$name: "PhoneNumber",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditOwner,
            data: lightSwitchApplication.Owner,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditOwner
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditOwner, {
        /// <field>
        /// Called when a new AddEditOwner screen is created.
        /// <br/>created(msls.application.AddEditOwner screen)
        /// </field>
        created: [lightSwitchApplication.AddEditOwner],
        /// <field>
        /// Called before changes on an active AddEditOwner screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditOwner screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditOwner],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditOwner().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditOwner().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditOwner().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditOwner().findContentItem("Name"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditOwner().findContentItem("LastName"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditOwner().findContentItem("right"); }],
        /// <field>
        /// Called after the PhoneNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PhoneNumber_postRender: [$element, function () { return new lightSwitchApplication.AddEditOwner().findContentItem("PhoneNumber"); }]
    });

    lightSwitchApplication.AddEditShelf.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditShelf
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditShelf,
            data: lightSwitchApplication.AddEditShelf,
            value: lightSwitchApplication.AddEditShelf
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditShelf,
            data: lightSwitchApplication.AddEditShelf,
            value: lightSwitchApplication.Shelf
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditShelf,
            data: lightSwitchApplication.Shelf,
            value: lightSwitchApplication.Shelf
        },
        Symbol: {
            _$class: msls.ContentItem,
            _$name: "Symbol",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditShelf,
            data: lightSwitchApplication.Shelf,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditShelf,
            data: lightSwitchApplication.Shelf,
            value: lightSwitchApplication.Shelf
        },
        Warehouse: {
            _$class: msls.ContentItem,
            _$name: "Warehouse",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditShelf,
            data: lightSwitchApplication.Shelf,
            value: lightSwitchApplication.Warehouse
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Warehouse",
            screen: lightSwitchApplication.AddEditShelf,
            data: lightSwitchApplication.Warehouse,
            value: lightSwitchApplication.Warehouse
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditShelf
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditShelf, {
        /// <field>
        /// Called when a new AddEditShelf screen is created.
        /// <br/>created(msls.application.AddEditShelf screen)
        /// </field>
        created: [lightSwitchApplication.AddEditShelf],
        /// <field>
        /// Called before changes on an active AddEditShelf screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditShelf screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditShelf],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditShelf().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditShelf().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditShelf().findContentItem("left"); }],
        /// <field>
        /// Called after the Symbol content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Symbol_postRender: [$element, function () { return new lightSwitchApplication.AddEditShelf().findContentItem("Symbol"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditShelf().findContentItem("right"); }],
        /// <field>
        /// Called after the Warehouse content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Warehouse_postRender: [$element, function () { return new lightSwitchApplication.AddEditShelf().findContentItem("Warehouse"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditShelf().findContentItem("RowTemplate"); }]
    });

    lightSwitchApplication.AddEditWarehouse.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditWarehouse
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditWarehouse,
            data: lightSwitchApplication.AddEditWarehouse,
            value: lightSwitchApplication.AddEditWarehouse
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditWarehouse,
            data: lightSwitchApplication.AddEditWarehouse,
            value: lightSwitchApplication.Warehouse
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditWarehouse,
            data: lightSwitchApplication.Warehouse,
            value: lightSwitchApplication.Warehouse
        },
        Symbol: {
            _$class: msls.ContentItem,
            _$name: "Symbol",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditWarehouse,
            data: lightSwitchApplication.Warehouse,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditWarehouse,
            data: lightSwitchApplication.Warehouse,
            value: lightSwitchApplication.Warehouse
        },
        AdditionalInfo: {
            _$class: msls.ContentItem,
            _$name: "AdditionalInfo",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditWarehouse,
            data: lightSwitchApplication.Warehouse,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditWarehouse
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditWarehouse, {
        /// <field>
        /// Called when a new AddEditWarehouse screen is created.
        /// <br/>created(msls.application.AddEditWarehouse screen)
        /// </field>
        created: [lightSwitchApplication.AddEditWarehouse],
        /// <field>
        /// Called before changes on an active AddEditWarehouse screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditWarehouse screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditWarehouse],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditWarehouse().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditWarehouse().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditWarehouse().findContentItem("left"); }],
        /// <field>
        /// Called after the Symbol content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Symbol_postRender: [$element, function () { return new lightSwitchApplication.AddEditWarehouse().findContentItem("Symbol"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditWarehouse().findContentItem("right"); }],
        /// <field>
        /// Called after the AdditionalInfo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AdditionalInfo_postRender: [$element, function () { return new lightSwitchApplication.AddEditWarehouse().findContentItem("AdditionalInfo"); }]
    });

    lightSwitchApplication.BrowseBooks.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseBooks
        },
        BookList: {
            _$class: msls.ContentItem,
            _$name: "BookList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseBooks,
            data: lightSwitchApplication.BrowseBooks,
            value: lightSwitchApplication.BrowseBooks
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "BookList",
            screen: lightSwitchApplication.BrowseBooks,
            data: lightSwitchApplication.BrowseBooks,
            value: String
        },
        Book: {
            _$class: msls.ContentItem,
            _$name: "Book",
            _$parentName: "BookList",
            screen: lightSwitchApplication.BrowseBooks,
            data: lightSwitchApplication.BrowseBooks,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseBooks,
                _$entry: {
                    elementType: lightSwitchApplication.Book
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Book",
            screen: lightSwitchApplication.BrowseBooks,
            data: lightSwitchApplication.Book,
            value: lightSwitchApplication.Book
        },
        Quantity: {
            _$class: msls.ContentItem,
            _$name: "Quantity",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseBooks,
            data: lightSwitchApplication.Book,
            value: Number
        },
        Title: {
            _$class: msls.ContentItem,
            _$name: "Title",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseBooks,
            data: lightSwitchApplication.Book,
            value: String
        },
        Author: {
            _$class: msls.ContentItem,
            _$name: "Author",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseBooks,
            data: lightSwitchApplication.Book,
            value: String
        },
        PublicationDate: {
            _$class: msls.ContentItem,
            _$name: "PublicationDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseBooks,
            data: lightSwitchApplication.Book,
            value: Date
        },
        Warehouse: {
            _$class: msls.ContentItem,
            _$name: "Warehouse",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseBooks,
            data: lightSwitchApplication.Book,
            value: lightSwitchApplication.Warehouse
        },
        Symbol1: {
            _$class: msls.ContentItem,
            _$name: "Symbol1",
            _$parentName: "Warehouse",
            screen: lightSwitchApplication.BrowseBooks,
            data: lightSwitchApplication.Warehouse,
            value: String
        },
        Shelf: {
            _$class: msls.ContentItem,
            _$name: "Shelf",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseBooks,
            data: lightSwitchApplication.Book,
            value: lightSwitchApplication.Shelf
        },
        Symbol: {
            _$class: msls.ContentItem,
            _$name: "Symbol",
            _$parentName: "Shelf",
            screen: lightSwitchApplication.BrowseBooks,
            data: lightSwitchApplication.Shelf,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseBooks
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseBooks, {
        /// <field>
        /// Called when a new BrowseBooks screen is created.
        /// <br/>created(msls.application.BrowseBooks screen)
        /// </field>
        created: [lightSwitchApplication.BrowseBooks],
        /// <field>
        /// Called before changes on an active BrowseBooks screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseBooks screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseBooks],
        /// <field>
        /// Called after the BookList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BookList_postRender: [$element, function () { return new lightSwitchApplication.BrowseBooks().findContentItem("BookList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseBooks().findContentItem("Search"); }],
        /// <field>
        /// Called after the Book content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Book_postRender: [$element, function () { return new lightSwitchApplication.BrowseBooks().findContentItem("Book"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseBooks().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Quantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Quantity_postRender: [$element, function () { return new lightSwitchApplication.BrowseBooks().findContentItem("Quantity"); }],
        /// <field>
        /// Called after the Title content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Title_postRender: [$element, function () { return new lightSwitchApplication.BrowseBooks().findContentItem("Title"); }],
        /// <field>
        /// Called after the Author content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Author_postRender: [$element, function () { return new lightSwitchApplication.BrowseBooks().findContentItem("Author"); }],
        /// <field>
        /// Called after the PublicationDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PublicationDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseBooks().findContentItem("PublicationDate"); }],
        /// <field>
        /// Called after the Warehouse content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Warehouse_postRender: [$element, function () { return new lightSwitchApplication.BrowseBooks().findContentItem("Warehouse"); }],
        /// <field>
        /// Called after the Symbol1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Symbol1_postRender: [$element, function () { return new lightSwitchApplication.BrowseBooks().findContentItem("Symbol1"); }],
        /// <field>
        /// Called after the Shelf content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Shelf_postRender: [$element, function () { return new lightSwitchApplication.BrowseBooks().findContentItem("Shelf"); }],
        /// <field>
        /// Called after the Symbol content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Symbol_postRender: [$element, function () { return new lightSwitchApplication.BrowseBooks().findContentItem("Symbol"); }]
    });

    lightSwitchApplication.BrowseBookstores.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseBookstores
        },
        BookstoreList: {
            _$class: msls.ContentItem,
            _$name: "BookstoreList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseBookstores,
            data: lightSwitchApplication.BrowseBookstores,
            value: lightSwitchApplication.BrowseBookstores
        },
        Bookstore: {
            _$class: msls.ContentItem,
            _$name: "Bookstore",
            _$parentName: "BookstoreList",
            screen: lightSwitchApplication.BrowseBookstores,
            data: lightSwitchApplication.BrowseBookstores,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseBookstores,
                _$entry: {
                    elementType: lightSwitchApplication.Bookstore
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Bookstore",
            screen: lightSwitchApplication.BrowseBookstores,
            data: lightSwitchApplication.Bookstore,
            value: lightSwitchApplication.Bookstore
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseBookstores,
            data: lightSwitchApplication.Bookstore,
            value: String
        },
        Address: {
            _$class: msls.ContentItem,
            _$name: "Address",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseBookstores,
            data: lightSwitchApplication.Bookstore,
            value: String
        },
        Owner: {
            _$class: msls.ContentItem,
            _$name: "Owner",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseBookstores,
            data: lightSwitchApplication.Bookstore,
            value: lightSwitchApplication.Owner
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseBookstores
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseBookstores, {
        /// <field>
        /// Called when a new BrowseBookstores screen is created.
        /// <br/>created(msls.application.BrowseBookstores screen)
        /// </field>
        created: [lightSwitchApplication.BrowseBookstores],
        /// <field>
        /// Called before changes on an active BrowseBookstores screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseBookstores screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseBookstores],
        /// <field>
        /// Called after the BookstoreList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BookstoreList_postRender: [$element, function () { return new lightSwitchApplication.BrowseBookstores().findContentItem("BookstoreList"); }],
        /// <field>
        /// Called after the Bookstore content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Bookstore_postRender: [$element, function () { return new lightSwitchApplication.BrowseBookstores().findContentItem("Bookstore"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseBookstores().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseBookstores().findContentItem("Name"); }],
        /// <field>
        /// Called after the Address content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Address_postRender: [$element, function () { return new lightSwitchApplication.BrowseBookstores().findContentItem("Address"); }],
        /// <field>
        /// Called after the Owner content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Owner_postRender: [$element, function () { return new lightSwitchApplication.BrowseBookstores().findContentItem("Owner"); }]
    });

    lightSwitchApplication.BrowseDocuments.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseDocuments
        },
        DocumentList: {
            _$class: msls.ContentItem,
            _$name: "DocumentList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseDocuments,
            data: lightSwitchApplication.BrowseDocuments,
            value: lightSwitchApplication.BrowseDocuments
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "DocumentList",
            screen: lightSwitchApplication.BrowseDocuments,
            data: lightSwitchApplication.BrowseDocuments,
            value: String
        },
        Document: {
            _$class: msls.ContentItem,
            _$name: "Document",
            _$parentName: "DocumentList",
            screen: lightSwitchApplication.BrowseDocuments,
            data: lightSwitchApplication.BrowseDocuments,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseDocuments,
                _$entry: {
                    elementType: lightSwitchApplication.Document
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Document",
            screen: lightSwitchApplication.BrowseDocuments,
            data: lightSwitchApplication.Document,
            value: lightSwitchApplication.Document
        },
        DocumentNumber: {
            _$class: msls.ContentItem,
            _$name: "DocumentNumber",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseDocuments,
            data: lightSwitchApplication.Document,
            value: String
        },
        DocumentDate: {
            _$class: msls.ContentItem,
            _$name: "DocumentDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseDocuments,
            data: lightSwitchApplication.Document,
            value: Date
        },
        Bookstore: {
            _$class: msls.ContentItem,
            _$name: "Bookstore",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseDocuments,
            data: lightSwitchApplication.Document,
            value: lightSwitchApplication.Bookstore
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseDocuments
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseDocuments, {
        /// <field>
        /// Called when a new BrowseDocuments screen is created.
        /// <br/>created(msls.application.BrowseDocuments screen)
        /// </field>
        created: [lightSwitchApplication.BrowseDocuments],
        /// <field>
        /// Called before changes on an active BrowseDocuments screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseDocuments screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseDocuments],
        /// <field>
        /// Called after the DocumentList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentList_postRender: [$element, function () { return new lightSwitchApplication.BrowseDocuments().findContentItem("DocumentList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseDocuments().findContentItem("Search"); }],
        /// <field>
        /// Called after the Document content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Document_postRender: [$element, function () { return new lightSwitchApplication.BrowseDocuments().findContentItem("Document"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseDocuments().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the DocumentNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentNumber_postRender: [$element, function () { return new lightSwitchApplication.BrowseDocuments().findContentItem("DocumentNumber"); }],
        /// <field>
        /// Called after the DocumentDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseDocuments().findContentItem("DocumentDate"); }],
        /// <field>
        /// Called after the Bookstore content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Bookstore_postRender: [$element, function () { return new lightSwitchApplication.BrowseDocuments().findContentItem("Bookstore"); }]
    });

    lightSwitchApplication.BrowseOwners.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseOwners
        },
        OwnerList: {
            _$class: msls.ContentItem,
            _$name: "OwnerList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseOwners,
            data: lightSwitchApplication.BrowseOwners,
            value: lightSwitchApplication.BrowseOwners
        },
        Owner: {
            _$class: msls.ContentItem,
            _$name: "Owner",
            _$parentName: "OwnerList",
            screen: lightSwitchApplication.BrowseOwners,
            data: lightSwitchApplication.BrowseOwners,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseOwners,
                _$entry: {
                    elementType: lightSwitchApplication.Owner
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Owner",
            screen: lightSwitchApplication.BrowseOwners,
            data: lightSwitchApplication.Owner,
            value: lightSwitchApplication.Owner
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseOwners,
            data: lightSwitchApplication.Owner,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseOwners,
            data: lightSwitchApplication.Owner,
            value: String
        },
        PhoneNumber: {
            _$class: msls.ContentItem,
            _$name: "PhoneNumber",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseOwners,
            data: lightSwitchApplication.Owner,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseOwners
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseOwners, {
        /// <field>
        /// Called when a new BrowseOwners screen is created.
        /// <br/>created(msls.application.BrowseOwners screen)
        /// </field>
        created: [lightSwitchApplication.BrowseOwners],
        /// <field>
        /// Called before changes on an active BrowseOwners screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseOwners screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseOwners],
        /// <field>
        /// Called after the OwnerList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OwnerList_postRender: [$element, function () { return new lightSwitchApplication.BrowseOwners().findContentItem("OwnerList"); }],
        /// <field>
        /// Called after the Owner content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Owner_postRender: [$element, function () { return new lightSwitchApplication.BrowseOwners().findContentItem("Owner"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseOwners().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseOwners().findContentItem("Name"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.BrowseOwners().findContentItem("LastName"); }],
        /// <field>
        /// Called after the PhoneNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PhoneNumber_postRender: [$element, function () { return new lightSwitchApplication.BrowseOwners().findContentItem("PhoneNumber"); }]
    });

    lightSwitchApplication.BrowseShelves.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseShelves
        },
        ShelfList: {
            _$class: msls.ContentItem,
            _$name: "ShelfList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseShelves,
            data: lightSwitchApplication.BrowseShelves,
            value: lightSwitchApplication.BrowseShelves
        },
        Shelf: {
            _$class: msls.ContentItem,
            _$name: "Shelf",
            _$parentName: "ShelfList",
            screen: lightSwitchApplication.BrowseShelves,
            data: lightSwitchApplication.BrowseShelves,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseShelves,
                _$entry: {
                    elementType: lightSwitchApplication.Shelf
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Shelf",
            screen: lightSwitchApplication.BrowseShelves,
            data: lightSwitchApplication.Shelf,
            value: lightSwitchApplication.Shelf
        },
        Symbol: {
            _$class: msls.ContentItem,
            _$name: "Symbol",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseShelves,
            data: lightSwitchApplication.Shelf,
            value: String
        },
        Warehouse: {
            _$class: msls.ContentItem,
            _$name: "Warehouse",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseShelves,
            data: lightSwitchApplication.Shelf,
            value: lightSwitchApplication.Warehouse
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseShelves
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseShelves, {
        /// <field>
        /// Called when a new BrowseShelves screen is created.
        /// <br/>created(msls.application.BrowseShelves screen)
        /// </field>
        created: [lightSwitchApplication.BrowseShelves],
        /// <field>
        /// Called before changes on an active BrowseShelves screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseShelves screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseShelves],
        /// <field>
        /// Called after the ShelfList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShelfList_postRender: [$element, function () { return new lightSwitchApplication.BrowseShelves().findContentItem("ShelfList"); }],
        /// <field>
        /// Called after the Shelf content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Shelf_postRender: [$element, function () { return new lightSwitchApplication.BrowseShelves().findContentItem("Shelf"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseShelves().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Symbol content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Symbol_postRender: [$element, function () { return new lightSwitchApplication.BrowseShelves().findContentItem("Symbol"); }],
        /// <field>
        /// Called after the Warehouse content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Warehouse_postRender: [$element, function () { return new lightSwitchApplication.BrowseShelves().findContentItem("Warehouse"); }]
    });

    lightSwitchApplication.BrowseWarehouses.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseWarehouses
        },
        WarehouseList: {
            _$class: msls.ContentItem,
            _$name: "WarehouseList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseWarehouses,
            data: lightSwitchApplication.BrowseWarehouses,
            value: lightSwitchApplication.BrowseWarehouses
        },
        Warehouse: {
            _$class: msls.ContentItem,
            _$name: "Warehouse",
            _$parentName: "WarehouseList",
            screen: lightSwitchApplication.BrowseWarehouses,
            data: lightSwitchApplication.BrowseWarehouses,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseWarehouses,
                _$entry: {
                    elementType: lightSwitchApplication.Warehouse
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Warehouse",
            screen: lightSwitchApplication.BrowseWarehouses,
            data: lightSwitchApplication.Warehouse,
            value: lightSwitchApplication.Warehouse
        },
        Symbol: {
            _$class: msls.ContentItem,
            _$name: "Symbol",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseWarehouses,
            data: lightSwitchApplication.Warehouse,
            value: String
        },
        AdditionalInfo: {
            _$class: msls.ContentItem,
            _$name: "AdditionalInfo",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseWarehouses,
            data: lightSwitchApplication.Warehouse,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseWarehouses
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseWarehouses, {
        /// <field>
        /// Called when a new BrowseWarehouses screen is created.
        /// <br/>created(msls.application.BrowseWarehouses screen)
        /// </field>
        created: [lightSwitchApplication.BrowseWarehouses],
        /// <field>
        /// Called before changes on an active BrowseWarehouses screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseWarehouses screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseWarehouses],
        /// <field>
        /// Called after the WarehouseList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WarehouseList_postRender: [$element, function () { return new lightSwitchApplication.BrowseWarehouses().findContentItem("WarehouseList"); }],
        /// <field>
        /// Called after the Warehouse content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Warehouse_postRender: [$element, function () { return new lightSwitchApplication.BrowseWarehouses().findContentItem("Warehouse"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseWarehouses().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Symbol content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Symbol_postRender: [$element, function () { return new lightSwitchApplication.BrowseWarehouses().findContentItem("Symbol"); }],
        /// <field>
        /// Called after the AdditionalInfo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AdditionalInfo_postRender: [$element, function () { return new lightSwitchApplication.BrowseWarehouses().findContentItem("AdditionalInfo"); }]
    });

    lightSwitchApplication.ViewBookstore.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewBookstore
        },
        Documents: {
            _$class: msls.ContentItem,
            _$name: "Documents",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewBookstore,
            data: lightSwitchApplication.ViewBookstore,
            value: lightSwitchApplication.ViewBookstore
        },
        Documents1: {
            _$class: msls.ContentItem,
            _$name: "Documents1",
            _$parentName: "Documents",
            screen: lightSwitchApplication.ViewBookstore,
            data: lightSwitchApplication.ViewBookstore,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewBookstore,
                _$entry: {
                    elementType: lightSwitchApplication.Document
                }
            }
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "Documents1",
            screen: lightSwitchApplication.ViewBookstore,
            data: lightSwitchApplication.Document,
            value: lightSwitchApplication.Document
        },
        DocumentNumber: {
            _$class: msls.ContentItem,
            _$name: "DocumentNumber",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.ViewBookstore,
            data: lightSwitchApplication.Document,
            value: String
        },
        DocumentDate: {
            _$class: msls.ContentItem,
            _$name: "DocumentDate",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.ViewBookstore,
            data: lightSwitchApplication.Document,
            value: Date
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewBookstore,
            data: lightSwitchApplication.ViewBookstore,
            value: lightSwitchApplication.ViewBookstore
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewBookstore,
            data: lightSwitchApplication.ViewBookstore,
            value: lightSwitchApplication.Bookstore
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewBookstore,
            data: lightSwitchApplication.Bookstore,
            value: lightSwitchApplication.Bookstore
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewBookstore,
            data: lightSwitchApplication.Bookstore,
            value: String
        },
        Address: {
            _$class: msls.ContentItem,
            _$name: "Address",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewBookstore,
            data: lightSwitchApplication.Bookstore,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewBookstore,
            data: lightSwitchApplication.Bookstore,
            value: lightSwitchApplication.Bookstore
        },
        Owner: {
            _$class: msls.ContentItem,
            _$name: "Owner",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewBookstore,
            data: lightSwitchApplication.Bookstore,
            value: lightSwitchApplication.Owner
        },
        Name1: {
            _$class: msls.ContentItem,
            _$name: "Name1",
            _$parentName: "Owner",
            screen: lightSwitchApplication.ViewBookstore,
            data: lightSwitchApplication.Owner,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "Owner",
            screen: lightSwitchApplication.ViewBookstore,
            data: lightSwitchApplication.Owner,
            value: String
        },
        PhoneNumber: {
            _$class: msls.ContentItem,
            _$name: "PhoneNumber",
            _$parentName: "Owner",
            screen: lightSwitchApplication.ViewBookstore,
            data: lightSwitchApplication.Owner,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewBookstore
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewBookstore, {
        /// <field>
        /// Called when a new ViewBookstore screen is created.
        /// <br/>created(msls.application.ViewBookstore screen)
        /// </field>
        created: [lightSwitchApplication.ViewBookstore],
        /// <field>
        /// Called before changes on an active ViewBookstore screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewBookstore screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewBookstore],
        /// <field>
        /// Called after the Documents content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Documents_postRender: [$element, function () { return new lightSwitchApplication.ViewBookstore().findContentItem("Documents"); }],
        /// <field>
        /// Called after the Documents1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Documents1_postRender: [$element, function () { return new lightSwitchApplication.ViewBookstore().findContentItem("Documents1"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.ViewBookstore().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the DocumentNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentNumber_postRender: [$element, function () { return new lightSwitchApplication.ViewBookstore().findContentItem("DocumentNumber"); }],
        /// <field>
        /// Called after the DocumentDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentDate_postRender: [$element, function () { return new lightSwitchApplication.ViewBookstore().findContentItem("DocumentDate"); }],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewBookstore().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewBookstore().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewBookstore().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.ViewBookstore().findContentItem("Name"); }],
        /// <field>
        /// Called after the Address content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Address_postRender: [$element, function () { return new lightSwitchApplication.ViewBookstore().findContentItem("Address"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewBookstore().findContentItem("right"); }],
        /// <field>
        /// Called after the Owner content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Owner_postRender: [$element, function () { return new lightSwitchApplication.ViewBookstore().findContentItem("Owner"); }],
        /// <field>
        /// Called after the Name1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name1_postRender: [$element, function () { return new lightSwitchApplication.ViewBookstore().findContentItem("Name1"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.ViewBookstore().findContentItem("LastName"); }],
        /// <field>
        /// Called after the PhoneNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PhoneNumber_postRender: [$element, function () { return new lightSwitchApplication.ViewBookstore().findContentItem("PhoneNumber"); }]
    });

    lightSwitchApplication.ViewShelf.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewShelf
        },
        Books: {
            _$class: msls.ContentItem,
            _$name: "Books",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewShelf,
            data: lightSwitchApplication.ViewShelf,
            value: lightSwitchApplication.ViewShelf
        },
        Books1: {
            _$class: msls.ContentItem,
            _$name: "Books1",
            _$parentName: "Books",
            screen: lightSwitchApplication.ViewShelf,
            data: lightSwitchApplication.ViewShelf,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewShelf,
                _$entry: {
                    elementType: lightSwitchApplication.Book
                }
            }
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "Books1",
            screen: lightSwitchApplication.ViewShelf,
            data: lightSwitchApplication.Book,
            value: lightSwitchApplication.Book
        },
        Quantity: {
            _$class: msls.ContentItem,
            _$name: "Quantity",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.ViewShelf,
            data: lightSwitchApplication.Book,
            value: Number
        },
        Title: {
            _$class: msls.ContentItem,
            _$name: "Title",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.ViewShelf,
            data: lightSwitchApplication.Book,
            value: String
        },
        Author: {
            _$class: msls.ContentItem,
            _$name: "Author",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.ViewShelf,
            data: lightSwitchApplication.Book,
            value: String
        },
        PublicationDate: {
            _$class: msls.ContentItem,
            _$name: "PublicationDate",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.ViewShelf,
            data: lightSwitchApplication.Book,
            value: Date
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewShelf,
            data: lightSwitchApplication.ViewShelf,
            value: lightSwitchApplication.ViewShelf
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewShelf,
            data: lightSwitchApplication.ViewShelf,
            value: lightSwitchApplication.Shelf
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewShelf,
            data: lightSwitchApplication.Shelf,
            value: lightSwitchApplication.Shelf
        },
        Symbol: {
            _$class: msls.ContentItem,
            _$name: "Symbol",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewShelf,
            data: lightSwitchApplication.Shelf,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewShelf,
            data: lightSwitchApplication.Shelf,
            value: lightSwitchApplication.Shelf
        },
        Warehouse: {
            _$class: msls.ContentItem,
            _$name: "Warehouse",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewShelf,
            data: lightSwitchApplication.Shelf,
            value: lightSwitchApplication.Warehouse
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewShelf
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewShelf, {
        /// <field>
        /// Called when a new ViewShelf screen is created.
        /// <br/>created(msls.application.ViewShelf screen)
        /// </field>
        created: [lightSwitchApplication.ViewShelf],
        /// <field>
        /// Called before changes on an active ViewShelf screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewShelf screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewShelf],
        /// <field>
        /// Called after the Books content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Books_postRender: [$element, function () { return new lightSwitchApplication.ViewShelf().findContentItem("Books"); }],
        /// <field>
        /// Called after the Books1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Books1_postRender: [$element, function () { return new lightSwitchApplication.ViewShelf().findContentItem("Books1"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.ViewShelf().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the Quantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Quantity_postRender: [$element, function () { return new lightSwitchApplication.ViewShelf().findContentItem("Quantity"); }],
        /// <field>
        /// Called after the Title content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Title_postRender: [$element, function () { return new lightSwitchApplication.ViewShelf().findContentItem("Title"); }],
        /// <field>
        /// Called after the Author content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Author_postRender: [$element, function () { return new lightSwitchApplication.ViewShelf().findContentItem("Author"); }],
        /// <field>
        /// Called after the PublicationDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PublicationDate_postRender: [$element, function () { return new lightSwitchApplication.ViewShelf().findContentItem("PublicationDate"); }],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewShelf().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewShelf().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewShelf().findContentItem("left"); }],
        /// <field>
        /// Called after the Symbol content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Symbol_postRender: [$element, function () { return new lightSwitchApplication.ViewShelf().findContentItem("Symbol"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewShelf().findContentItem("right"); }],
        /// <field>
        /// Called after the Warehouse content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Warehouse_postRender: [$element, function () { return new lightSwitchApplication.ViewShelf().findContentItem("Warehouse"); }]
    });

    lightSwitchApplication.ViewWarehouse.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewWarehouse
        },
        Shelves: {
            _$class: msls.ContentItem,
            _$name: "Shelves",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewWarehouse,
            data: lightSwitchApplication.ViewWarehouse,
            value: lightSwitchApplication.ViewWarehouse
        },
        Shelves1: {
            _$class: msls.ContentItem,
            _$name: "Shelves1",
            _$parentName: "Shelves",
            screen: lightSwitchApplication.ViewWarehouse,
            data: lightSwitchApplication.ViewWarehouse,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewWarehouse,
                _$entry: {
                    elementType: lightSwitchApplication.Shelf
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Shelves1",
            screen: lightSwitchApplication.ViewWarehouse,
            data: lightSwitchApplication.Shelf,
            value: lightSwitchApplication.Shelf
        },
        Symbol1: {
            _$class: msls.ContentItem,
            _$name: "Symbol1",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.ViewWarehouse,
            data: lightSwitchApplication.Shelf,
            value: String
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewWarehouse,
            data: lightSwitchApplication.ViewWarehouse,
            value: lightSwitchApplication.ViewWarehouse
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewWarehouse,
            data: lightSwitchApplication.ViewWarehouse,
            value: lightSwitchApplication.Warehouse
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewWarehouse,
            data: lightSwitchApplication.Warehouse,
            value: lightSwitchApplication.Warehouse
        },
        Symbol: {
            _$class: msls.ContentItem,
            _$name: "Symbol",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewWarehouse,
            data: lightSwitchApplication.Warehouse,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewWarehouse,
            data: lightSwitchApplication.Warehouse,
            value: lightSwitchApplication.Warehouse
        },
        AdditionalInfo: {
            _$class: msls.ContentItem,
            _$name: "AdditionalInfo",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewWarehouse,
            data: lightSwitchApplication.Warehouse,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewWarehouse
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewWarehouse, {
        /// <field>
        /// Called when a new ViewWarehouse screen is created.
        /// <br/>created(msls.application.ViewWarehouse screen)
        /// </field>
        created: [lightSwitchApplication.ViewWarehouse],
        /// <field>
        /// Called before changes on an active ViewWarehouse screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewWarehouse screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewWarehouse],
        /// <field>
        /// Called after the Shelves content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Shelves_postRender: [$element, function () { return new lightSwitchApplication.ViewWarehouse().findContentItem("Shelves"); }],
        /// <field>
        /// Called after the Shelves1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Shelves1_postRender: [$element, function () { return new lightSwitchApplication.ViewWarehouse().findContentItem("Shelves1"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.ViewWarehouse().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Symbol1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Symbol1_postRender: [$element, function () { return new lightSwitchApplication.ViewWarehouse().findContentItem("Symbol1"); }],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewWarehouse().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewWarehouse().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewWarehouse().findContentItem("left"); }],
        /// <field>
        /// Called after the Symbol content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Symbol_postRender: [$element, function () { return new lightSwitchApplication.ViewWarehouse().findContentItem("Symbol"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewWarehouse().findContentItem("right"); }],
        /// <field>
        /// Called after the AdditionalInfo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AdditionalInfo_postRender: [$element, function () { return new lightSwitchApplication.ViewWarehouse().findContentItem("AdditionalInfo"); }]
    });

}(msls.application));