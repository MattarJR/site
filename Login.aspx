<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="taqeemi.Login" EnableEventValidation="false" %>

<%@ Register Src="~/HeaderTaqeemi.ascx" TagPrefix="uc1" TagName="HeaderTaqeemi" %>


<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <%-- Start Meta for Explore --%>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <%-- End Meta for Explore --%>
    <title> Login </title>
    <link href="../Bootstrap/bootstrapcss.css" rel="stylesheet" />
    <script src="../Bootstrap/bootstrapjs.js"></script>
    <script src="../JS/jquery.js"></script>
    <link href="../CSS/css.css" rel="stylesheet" />
    <link rel="icon" href="../Images/behaviour.png" type="image/gif" sizes="16x16" />
    <script src="JS/1.js"></script>
    <script src="JS/2.js"></script>
    <link href="CSS/3.css" rel="stylesheet" />
</head>
    
<body>
    <form id="form1" runat="server">
        <%--  Header --%>
    <uc1:HeaderTaqeemi runat="server" id="HeaderTaqeemi" />
    <div id="login">
        <h1 class="text-center text-info  pt-5">Taqeemi</h1>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <h5 class="text-center text-info">Your rating contributes to raising the level</h5>
                        <img style="width:100%" src="Images/5.jpg" />
                        <form id="login-form" class="form" action="" method="post">
                            <div class="form-group">
                                <label for="username" class="text-info">Username:</label><br />
                                <input style="font-size:14px;" type="text" runat="server" name="username" id="username" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Password:</label><br />
                                <input style="font-size:14px;" type="text" runat="server" name="password" id="password" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label for="remember-me" class="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"/></span></label><br />
                                <asp:Button Font-Size="14px" Text="Login" ID="btnLogin" runat="server" onclick="btnLogin_Click" class="btn btn-info btn-md" style="width:100%"   />
                            </div>
                            <div id="register-link" class="text-right">
                                <a href="SignUp.aspx" class="text-info">Register here</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </form>
</body>
</html>
