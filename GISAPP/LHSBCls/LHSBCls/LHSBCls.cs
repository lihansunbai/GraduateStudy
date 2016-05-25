using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace LHSBCls
{
    public class LHSB
    {
        public double Plus(double m, double n)
        {
            return m + n;
        }

        public double Minus(double m, double n)
        {
            return m - n;
        }

        public double Time(double m, double n)
        {
            return m * n;
        }

        public double Division(double m, double n)
        {
            if (n == 0)
            {
                MessageBox.Show("除数不能为0！", "提示", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
                return 0;
            }
            else
            {
                return m / n;
            }
        }

        private double Test = -1;

        public double tra
        {
            get { return Test; }
            set
            {
                Test = value;
            }
        }
    }
}
