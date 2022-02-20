<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Home.aspx.cs" Inherits="taqeemi.Home" EnableEventValidation="false" %>

<%@ Register Src="~/HeaderTaqeemi.ascx" TagPrefix="uc1" TagName="HeaderTaqeemi" %>


<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <%-- Start Meta for Explore --%>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <%-- End Meta for Explore --%>
    <title> Home </title>
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
        <h1 class="text-center text-info  pt-5" style="display:none;">Open The Reviews</h1>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <h1 class="text-center text-info" style="font-size:14px;">Click here Open The Reviews</h1>
                        <%--<img style="width:100%" src="Images/5.jpg" />--%>
                        <div>
                                         <a href="Reviews.aspx" id="btnHotels" runat="server"  >
                                            <asp:Image ImageUrl="Images/R142a78f6132df2f980ecde45ff87e5dc.png" runat="server" Width="100%" Height="250px"  alt="Hotels" />
                                            <div class="text-block">
                                              </div>
                                        </a>
                                     </div>
                        <br />

                        <h1 class="text-center text-info" style="font-size:14px;">Choose The Department and Employee</h1>

                        <form id="login-form" class="form" action="" method="post">
                            <div  class="form-group" style="font-size:20px;">
                                        <label style="float:left" for="Department" class="text-info">Department</label><br />
                                <asp:DropDownList Font-Size="14px" ID="DDLDepartment" Height="35px" runat="server" AutoPostBack="True" OnSelectedIndexChanged="DDLDepartment_SelectedIndexChanged" class="form-control"></asp:DropDownList>
                                    </div>
                            <div  class="form-group" style="font-size:20px;">
                                        <label style="float:left" for="EmployeeGeneralMananger" class="text-info">Employee</label><br />
                                <asp:DropDownList Font-Size="14px" ID="DDLEmployee" Height="35px" runat="server" AutoPostBack="True" OnSelectedIndexChanged="DDLEmployee_SelectedIndexChanged" class="form-control"></asp:DropDownList>
                                    </div>
                            <div>
                                <br />
                                                <%--<p>Go to Review  <span class="text-info"></span>             </p>--%>
                                <%-- btn AddComment --%>
                                                <div class="col-md-3">
                                                    <asp:Button Font-Size="14px" type="submit" class="btn btn-info form-control" ID="btnAddComment" OnClick="btnAddComment_Click" runat="server" Text="Evaluate" />
                                                </div>
                                                <br />
                                                <%-- Reservation ID --%>
                                                <div class="col-md-3" style="display:none">
                                                    <label class=" control-label"><span class="glyphicon glyphicon-asterisk"></span></label>
                                                    <input type="text" id="txtEmployeeID" runat="server" class="form-control  text " readonly="true" placeholder="Employee ID" />
                                                    <input type="text" id="txtDepartmentID" runat="server" class="form-control  text " readonly="true" placeholder="Department ID" />
                                                </div>
                                                
                                                
                                                <div class="col-md-12">
                                                    <br />
                                                </div>
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
