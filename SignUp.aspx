<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="SignUp.aspx.cs" Inherits="taqeemi.SignUp" EnableEventValidation="false" %>

<%@ Register Src="~/HeaderTaqeemi.ascx" TagPrefix="uc1" TagName="HeaderTaqeemi" %>


<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <%-- Start Meta for Explore --%>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <%-- End Meta for Explore --%>
    <title> SignUp </title>
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
<uc1:HeaderTaqeemi runat="server" ID="HeaderTaqeemi" />
    <div id="login">
        <h1 class="text-center text-info  pt-5">Taqeemi</h1>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <h5 class="text-center text-info">Your rating contributes to raising the level</h5>
                        <img style="width:100%" src="Images/5.jpg" />
                        <form id="login-form" class="form" action="" method="post">
                            <%-- Department --%>
                                    <div class="form-group" >
                                        <label for="department" class="text-info">Department</label><br />
                                            <select style="height:35px;font-size:14px;" id="Department" runat="server" class="form-control">
                                                <option selected="selected" value="1">&nbsp;  Accounting &nbsp; &nbsp;</option>
                                                <option value="2">&nbsp; It &nbsp; </option>
                                                <option value="3">&nbsp; Reception &nbsp;</option>
                                                <option value="4">&nbsp; House Keeping &nbsp;</option>
                                                <option value="5">&nbsp; City2Day &nbsp;</option>
                                            </select>
                                    </div>
                            <div class="form-group" >
                                <label for="employeefirstname" class="text-info">Employee First Name:</label><br />
                                <input style="font-size:14px;" type="text" runat="server" name="employeefirstname" id="employeefirstname" class="form-control"/>
                            </div>
                            <div class="form-group" style="font-size:14px;">
                                <label for="employeelastname" class="text-info">Employee Last Name:</label><br />
                                <input type="text" runat="server" name="employeelastname" id="employeelastname" class="form-control"/>
                            </div>
                            <div class="form-group" >
                                <label for="employeepassword" class="text-info">Employee Password:</label><br />
                                <input style="font-size:14px;" type="text" runat="server" name="employeepassword" id="employeepassword" class="form-control"/>
                            </div>
                            <div class="form-group" >
                                <label for="employeemobile" class="text-info">Employee Mobile:</label><br />
                                <input style="font-size:14px;" type="text" runat="server" name="employeemobile" id="employeemobile" class="form-control"/>
                            </div>
                            <div class="form-group" >
                                <label for="employeegender" class="text-info">Employee Gender:</label><br />
                                <select style="height:35px;font-size:14px;" id="employeegender" runat="server" class="form-control">
                                                <option selected="selected" value="1">&nbsp;  Male &nbsp; &nbsp;</option>
                                                <option value="2">&nbsp; Female &nbsp; </option>
                                            </select>
                            </div>
                            <div class="form-group" >
                                <label for="employeebirthDate" class="text-info">Employee BirthDate:</label><br />
                                <input style="font-size:14px;"  type="date" runat="server" name="employeebirthDate" id="employeebirthDate" class="form-control"/>
                            </div>
                            <div class="form-group" >
                                <label for="employeeemail" class="text-info">Employee Email:</label><br />
                                <input style="font-size:14px;" type="text" runat="server" name="employeeemail" id="employeeemail" class="form-control"/>
                            </div>
                            <div class="form-group" >
                                <label for="employeejop" class="text-info">Employee Jop:</label><br />
                                <input style="font-size:14px;" type="text" runat="server" name="employeejop" id="employeejop" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <asp:Button Font-Size="14px" Text="Sign Up" ID="btnSingUp" runat="server" onclick="btnSignup_Click" class="btn btn-info btn-md" style="width:100%"  />
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
