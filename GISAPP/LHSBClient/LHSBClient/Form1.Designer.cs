namespace LHSBClient
{
    partial class Form1
    {
        /// <summary>
        /// 必需的设计器变量。
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// 清理所有正在使用的资源。
        /// </summary>
        /// <param name="disposing">如果应释放托管资源，为 true；否则为 false。</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows 窗体设计器生成的代码

        /// <summary>
        /// 设计器支持所需的方法 - 不要
        /// 使用代码编辑器修改此方法的内容。
        /// </summary>
        private void InitializeComponent()
        {
            this.ABOUTME = new LHSBCtrLib.LHSBButton();
            this.EQUAL = new LHSBCtrLib.LHSBButton();
            this.DIVISION = new LHSBCtrLib.LHSBButton();
            this.TIMES = new LHSBCtrLib.LHSBButton();
            this.MIN = new LHSBCtrLib.LHSBButton();
            this.ADD = new LHSBCtrLib.LHSBButton();
            this.First = new System.Windows.Forms.TextBox();
            this.Second = new System.Windows.Forms.TextBox();
            this.EQUALS = new System.Windows.Forms.TextBox();
            this.SuspendLayout();
            // 
            // ABOUTME
            // 
            this.ABOUTME.cuteColor1 = System.Drawing.Color.Navy;
            this.ABOUTME.cuteColor2 = System.Drawing.Color.Gold;
            this.ABOUTME.cuteTransparent1 = 32;
            this.ABOUTME.cuteTransparent2 = 32;
            this.ABOUTME.Location = new System.Drawing.Point(93, 185);
            this.ABOUTME.Name = "ABOUTME";
            this.ABOUTME.Size = new System.Drawing.Size(75, 23);
            this.ABOUTME.TabIndex = 0;
            this.ABOUTME.Text = "About Me";
            this.ABOUTME.UseVisualStyleBackColor = true;
            this.ABOUTME.Click += new System.EventHandler(this.ABOUTME_Click);
            // 
            // EQUAL
            // 
            this.EQUAL.cuteColor1 = System.Drawing.Color.LightGreen;
            this.EQUAL.cuteColor2 = System.Drawing.Color.DarkBlue;
            this.EQUAL.cuteTransparent1 = 64;
            this.EQUAL.cuteTransparent2 = 64;
            this.EQUAL.Location = new System.Drawing.Point(34, 110);
            this.EQUAL.Name = "EQUAL";
            this.EQUAL.Size = new System.Drawing.Size(75, 23);
            this.EQUAL.TabIndex = 1;
            this.EQUAL.Text = "=";
            this.EQUAL.UseVisualStyleBackColor = true;
            this.EQUAL.Click += new System.EventHandler(this.EQUAL_Click);
            // 
            // DIVISION
            // 
            this.DIVISION.cuteColor1 = System.Drawing.Color.Green;
            this.DIVISION.cuteColor2 = System.Drawing.Color.Indigo;
            this.DIVISION.cuteTransparent1 = 64;
            this.DIVISION.cuteTransparent2 = 64;
            this.DIVISION.Location = new System.Drawing.Point(131, 110);
            this.DIVISION.Name = "DIVISION";
            this.DIVISION.Size = new System.Drawing.Size(75, 23);
            this.DIVISION.TabIndex = 2;
            this.DIVISION.Text = "/";
            this.DIVISION.UseVisualStyleBackColor = true;
            this.DIVISION.Click += new System.EventHandler(this.DIVISION_Click);
            // 
            // TIMES
            // 
            this.TIMES.cuteColor1 = System.Drawing.Color.Yellow;
            this.TIMES.cuteColor2 = System.Drawing.Color.DodgerBlue;
            this.TIMES.cuteTransparent1 = 64;
            this.TIMES.cuteTransparent2 = 64;
            this.TIMES.Location = new System.Drawing.Point(131, 81);
            this.TIMES.Name = "TIMES";
            this.TIMES.Size = new System.Drawing.Size(75, 23);
            this.TIMES.TabIndex = 3;
            this.TIMES.Text = "*";
            this.TIMES.UseVisualStyleBackColor = true;
            this.TIMES.Click += new System.EventHandler(this.TIMES_Click);
            // 
            // MIN
            // 
            this.MIN.cuteColor1 = System.Drawing.Color.Ivory;
            this.MIN.cuteColor2 = System.Drawing.Color.Black;
            this.MIN.cuteTransparent1 = 64;
            this.MIN.cuteTransparent2 = 64;
            this.MIN.Location = new System.Drawing.Point(131, 56);
            this.MIN.Name = "MIN";
            this.MIN.Size = new System.Drawing.Size(75, 23);
            this.MIN.TabIndex = 4;
            this.MIN.Text = "-";
            this.MIN.UseVisualStyleBackColor = true;
            this.MIN.Click += new System.EventHandler(this.MIN_Click);
            // 
            // ADD
            // 
            this.ADD.cuteColor1 = System.Drawing.Color.Maroon;
            this.ADD.cuteColor2 = System.Drawing.Color.Green;
            this.ADD.cuteTransparent1 = 64;
            this.ADD.cuteTransparent2 = 64;
            this.ADD.Location = new System.Drawing.Point(131, 27);
            this.ADD.Name = "ADD";
            this.ADD.Size = new System.Drawing.Size(75, 23);
            this.ADD.TabIndex = 5;
            this.ADD.Text = "+";
            this.ADD.UseVisualStyleBackColor = true;
            this.ADD.Click += new System.EventHandler(this.ADD_Click);
            // 
            // First
            // 
            this.First.Location = new System.Drawing.Point(23, 56);
            this.First.Name = "First";
            this.First.Size = new System.Drawing.Size(100, 21);
            this.First.TabIndex = 6;
            // 
            // Second
            // 
            this.Second.Location = new System.Drawing.Point(23, 83);
            this.Second.Name = "Second";
            this.Second.Size = new System.Drawing.Size(100, 21);
            this.Second.TabIndex = 7;
            // 
            // EQUALS
            // 
            this.EQUALS.Location = new System.Drawing.Point(23, 139);
            this.EQUALS.Name = "EQUALS";
            this.EQUALS.Size = new System.Drawing.Size(100, 21);
            this.EQUALS.TabIndex = 8;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(232, 239);
            this.Controls.Add(this.EQUALS);
            this.Controls.Add(this.Second);
            this.Controls.Add(this.First);
            this.Controls.Add(this.ADD);
            this.Controls.Add(this.MIN);
            this.Controls.Add(this.TIMES);
            this.Controls.Add(this.DIVISION);
            this.Controls.Add(this.EQUAL);
            this.Controls.Add(this.ABOUTME);
            this.Name = "Form1";
            this.Text = "Form1";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private LHSBCtrLib.LHSBButton ABOUTME;
        private LHSBCtrLib.LHSBButton EQUAL;
        private LHSBCtrLib.LHSBButton DIVISION;
        private LHSBCtrLib.LHSBButton TIMES;
        private LHSBCtrLib.LHSBButton MIN;
        private LHSBCtrLib.LHSBButton ADD;
        private System.Windows.Forms.TextBox First;
        private System.Windows.Forms.TextBox Second;
        private System.Windows.Forms.TextBox EQUALS;
    }
}

