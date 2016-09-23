/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function AddEditBook(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditBook screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Book" type="msls.application.Book">
        /// Gets or sets the book for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditBook.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditBook", parameters);
    }

    function AddEditBooksForDocument(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditBooksForDocument screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="BooksForDocument" type="msls.application.BooksForDocument">
        /// Gets or sets the booksForDocument for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditBooksForDocument.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditBooksForDocument", parameters);
    }

    function AddEditBookstore(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditBookstore screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Bookstore" type="msls.application.Bookstore">
        /// Gets or sets the bookstore for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditBookstore.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditBookstore", parameters);
    }

    function AddEditDocument(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditDocument screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Document" type="msls.application.Document">
        /// Gets or sets the document for this screen.
        /// </field>
        /// <field name="BooksForDocuments" type="msls.VisualCollection" elementType="msls.application.BooksForDocument">
        /// Gets the booksForDocuments for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditDocument.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditDocument", parameters);
    }

    function AddEditOwner(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditOwner screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Owner" type="msls.application.Owner">
        /// Gets or sets the owner for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditOwner.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditOwner", parameters);
    }

    function AddEditShelf(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditShelf screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Shelf" type="msls.application.Shelf">
        /// Gets or sets the shelf for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditShelf.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditShelf", parameters);
    }

    function AddEditWarehouse(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditWarehouse screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Warehouse" type="msls.application.Warehouse">
        /// Gets or sets the warehouse for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditWarehouse.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditWarehouse", parameters);
    }

    function BrowseBooks(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseBooks screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Books" type="msls.VisualCollection" elementType="msls.application.Book">
        /// Gets the books for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseBooks.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseBooks", parameters);
    }

    function BrowseBookstores(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseBookstores screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Bookstores" type="msls.VisualCollection" elementType="msls.application.Bookstore">
        /// Gets the bookstores for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseBookstores.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseBookstores", parameters);
    }

    function BrowseDocuments(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseDocuments screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Documents" type="msls.VisualCollection" elementType="msls.application.Document">
        /// Gets the documents for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseDocuments.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseDocuments", parameters);
    }

    function BrowseOwners(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseOwners screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Owners" type="msls.VisualCollection" elementType="msls.application.Owner">
        /// Gets the owners for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseOwners.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseOwners", parameters);
    }

    function BrowseShelves(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseShelves screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Shelves" type="msls.VisualCollection" elementType="msls.application.Shelf">
        /// Gets the shelves for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseShelves.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseShelves", parameters);
    }

    function BrowseWarehouses(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseWarehouses screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Warehouses" type="msls.VisualCollection" elementType="msls.application.Warehouse">
        /// Gets the warehouses for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseWarehouses.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseWarehouses", parameters);
    }

    function ViewBookstore(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewBookstore screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Bookstore" type="msls.application.Bookstore">
        /// Gets or sets the bookstore for this screen.
        /// </field>
        /// <field name="Documents" type="msls.VisualCollection" elementType="msls.application.Document">
        /// Gets the documents for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewBookstore.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewBookstore", parameters);
    }

    function ViewShelf(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewShelf screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Shelf" type="msls.application.Shelf">
        /// Gets or sets the shelf for this screen.
        /// </field>
        /// <field name="Books" type="msls.VisualCollection" elementType="msls.application.Book">
        /// Gets the books for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewShelf.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewShelf", parameters);
    }

    function ViewWarehouse(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewWarehouse screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Warehouse" type="msls.application.Warehouse">
        /// Gets or sets the warehouse for this screen.
        /// </field>
        /// <field name="Shelves" type="msls.VisualCollection" elementType="msls.application.Shelf">
        /// Gets the shelves for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewWarehouse.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewWarehouse", parameters);
    }

    msls._addToNamespace("msls.application", {

        AddEditBook: $defineScreen(AddEditBook, [
            { name: "Book", kind: "local", type: lightSwitchApplication.Book }
        ], [
        ]),

        AddEditBooksForDocument: $defineScreen(AddEditBooksForDocument, [
            { name: "BooksForDocument", kind: "local", type: lightSwitchApplication.BooksForDocument }
        ], [
        ]),

        AddEditBookstore: $defineScreen(AddEditBookstore, [
            { name: "Bookstore", kind: "local", type: lightSwitchApplication.Bookstore }
        ], [
        ]),

        AddEditDocument: $defineScreen(AddEditDocument, [
            { name: "Document", kind: "local", type: lightSwitchApplication.Document },
            {
                name: "BooksForDocuments", kind: "collection", elementType: lightSwitchApplication.BooksForDocument,
                getNavigationProperty: function () {
                    if (this.owner.Document) {
                        return this.owner.Document.details.properties.BooksForDocuments;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("Book").expand("Book.Shelf");
                }
            }
        ], [
            { name: "Remove_Books" }
        ]),

        AddEditOwner: $defineScreen(AddEditOwner, [
            { name: "Owner", kind: "local", type: lightSwitchApplication.Owner }
        ], [
        ]),

        AddEditShelf: $defineScreen(AddEditShelf, [
            { name: "Shelf", kind: "local", type: lightSwitchApplication.Shelf }
        ], [
        ]),

        AddEditWarehouse: $defineScreen(AddEditWarehouse, [
            { name: "Warehouse", kind: "local", type: lightSwitchApplication.Warehouse }
        ], [
        ]),

        BrowseBooks: $defineScreen(BrowseBooks, [
            {
                name: "Books", kind: "collection", elementType: lightSwitchApplication.Book,
                createQuery: function (Search) {
                    return this.dataWorkspace.WMSData.Books.filter("((" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Author)") + " or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Title)") + ") or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Shelf/Symbol)") + ") or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Shelf/Warehouse/Symbol)") + "").orderBy("Author").expand("Shelf").expand("Shelf.Warehouse");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseBookstores: $defineScreen(BrowseBookstores, [
            {
                name: "Bookstores", kind: "collection", elementType: lightSwitchApplication.Bookstore,
                createQuery: function () {
                    return this.dataWorkspace.WMSData.Bookstores.expand("Owner");
                }
            }
        ], [
        ]),

        BrowseDocuments: $defineScreen(BrowseDocuments, [
            {
                name: "Documents", kind: "collection", elementType: lightSwitchApplication.Document,
                createQuery: function (Search) {
                    return this.dataWorkspace.WMSData.Documents.filter("" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", DocumentNumber)") + " or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Bookstore/Name)") + "").orderBy("DocumentDate").expand("Bookstore");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseOwners: $defineScreen(BrowseOwners, [
            {
                name: "Owners", kind: "collection", elementType: lightSwitchApplication.Owner,
                createQuery: function () {
                    return this.dataWorkspace.WMSData.Owners;
                }
            }
        ], [
        ]),

        BrowseShelves: $defineScreen(BrowseShelves, [
            {
                name: "Shelves", kind: "collection", elementType: lightSwitchApplication.Shelf,
                createQuery: function () {
                    return this.dataWorkspace.WMSData.Shelves.expand("Warehouse");
                }
            }
        ], [
        ]),

        BrowseWarehouses: $defineScreen(BrowseWarehouses, [
            {
                name: "Warehouses", kind: "collection", elementType: lightSwitchApplication.Warehouse,
                createQuery: function () {
                    return this.dataWorkspace.WMSData.Warehouses;
                }
            }
        ], [
        ]),

        ViewBookstore: $defineScreen(ViewBookstore, [
            { name: "Bookstore", kind: "local", type: lightSwitchApplication.Bookstore },
            {
                name: "Documents", kind: "collection", elementType: lightSwitchApplication.Document,
                getNavigationProperty: function () {
                    if (this.owner.Bookstore) {
                        return this.owner.Bookstore.details.properties.Documents;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        ViewShelf: $defineScreen(ViewShelf, [
            { name: "Shelf", kind: "local", type: lightSwitchApplication.Shelf },
            {
                name: "Books", kind: "collection", elementType: lightSwitchApplication.Book,
                getNavigationProperty: function () {
                    if (this.owner.Shelf) {
                        return this.owner.Shelf.details.properties.Books;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        ViewWarehouse: $defineScreen(ViewWarehouse, [
            { name: "Warehouse", kind: "local", type: lightSwitchApplication.Warehouse },
            {
                name: "Shelves", kind: "collection", elementType: lightSwitchApplication.Shelf,
                getNavigationProperty: function () {
                    if (this.owner.Warehouse) {
                        return this.owner.Warehouse.details.properties.Shelves;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        showAddEditBook: $defineShowScreen(function showAddEditBook(Book, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditBook screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditBook", parameters, options);
        }),

        showAddEditBooksForDocument: $defineShowScreen(function showAddEditBooksForDocument(BooksForDocument, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditBooksForDocument screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditBooksForDocument", parameters, options);
        }),

        showAddEditBookstore: $defineShowScreen(function showAddEditBookstore(Bookstore, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditBookstore screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditBookstore", parameters, options);
        }),

        showAddEditDocument: $defineShowScreen(function showAddEditDocument(Document, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditDocument screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditDocument", parameters, options);
        }),

        showAddEditOwner: $defineShowScreen(function showAddEditOwner(Owner, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditOwner screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditOwner", parameters, options);
        }),

        showAddEditShelf: $defineShowScreen(function showAddEditShelf(Shelf, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditShelf screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditShelf", parameters, options);
        }),

        showAddEditWarehouse: $defineShowScreen(function showAddEditWarehouse(Warehouse, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditWarehouse screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditWarehouse", parameters, options);
        }),

        showBrowseBooks: $defineShowScreen(function showBrowseBooks(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseBooks screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseBooks", parameters, options);
        }),

        showBrowseBookstores: $defineShowScreen(function showBrowseBookstores(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseBookstores screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseBookstores", parameters, options);
        }),

        showBrowseDocuments: $defineShowScreen(function showBrowseDocuments(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseDocuments screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseDocuments", parameters, options);
        }),

        showBrowseOwners: $defineShowScreen(function showBrowseOwners(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseOwners screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseOwners", parameters, options);
        }),

        showBrowseShelves: $defineShowScreen(function showBrowseShelves(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseShelves screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseShelves", parameters, options);
        }),

        showBrowseWarehouses: $defineShowScreen(function showBrowseWarehouses(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseWarehouses screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseWarehouses", parameters, options);
        }),

        showViewBookstore: $defineShowScreen(function showViewBookstore(Bookstore, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewBookstore screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewBookstore", parameters, options);
        }),

        showViewShelf: $defineShowScreen(function showViewShelf(Shelf, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewShelf screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewShelf", parameters, options);
        }),

        showViewWarehouse: $defineShowScreen(function showViewWarehouse(Warehouse, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewWarehouse screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewWarehouse", parameters, options);
        })

    });

}(msls.application));
