using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace LHSBCtrLib
{
    public partial class LHSBButton : Button
    {
        public LHSBButton()
        {
            InitializeComponent();
        }

        protected override void OnPaint(PaintEventArgs pe)
        {

            base.OnPaint(pe);

            Color c1 = Color.FromArgb(m_color1Transparent, m_color1);
            Color c2 = Color.FromArgb(m_color2Transparent, m_color2);
            Brush b = new
            System.Drawing.Drawing2D.LinearGradientBrush(ClientRectangle, c1, c2, 10);
            pe.Graphics.FillRectangle(b, ClientRectangle);
            b.Dispose();

        }

        private Color m_color1 = Color.LightGreen;
        private Color m_color2 = Color.DarkBlue;
        private int m_color1Transparent = 64;
        private int m_color2Transparent = 64;
        public Color cuteColor1
        {
            get { return m_color1; }
            set { m_color1 = value; Invalidate(); }
        }
        public Color cuteColor2
        {
            get { return m_color2; }
            set
            {
                m_color2 = value;
                Invalidate();
            }
        }
        public int cuteTransparent1
        {
            get { return m_color1Transparent; }
            set { m_color1Transparent = value; Invalidate(); }
        }
        public int cuteTransparent2
        {
            get { return m_color2Transparent; }
            set { m_color2Transparent = value; Invalidate(); }
        }
    }
}
