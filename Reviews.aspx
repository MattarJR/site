<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Reviews.aspx.cs" Inherits="taqeemi.Reviews" EnableEventValidation="false" %>

<%@ Register Src="~/HeaderTaqeemi.ascx" TagPrefix="uc1" TagName="HeaderTaqeemi" %>


<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <%-- Start Meta for Explore --%>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <%-- End Meta for Explore --%>
    <title> Reviews </title>
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
                <div id="login-column" class="col-md-12">
                    <div id="login-box" class="col-md-12">
                        <h5 class="text-center text-info" style="font-size:14px;">Your rating contributes to raising the level</h5>
                        <img style="width:100%" src="Images/5.jpg" />
                        <form id="" class="form" action="" method="post">
                            <h3 class="text-center text-info"><span id="TotalCount" runat="server"></span>  All Reviews </h3>
                            <div class="col-md-12" style="text-align:center;">
                            <asp:Repeater ID="Repeater1" runat="server"
                                OnItemCommand="Repeater1_ItemCommand">
                                <ItemTemplate>
                                    <div class="col-xs-12 RepeaterBackGround" style="margin-bottom: 30px; padding-top: 30px">
                                        <div class="col-md-12">
                                            <%-- Employee Name --%>
                                            <label class="  control-label" >
                                                Employee Name : 
                                                            <span runat="server" id="Label1"><%#Eval("EmployeeName") %></span>
                                            </label>
                                            <br />
                                            <label class="  control-label" style="display:none">
                                                Employee Number : 
                                                            <span runat="server" id="Span1"><%#Eval("EmployeeID") %></span>
                                            </label>
                                            <label class="  control-label">
                                                N. of Reviews for this Employee : 
                                                            <span runat="server" id="Span2"><%#Eval("SumRev") %></span>
                                            </label>
                                        </div>
                                        <div class="col-md-6 rightSide">
                                            <%-- Employee Number --%>
                                            
                                            <%-- Total (float.Parse("Total")).ToString() --%>
                                           <%-- <label class="  control-label">
                                                Total :  
                                                            <span runat="server" id="Span2"><%# double.Parse( Eval("Total").ToString()) %></span>
                                            </label>--%>
                                            <br />
                                            <%-- Date   --%>
                                           <%-- <label class="  control-label" style="display:none">
                                                Date : 
                                                            <span runat="server" id="Span3"><%#Eval("Date") %></span>
                                            </label>--%>
                                        </div>
                                        <%--  --%>
                                        <%--<div class="col-md-12">
                                            <hr />
                                        </div>--%>
                                        <%--  --%>
                                        <div class="col-md-6" style="display:none">
                                            <%-- PositiveComment --%>
                                            <label class="  control-label">Positive :</label>
                                            <span runat="server" id="Span4"><%#Eval("PositiveComment") %></span>
                                        </div>
                                        <div class="col-md-6" style="display:none">
                                            <%-- NegativeComment   --%>
                                            <label class="  control-label">Negative :   </label>
                                            <span runat="server" id="Span7"><%#Eval("NegativeComment") %></span>
                                        </div>
                                        <%--  --%>
                                        <%--<div class="col-md-12">
                                            <hr />
                                        </div>--%>
                                        <%--  --%>
                                        <div class="col-md-6" style="display:none">
                                            <label class="col-md-6">Commitment to working hours</label>
                                            <label class="col-md-6 rightSide"><%# double.Parse( Eval("WorkingHours").ToString())/10 %></label>
                                            <br />
                                            <div class="progress col-md-12" style="padding: 0px;">
                                                <div class="progress-bar progress-bar-info" role="progressbar"
                                                    aria-valuemin="0" aria-valuemax="100"
                                                    style="width: <%# Eval("WorkingHours") %>%;">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6" style="display:none">
                                            <label class="col-md-6">Personal Cleanliness </label>
                                            <label class="col-md-6 rightSide"><%# double.Parse( Eval("Cleanliness").ToString())/10 %></label>
                                            <br />
                                            <div class="progress col-md-12">
                                                <div class="progress-bar progress-bar-info" role="progressbar"
                                                    aria-valuemin="0" aria-valuemax="100"
                                                    style="width: <%# Eval("Cleanliness") %>%;">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6" style="display:none">
                                            <label class="col-md-6">Dealing with employees </label>
                                            <label class="col-md-6 rightSide"><%# double.Parse( Eval("Dealing").ToString())/10 %></label>
                                            <br />
                                            <div class="progress col-md-12" style="padding: 0px;">
                                                <div class="progress-bar progress-bar-info" role="progressbar"
                                                    aria-valuemin="0" aria-valuemax="100"
                                                    style="width: <%# Eval("Dealing") %>%;">
                                                </div>
                                            </div>
                                        </div>
                                        <%--  --%>
                                        <div class="col-md-6" style="display:none">
                                            <label class="col-md-6">Attention to details </label>
                                            <label class="col-md-6 rightSide"><%# double.Parse( Eval("Attention").ToString())/10 %> </label>
                                            <br />
                                            <div class="progress col-md-12" style="padding: 0px;">
                                                <div class="progress-bar progress-bar-info" role="progressbar"
                                                    aria-valuemin="0" aria-valuemax="100"
                                                    style="width: <%# Eval("Attention") %>%;">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6" style="display:none">
                                            <label class="col-md-6">Work under pressure  </label>
                                            <label class="col-md-6 rightSide"><%# double.Parse( Eval("UnderPressure").ToString())/10 %></label>
                                            <br />
                                            <div class="progress col-md-12" style="padding: 0px;">
                                                <div class="progress-bar progress-bar-info" role="progressbar"
                                                    aria-valuemin="0" aria-valuemax="100"
                                                    style="width: <%# Eval("UnderPressure") %>%;">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6" style="display:none">
                                            <label class="col-md-6">Applying business policies  </label>
                                            <label class="col-md-6 rightSide"><%# double.Parse( Eval("Policies").ToString())/10 %></label>
                                            <br />
                                            <div class="progress col-md-12" style="padding: 0px;">
                                                <div class="progress-bar progress-bar-info" role="progressbar"
                                                    aria-valuemin="0" aria-valuemax="100"
                                                    style="width: <%# Eval("Policies") %>%;">
                                                </div>
                                            </div>
                                        </div>
                                        <%--  --%>
                                        <div class="col-md-6" style="display:none">
                                            <label class="col-md-6">Desire to take responsibility</label>
                                            <label class="col-md-6 rightSide"><%# double.Parse( Eval("Responsibility").ToString())/10 %></label>
                                            <br />
                                            <div class="progress col-md-12" style="padding: 0px;">
                                                <div class="progress-bar progress-bar-info" role="progressbar"
                                                    aria-valuemin="0" aria-valuemax="100"
                                                    style="width: <%# Eval("Responsibility") %>%;">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6" style="display:none">
                                            <label class="col-md-6">Performance at work </label>
                                            <label class="col-md-6 rightSide"><%# double.Parse( Eval("Performance").ToString())/10 %></label>
                                            <br />
                                            <div class="progress col-md-12">
                                                <div class="progress-bar progress-bar-info" role="progressbar"
                                                    aria-valuemin="0" aria-valuemax="100"
                                                    style="width: <%# Eval("Performance") %>%;">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6" style="display:none">
                                            <label class="col-md-6">Attendance and Departure </label>
                                            <label class="col-md-6 rightSide"><%# double.Parse( Eval("Attendance").ToString())/10 %></label>
                                            <br />
                                            <div class="progress col-md-12" style="padding: 0px;">
                                                <div class="progress-bar progress-bar-info" role="progressbar"
                                                    aria-valuemin="0" aria-valuemax="100"
                                                    style="width: <%# Eval("Attendance") %>%;">
                                                </div>
                                            </div>
                                        </div>
                                        <%--  --%>
                                        <div class="col-md-6" style="display:none">
                                            <label class="col-md-6">Optimize performance and check bugs </label>
                                            <label class="col-md-6 rightSide"><%# double.Parse( Eval("CheckBugs").ToString())/10 %> </label>
                                            <br />
                                            <div class="progress col-md-12" style="padding: 0px;">
                                                <div class="progress-bar progress-bar-info" role="progressbar"
                                                    aria-valuemin="0" aria-valuemax="100"
                                                    style="width: <%# Eval("CheckBugs") %>%;">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6" style="display:none">
                                            <label class="col-md-6">Initiating constructive ideas  </label>
                                            <label class="col-md-6 rightSide"><%# double.Parse( Eval("constructive").ToString())/10 %></label>
                                            <br />
                                            <div class="progress col-md-12" style="padding: 0px;">
                                                <div class="progress-bar progress-bar-info" role="progressbar"
                                                    aria-valuemin="0" aria-valuemax="100"
                                                    style="width: <%# Eval("constructive") %>%;">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6" style="display:none">
                                            <label class="col-md-6">Ability to solve problems </label>
                                            <label class="col-md-6 rightSide"><%# double.Parse( Eval("SolveProblems").ToString())/10 %></label>
                                            <br />
                                            <div class="progress col-md-12" style="padding: 0px;">
                                                <div class="progress-bar progress-bar-info" role="progressbar"
                                                    aria-valuemin="0" aria-valuemax="100"
                                                    style="width: <%# Eval("SolveProblems") %>%;">
                                                </div>
                                            </div>
                                        </div>
                                        <%--  --%>
                                        <div class="col-md-6" style="display:none">
                                            <label class="col-md-6">Out of the box results </label>
                                            <label class="col-md-6 rightSide"><%# double.Parse( Eval("OutOfTheBox").ToString())/10 %> </label>
                                            <br />
                                            <div class="progress col-md-12" style="padding: 0px;">
                                                <div class="progress-bar progress-bar-info" role="progressbar"
                                                    aria-valuemin="0" aria-valuemax="100"
                                                    style="width: <%# Eval("OutOfTheBox") %>%;">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6" style="display:none">
                                            <label class="col-md-6">General shape  </label>
                                            <label class="col-md-6 rightSide"><%# double.Parse( Eval("General").ToString())/10 %></label>
                                            <br />
                                            <div class="progress col-md-12" style="padding: 0px;">
                                                <div class="progress-bar progress-bar-info" role="progressbar"
                                                    aria-valuemin="0" aria-valuemax="100"
                                                    style="width: <%# Eval("General") %>%;">
                                                </div>
                                            </div>
                                        </div>
                                        <%--  --%>
                                       <%-- <div class="col-md-12">
                                            <hr />
                                        </div>--%>
                                        <%--  --%>
                                        <br />
                                        <%-- Btns --%>
                                        <div class="  col-xs-12 RepeaterBackGround">
                                            <div class=" col-md-12 col-xs-12">
                                                <a href="#">
                                                    <asp:Button Width="100%" ID="BtnReplay" runat="server" CommandName="TotalVoting" CommandArgument='<%# Eval("EmployeeID") %>'
                                                        Text=" Total Voting " CssClass=" btn btn-danger"></asp:Button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                </ItemTemplate>
                            </asp:Repeater>
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

