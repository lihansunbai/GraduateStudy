using System;
using System.Drawing;
using System.Runtime.InteropServices;
using ESRI.ArcGIS.ADF.BaseClasses;
using ESRI.ArcGIS.ADF.CATIDs;
using ESRI.ArcGIS.Controls;
using System.Windows.Forms;
using ESRI.ArcGIS.Geometry;
using ESRI.ArcGIS.Carto;
using ESRI.ArcGIS.Geodatabase;

namespace LHSB
{
    /// <summary>
    /// Summary description for LHSBModPoly.
    /// </summary>
    [Guid("86d1b7f8-f957-499c-b709-3d22e9786acf")]
    [ClassInterface(ClassInterfaceType.None)]
    [ProgId("LHSB.LHSBModPoly")]
    public sealed class LHSBModPoly : BaseTool
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
        private IFeature m_fPolygon = null;

        public LHSBModPoly()
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
            // TODO: Add LHSBModPoly.OnClick implementation
        }

        public override void OnMouseDown(int Button, int Shift, int X, int Y)
        {
            // TODO:  Add LHSBModPoly.OnMouseDown implementation
        }

        public override void OnMouseMove(int Button, int Shift, int X, int Y)
        {
            // TODO:  Add LHSBModPoly.OnMouseMove implementation
        }

        public override void OnMouseUp(int Button, int Shift, int X, int Y)
        {
            // TODO:  Add LHSBModPoly.OnMouseUp implementation
            IPoint	ipPoint = m_hookHelper.ActiveView.ScreenDisplay.DisplayTransformation.ToMapPoint(X,Y);
            //'判断是否有Feature被选中
            if(m_fPolygon==null){
                ILayer layer = null;
                for (int i = 0; i < m_hookHelper.FocusMap.LayerCount; i++)
                {
                    layer = m_hookHelper.FocusMap.get_Layer(i);
                    if (((IFeatureLayer)layer).FeatureClass.ShapeType ==
                            esriGeometryType.esriGeometryPolygon)
                    {
                        break;
                    }
                }
                if (layer == null) return;
                ISpatialFilter ipSF = new SpatialFilterClass();
		        ipSF.Geometry = ipPoint;
		        ipSF.SpatialRel = esriSpatialRelEnum.esriSpatialRelIntersects;
                ((IFeatureSelection)layer).SelectFeatures(ipSF, esriSelectionResultEnum.esriSelectionResultNew, false);
                m_hookHelper.ActiveView.PartialRefresh(esriViewDrawPhase.esriViewGeoSelection, null, null);
		        //'得到第一层所选择的EnumFeature
                ISelection ipSel = m_hookHelper.FocusMap.FeatureSelection;
                if(ipSel == null) 
                    return;
                ((IEnumFeature)ipSel).Reset();
                m_fPolygon = (IFeature)((IEnumFeature)ipSel).Next();
                return;
	        }
            //已经选中多边形
            else{
                //'判断增加的点是否在Polygon所能容忍的边界上
                //'在偏差值为４的情况下，返回True,并返回增加点的前面Polygon的一个索引号'LvertexIndex
	            IGeometry ipGeo = m_fPolygon.Shape;
	            IHitTest ipHitTest = (IHitTest)ipGeo;
	            double hitDist=1.0;
	            int partIndex=-1, segIndex=-1;
	            bool bHit=false,bRSide=false;
	            bHit = 
                    ipHitTest.HitTest(ipPoint,100,esriGeometryHitPartType.esriGeometryPartBoundary, 
                    ipPoint, ref hitDist,ref partIndex,ref segIndex,ref bRSide);
	            if(bHit){
                    IPolygon ipPolygon = (IPolygon)ipGeo;
                    //'为Polygon删除一个顶点
                    IPointCollection ipPointCollection =
                        (IPointCollection)((IGeometryCollection)ipPolygon).get_Geometry(partIndex);
                    ipPointCollection.RemovePoints(segIndex + 1, 1);

		            m_fPolygon.Shape = ipPolygon;
                    m_fPolygon.Store();
		            m_fPolygon=null;
                    m_hookHelper.FocusMap.ClearSelection();
                    m_hookHelper.ActiveView.Refresh();
	            }
	            else//'增加的点不在偏差值范围内，信息框提示重新选点
                    MessageBox.Show("增加的点不在容忍范围内，请冲重选");
            }
            
        

        }
        #endregion

        
    }
}
