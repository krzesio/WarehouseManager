/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function Book(entitySet) {
        /// <summary>
        /// Represents the Book entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this book.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this book.
        /// </field>
        /// <field name="Quantity" type="Number">
        /// Gets or sets the quantity for this book.
        /// </field>
        /// <field name="Title" type="String">
        /// Gets or sets the title for this book.
        /// </field>
        /// <field name="Author" type="String">
        /// Gets or sets the author for this book.
        /// </field>
        /// <field name="PublicationDate" type="Date">
        /// Gets or sets the publicationDate for this book.
        /// </field>
        /// <field name="Shelf" type="msls.application.Shelf">
        /// Gets or sets the shelf for this book.
        /// </field>
        /// <field name="BooksForDocuments" type="msls.EntityCollection" elementType="msls.application.BooksForDocument">
        /// Gets the booksForDocuments for this book.
        /// </field>
        /// <field name="isDeleted" type="Boolean">
        /// Gets or sets the isDeleted for this book.
        /// </field>
        /// <field name="details" type="msls.application.Book.Details">
        /// Gets the details for this book.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function BooksForDocument(entitySet) {
        /// <summary>
        /// Represents the BooksForDocument entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this booksForDocument.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this booksForDocument.
        /// </field>
        /// <field name="Quantity" type="Number">
        /// Gets or sets the quantity for this booksForDocument.
        /// </field>
        /// <field name="Book" type="msls.application.Book">
        /// Gets or sets the book for this booksForDocument.
        /// </field>
        /// <field name="Document" type="msls.application.Document">
        /// Gets or sets the document for this booksForDocument.
        /// </field>
        /// <field name="details" type="msls.application.BooksForDocument.Details">
        /// Gets the details for this booksForDocument.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Bookstore(entitySet) {
        /// <summary>
        /// Represents the Bookstore entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this bookstore.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this bookstore.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this bookstore.
        /// </field>
        /// <field name="Address" type="String">
        /// Gets or sets the address for this bookstore.
        /// </field>
        /// <field name="Owner" type="msls.application.Owner">
        /// Gets or sets the owner for this bookstore.
        /// </field>
        /// <field name="Documents" type="msls.EntityCollection" elementType="msls.application.Document">
        /// Gets the documents for this bookstore.
        /// </field>
        /// <field name="details" type="msls.application.Bookstore.Details">
        /// Gets the details for this bookstore.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Document(entitySet) {
        /// <summary>
        /// Represents the Document entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this document.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this document.
        /// </field>
        /// <field name="DocumentNumber" type="String">
        /// Gets or sets the documentNumber for this document.
        /// </field>
        /// <field name="DocumentDate" type="Date">
        /// Gets or sets the documentDate for this document.
        /// </field>
        /// <field name="BooksForDocuments" type="msls.EntityCollection" elementType="msls.application.BooksForDocument">
        /// Gets the booksForDocuments for this document.
        /// </field>
        /// <field name="Bookstore" type="msls.application.Bookstore">
        /// Gets or sets the bookstore for this document.
        /// </field>
        /// <field name="details" type="msls.application.Document.Details">
        /// Gets the details for this document.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Owner(entitySet) {
        /// <summary>
        /// Represents the Owner entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this owner.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this owner.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this owner.
        /// </field>
        /// <field name="LastName" type="String">
        /// Gets or sets the lastName for this owner.
        /// </field>
        /// <field name="PhoneNumber" type="String">
        /// Gets or sets the phoneNumber for this owner.
        /// </field>
        /// <field name="Bookstores" type="msls.EntityCollection" elementType="msls.application.Bookstore">
        /// Gets the bookstores for this owner.
        /// </field>
        /// <field name="details" type="msls.application.Owner.Details">
        /// Gets the details for this owner.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Shelf(entitySet) {
        /// <summary>
        /// Represents the Shelf entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this shelf.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this shelf.
        /// </field>
        /// <field name="Symbol" type="String">
        /// Gets or sets the symbol for this shelf.
        /// </field>
        /// <field name="Books" type="msls.EntityCollection" elementType="msls.application.Book">
        /// Gets the books for this shelf.
        /// </field>
        /// <field name="Warehouse" type="msls.application.Warehouse">
        /// Gets or sets the warehouse for this shelf.
        /// </field>
        /// <field name="details" type="msls.application.Shelf.Details">
        /// Gets the details for this shelf.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Warehouse(entitySet) {
        /// <summary>
        /// Represents the Warehouse entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this warehouse.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this warehouse.
        /// </field>
        /// <field name="Symbol" type="String">
        /// Gets or sets the symbol for this warehouse.
        /// </field>
        /// <field name="AdditionalInfo" type="String">
        /// Gets or sets the additionalInfo for this warehouse.
        /// </field>
        /// <field name="Shelves" type="msls.EntityCollection" elementType="msls.application.Shelf">
        /// Gets the shelves for this warehouse.
        /// </field>
        /// <field name="details" type="msls.application.Warehouse.Details">
        /// Gets the details for this warehouse.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Table1Item(entitySet) {
        /// <summary>
        /// Represents the Table1Item entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this table1Item.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this table1Item.
        /// </field>
        /// <field name="xx" type="String">
        /// Gets or sets the xx for this table1Item.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this table1Item.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this table1Item.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this table1Item.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this table1Item.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this table1Item.
        /// </field>
        /// <field name="details" type="msls.application.Table1Item.Details">
        /// Gets the details for this table1Item.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function WMSData(dataWorkspace) {
        /// <summary>
        /// Represents the WMSData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="Books" type="msls.EntitySet">
        /// Gets the Books entity set.
        /// </field>
        /// <field name="BooksForDocuments" type="msls.EntitySet">
        /// Gets the BooksForDocuments entity set.
        /// </field>
        /// <field name="Bookstores" type="msls.EntitySet">
        /// Gets the Bookstores entity set.
        /// </field>
        /// <field name="Documents" type="msls.EntitySet">
        /// Gets the Documents entity set.
        /// </field>
        /// <field name="Owners" type="msls.EntitySet">
        /// Gets the Owners entity set.
        /// </field>
        /// <field name="Shelves" type="msls.EntitySet">
        /// Gets the Shelves entity set.
        /// </field>
        /// <field name="Warehouses" type="msls.EntitySet">
        /// Gets the Warehouses entity set.
        /// </field>
        /// <field name="details" type="msls.application.WMSData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };

    function ApplicationData(dataWorkspace) {
        /// <summary>
        /// Represents the ApplicationData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="Table1Items" type="msls.EntitySet">
        /// Gets the Table1Items entity set.
        /// </field>
        /// <field name="details" type="msls.application.ApplicationData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="WMSData" type="msls.application.WMSData">
        /// Gets the WMSData data service.
        /// </field>
        /// <field name="ApplicationData" type="msls.application.ApplicationData">
        /// Gets the ApplicationData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        Book: $defineEntity(Book, [
            { name: "Id", type: Number, isReadOnly: true },
            { name: "Quantity", type: Number },
            { name: "Title", type: String },
            { name: "Author", type: String },
            { name: "PublicationDate", type: Date },
            { name: "Shelf", kind: "reference", type: Shelf },
            { name: "BooksForDocuments", kind: "collection", elementType: BooksForDocument },
            { name: "isDeleted", type: Boolean }
        ]),

        BooksForDocument: $defineEntity(BooksForDocument, [
            { name: "Id", type: Number, isReadOnly: true },
            { name: "Quantity", type: Number },
            { name: "Book", kind: "reference", type: Book },
            { name: "Document", kind: "reference", type: Document }
        ]),

        Bookstore: $defineEntity(Bookstore, [
            { name: "Id", type: Number, isReadOnly: true },
            { name: "Name", type: String },
            { name: "Address", type: String },
            { name: "Owner", kind: "reference", type: Owner },
            { name: "Documents", kind: "collection", elementType: Document }
        ]),

        Document: $defineEntity(Document, [
            { name: "Id", type: Number, isReadOnly: true },
            { name: "DocumentNumber", type: String },
            { name: "DocumentDate", type: Date },
            { name: "BooksForDocuments", kind: "collection", elementType: BooksForDocument },
            { name: "Bookstore", kind: "reference", type: Bookstore }
        ]),

        Owner: $defineEntity(Owner, [
            { name: "Id", type: Number, isReadOnly: true },
            { name: "Name", type: String },
            { name: "LastName", type: String },
            { name: "PhoneNumber", type: String },
            { name: "Bookstores", kind: "collection", elementType: Bookstore }
        ]),

        Shelf: $defineEntity(Shelf, [
            { name: "Id", type: Number, isReadOnly: true },
            { name: "Symbol", type: String },
            { name: "Books", kind: "collection", elementType: Book },
            { name: "Warehouse", kind: "reference", type: Warehouse }
        ]),

        Warehouse: $defineEntity(Warehouse, [
            { name: "Id", type: Number, isReadOnly: true },
            { name: "Symbol", type: String },
            { name: "AdditionalInfo", type: String },
            { name: "Shelves", kind: "collection", elementType: Shelf }
        ]),

        Table1Item: $defineEntity(Table1Item, [
            { name: "Id", type: Number },
            { name: "xx", type: String },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        WMSData: $defineDataService(WMSData, lightSwitchApplication.rootUri + "/WMSData.svc", [
            { name: "Books", elementType: Book },
            { name: "BooksForDocuments", elementType: BooksForDocument },
            { name: "Bookstores", elementType: Bookstore },
            { name: "Documents", elementType: Document },
            { name: "Owners", elementType: Owner },
            { name: "Shelves", elementType: Shelf },
            { name: "Warehouses", elementType: Warehouse }
        ], [
            {
                name: "Books_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Books },
                        lightSwitchApplication.rootUri + "/WMSData.svc" + "/Books(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "BooksForDocuments_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.BooksForDocuments },
                        lightSwitchApplication.rootUri + "/WMSData.svc" + "/BooksForDocuments(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Bookstores_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Bookstores },
                        lightSwitchApplication.rootUri + "/WMSData.svc" + "/Bookstores(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Documents_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Documents },
                        lightSwitchApplication.rootUri + "/WMSData.svc" + "/Documents(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Owners_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Owners },
                        lightSwitchApplication.rootUri + "/WMSData.svc" + "/Owners(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Shelves_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Shelves },
                        lightSwitchApplication.rootUri + "/WMSData.svc" + "/Shelves(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Warehouses_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Warehouses },
                        lightSwitchApplication.rootUri + "/WMSData.svc" + "/Warehouses(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            }
        ]),

        ApplicationData: $defineDataService(ApplicationData, lightSwitchApplication.rootUri + "/ApplicationData.svc", [
            { name: "Table1Items", elementType: Table1Item }
        ], [
            {
                name: "Table1Items_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Table1Items },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Table1Items(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "WMSData", type: WMSData },
            { name: "ApplicationData", type: ApplicationData }
        ])

    });

}(msls.application));
