using System;
using System.Drawing;
using System.Runtime.InteropServices;
using ESRI.ArcGIS.ADF.BaseClasses;
using ESRI.ArcGIS.ADF.CATIDs;
using ESRI.ArcGIS.Controls;
using ESRI.ArcGIS.Geodatabase;
using ESRI.ArcGIS.DataSourcesGDB;
using ESRI.ArcGIS.esriSystem;
using ESRI.ArcGIS.Carto;
using ESRI.ArcGIS.Geometry;

namespace LHSBDBMapControl
{
    /// <summary>
    /// Command that works in ArcMap/Map/PageLayout
    /// </summary>
    [Guid("15d4ce50-04d1-4c8f-b178-9ecb01d06741")]
    [ClassInterface(ClassInterfaceType.None)]
    [ProgId("LHSBDBMapControl.LHSBCreateFeature")]
    public sealed class LHSBCreateFeature : BaseCommand
    {
        #region COM Registration Function(s)
        [ComRegisterFunction()]
        [ComVisible(false)]
        static void RegisterFunction(Type registerType)
        {
            // Required for ArcGIS Component Category Registrar support
            ArcGISCategoryRegistration(registerType);

            //
            // TODO: Add any COM registration code here
            //
        }

        [ComUnregisterFunction()]
        [ComVisible(false)]
        static void UnregisterFunction(Type registerType)
        {
            // Required for ArcGIS Component Category Registrar support
            ArcGISCategoryUnregistration(registerType);

            //
            // TODO: Add any COM unregistration code here
            //
        }

        #region ArcGIS Component Category Registrar generated code
        /// <summary>
        /// Required method for ArcGIS Component Category registration -
        /// Do not modify the contents of this method with the code editor.
        /// </summary>
        private static void ArcGISCategoryRegistration(Type registerType)
        {
            string regKey = string.Format("HKEY_CLASSES_ROOT\\CLSID\\{{{0}}}", registerType.GUID);
            MxCommands.Register(regKey);
            ControlsCommands.Register(regKey);
        }
        /// <summary>
        /// Required method for ArcGIS Component Category unregistration -
        /// Do not modify the contents of this method with the code editor.
        /// </summary>
        private static void ArcGISCategoryUnregistration(Type registerType)
        {
            string regKey = string.Format("HKEY_CLASSES_ROOT\\CLSID\\{{{0}}}", registerType.GUID);
            MxCommands.Unregister(regKey);
            ControlsCommands.Unregister(regKey);
        }

        #endregion
        #endregion

        private IHookHelper m_hookHelper = null;
        public LHSBCreateFeature()
        {
            //
            // TODO: Define values for the public properties
            //
            base.m_category = ""; //localizable text
            base.m_caption = "";  //localizable text 
            base.m_message = "This should work in ArcMap/MapControl/PageLayoutControl";  //localizable text
            base.m_toolTip = "";  //localizable text
            base.m_name = "";   //unique id, non-localizable (e.g. "MyCategory_MyCommand")

            try
            {
                //
                // TODO: change bitmap name if necessary
                //
                string bitmapResourceName = GetType().Name + ".bmp";
                base.m_bitmap = new Bitmap(GetType(), bitmapResourceName);
            }
            catch (Exception ex)
            {
                System.Diagnostics.Trace.WriteLine(ex.Message, "Invalid Bitmap");
            }
        }

        #region Overridden Class Methods

        /// <summary>
        /// Occurs when this command is created
        /// </summary>
        /// <param name="hook">Instance of the application</param>
        public override void OnCreate(object hook)
        {
            if (hook == null)
                return;

            try
            {
                m_hookHelper = new HookHelperClass();
                m_hookHelper.Hook = hook;
                if (m_hookHelper.ActiveView == null)
                    m_hookHelper = null;
            }
            catch
            {
                m_hookHelper = null;
            }

            if (m_hookHelper == null)
                base.m_enabled = false;
            else
                base.m_enabled = true;

            // TODO:  Add other initialization code
        }

        /// <summary>
        /// Occurs when this command is clicked
        /// </summary>
        public override void OnClick()
        {
            // TODO: Add LHSBCreateFeature.OnClick implementation
            IWorkspaceFactory wsFactory = new SdeWorkspaceFactoryClass();
            IPropertySet ps = new PropertySetClass();
            //ps.SetProperty("SERVER", "admin");//计算机名
            //ps.SetProperty("INSTANCE", "esri_sde");//服务名称
            ps.SetProperty("INSTANCE", "");//服务名称
            ps.SetProperty("DATABASE", "LHSBDB");//数据库名称
            ps.SetProperty("USER", "sa");//用户名
            ps.SetProperty("PASSWORD", "lee123");//用户名登陆密码
            IWorkspace ws = wsFactory.Open(ps, 0);
            IFeatureClass fc = CreateFeatureClass(ws as IFeatureWorkspace);
            IFeatureLayer layer = new FeatureLayerClass();
            layer.Name = fc.AliasName;
            layer.FeatureClass = fc;
            m_hookHelper.FocusMap.AddLayer(layer as ILayer);

        }

        #endregion

        private IFeatureClass CreateFeatureClass(IFeatureWorkspace ws)
        {
            IFeatureClass fc = null;
            ISpatialReference ipSr = m_hookHelper.FocusMap.SpatialReference;

            IFeatureDataset ipFeatDs = ws.CreateFeatureDataset("newdataset", ipSr);

            IFields ipFields = new FieldsClass();
            ((IFieldsEdit)ipFields).FieldCount_2 = 3;

            IFieldEdit ipField = new FieldClass();
            ((IFieldEdit)ipField).Name_2 = "ObjectID";
            ((IFieldEdit)ipField).AliasName_2 = "FID";
            ((IFieldEdit)ipField).Type_2 = esriFieldType.esriFieldTypeOID;
            ((IFieldsEdit)ipFields).set_Field(0, ipField);
            //Add others miscellaneous text field
            IFieldEdit ipField2 = new FieldClass();
            ((IFieldEdit)ipField2).Name_2 = "SmallInteger";
            ((IFieldEdit)ipField2).AliasName_2 = "short";
            ((IFieldEdit)ipField2).Type_2 = esriFieldType.esriFieldTypeSmallInteger;
            ((IFieldsEdit)ipFields).set_Field(1, ipField2);
            //Make the shape field
            //it will need a geometry definition, with a spatial reference
            IGeometryDefEdit ipGeoDef = new GeometryDefClass();
            ipGeoDef.SpatialReference_2 = ipSr;
            ipGeoDef.GeometryType_2 = esriGeometryType.esriGeometryPolygon;
            IFieldEdit ipField3 = new FieldClass();
            ((IFieldEdit)ipField3).Name_2 = "Shape";
            ((IFieldEdit)ipField3).AliasName_2 = "shape";
            ((IFieldEdit)ipField3).Type_2 = esriFieldType.esriFieldTypeGeometry;
            ((IFieldEdit)ipField3).GeometryDef_2 = ipGeoDef;
            ((IFieldsEdit)ipFields).set_Field(2, ipField3);

            fc = ipFeatDs.CreateFeatureClass("polygon", ipFields, null, null,
                esriFeatureType.esriFTSimple, "Shape", "");

            return fc;
        }
    }
}
