using System;
using System.Drawing;
using System.Runtime.InteropServices;
using ESRI.ArcGIS.ADF.BaseClasses;
using ESRI.ArcGIS.ADF.CATIDs;
using ESRI.ArcGIS.Controls;
using ESRI.ArcGIS.DataSourcesGDB;
using ESRI.ArcGIS.Geodatabase;
using ESRI.ArcGIS.Geometry;
using ESRI.ArcGIS.esriSystem;
using System.Windows.Forms;
using ESRI.ArcGIS.Carto;

namespace LHSB
{
    /// <summary>
    /// Command that works in ArcMap/Map/PageLayout
    /// </summary>
    [Guid("3e76d947-39f5-429e-a95b-edd6fef67fd2")]
    [ClassInterface(ClassInterfaceType.None)]
    [ProgId("LHSB.LHSBTB")]
    public sealed class LHSBTB : BaseCommand
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
        public LHSBTB()
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
            // TODO: Add createMDB.OnClick implementation
            //设定相应格式
            SaveFileDialog dbfiledlg = new SaveFileDialog();
            dbfiledlg.Filter = "空间数据库文件（*.mdb）|*.mdb";
            dbfiledlg.RestoreDirectory = true;
            //设置格式
            if (dbfiledlg.ShowDialog() == DialogResult.OK)
            {
                string localFilePath = dbfiledlg.FileName.ToString();
                string FilePath = localFilePath.Substring(0, localFilePath.LastIndexOf("\\")); //获得不带文件名的文件路径
                string fileNameExt = localFilePath.Substring(localFilePath.LastIndexOf("\\") + 1); //获取文件名，不带路径

                //实例化一个数据库
                IWorkspaceFactory ipWSFactory = new AccessWorkspaceFactoryClass();
                IWorkspaceName ipWsName = ipWSFactory.Create(FilePath, fileNameExt, null, 0);
                //以name对象方式打开
                IName name = (IName)ipWsName;
                IWorkspace ipWorkspace = (IWorkspace)name.Open();
                //创建空间参考和要素集
                ISpatialReference ipSr = m_hookHelper.FocusMap.SpatialReference;
                IFeatureDataset ipFeatDs = ((IFeatureWorkspace)ipWorkspace).CreateFeatureDataset("dataset", ipSr);

                //设置相应字段和属性
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
                ipGeoDef.GeometryType_2 = esriGeometryType.esriGeometryPoint;
                IFieldEdit ipField3 = new FieldClass();
                ((IFieldEdit)ipField3).Name_2 = "Point";
                ((IFieldEdit)ipField3).AliasName_2 = "point";
                ((IFieldEdit)ipField3).Type_2 = esriFieldType.esriFieldTypeGeometry;
                ((IFieldEdit)ipField3).GeometryDef_2 = ipGeoDef;
                ((IFieldsEdit)ipFields).set_Field(2, ipField3);

                IFeatureClass ipFeatCls = ipFeatDs.CreateFeatureClass("point", ipFields, null, null,
                    esriFeatureType.esriFTSimple, "point", "");
                IFeatureLayer ipFeatLyr = new FeatureLayerClass();
                ipFeatLyr.Name = "New Point FeatureCls";
                ipFeatLyr.FeatureClass = ipFeatCls;
                m_hookHelper.FocusMap.AddLayer(ipFeatLyr);

                IGeometryDefEdit ipGeoDef1 = new GeometryDefClass();
                ipGeoDef1.SpatialReference_2 = ipSr;
                ipGeoDef1.GeometryType_2 = esriGeometryType.esriGeometryPolygon;
                IFieldEdit ipField4 = new FieldClass();
                ((IFieldEdit)ipField4).Name_2 = "Polygon";
                ((IFieldEdit)ipField4).AliasName_2 = "polygon";
                ((IFieldEdit)ipField4).Type_2 = esriFieldType.esriFieldTypeGeometry;
                ((IFieldEdit)ipField4).GeometryDef_2 = ipGeoDef1;
                ((IFieldsEdit)ipFields).set_Field(2, ipField4);

                IFeatureClass ipFeatCls1 = ipFeatDs.CreateFeatureClass("polygon", ipFields, null, null, esriFeatureType.esriFTSimple, "Polygon", "");
                IFeatureLayer ipFeatLyr1 = new FeatureLayerClass();
                ipFeatLyr1.Name = "New Polygon FeatureCls";
                ipFeatLyr1.FeatureClass = ipFeatCls1;
                m_hookHelper.FocusMap.AddLayer(ipFeatLyr1);

                //Make the polygon field

                IGeometryDefEdit ipGeoDef2 = new GeometryDefClass();
                ipGeoDef2.SpatialReference_2 = ipSr;
                ipGeoDef2.GeometryType_2 = esriGeometryType.esriGeometryPolyline;
                IFieldEdit ipField5 = new FieldClass();
                ((IFieldEdit)ipField5).Name_2 = "Line";
                ((IFieldEdit)ipField5).AliasName_2 = "line";
                ((IFieldEdit)ipField5).Type_2 = esriFieldType.esriFieldTypeGeometry;
                ((IFieldEdit)ipField5).GeometryDef_2 = ipGeoDef2;
                ((IFieldsEdit)ipFields).set_Field(2, ipField5);

                IFeatureClass ipFeatCls2 = ipFeatDs.CreateFeatureClass("line", ipFields, null, null, esriFeatureType.esriFTSimple, "Line", "");
                IFeatureLayer ipFeatLyr2 = new FeatureLayerClass();
                ipFeatLyr2.Name = "New Line FeatureCls";
                ipFeatLyr2.FeatureClass = ipFeatCls2;
                m_hookHelper.FocusMap.AddLayer(ipFeatLyr2);
            }
        }

        #endregion
    }
}
