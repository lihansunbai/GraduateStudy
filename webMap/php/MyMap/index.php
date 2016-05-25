<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title>MyMap</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="support/jquery-ui-1.11.2.custom/jquery-ui.min.css">
        <link rel="stylesheet" href="css/zhiding.css">
        <link rel="stylesheet" href="css/navigation.css">
        <link rel="stylesheet" href="css/option_area.css">
        <script src="support/jquery-ui-1.11.2.custom/external/jquery/jquery.js"></script>
        <script src="support/jquery-ui-1.11.2.custom/jquery-ui.min.js"></script>
        <script src="lib/uuid.js"></script>
        <script src="lib/LoginDialog.js"></script>
        <script src="lib/RegistDialog.js"></script>
        <script src="lib/progressbar.js"></script>
        <script src="lib/navigation.js"></script>
        <script src="lib/SpatialAnalyse.js"></script>
        <script src="./js/showvectormap.js" type="text/javascript"></script>
        <script src="./js/mousepoint.js" type="text/javascript"></script>
        <script src="./js/mouseline.js" type="text/javascript"></script>
        <script src="./js/mousepolygon.js" type="text/javascript"></script>
        <script>
            function Login() {
                var dlg = new LoginDialog();
                dlg.show();
                var ish = new showvectormap();
                ish.drawvector(); 
            }
            ;

            function Regist() {
                var dlg = new RegistDialog();
                dlg.show();
            }
            ;
        </script>

        <!--SVG initialization contral.-->
        <script>
            $("#sv").ready(function () {
                var sh = new showvectormap();
                sh.drawvector();
            });
        </script>
        <script>
            var moup = new mousepoint();
            var moul = new mouseline();
            var moupl = new mousepolygon();
            var op = 0; 
            
            function vector(event) {
                if(op === 0){
                    alert("Please choose a entity!");
                }else if(op === 1){
                    moup.checkclick(event);
                }else if(op === 2){
                    moul.checkclick(event);
                }else if(op === 3){
                   moupl.checkclick(event); 
                }
            }
        </script>
    </head>
    <body>
        <div id="topselection">
            <ul id="selections">    
                <li><a href="#" onclick="Regist()">注&nbsp;&nbsp;册</a></li>
                <li><a href="#" onclick="Login()">登&nbsp;&nbsp;录</a></li>
            </ul>
        </div>
        <div id="dialog" title="File Download">
            <div class="progress-label">Starting download...</div>
            <div id="progressbar"></div>
        </div>



        <table
            <tr>
                <td>
                    <!--navigation-->
                    <div  id="accordion">
                        <h3>下载操作图件</h3>
                        <div id ="start">
                            <button id="downloadButton">Start Download</button>
                        </div>
                        <h3>Vectorization（矢量化）</h3>
                        <div>
                            <div id = "accordion1">
                                <h3>Point Layer</h3>
                                <div id = "vectors">
                                    <span id="option">
                                        <input type="radio" id="Add_point" name="options" ><label for="Add_point"></label>
                                        <input type="radio" id="Delete_point" name="options"><label for="Delete_point"></label>
                                    </span>
                                </div>
                                <h3>Line Layer</h3>
                                <div>
                                    <span id="option">
                                        <input type="radio" id="Add_line" name="options" ><label for="Add_line"></label>
                                        <input type="radio" id="Delete_line" name="options"><label for="Delete_line"></label>
                                    </span>
                                </div>
                                <h3>Polygon Layer</h3>
                                <div>
                                    <span id="option">
                                        <input type="radio" id="Add_polygon" name="options" ><label for="Add_polygon"></label>
                                        <input type="radio" id="Delete_polygon" name="options"><label for="Delete_polygon"></label>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <h3>Spatial Analyse（空间分析）</h3>
                        <div>
                            <table  CellSpacing=10>
                                <tr>
                                    <td>Radius:</td>
                                    <td><input type="text" id="radius" style="width:140px;"/></td>
                                </tr>
                                <tr><td colspan=2  align="center" ><button id="buffer" style="width:160px;">缓冲区分析</button></td></tr>
                            </table>
                            <hr style="margin-left: 30px;">
                            <button id="polygoncenter" title="先选取面状地物" style="margin-left: 45px;margin-top: 10px;">面状地物中心</button>
                            <hr style="margin-top: 10px;margin-left: 30px;">
                            <button id="polygondistance" title="先选取中心点，后求距离" 
                                    style="margin-left: 15px;margin-top: 10px;width:200px;">面状地物中心距离</button>
                            <hr style="margin-top: 10px;margin-left: 30px;">
                            <button id="polygonnear" title="求于选中区域相邻的地区" 
                                    style="margin-left: 15px;margin-top: 10px;width:200px;">面状地物相邻地区</button>
                            <hr style="margin-top: 10px;margin-left: 30px;">
                            <button id="Length" title="长度" style="margin-left: 65px;margin-top: 10px;">求解长度</button>
                            <hr style="margin-top: 10px;margin-left: 30px;">
                            <button id="Area" title="面积" style="margin-left: 65px;margin-top: 10px;">求解面积</button>
                        </div>
                        <h3>About Us</h3>
                        <div id ="usinformation">
                            <ul>
                                <li>前&nbsp;&nbsp;端：罗&nbsp;&nbsp;靓</li>
                                <li>矢量化：李晗孙白</li>
                                <li>空间分析：刘文凯</li>
                            </ul>
                        </div>
                    </div>
                </td>
                <!--操作区域-->

                <td>

                    <div id="option_area">
                        <svg style="width: 1048px;height: 1160px; background-image: url('./map/backmap.jpg')"
                             id="sv" width = "100%" height = "100%"
                             version = "1.1"
                             xmlns = "http://www.w3.org/2000/svg"
                             onclick="vector(event)" ondblclick="vector(event)">
                        </svg>
                    </div>


                </td>

            </tr>
        </table>
    </body>
</html>
