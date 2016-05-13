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
        <script>
            function Login() {
                var dlg = new LoginDialog();
                dlg.show();
            }
            ;

            function Regist() {
                var dlg = new RegistDialog();
                dlg.show();
            }
            ;
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

        <table>
            <tr>
                <td>
                    <!--navigation-->
                    <div id="accordion">
                        <h3>下载操作图件</h3>
                        <div id ="start">
                            <button id="downloadButton">Start Download</button>
                        </div>
                        <h3>Vectorization（矢量化）</h3>
                        <div>
                            <div id = "accordion1">
                                <h3>Point Layer</h3>
                                <div  id = "vectors">
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
                            <table>
                                <tr><button id="buffer" style="width:160px;">缓冲区分析</button></tr>
                                <tr>
                                    <td>Radius:</td>
                                    <td><input type="text" style="width:160px;" id="radius"/></td>
                                </tr>
                                
                            </table>
                        </div>
                        <h3>About Us</h3>
                        <div id ="usinformation">
                            <ul>
                                <li>前&nbsp;&nbsp;端：罗&nbsp;&nbsp;靓</li>
                                <li>矢量化：李晗孙白</li>
                                <li>缓冲区：刘文凯</li>
                            </ul>
                        </div>
                    </div>
                </td>
                <!--操作区域-->
                <td>
                    <div id="option_area">
                    </div>
                </td>
            </tr>
        </table>
    </body>
</html>
