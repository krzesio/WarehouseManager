﻿

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace LightSwitchApplication
{
    #region Entities
    
    /// <summary>
    /// No Modeled Description Available
    /// </summary>
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
    public sealed partial class Shelf : global::Microsoft.LightSwitch.Framework.Base.EntityObject<global::LightSwitchApplication.Shelf, global::LightSwitchApplication.Shelf.DetailsClass>
    {
        #region Constructors
    
        /// <summary>
        /// Initializes a new instance of the Shelf entity.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public Shelf()
            : this(null)
        {
        }
    
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public Shelf(global::Microsoft.LightSwitch.Framework.EntitySet<global::LightSwitchApplication.Shelf> entitySet)
            : base(entitySet)
        {
            global::LightSwitchApplication.Shelf.DetailsClass.Initialize(this);
        }
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void Shelf_Created();
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void Shelf_AllowSaveWithErrors(ref bool result);
    
        #endregion
    
        #region Private Properties
        
        /// <summary>
        /// Gets the Application object for this application.  The Application object provides access to active screens, methods to open screens and access to the current user.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        private global::Microsoft.LightSwitch.IApplication<global::LightSwitchApplication.DataWorkspace> Application
        {
            get
            {
                return (global::Microsoft.LightSwitch.IApplication<global::LightSwitchApplication.DataWorkspace>)global::LightSwitchApplication.Application.Current;
            }
        }
        
        /// <summary>
        /// Gets the containing data workspace.  The data workspace provides access to all data sources in the application.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        private global::LightSwitchApplication.DataWorkspace DataWorkspace
        {
            get
            {
                return (global::LightSwitchApplication.DataWorkspace)this.Details.EntitySet.Details.DataService.Details.DataWorkspace;
            }
        }
        
        #endregion
    
        #region Public Properties
    
        /// <summary>
        /// No Modeled Description Available
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public int Id
        {
            get
            {
                return global::LightSwitchApplication.Shelf.DetailsClass.GetValue(this, global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties.Id);
            }
        }
        
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void Id_IsReadOnly(ref bool result);
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void Id_Validate(global::Microsoft.LightSwitch.EntityValidationResultsBuilder results);
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void Id_Changed();

        /// <summary>
        /// No Modeled Description Available
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public string Symbol
        {
            get
            {
                return global::LightSwitchApplication.Shelf.DetailsClass.GetValue(this, global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties.Symbol);
            }
            set
            {
                global::LightSwitchApplication.Shelf.DetailsClass.SetValue(this, global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties.Symbol, value);
            }
        }
        
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void Symbol_IsReadOnly(ref bool result);
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void Symbol_Validate(global::Microsoft.LightSwitch.EntityValidationResultsBuilder results);
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void Symbol_Changed();

        /// <summary>
        /// No Modeled Description Available
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public global::Microsoft.LightSwitch.Framework.EntityCollection<global::LightSwitchApplication.Book> Books
        {
            get
            {
                return global::LightSwitchApplication.Shelf.DetailsClass.GetValue(this, global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties.Books);
            }
        }
        
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public Microsoft.LightSwitch.IDataServiceQueryable<global::LightSwitchApplication.Book> BooksQuery
        {
            get
            {
                return global::LightSwitchApplication.Shelf.DetailsClass.GetQuery(this, global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties.Books);
            }
        }

        /// <summary>
        /// No Modeled Description Available
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public global::LightSwitchApplication.Warehouse Warehouse
        {
            get
            {
                return global::LightSwitchApplication.Shelf.DetailsClass.GetValue(this, global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties.Warehouse);
            }
            set
            {
                global::LightSwitchApplication.Shelf.DetailsClass.SetValue(this, global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties.Warehouse, value);
            }
        }
        
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void Warehouse_IsReadOnly(ref bool result);
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void Warehouse_Validate(global::Microsoft.LightSwitch.EntityValidationResultsBuilder results);
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void Warehouse_Changed();

        #endregion
    
        #region Details Class
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Never)]
        [global::System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1034:NestedTypesShouldNotBeVisible")]
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public sealed class DetailsClass : global::Microsoft.LightSwitch.Details.Framework.Base.EntityDetails<
                global::LightSwitchApplication.Shelf,
                global::LightSwitchApplication.Shelf.DetailsClass,
                global::LightSwitchApplication.Shelf.DetailsClass.IImplementation,
                global::LightSwitchApplication.Shelf.DetailsClass.PropertySet,
                global::Microsoft.LightSwitch.Details.Framework.EntityCommandSet<global::LightSwitchApplication.Shelf, global::LightSwitchApplication.Shelf.DetailsClass>,
                global::Microsoft.LightSwitch.Details.Framework.EntityMethodSet<global::LightSwitchApplication.Shelf, global::LightSwitchApplication.Shelf.DetailsClass>>
        {
    
            static DetailsClass()
            {
                var initializeEntry = global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties.Id;
            }
    
            [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
            private static readonly global::Microsoft.LightSwitch.Details.Framework.Base.EntityDetails<global::LightSwitchApplication.Shelf, global::LightSwitchApplication.Shelf.DetailsClass>.Entry
                __ShelfEntry = new global::Microsoft.LightSwitch.Details.Framework.Base.EntityDetails<global::LightSwitchApplication.Shelf, global::LightSwitchApplication.Shelf.DetailsClass>.Entry(
                    global::LightSwitchApplication.Shelf.DetailsClass.__Shelf_CreateNew,
                    global::LightSwitchApplication.Shelf.DetailsClass.__Shelf_Created,
                    global::LightSwitchApplication.Shelf.DetailsClass.__Shelf_AllowSaveWithErrors);
            private static global::LightSwitchApplication.Shelf __Shelf_CreateNew(global::Microsoft.LightSwitch.Framework.EntitySet<global::LightSwitchApplication.Shelf> es)
            {
                return new global::LightSwitchApplication.Shelf(es);
            }
            private static void __Shelf_Created(global::LightSwitchApplication.Shelf e)
            {
                e.Shelf_Created();
            }
            private static bool __Shelf_AllowSaveWithErrors(global::LightSwitchApplication.Shelf e)
            {
                bool result = false;
                e.Shelf_AllowSaveWithErrors(ref result);
                return result;
            }
    
            public DetailsClass() : base()
            {
            }
    
            public new global::Microsoft.LightSwitch.Details.Framework.EntityCommandSet<global::LightSwitchApplication.Shelf, global::LightSwitchApplication.Shelf.DetailsClass> Commands
            {
                get
                {
                    return base.Commands;
                }
            }
    
            public new global::Microsoft.LightSwitch.Details.Framework.EntityMethodSet<global::LightSwitchApplication.Shelf, global::LightSwitchApplication.Shelf.DetailsClass> Methods
            {
                get
                {
                    return base.Methods;
                }
            }
    
            public new global::LightSwitchApplication.Shelf.DetailsClass.PropertySet Properties
            {
                get
                {
                    return base.Properties;
                }
            }
    
            [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Never)]
            [global::System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1034:NestedTypesShouldNotBeVisible")]
            [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
            [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
            public sealed class PropertySet : global::Microsoft.LightSwitch.Details.Framework.Base.EntityPropertySet<global::LightSwitchApplication.Shelf, global::LightSwitchApplication.Shelf.DetailsClass>
            {
    
                public PropertySet() : base()
                {
                }
    
                public global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Shelf, global::LightSwitchApplication.Shelf.DetailsClass, int> Id
                {
                    get
                    {
                        return base.GetItem(global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties.Id) as global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Shelf, global::LightSwitchApplication.Shelf.DetailsClass, int>;
                    }
                }
                
                public global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Shelf, global::LightSwitchApplication.Shelf.DetailsClass, string> Symbol
                {
                    get
                    {
                        return base.GetItem(global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties.Symbol) as global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Shelf, global::LightSwitchApplication.Shelf.DetailsClass, string>;
                    }
                }
                
                public global::Microsoft.LightSwitch.Details.Framework.EntityCollectionProperty<global::LightSwitchApplication.Shelf, global::LightSwitchApplication.Shelf.DetailsClass, global::LightSwitchApplication.Book> Books
                {
                    get
                    {
                        return base.GetItem(global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties.Books) as global::Microsoft.LightSwitch.Details.Framework.EntityCollectionProperty<global::LightSwitchApplication.Shelf, global::LightSwitchApplication.Shelf.DetailsClass, global::LightSwitchApplication.Book>;
                    }
                }
                
                public global::Microsoft.LightSwitch.Details.Framework.EntityReferenceProperty<global::LightSwitchApplication.Shelf, global::LightSwitchApplication.Shelf.DetailsClass, global::LightSwitchApplication.Warehouse> Warehouse
                {
                    get
                    {
                        return base.GetItem(global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties.Warehouse) as global::Microsoft.LightSwitch.Details.Framework.EntityReferenceProperty<global::LightSwitchApplication.Shelf, global::LightSwitchApplication.Shelf.DetailsClass, global::LightSwitchApplication.Warehouse>;
                    }
                }
                
            }
    
            #pragma warning disable 109
            [global::System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1034:NestedTypesShouldNotBeVisible")]
            public interface IImplementation : global::Microsoft.LightSwitch.Internal.IEntityImplementation
            {
                new int Id { get; }
                new string Symbol { get; set; }
                new global::System.Collections.IEnumerable Books { get; }
                new global::Microsoft.LightSwitch.Internal.IEntityImplementation Warehouse { get; set; }
            }
            #pragma warning restore 109
    
            [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Never)]
            [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
            [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
            internal class PropertySetProperties
            {
    
                [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
                public static readonly global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Shelf, global::LightSwitchApplication.Shelf.DetailsClass, int>.Entry
                    Id = new global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Shelf, global::LightSwitchApplication.Shelf.DetailsClass, int>.Entry(
                        "Id",
                        global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties._Id_Stub,
                        global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties._Id_ComputeIsReadOnly,
                        global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties._Id_Validate,
                        global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties._Id_GetImplementationValue,
                        null,
                        global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties._Id_OnValueChanged);
                private static void _Id_Stub(global::Microsoft.LightSwitch.Details.Framework.Base.DetailsCallback<global::LightSwitchApplication.Shelf.DetailsClass, global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Shelf, global::LightSwitchApplication.Shelf.DetailsClass, int>.Data> c, global::LightSwitchApplication.Shelf.DetailsClass d, object sf)
                {
                    c(d, ref d._Id, sf);
                }
                private static bool _Id_ComputeIsReadOnly(global::LightSwitchApplication.Shelf e)
                {
                    bool result = false;
                    e.Id_IsReadOnly(ref result);
                    return result;
                }
                private static void _Id_Validate(global::LightSwitchApplication.Shelf e, global::Microsoft.LightSwitch.EntityValidationResultsBuilder r)
                {
                    e.Id_Validate(r);
                }
                private static int _Id_GetImplementationValue(global::LightSwitchApplication.Shelf.DetailsClass d)
                {
                    return d.ImplementationEntity.Id;
                }
                private static void _Id_OnValueChanged(global::LightSwitchApplication.Shelf e)
                {
                    e.Id_Changed();
                }
    
                [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
                public static readonly global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Shelf, global::LightSwitchApplication.Shelf.DetailsClass, string>.Entry
                    Symbol = new global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Shelf, global::LightSwitchApplication.Shelf.DetailsClass, string>.Entry(
                        "Symbol",
                        global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties._Symbol_Stub,
                        global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties._Symbol_ComputeIsReadOnly,
                        global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties._Symbol_Validate,
                        global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties._Symbol_GetImplementationValue,
                        global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties._Symbol_SetImplementationValue,
                        global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties._Symbol_OnValueChanged);
                private static void _Symbol_Stub(global::Microsoft.LightSwitch.Details.Framework.Base.DetailsCallback<global::LightSwitchApplication.Shelf.DetailsClass, global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Shelf, global::LightSwitchApplication.Shelf.DetailsClass, string>.Data> c, global::LightSwitchApplication.Shelf.DetailsClass d, object sf)
                {
                    c(d, ref d._Symbol, sf);
                }
                private static bool _Symbol_ComputeIsReadOnly(global::LightSwitchApplication.Shelf e)
                {
                    bool result = false;
                    e.Symbol_IsReadOnly(ref result);
                    return result;
                }
                private static void _Symbol_Validate(global::LightSwitchApplication.Shelf e, global::Microsoft.LightSwitch.EntityValidationResultsBuilder r)
                {
                    e.Symbol_Validate(r);
                }
                private static string _Symbol_GetImplementationValue(global::LightSwitchApplication.Shelf.DetailsClass d)
                {
                    return d.ImplementationEntity.Symbol;
                }
                private static void _Symbol_SetImplementationValue(global::LightSwitchApplication.Shelf.DetailsClass d, string v)
                {
                    d.ImplementationEntity.Symbol = v;
                }
                private static void _Symbol_OnValueChanged(global::LightSwitchApplication.Shelf e)
                {
                    e.Symbol_Changed();
                }
    
                [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
                public static readonly global::Microsoft.LightSwitch.Details.Framework.EntityCollectionProperty<global::LightSwitchApplication.Shelf, global::LightSwitchApplication.Shelf.DetailsClass, global::LightSwitchApplication.Book>.Entry
                    Books = new global::Microsoft.LightSwitch.Details.Framework.EntityCollectionProperty<global::LightSwitchApplication.Shelf, global::LightSwitchApplication.Shelf.DetailsClass, global::LightSwitchApplication.Book>.Entry(
                        "Books",
                        global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties._Books_Stub,
                        global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties._Books_GetReferencedEntities,
                        global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties._Books_GetEntityCollection);
                private static void _Books_Stub(global::Microsoft.LightSwitch.Details.Framework.Base.DetailsCallback<global::LightSwitchApplication.Shelf.DetailsClass, global::Microsoft.LightSwitch.Details.Framework.EntityCollectionProperty<global::LightSwitchApplication.Shelf, global::LightSwitchApplication.Shelf.DetailsClass, global::LightSwitchApplication.Book>.Data> c, global::LightSwitchApplication.Shelf.DetailsClass d, object sf)
                {
                    c(d, ref d._Books, sf);
                }
                private static global::System.Collections.Generic.IEnumerable<global::LightSwitchApplication.Book> _Books_GetReferencedEntities(global::LightSwitchApplication.Shelf.DetailsClass d)
                {
                    return d.GetReferencedEntities<global::LightSwitchApplication.Book, global::LightSwitchApplication.Book.DetailsClass>(global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties.Books, ref d._Books);
                }
                private static global::System.Collections.IEnumerable _Books_GetEntityCollection(global::LightSwitchApplication.Shelf.DetailsClass d)
                {
                    return d.ImplementationEntity.Books;
                }
    
                [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
                public static readonly global::Microsoft.LightSwitch.Details.Framework.EntityReferenceProperty<global::LightSwitchApplication.Shelf, global::LightSwitchApplication.Shelf.DetailsClass, global::LightSwitchApplication.Warehouse>.Entry
                    Warehouse = new global::Microsoft.LightSwitch.Details.Framework.EntityReferenceProperty<global::LightSwitchApplication.Shelf, global::LightSwitchApplication.Shelf.DetailsClass, global::LightSwitchApplication.Warehouse>.Entry(
                        "Warehouse",
                        global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties._Warehouse_Stub,
                        global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties._Warehouse_ComputeIsReadOnly,
                        global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties._Warehouse_Validate,
                        global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties._Warehouse_GetCoreImplementationValue,
                        global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties._Warehouse_GetImplementationValue,
                        global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties._Warehouse_SetImplementationValue,
                        global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties._Warehouse_Refresh,
                        global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties._Warehouse_OnValueChanged);
                private static void _Warehouse_Stub(global::Microsoft.LightSwitch.Details.Framework.Base.DetailsCallback<global::LightSwitchApplication.Shelf.DetailsClass, global::Microsoft.LightSwitch.Details.Framework.EntityReferenceProperty<global::LightSwitchApplication.Shelf, global::LightSwitchApplication.Shelf.DetailsClass, global::LightSwitchApplication.Warehouse>.Data> c, global::LightSwitchApplication.Shelf.DetailsClass d, object sf)
                {
                    c(d, ref d._Warehouse, sf);
                }
                private static bool _Warehouse_ComputeIsReadOnly(global::LightSwitchApplication.Shelf e)
                {
                    bool result = false;
                    e.Warehouse_IsReadOnly(ref result);
                    return result;
                }
                private static void _Warehouse_Validate(global::LightSwitchApplication.Shelf e, global::Microsoft.LightSwitch.EntityValidationResultsBuilder r)
                {
                    e.Warehouse_Validate(r);
                }
                private static global::Microsoft.LightSwitch.Internal.IEntityImplementation _Warehouse_GetCoreImplementationValue(global::LightSwitchApplication.Shelf.DetailsClass d)
                {
                    return d.ImplementationEntity.Warehouse;
                }
                private static global::LightSwitchApplication.Warehouse _Warehouse_GetImplementationValue(global::LightSwitchApplication.Shelf.DetailsClass d)
                {
                    return d.GetImplementationValue<global::LightSwitchApplication.Warehouse, global::LightSwitchApplication.Warehouse.DetailsClass>(global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties.Warehouse, ref d._Warehouse);
                }
                private static void _Warehouse_SetImplementationValue(global::LightSwitchApplication.Shelf.DetailsClass d, global::LightSwitchApplication.Warehouse v)
                {
                    d.SetImplementationValue(global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties.Warehouse, ref d._Warehouse, (i, ev) => i.Warehouse = ev, v);
                }
                private static void _Warehouse_Refresh(global::LightSwitchApplication.Shelf.DetailsClass d)
                {
                    d.RefreshNavigationProperty(global::LightSwitchApplication.Shelf.DetailsClass.PropertySetProperties.Warehouse, ref d._Warehouse);
                }
                private static void _Warehouse_OnValueChanged(global::LightSwitchApplication.Shelf e)
                {
                    e.Warehouse_Changed();
                }
    
            }
    
            [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
            private global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Shelf, global::LightSwitchApplication.Shelf.DetailsClass, int>.Data _Id;
            
            [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
            private global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Shelf, global::LightSwitchApplication.Shelf.DetailsClass, string>.Data _Symbol;
            
            [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
            private global::Microsoft.LightSwitch.Details.Framework.EntityCollectionProperty<global::LightSwitchApplication.Shelf, global::LightSwitchApplication.Shelf.DetailsClass, global::LightSwitchApplication.Book>.Data _Books;
            
            [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
            private global::Microsoft.LightSwitch.Details.Framework.EntityReferenceProperty<global::LightSwitchApplication.Shelf, global::LightSwitchApplication.Shelf.DetailsClass, global::LightSwitchApplication.Warehouse>.Data _Warehouse;
            
        }
    
        #endregion
    }
    
    #endregion
}
