/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.Book, {
        /// <field>
        /// Called when a new book is created.
        /// <br/>created(msls.application.Book entity)
        /// </field>
        created: [lightSwitchApplication.Book]
    });

    msls._addEntryPoints(lightSwitchApplication.BooksForDocument, {
        /// <field>
        /// Called when a new booksForDocument is created.
        /// <br/>created(msls.application.BooksForDocument entity)
        /// </field>
        created: [lightSwitchApplication.BooksForDocument]
    });

    msls._addEntryPoints(lightSwitchApplication.Bookstore, {
        /// <field>
        /// Called when a new bookstore is created.
        /// <br/>created(msls.application.Bookstore entity)
        /// </field>
        created: [lightSwitchApplication.Bookstore]
    });

    msls._addEntryPoints(lightSwitchApplication.Document, {
        /// <field>
        /// Called when a new document is created.
        /// <br/>created(msls.application.Document entity)
        /// </field>
        created: [lightSwitchApplication.Document]
    });

    msls._addEntryPoints(lightSwitchApplication.Owner, {
        /// <field>
        /// Called when a new owner is created.
        /// <br/>created(msls.application.Owner entity)
        /// </field>
        created: [lightSwitchApplication.Owner]
    });

    msls._addEntryPoints(lightSwitchApplication.Shelf, {
        /// <field>
        /// Called when a new shelf is created.
        /// <br/>created(msls.application.Shelf entity)
        /// </field>
        created: [lightSwitchApplication.Shelf]
    });

    msls._addEntryPoints(lightSwitchApplication.Warehouse, {
        /// <field>
        /// Called when a new warehouse is created.
        /// <br/>created(msls.application.Warehouse entity)
        /// </field>
        created: [lightSwitchApplication.Warehouse]
    });

    msls._addEntryPoints(lightSwitchApplication.Table1Item, {
        /// <field>
        /// Called when a new table1Item is created.
        /// <br/>created(msls.application.Table1Item entity)
        /// </field>
        created: [lightSwitchApplication.Table1Item]
    });

}(msls.application));
