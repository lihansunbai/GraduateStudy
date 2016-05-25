using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using LHSBCls;


namespace LHSBClient
{
    public partial class Form1 : Form
    {
        int egg = 0;
        public Form1()
        {
            InitializeComponent();
        }

        long type = 0;

        private void ADD_Click(object sender, EventArgs e)
        {
            type = 1;
          
        }

        private void MIN_Click(object sender, EventArgs e)
        {
            type = 2;
            
        }

        private void TIMES_Click(object sender, EventArgs e)
        {
            type = 3;
            
        }

        private void DIVISION_Click(object sender, EventArgs e)
        {
             type = 4;
            
        }

        private void EQUAL_Click(object sender, EventArgs e)
        {
            LHSB obj = new LHSB();
            switch (type)
                {
                    case 1:
                        obj.tra = obj.Plus(Convert.ToInt32(First.Text), Convert.ToInt32(Second.Text));
                       EQUALS.Text = obj.tra.ToString();
                        break;
                    case 2:
                        obj.tra = obj.Minus(Convert.ToInt32(First.Text), Convert.ToInt32(Second.Text));
                        EQUALS.Text = obj.tra.ToString();
                        break;
                    case 3:
                        obj.tra = obj.Time(Convert.ToInt32(First.Text), Convert.ToInt32(Second.Text));
                        EQUALS.Text = obj.tra.ToString();
                        break;
                    case 4:
                        obj.tra = obj.Division(Convert.ToInt32(First.Text), Convert.ToInt32(Second.Text));
                        EQUALS.Text = obj.tra.ToString();
                        break;
                    default:
                        MessageBox.Show("请选择操作类型！", "提示", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
                        break;
                }
        }

        private void ABOUTME_Click(object sender, EventArgs e)
        {
            egg += 1;
            if (egg == 10)
            {
                MessageBox.Show("龙头独对五千文，鼠迹今眠半榻尘。\n万点落花都是恨， 满杯明月即忘贫。 \n香灯不起维摩病， 樱笋消除谷雨春。 \n镜里自看成大笑， 一番傀儡下场人。 \n\t\t------- 漫兴一律，晋昌唐寅书。", "这是一个彩蛋", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
                egg = 0;
            }
            else
            {
                MessageBox.Show("作者：李晗孙白\n点击十次有彩蛋哦！  ", "ABOUT ME", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }


    }
}
