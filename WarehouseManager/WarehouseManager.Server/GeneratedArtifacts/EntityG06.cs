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
    public sealed partial class Owner : global::Microsoft.LightSwitch.Framework.Base.EntityObject<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass>
    {
        #region Constructors
    
        /// <summary>
        /// Initializes a new instance of the Owner entity.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public Owner()
            : this(null)
        {
        }
    
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public Owner(global::Microsoft.LightSwitch.Framework.EntitySet<global::LightSwitchApplication.Owner> entitySet)
            : base(entitySet)
        {
            global::LightSwitchApplication.Owner.DetailsClass.Initialize(this);
        }
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void Owner_Created();
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void Owner_AllowSaveWithErrors(ref bool result);
    
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
                return global::LightSwitchApplication.Owner.DetailsClass.GetValue(this, global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties.Id);
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
        public string Name
        {
            get
            {
                return global::LightSwitchApplication.Owner.DetailsClass.GetValue(this, global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties.Name);
            }
            set
            {
                global::LightSwitchApplication.Owner.DetailsClass.SetValue(this, global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties.Name, value);
            }
        }
        
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void Name_IsReadOnly(ref bool result);
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void Name_Validate(global::Microsoft.LightSwitch.EntityValidationResultsBuilder results);
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void Name_Changed();

        /// <summary>
        /// No Modeled Description Available
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public string LastName
        {
            get
            {
                return global::LightSwitchApplication.Owner.DetailsClass.GetValue(this, global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties.LastName);
            }
            set
            {
                global::LightSwitchApplication.Owner.DetailsClass.SetValue(this, global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties.LastName, value);
            }
        }
        
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void LastName_IsReadOnly(ref bool result);
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void LastName_Validate(global::Microsoft.LightSwitch.EntityValidationResultsBuilder results);
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void LastName_Changed();

        /// <summary>
        /// No Modeled Description Available
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public string PhoneNumber
        {
            get
            {
                return global::LightSwitchApplication.Owner.DetailsClass.GetValue(this, global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties.PhoneNumber);
            }
            set
            {
                global::LightSwitchApplication.Owner.DetailsClass.SetValue(this, global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties.PhoneNumber, value);
            }
        }
        
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void PhoneNumber_IsReadOnly(ref bool result);
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void PhoneNumber_Validate(global::Microsoft.LightSwitch.EntityValidationResultsBuilder results);
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void PhoneNumber_Changed();

        /// <summary>
        /// No Modeled Description Available
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public global::Microsoft.LightSwitch.Framework.EntityCollection<global::LightSwitchApplication.Bookstore> Bookstores
        {
            get
            {
                return global::LightSwitchApplication.Owner.DetailsClass.GetValue(this, global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties.Bookstores);
            }
        }
        
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public Microsoft.LightSwitch.IDataServiceQueryable<global::LightSwitchApplication.Bookstore> BookstoresQuery
        {
            get
            {
                return global::LightSwitchApplication.Owner.DetailsClass.GetQuery(this, global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties.Bookstores);
            }
        }

        #endregion
    
        #region Details Class
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Never)]
        [global::System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1034:NestedTypesShouldNotBeVisible")]
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public sealed class DetailsClass : global::Microsoft.LightSwitch.Details.Framework.Base.EntityDetails<
                global::LightSwitchApplication.Owner,
                global::LightSwitchApplication.Owner.DetailsClass,
                global::LightSwitchApplication.Owner.DetailsClass.IImplementation,
                global::LightSwitchApplication.Owner.DetailsClass.PropertySet,
                global::Microsoft.LightSwitch.Details.Framework.EntityCommandSet<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass>,
                global::Microsoft.LightSwitch.Details.Framework.EntityMethodSet<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass>>
        {
    
            static DetailsClass()
            {
                var initializeEntry = global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties.Id;
            }
    
            [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
            private static readonly global::Microsoft.LightSwitch.Details.Framework.Base.EntityDetails<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass>.Entry
                __OwnerEntry = new global::Microsoft.LightSwitch.Details.Framework.Base.EntityDetails<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass>.Entry(
                    global::LightSwitchApplication.Owner.DetailsClass.__Owner_CreateNew,
                    global::LightSwitchApplication.Owner.DetailsClass.__Owner_Created,
                    global::LightSwitchApplication.Owner.DetailsClass.__Owner_AllowSaveWithErrors);
            private static global::LightSwitchApplication.Owner __Owner_CreateNew(global::Microsoft.LightSwitch.Framework.EntitySet<global::LightSwitchApplication.Owner> es)
            {
                return new global::LightSwitchApplication.Owner(es);
            }
            private static void __Owner_Created(global::LightSwitchApplication.Owner e)
            {
                e.Owner_Created();
            }
            private static bool __Owner_AllowSaveWithErrors(global::LightSwitchApplication.Owner e)
            {
                bool result = false;
                e.Owner_AllowSaveWithErrors(ref result);
                return result;
            }
    
            public DetailsClass() : base()
            {
            }
    
            public new global::Microsoft.LightSwitch.Details.Framework.EntityCommandSet<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass> Commands
            {
                get
                {
                    return base.Commands;
                }
            }
    
            public new global::Microsoft.LightSwitch.Details.Framework.EntityMethodSet<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass> Methods
            {
                get
                {
                    return base.Methods;
                }
            }
    
            public new global::LightSwitchApplication.Owner.DetailsClass.PropertySet Properties
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
            public sealed class PropertySet : global::Microsoft.LightSwitch.Details.Framework.Base.EntityPropertySet<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass>
            {
    
                public PropertySet() : base()
                {
                }
    
                public global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass, int> Id
                {
                    get
                    {
                        return base.GetItem(global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties.Id) as global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass, int>;
                    }
                }
                
                public global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass, string> Name
                {
                    get
                    {
                        return base.GetItem(global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties.Name) as global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass, string>;
                    }
                }
                
                public global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass, string> LastName
                {
                    get
                    {
                        return base.GetItem(global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties.LastName) as global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass, string>;
                    }
                }
                
                public global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass, string> PhoneNumber
                {
                    get
                    {
                        return base.GetItem(global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties.PhoneNumber) as global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass, string>;
                    }
                }
                
                public global::Microsoft.LightSwitch.Details.Framework.EntityCollectionProperty<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass, global::LightSwitchApplication.Bookstore> Bookstores
                {
                    get
                    {
                        return base.GetItem(global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties.Bookstores) as global::Microsoft.LightSwitch.Details.Framework.EntityCollectionProperty<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass, global::LightSwitchApplication.Bookstore>;
                    }
                }
                
            }
    
            #pragma warning disable 109
            [global::System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1034:NestedTypesShouldNotBeVisible")]
            public interface IImplementation : global::Microsoft.LightSwitch.Internal.IEntityImplementation
            {
                new int Id { get; }
                new string Name { get; set; }
                new string LastName { get; set; }
                new string PhoneNumber { get; set; }
                new global::System.Collections.IEnumerable Bookstores { get; }
            }
            #pragma warning restore 109
    
            [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Never)]
            [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
            [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
            internal class PropertySetProperties
            {
    
                [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
                public static readonly global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass, int>.Entry
                    Id = new global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass, int>.Entry(
                        "Id",
                        global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties._Id_Stub,
                        global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties._Id_ComputeIsReadOnly,
                        global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties._Id_Validate,
                        global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties._Id_GetImplementationValue,
                        null,
                        global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties._Id_OnValueChanged);
                private static void _Id_Stub(global::Microsoft.LightSwitch.Details.Framework.Base.DetailsCallback<global::LightSwitchApplication.Owner.DetailsClass, global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass, int>.Data> c, global::LightSwitchApplication.Owner.DetailsClass d, object sf)
                {
                    c(d, ref d._Id, sf);
                }
                private static bool _Id_ComputeIsReadOnly(global::LightSwitchApplication.Owner e)
                {
                    bool result = false;
                    e.Id_IsReadOnly(ref result);
                    return result;
                }
                private static void _Id_Validate(global::LightSwitchApplication.Owner e, global::Microsoft.LightSwitch.EntityValidationResultsBuilder r)
                {
                    e.Id_Validate(r);
                }
                private static int _Id_GetImplementationValue(global::LightSwitchApplication.Owner.DetailsClass d)
                {
                    return d.ImplementationEntity.Id;
                }
                private static void _Id_OnValueChanged(global::LightSwitchApplication.Owner e)
                {
                    e.Id_Changed();
                }
    
                [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
                public static readonly global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass, string>.Entry
                    Name = new global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass, string>.Entry(
                        "Name",
                        global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties._Name_Stub,
                        global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties._Name_ComputeIsReadOnly,
                        global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties._Name_Validate,
                        global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties._Name_GetImplementationValue,
                        global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties._Name_SetImplementationValue,
                        global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties._Name_OnValueChanged);
                private static void _Name_Stub(global::Microsoft.LightSwitch.Details.Framework.Base.DetailsCallback<global::LightSwitchApplication.Owner.DetailsClass, global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass, string>.Data> c, global::LightSwitchApplication.Owner.DetailsClass d, object sf)
                {
                    c(d, ref d._Name, sf);
                }
                private static bool _Name_ComputeIsReadOnly(global::LightSwitchApplication.Owner e)
                {
                    bool result = false;
                    e.Name_IsReadOnly(ref result);
                    return result;
                }
                private static void _Name_Validate(global::LightSwitchApplication.Owner e, global::Microsoft.LightSwitch.EntityValidationResultsBuilder r)
                {
                    e.Name_Validate(r);
                }
                private static string _Name_GetImplementationValue(global::LightSwitchApplication.Owner.DetailsClass d)
                {
                    return d.ImplementationEntity.Name;
                }
                private static void _Name_SetImplementationValue(global::LightSwitchApplication.Owner.DetailsClass d, string v)
                {
                    d.ImplementationEntity.Name = v;
                }
                private static void _Name_OnValueChanged(global::LightSwitchApplication.Owner e)
                {
                    e.Name_Changed();
                }
    
                [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
                public static readonly global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass, string>.Entry
                    LastName = new global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass, string>.Entry(
                        "LastName",
                        global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties._LastName_Stub,
                        global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties._LastName_ComputeIsReadOnly,
                        global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties._LastName_Validate,
                        global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties._LastName_GetImplementationValue,
                        global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties._LastName_SetImplementationValue,
                        global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties._LastName_OnValueChanged);
                private static void _LastName_Stub(global::Microsoft.LightSwitch.Details.Framework.Base.DetailsCallback<global::LightSwitchApplication.Owner.DetailsClass, global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass, string>.Data> c, global::LightSwitchApplication.Owner.DetailsClass d, object sf)
                {
                    c(d, ref d._LastName, sf);
                }
                private static bool _LastName_ComputeIsReadOnly(global::LightSwitchApplication.Owner e)
                {
                    bool result = false;
                    e.LastName_IsReadOnly(ref result);
                    return result;
                }
                private static void _LastName_Validate(global::LightSwitchApplication.Owner e, global::Microsoft.LightSwitch.EntityValidationResultsBuilder r)
                {
                    e.LastName_Validate(r);
                }
                private static string _LastName_GetImplementationValue(global::LightSwitchApplication.Owner.DetailsClass d)
                {
                    return d.ImplementationEntity.LastName;
                }
                private static void _LastName_SetImplementationValue(global::LightSwitchApplication.Owner.DetailsClass d, string v)
                {
                    d.ImplementationEntity.LastName = v;
                }
                private static void _LastName_OnValueChanged(global::LightSwitchApplication.Owner e)
                {
                    e.LastName_Changed();
                }
    
                [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
                public static readonly global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass, string>.Entry
                    PhoneNumber = new global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass, string>.Entry(
                        "PhoneNumber",
                        global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties._PhoneNumber_Stub,
                        global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties._PhoneNumber_ComputeIsReadOnly,
                        global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties._PhoneNumber_Validate,
                        global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties._PhoneNumber_GetImplementationValue,
                        global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties._PhoneNumber_SetImplementationValue,
                        global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties._PhoneNumber_OnValueChanged);
                private static void _PhoneNumber_Stub(global::Microsoft.LightSwitch.Details.Framework.Base.DetailsCallback<global::LightSwitchApplication.Owner.DetailsClass, global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass, string>.Data> c, global::LightSwitchApplication.Owner.DetailsClass d, object sf)
                {
                    c(d, ref d._PhoneNumber, sf);
                }
                private static bool _PhoneNumber_ComputeIsReadOnly(global::LightSwitchApplication.Owner e)
                {
                    bool result = false;
                    e.PhoneNumber_IsReadOnly(ref result);
                    return result;
                }
                private static void _PhoneNumber_Validate(global::LightSwitchApplication.Owner e, global::Microsoft.LightSwitch.EntityValidationResultsBuilder r)
                {
                    e.PhoneNumber_Validate(r);
                }
                private static string _PhoneNumber_GetImplementationValue(global::LightSwitchApplication.Owner.DetailsClass d)
                {
                    return d.ImplementationEntity.PhoneNumber;
                }
                private static void _PhoneNumber_SetImplementationValue(global::LightSwitchApplication.Owner.DetailsClass d, string v)
                {
                    d.ImplementationEntity.PhoneNumber = v;
                }
                private static void _PhoneNumber_OnValueChanged(global::LightSwitchApplication.Owner e)
                {
                    e.PhoneNumber_Changed();
                }
    
                [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
                public static readonly global::Microsoft.LightSwitch.Details.Framework.EntityCollectionProperty<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass, global::LightSwitchApplication.Bookstore>.Entry
                    Bookstores = new global::Microsoft.LightSwitch.Details.Framework.EntityCollectionProperty<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass, global::LightSwitchApplication.Bookstore>.Entry(
                        "Bookstores",
                        global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties._Bookstores_Stub,
                        global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties._Bookstores_GetReferencedEntities,
                        global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties._Bookstores_GetEntityCollection);
                private static void _Bookstores_Stub(global::Microsoft.LightSwitch.Details.Framework.Base.DetailsCallback<global::LightSwitchApplication.Owner.DetailsClass, global::Microsoft.LightSwitch.Details.Framework.EntityCollectionProperty<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass, global::LightSwitchApplication.Bookstore>.Data> c, global::LightSwitchApplication.Owner.DetailsClass d, object sf)
                {
                    c(d, ref d._Bookstores, sf);
                }
                private static global::System.Collections.Generic.IEnumerable<global::LightSwitchApplication.Bookstore> _Bookstores_GetReferencedEntities(global::LightSwitchApplication.Owner.DetailsClass d)
                {
                    return d.GetReferencedEntities<global::LightSwitchApplication.Bookstore, global::LightSwitchApplication.Bookstore.DetailsClass>(global::LightSwitchApplication.Owner.DetailsClass.PropertySetProperties.Bookstores, ref d._Bookstores);
                }
                private static global::System.Collections.IEnumerable _Bookstores_GetEntityCollection(global::LightSwitchApplication.Owner.DetailsClass d)
                {
                    return d.ImplementationEntity.Bookstores;
                }
    
            }
    
            [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
            private global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass, int>.Data _Id;
            
            [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
            private global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass, string>.Data _Name;
            
            [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
            private global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass, string>.Data _LastName;
            
            [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
            private global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass, string>.Data _PhoneNumber;
            
            [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
            private global::Microsoft.LightSwitch.Details.Framework.EntityCollectionProperty<global::LightSwitchApplication.Owner, global::LightSwitchApplication.Owner.DetailsClass, global::LightSwitchApplication.Bookstore>.Data _Bookstores;
            
        }
    
        #endregion
    }
    
    #endregion
}
