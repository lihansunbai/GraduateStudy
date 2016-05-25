using System;
using System.Drawing;
using System.Runtime.InteropServices;
using ESRI.ArcGIS.ADF.BaseClasses;
using ESRI.ArcGIS.ADF.CATIDs;
using ESRI.ArcGIS.Controls;
using System.Windows.Forms;
using ESRI.ArcGIS.Display;
using ESRI.ArcGIS.Geometry;
using ESRI.ArcGIS.Geodatabase;
using ESRI.ArcGIS.Carto;

namespace LHSBDBMapControl
{
    /// <summary>
    /// Summary description for LHSBBuffer.
    /// </summary>
    [Guid("f6bc5140-659d-4223-ae01-ffb04140709c")]
    [ClassInterface(ClassInterfaceType.None)]
    [ProgId("LHSBDBMapControl.LHSBBuffer")]
    public sealed class LHSBBuffer : BaseTool
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

        public LHSBBuffer()
        {
            //
            // TODO: Define values for the public properties
            //
            base.m_category = ""; //localizable text 
            base.m_caption = "";  //localizable text 
            base.m_message = "This should work in ArcMap/MapControl/PageLayoutControl";  //localizable text
            base.m_toolTip = "";  //localizable text
            base.m_name = "";   //unique id, non-localizable (e.g. "MyCategory_MyTool")
            try
            {
                //
                // TODO: change resource name if necessary
                //
                string bitmapResourceName = GetType().Name + ".bmp";
                base.m_bitmap = new Bitmap(GetType(), bitmapResourceName);
                base.m_cursor = new System.Windows.Forms.Cursor(GetType(), GetType().Name + ".cur");
            }
            catch (Exception ex)
            {
                System.Diagnostics.Trace.WriteLine(ex.Message, "Invalid Bitmap");
            }
        }

        #region Overridden Class Methods

        /// <summary>
        /// Occurs when this tool is created
        /// </summary>
        /// <param name="hook">Instance of the application</param>
        public override void OnCreate(object hook)
        {
            try
            {
                m_hookHelper = new HookHelperClass();
                m_hookHelper.Hook = hook;
                if (m_hookHelper.ActiveView == null)
                {
                    m_hookHelper = null;
                }
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
        /// Occurs when this tool is clicked
        /// </summary>
        public override void OnClick()
        {
            // TODO: Add LHSBBuffer.OnClick implementation
            IRubberBand ipRubberPolygon = new RubberPolygonClass();
            //��ѡ����ͼ���ϻ���һ���µĶ����
            IPolygon polygon = ipRubberPolygon.TrackNew(m_hookHelper.ActiveView.ScreenDisplay, null) as IPolygon;
            //�ռ������ʵ�ֹ��˹���
            ISpatialFilter ipSpatialFilter = new SpatialFilterClass();
            //������˵Ķ�������
            ipSpatialFilter.Geometry = polygon;
            //����ʱʹ�õĿռ��ϵ���������λ����ѡ����Χʱ��ö���α�ѡ�С�
            ipSpatialFilter.SpatialRel = esriSpatialRelEnum.esriSpatialRelIntersects;
            //�õ���һ��ͼ��
            IFeatureSelection ipFeatSelect = m_hookHelper.FocusMap.get_Layer(1) as IFeatureSelection;
            //��ѡ���ͼ��������� 
            ipFeatSelect.Clear();
            //ѡ��Ҫ��
            ipFeatSelect.SelectFeatures(ipSpatialFilter, esriSelectionResultEnum.esriSelectionResultNew, true);
            //ˢ��
            ipFeatSelect.SelectionSet.Refresh();
            //����ѡ�еķ�Χ������cur
            ICursor cur = null;

            ipFeatSelect.SelectionSet.Search(null, true, out cur);
            //�õ�cur�еĵ�һ�����ݣ���feature
            IFeature feature = cur.NextRow() as IFeature;
            while (feature != null)
            {//�õ�feature�ļ���ͼ�Σ���to��to����������
                ITopologicalOperator to = feature.Shape as ITopologicalOperator;
                //��to���������������Ծ���Ϊ3�ķ�Χ���������������õ�һ��polygon��
                IPolygon poly = to.Buffer(500) as IPolygon;

                //�õ���0��ͼ��
                IFeatureLayer fl = m_hookHelper.FocusMap.get_Layer(0) as IFeatureLayer;

                //�ڵ�0��ͼ�������Ҫ��
                IFeature polyFeature = fl.FeatureClass.CreateFeature();
                //���Ҫ�ص�����Ϊpolygon����
                polyFeature.Shape = poly;
                //���õ���polygon���д洢
                polyFeature.Store();
                feature = cur.NextRow() as IFeature;
            }
            m_hookHelper.ActiveView.Refresh();
            m_hookHelper.ActiveView.PartialRefresh(esriViewDrawPhase.esriViewGeoSelection, null, null);
        }

        public override void OnMouseDown(int Button, int Shift, int X, int Y)
        {
            // TODO:  Add LHSBBuffer.OnMouseDown implementation
        }

        public override void OnMouseMove(int Button, int Shift, int X, int Y)
        {
            // TODO:  Add LHSBBuffer.OnMouseMove implementation
        }

        public override void OnMouseUp(int Button, int Shift, int X, int Y)
        {
            // TODO:  Add LHSBBuffer.OnMouseUp implementation
        }
        #endregion
    }
}
