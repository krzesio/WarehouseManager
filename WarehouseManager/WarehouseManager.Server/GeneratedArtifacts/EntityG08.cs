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
    public sealed partial class Warehouse : global::Microsoft.LightSwitch.Framework.Base.EntityObject<global::LightSwitchApplication.Warehouse, global::LightSwitchApplication.Warehouse.DetailsClass>
    {
        #region Constructors
    
        /// <summary>
        /// Initializes a new instance of the Warehouse entity.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public Warehouse()
            : this(null)
        {
        }
    
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public Warehouse(global::Microsoft.LightSwitch.Framework.EntitySet<global::LightSwitchApplication.Warehouse> entitySet)
            : base(entitySet)
        {
            global::LightSwitchApplication.Warehouse.DetailsClass.Initialize(this);
        }
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void Warehouse_Created();
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void Warehouse_AllowSaveWithErrors(ref bool result);
    
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
                return global::LightSwitchApplication.Warehouse.DetailsClass.GetValue(this, global::LightSwitchApplication.Warehouse.DetailsClass.PropertySetProperties.Id);
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
                return global::LightSwitchApplication.Warehouse.DetailsClass.GetValue(this, global::LightSwitchApplication.Warehouse.DetailsClass.PropertySetProperties.Symbol);
            }
            set
            {
                global::LightSwitchApplication.Warehouse.DetailsClass.SetValue(this, global::LightSwitchApplication.Warehouse.DetailsClass.PropertySetProperties.Symbol, value);
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
        public string AdditionalInfo
        {
            get
            {
                return global::LightSwitchApplication.Warehouse.DetailsClass.GetValue(this, global::LightSwitchApplication.Warehouse.DetailsClass.PropertySetProperties.AdditionalInfo);
            }
            set
            {
                global::LightSwitchApplication.Warehouse.DetailsClass.SetValue(this, global::LightSwitchApplication.Warehouse.DetailsClass.PropertySetProperties.AdditionalInfo, value);
            }
        }
        
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void AdditionalInfo_IsReadOnly(ref bool result);
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void AdditionalInfo_Validate(global::Microsoft.LightSwitch.EntityValidationResultsBuilder results);
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void AdditionalInfo_Changed();

        /// <summary>
        /// No Modeled Description Available
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public global::Microsoft.LightSwitch.Framework.EntityCollection<global::LightSwitchApplication.Shelf> Shelves
        {
            get
            {
                return global::LightSwitchApplication.Warehouse.DetailsClass.GetValue(this, global::LightSwitchApplication.Warehouse.DetailsClass.PropertySetProperties.Shelves);
            }
        }
        
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public Microsoft.LightSwitch.IDataServiceQueryable<global::LightSwitchApplication.Shelf> ShelvesQuery
        {
            get
            {
                return global::LightSwitchApplication.Warehouse.DetailsClass.GetQuery(this, global::LightSwitchApplication.Warehouse.DetailsClass.PropertySetProperties.Shelves);
            }
        }

        #endregion
    
        #region Details Class
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Never)]
        [global::System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1034:NestedTypesShouldNotBeVisible")]
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public sealed class DetailsClass : global::Microsoft.LightSwitch.Details.Framework.Base.EntityDetails<
                global::LightSwitchApplication.Warehouse,
                global::LightSwitchApplication.Warehouse.DetailsClass,
                global::LightSwitchApplication.Warehouse.DetailsClass.IImplementation,
                global::LightSwitchApplication.Warehouse.DetailsClass.PropertySet,
                global::Microsoft.LightSwitch.Details.Framework.EntityCommandSet<global::LightSwitchApplication.Warehouse, global::LightSwitchApplication.Warehouse.DetailsClass>,
                global::Microsoft.LightSwitch.Details.Framework.EntityMethodSet<global::LightSwitchApplication.Warehouse, global::LightSwitchApplication.Warehouse.DetailsClass>>
        {
    
            static DetailsClass()
            {
                var initializeEntry = global::LightSwitchApplication.Warehouse.DetailsClass.PropertySetProperties.Id;
            }
    
            [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
            private static readonly global::Microsoft.LightSwitch.Details.Framework.Base.EntityDetails<global::LightSwitchApplication.Warehouse, global::LightSwitchApplication.Warehouse.DetailsClass>.Entry
                __WarehouseEntry = new global::Microsoft.LightSwitch.Details.Framework.Base.EntityDetails<global::LightSwitchApplication.Warehouse, global::LightSwitchApplication.Warehouse.DetailsClass>.Entry(
                    global::LightSwitchApplication.Warehouse.DetailsClass.__Warehouse_CreateNew,
                    global::LightSwitchApplication.Warehouse.DetailsClass.__Warehouse_Created,
                    global::LightSwitchApplication.Warehouse.DetailsClass.__Warehouse_AllowSaveWithErrors);
            private static global::LightSwitchApplication.Warehouse __Warehouse_CreateNew(global::Microsoft.LightSwitch.Framework.EntitySet<global::LightSwitchApplication.Warehouse> es)
            {
                return new global::LightSwitchApplication.Warehouse(es);
            }
            private static void __Warehouse_Created(global::LightSwitchApplication.Warehouse e)
            {
                e.Warehouse_Created();
            }
            private static bool __Warehouse_AllowSaveWithErrors(global::LightSwitchApplication.Warehouse e)
            {
                bool result = false;
                e.Warehouse_AllowSaveWithErrors(ref result);
                return result;
            }
    
            public DetailsClass() : base()
            {
            }
    
            public new global::Microsoft.LightSwitch.Details.Framework.EntityCommandSet<global::LightSwitchApplication.Warehouse, global::LightSwitchApplication.Warehouse.DetailsClass> Commands
            {
                get
                {
                    return base.Commands;
                }
            }
    
            public new global::Microsoft.LightSwitch.Details.Framework.EntityMethodSet<global::LightSwitchApplication.Warehouse, global::LightSwitchApplication.Warehouse.DetailsClass> Methods
            {
                get
                {
                    return base.Methods;
                }
            }
    
            public new global::LightSwitchApplication.Warehouse.DetailsClass.PropertySet Properties
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
            public sealed class PropertySet : global::Microsoft.LightSwitch.Details.Framework.Base.EntityPropertySet<global::LightSwitchApplication.Warehouse, global::LightSwitchApplication.Warehouse.DetailsClass>
            {
    
                public PropertySet() : base()
                {
                }
    
                public global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Warehouse, global::LightSwitchApplication.Warehouse.DetailsClass, int> Id
                {
                    get
                    {
                        return base.GetItem(global::LightSwitchApplication.Warehouse.DetailsClass.PropertySetProperties.Id) as global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Warehouse, global::LightSwitchApplication.Warehouse.DetailsClass, int>;
                    }
                }
                
                public global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Warehouse, global::LightSwitchApplication.Warehouse.DetailsClass, string> Symbol
                {
                    get
                    {
                        return base.GetItem(global::LightSwitchApplication.Warehouse.DetailsClass.PropertySetProperties.Symbol) as global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Warehouse, global::LightSwitchApplication.Warehouse.DetailsClass, string>;
                    }
                }
                
                public global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Warehouse, global::LightSwitchApplication.Warehouse.DetailsClass, string> AdditionalInfo
                {
                    get
                    {
                        return base.GetItem(global::LightSwitchApplication.Warehouse.DetailsClass.PropertySetProperties.AdditionalInfo) as global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Warehouse, global::LightSwitchApplication.Warehouse.DetailsClass, string>;
                    }
                }
                
                public global::Microsoft.LightSwitch.Details.Framework.EntityCollectionProperty<global::LightSwitchApplication.Warehouse, global::LightSwitchApplication.Warehouse.DetailsClass, global::LightSwitchApplication.Shelf> Shelves
                {
                    get
                    {
                        return base.GetItem(global::LightSwitchApplication.Warehouse.DetailsClass.PropertySetProperties.Shelves) as global::Microsoft.LightSwitch.Details.Framework.EntityCollectionProperty<global::LightSwitchApplication.Warehouse, global::LightSwitchApplication.Warehouse.DetailsClass, global::LightSwitchApplication.Shelf>;
                    }
                }
                
            }
    
            #pragma warning disable 109
            [global::System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1034:NestedTypesShouldNotBeVisible")]
            public interface IImplementation : global::Microsoft.LightSwitch.Internal.IEntityImplementation
            {
                new int Id { get; }
                new string Symbol { get; set; }
                new string AdditionalInfo { get; set; }
                new global::System.Collections.IEnumerable Shelves { get; }
            }
            #pragma warning restore 109
    
            [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Never)]
            [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
            [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
            internal class PropertySetProperties
            {
    
                [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
                public static readonly global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Warehouse, global::LightSwitchApplication.Warehouse.DetailsClass, int>.Entry
                    Id = new global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Warehouse, global::LightSwitchApplication.Warehouse.DetailsClass, int>.Entry(
                        "Id",
                        global::LightSwitchApplication.Warehouse.DetailsClass.PropertySetProperties._Id_Stub,
                        global::LightSwitchApplication.Warehouse.DetailsClass.PropertySetProperties._Id_ComputeIsReadOnly,
                        global::LightSwitchApplication.Warehouse.DetailsClass.PropertySetProperties._Id_Validate,
                        global::LightSwitchApplication.Warehouse.DetailsClass.PropertySetProperties._Id_GetImplementationValue,
                        null,
                        global::LightSwitchApplication.Warehouse.DetailsClass.PropertySetProperties._Id_OnValueChanged);
                private static void _Id_Stub(global::Microsoft.LightSwitch.Details.Framework.Base.DetailsCallback<global::LightSwitchApplication.Warehouse.DetailsClass, global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Warehouse, global::LightSwitchApplication.Warehouse.DetailsClass, int>.Data> c, global::LightSwitchApplication.Warehouse.DetailsClass d, object sf)
                {
                    c(d, ref d._Id, sf);
                }
                private static bool _Id_ComputeIsReadOnly(global::LightSwitchApplication.Warehouse e)
                {
                    bool result = false;
                    e.Id_IsReadOnly(ref result);
                    return result;
                }
                private static void _Id_Validate(global::LightSwitchApplication.Warehouse e, global::Microsoft.LightSwitch.EntityValidationResultsBuilder r)
                {
                    e.Id_Validate(r);
                }
                private static int _Id_GetImplementationValue(global::LightSwitchApplication.Warehouse.DetailsClass d)
                {
                    return d.ImplementationEntity.Id;
                }
                private static void _Id_OnValueChanged(global::LightSwitchApplication.Warehouse e)
                {
                    e.Id_Changed();
                }
    
                [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
                public static readonly global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Warehouse, global::LightSwitchApplication.Warehouse.DetailsClass, string>.Entry
                    Symbol = new global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Warehouse, global::LightSwitchApplication.Warehouse.DetailsClass, string>.Entry(
                        "Symbol",
                        global::LightSwitchApplication.Warehouse.DetailsClass.PropertySetProperties._Symbol_Stub,
                        global::LightSwitchApplication.Warehouse.DetailsClass.PropertySetProperties._Symbol_ComputeIsReadOnly,
                        global::LightSwitchApplication.Warehouse.DetailsClass.PropertySetProperties._Symbol_Validate,
                        global::LightSwitchApplication.Warehouse.DetailsClass.PropertySetProperties._Symbol_GetImplementationValue,
                        global::LightSwitchApplication.Warehouse.DetailsClass.PropertySetProperties._Symbol_SetImplementationValue,
                        global::LightSwitchApplication.Warehouse.DetailsClass.PropertySetProperties._Symbol_OnValueChanged);
                private static void _Symbol_Stub(global::Microsoft.LightSwitch.Details.Framework.Base.DetailsCallback<global::LightSwitchApplication.Warehouse.DetailsClass, global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Warehouse, global::LightSwitchApplication.Warehouse.DetailsClass, string>.Data> c, global::LightSwitchApplication.Warehouse.DetailsClass d, object sf)
                {
                    c(d, ref d._Symbol, sf);
                }
                private static bool _Symbol_ComputeIsReadOnly(global::LightSwitchApplication.Warehouse e)
                {
                    bool result = false;
                    e.Symbol_IsReadOnly(ref result);
                    return result;
                }
                private static void _Symbol_Validate(global::LightSwitchApplication.Warehouse e, global::Microsoft.LightSwitch.EntityValidationResultsBuilder r)
                {
                    e.Symbol_Validate(r);
                }
                private static string _Symbol_GetImplementationValue(global::LightSwitchApplication.Warehouse.DetailsClass d)
                {
                    return d.ImplementationEntity.Symbol;
                }
                private static void _Symbol_SetImplementationValue(global::LightSwitchApplication.Warehouse.DetailsClass d, string v)
                {
                    d.ImplementationEntity.Symbol = v;
                }
                private static void _Symbol_OnValueChanged(global::LightSwitchApplication.Warehouse e)
                {
                    e.Symbol_Changed();
                }
    
                [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
                public static readonly global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Warehouse, global::LightSwitchApplication.Warehouse.DetailsClass, string>.Entry
                    AdditionalInfo = new global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Warehouse, global::LightSwitchApplication.Warehouse.DetailsClass, string>.Entry(
                        "AdditionalInfo",
                        global::LightSwitchApplication.Warehouse.DetailsClass.PropertySetProperties._AdditionalInfo_Stub,
                        global::LightSwitchApplication.Warehouse.DetailsClass.PropertySetProperties._AdditionalInfo_ComputeIsReadOnly,
                        global::LightSwitchApplication.Warehouse.DetailsClass.PropertySetProperties._AdditionalInfo_Validate,
                        global::LightSwitchApplication.Warehouse.DetailsClass.PropertySetProperties._AdditionalInfo_GetImplementationValue,
                        global::LightSwitchApplication.Warehouse.DetailsClass.PropertySetProperties._AdditionalInfo_SetImplementationValue,
                        global::LightSwitchApplication.Warehouse.DetailsClass.PropertySetProperties._AdditionalInfo_OnValueChanged);
                private static void _AdditionalInfo_Stub(global::Microsoft.LightSwitch.Details.Framework.Base.DetailsCallback<global::LightSwitchApplication.Warehouse.DetailsClass, global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Warehouse, global::LightSwitchApplication.Warehouse.DetailsClass, string>.Data> c, global::LightSwitchApplication.Warehouse.DetailsClass d, object sf)
                {
                    c(d, ref d._AdditionalInfo, sf);
                }
                private static bool _AdditionalInfo_ComputeIsReadOnly(global::LightSwitchApplication.Warehouse e)
                {
                    bool result = false;
                    e.AdditionalInfo_IsReadOnly(ref result);
                    return result;
                }
                private static void _AdditionalInfo_Validate(global::LightSwitchApplication.Warehouse e, global::Microsoft.LightSwitch.EntityValidationResultsBuilder r)
                {
                    e.AdditionalInfo_Validate(r);
                }
                private static string _AdditionalInfo_GetImplementationValue(global::LightSwitchApplication.Warehouse.DetailsClass d)
                {
                    return d.ImplementationEntity.AdditionalInfo;
                }
                private static void _AdditionalInfo_SetImplementationValue(global::LightSwitchApplication.Warehouse.DetailsClass d, string v)
                {
                    d.ImplementationEntity.AdditionalInfo = v;
                }
                private static void _AdditionalInfo_OnValueChanged(global::LightSwitchApplication.Warehouse e)
                {
                    e.AdditionalInfo_Changed();
                }
    
                [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
                public static readonly global::Microsoft.LightSwitch.Details.Framework.EntityCollectionProperty<global::LightSwitchApplication.Warehouse, global::LightSwitchApplication.Warehouse.DetailsClass, global::LightSwitchApplication.Shelf>.Entry
                    Shelves = new global::Microsoft.LightSwitch.Details.Framework.EntityCollectionProperty<global::LightSwitchApplication.Warehouse, global::LightSwitchApplication.Warehouse.DetailsClass, global::LightSwitchApplication.Shelf>.Entry(
                        "Shelves",
                        global::LightSwitchApplication.Warehouse.DetailsClass.PropertySetProperties._Shelves_Stub,
                        global::LightSwitchApplication.Warehouse.DetailsClass.PropertySetProperties._Shelves_GetReferencedEntities,
                        global::LightSwitchApplication.Warehouse.DetailsClass.PropertySetProperties._Shelves_GetEntityCollection);
                private static void _Shelves_Stub(global::Microsoft.LightSwitch.Details.Framework.Base.DetailsCallback<global::LightSwitchApplication.Warehouse.DetailsClass, global::Microsoft.LightSwitch.Details.Framework.EntityCollectionProperty<global::LightSwitchApplication.Warehouse, global::LightSwitchApplication.Warehouse.DetailsClass, global::LightSwitchApplication.Shelf>.Data> c, global::LightSwitchApplication.Warehouse.DetailsClass d, object sf)
                {
                    c(d, ref d._Shelves, sf);
                }
                private static global::System.Collections.Generic.IEnumerable<global::LightSwitchApplication.Shelf> _Shelves_GetReferencedEntities(global::LightSwitchApplication.Warehouse.DetailsClass d)
                {
                    return d.GetReferencedEntities<global::LightSwitchApplication.Shelf, global::LightSwitchApplication.Shelf.DetailsClass>(global::LightSwitchApplication.Warehouse.DetailsClass.PropertySetProperties.Shelves, ref d._Shelves);
                }
                private static global::System.Collections.IEnumerable _Shelves_GetEntityCollection(global::LightSwitchApplication.Warehouse.DetailsClass d)
                {
                    return d.ImplementationEntity.Shelves;
                }
    
            }
    
            [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
            private global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Warehouse, global::LightSwitchApplication.Warehouse.DetailsClass, int>.Data _Id;
            
            [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
            private global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Warehouse, global::LightSwitchApplication.Warehouse.DetailsClass, string>.Data _Symbol;
            
            [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
            private global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Warehouse, global::LightSwitchApplication.Warehouse.DetailsClass, string>.Data _AdditionalInfo;
            
            [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
            private global::Microsoft.LightSwitch.Details.Framework.EntityCollectionProperty<global::LightSwitchApplication.Warehouse, global::LightSwitchApplication.Warehouse.DetailsClass, global::LightSwitchApplication.Shelf>.Data _Shelves;
            
        }
    
        #endregion
    }
    
    #endregion
}