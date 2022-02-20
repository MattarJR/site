<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Review.aspx.cs" Inherits="taqeemi.Review" %>

<%@ Register Src="~/HeaderTaqeemi.ascx" TagPrefix="uc1" TagName="HeaderTaqeemi" %>


<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <%-- Start Meta for Explore --%>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <%-- End Meta for Explore --%>
    <title> Review </title>
    <link href="../Bootstrap/bootstrapcss.css" rel="stylesheet" />
    <script src="../Bootstrap/bootstrapjs.js"></script>
    <script src="../JS/jquery.js"></script>
    <link href="../CSS/css.css" rel="stylesheet" />
    <link rel="icon" href="../Images/behaviour.png" type="image/gif" sizes="16x16" />
    <script src="JS/1.js"></script>
    <script src="JS/2.js"></script>
    <link href="CSS/3.css" rel="stylesheet" />
    <style type="text/css">
        .input-hidden {
            position: absolute;
            left: -9999px;
        }

        input[type=radio]:checked + label > img {
            border: 1px solid #fff;
            box-shadow: 0 0 3px 3px #17a2b8;
        }

        /* Stuff after this is only to make things more pretty */
        input[type=radio] + label > img {
            border: 1px;
            transition: 500ms all;
        }

        input[type=radio]:checked + label > img {
            transform: rotateZ(-10deg) rotateX(10deg);
        }
    </style>
</head>
    
<body>
    <form id="form1" runat="server">
                <%--  Header --%>
<uc1:HeaderTaqeemi runat="server" ID="HeaderTaqeemi" />
    <div id="login">
        <h1 class="text-center text-info  pt-5">Taqeemi</h1>
        <div class="container">
            <!-- Page Content -->
    <div class="container-fluid">
        <div class="row">
            
                <div class="col-sm-8 col-sm-push-2">
                    <div class="row" align="center">
                          
                        <div class="col-sm-12">

                            <%--<div  class="form-group">
                                        <label style="float:left" for="Department" class="text-info">Department</label><br />
                                <asp:DropDownList ID="DDLDepartment" Height="35px" runat="server" AutoPostBack="True" OnSelectedIndexChanged="DDLDepartment_SelectedIndexChanged" class="form-control"></asp:DropDownList>
                                    </div>
                            <div  class="form-group">
                                        <label style="float:left" for="EmployeeGeneralMananger" class="text-info">Employee</label><br />
                                <asp:DropDownList ID="DDLEmployee" Height="35px" runat="server" AutoPostBack="True" OnSelectedIndexChanged="DDLEmployee_SelectedIndexChanged" class="form-control"></asp:DropDownList>
                                    </div>--%>
                            <div  class="form-group" id="EmployeeAccounting" style="display:none;">
                                        <label style="float:left" for="EmployeeAccounting" class="text-info">Employee</label><br />
                                            <select style="height:35px;" id="Accounting" runat="server" class="form-control">
                                                <option selected="selected" value="Mohamed Moselhy">&nbsp; Mohamed Moselhy &nbsp; &nbsp;</option>
                                                <option value="Emad Kamal">&nbsp; Emad Kamal &nbsp; </option>
                                            </select>
                                    </div>
                            <div  class="form-group" id="EmployeeReception" style="display:none;">
                                        <label style="float:left" for="EmployeeReception" class="text-info">Employee</label><br />
                                            <select style="height:35px;" id="Reception" runat="server" class="form-control">
                                                <option selected="selected" value="Hewadi">&nbsp; Hewadi &nbsp; &nbsp;</option>
                                                <option value="Ghazai">&nbsp; Ghazai &nbsp; </option>
                                                <option value="Sohol">&nbsp; Sohol &nbsp; </option>
                                                <option value="Adel">&nbsp; Adel &nbsp; </option>
                                            </select>
                                    </div>
                            <div  class="form-group" id="EmployeeHouseKeeping" style="display:none;">
                                        <label style="float:left" for="EmployeeHouseKeeping" class="text-info">Employee</label><br />
                                            <select style="height:35px;" id="HouseKeeping" runat="server" class="form-control">
                                                <option selected="selected" value="Arshad">&nbsp; Arshad &nbsp; &nbsp;</option>
                                                <option value="Atef">&nbsp; Atef &nbsp; </option>
                                                <option value="Entikhab">&nbsp; Entikhab &nbsp; </option>
                                                <option value="Arafat">&nbsp; Arafat &nbsp; </option>
                                            </select>
                                    </div>
                            <div  class="form-group" id="EmployeeCity2Day" style="display:none;">
                                        <label style="float:left" for="EmployeeCity2Day" class="text-info">Employee</label><br />
                                            <select style="height:35px;" id="City2Day" runat="server" class="form-control">
                                                <option selected="selected" value="Mohamed Othman">&nbsp; Mohamed Othman &nbsp; &nbsp;</option>
                                                <option value="Mohamed Ismail">&nbsp; Mohamed Ismail &nbsp; </option>
                                                <option value="Reda Aboelfadl">&nbsp; Reda Aboelfadl  &nbsp; </option>
                                                <option value="Ahmed Mattar">&nbsp; Ahmed Mattar  &nbsp; </option>
                                            </select>
                                    </div>
                            <hr />
                            <br />
                            <div class="form-group" align="left">

                                <div>
                                    <asp:Label ID="Label4" Font-Bold="true" Text="Commitment to working hours" runat="server" />
                                    <br />
                                    <div style="text-align:right;">
                                        <input type="radio" name="emotion4" id="sad4" runat="server" class="input-hidden" />
                                    <label for="sad4" style="margin-right:15px;">
                                        <img
                                            src="Images/1s.jpg"
                                            alt="I'm sad" />
                                    </label>
                                    <input type="radio" name="emotion4" id="confused4" runat="server" class="input-hidden" />
                                    <label for="confused4" style="margin-right:15px;">
                                        <img
                                            src="Images/2f.jpg"
                                            alt="I'm confused" />
                                    </label>

                                    <input type="radio" name="emotion4" id="smiling4" runat="server" class="input-hidden" />
                                    <label for="smiling4" style="margin-right:15px;">
                                        <img
                                            src="Images/3n.jpg"
                                            alt="I'm smiling" />
                                    </label>

                                    <input type="radio" name="emotion4" id="happy4" runat="server" class="input-hidden" />
                                    <label for="happy4" style="margin-right:15px;">
                                        <img
                                            src="Images/4h.jpg"
                                            alt="I'm happy" />
                                    </label>

                                    <input type="radio" name="emotion4" id="inlove4" runat="server" class="input-hidden" />
                                    <label for="inlove4" style="margin-right:15px;">
                                        <img
                                            src="Images/5e.jpg"
                                            alt="I'm inlove" />
                                    </label>
                                    </div>
                                    
                                    
                                </div>
                                <br />
                                <div>
                                    <asp:Label ID="Label5" Font-Bold="true" Text="Personal Cleanliness" runat="server" />
                                    <br />
                                    <div style="text-align:right;">
                                        <input type="radio" name="emotion5" id="sad5" runat="server" class="input-hidden" />
                                    <label for="sad5" style="margin-right:15px;">
                                        <img
                                            src="Images/1s.jpg"
                                            alt="I'm sad" />
                                    </label>

                                    <input type="radio" name="emotion5" id="confused5" runat="server" class="input-hidden" />
                                    <label for="confused5" style="margin-right:15px;">
                                        <img
                                            src="Images/2f.jpg"
                                            alt="I'm confused" />
                                    </label>

                                    <input type="radio" name="emotion5" id="smiling5" runat="server" class="input-hidden" />
                                    <label for="smiling5" style="margin-right:15px;">
                                        <img
                                            src="Images/3n.jpg"
                                            alt="I'm smiling" />
                                    </label>

                                    <input type="radio" name="emotion5" id="happy5" runat="server" class="input-hidden" />
                                    <label for="happy5" style="margin-right:15px;">
                                        <img
                                            src="Images/4h.jpg"
                                            alt="I'm happy" />
                                    </label>

                                    <input type="radio" name="emotion5" id="inlove5" runat="server" class="input-hidden" />
                                    <label for="inlove5" style="margin-right:15px;">
                                        <img
                                            src="Images/5e.jpg"
                                            alt="I'm inlove" />
                                    </label>
                                    </div>
                                    
                                    
                                </div>
                                <br />
                                <div>
                                    <asp:Label ID="Label6" Font-Bold="true" Text="Dealing with employees" runat="server" />
                                    <br />
                                    <div style="text-align:right">
                                        <input type="radio" name="emotion6" id="sad6" runat="server" class="input-hidden" />
                                    <label for="sad6" style="margin-right:15px;">
                                        <img
                                            src="Images/1s.jpg"
                                            alt="I'm sad" />
                                    </label>

                                    <input type="radio" name="emotion6" id="confused6" runat="server" class="input-hidden" />
                                    <label for="confused6" style="margin-right:15px;">
                                        <img
                                            src="Images/2f.jpg"
                                            alt="I'm confused" />
                                    </label>

                                    <input type="radio" name="emotion6" id="smiling6" runat="server" class="input-hidden" />
                                    <label for="smiling6" style="margin-right:15px;">
                                        <img
                                            src="Images/3n.jpg"
                                            alt="I'm smiling" />
                                    </label>

                                    <input type="radio" name="emotion6" id="happy6" runat="server" class="input-hidden" />
                                    <label for="happy6" style="margin-right:15px;">
                                        <img
                                            src="Images/4h.jpg"
                                            alt="I'm happy" />
                                    </label>

                                    <input type="radio" name="emotion6" id="inlove6" runat="server" class="input-hidden" />
                                    <label for="inlove6" style="margin-right:15px;">
                                        <img
                                            src="Images/5e.jpg"
                                            alt="I'm inlove" />
                                    </label>
                                    </div>
                                    
                                    
                                </div>
                                <br />
                                <div>
                                    <asp:Label ID="Label7" Font-Bold="true" Text="Attention to details" runat="server" />
                                    <br />
                                    <div style="text-align:right">
                                        <input type="radio" name="emotion7" id="sad7" runat="server" class="input-hidden" />
                                    <label for="sad7" style="margin-right:15px;">
                                        <img
                                            src="Images/1s.jpg"
                                            alt="I'm sad" />
                                    </label>

                                    <input type="radio" name="emotion7" id="confused7" runat="server" class="input-hidden" />
                                    <label for="confused7" style="margin-right:15px;">
                                        <img
                                            src="Images/2f.jpg"
                                            alt="I'm confused" />
                                    </label>

                                    <input type="radio" name="emotion7" id="smiling7" runat="server" class="input-hidden" />
                                    <label for="smiling7" style="margin-right:15px;">
                                        <img
                                            src="Images/3n.jpg"
                                            alt="I'm smiling" />
                                    </label>

                                    <input type="radio" name="emotion7" id="happy7" runat="server" class="input-hidden" />
                                    <label for="happy7" style="margin-right:15px;">
                                        <img
                                            src="Images/4h.jpg"
                                            alt="I'm happy" />
                                    </label>

                                    <input type="radio" name="emotion7" id="inlove7" runat="server" class="input-hidden" />
                                    <label for="inlove7" style="margin-right:15px;">
                                        <img
                                            src="Images/5e.jpg"
                                            alt="I'm inlove" />
                                    </label>
                                    </div>
                                    
                                    
                                </div>
                                <br />
                                <div>
                                    <asp:Label ID="Label8" Font-Bold="true" Text="Work under pressure" runat="server" />
                                    <br />
                                    <div style="text-align:right">
                                        <input type="radio" name="emotion8" id="sad8" runat="server" class="input-hidden" />
                                    <label for="sad8" style="margin-right:15px;">
                                        <img
                                            src="Images/1s.jpg"
                                            alt="I'm sad" />
                                    </label>

                                    <input type="radio" name="emotion8" id="confused8" runat="server" class="input-hidden" />
                                    <label for="confused8" style="margin-right:15px;">
                                        <img
                                            src="Images/2f.jpg"
                                            alt="I'm confused" />
                                    </label>

                                    <input type="radio" name="emotion8" id="smiling8" runat="server" class="input-hidden" />
                                    <label for="smiling8" style="margin-right:15px;">
                                        <img
                                            src="Images/3n.jpg"
                                            alt="I'm smiling" />
                                    </label>

                                    <input type="radio" name="emotion8" id="happy8" runat="server" class="input-hidden" />
                                    <label for="happy8" style="margin-right:15px;">
                                        <img
                                            src="Images/4h.jpg"
                                            alt="I'm happy" />
                                    </label>

                                    <input type="radio" name="emotion8" id="inlove8" runat="server" class="input-hidden" />
                                    <label for="inlove8" style="margin-right:15px;">
                                        <img
                                            src="Images/5e.jpg"
                                            alt="I'm inlove" />
                                    </label>
                                    </div>
                                    
                                    
                                </div>
                                <br />
                                <div>
                                    <asp:Label ID="Label9" Font-Bold="true" Text="Applying business policies" runat="server" />
                                    <br />
                                    <div style="text-align:right">
                                        <input type="radio" name="emotion9" id="sad9" runat="server" class="input-hidden" />
                                    <label for="sad9" style="margin-right:15px;">
                                        <img
                                            src="Images/1s.jpg"
                                            alt="I'm sad" />
                                    </label>

                                    <input type="radio" name="emotion9" id="confused9" runat="server" class="input-hidden" />
                                    <label for="confused9" style="margin-right:15px;">
                                        <img
                                            src="Images/2f.jpg"
                                            alt="I'm confused" />
                                    </label>

                                    <input type="radio" name="emotion9" id="smiling9" runat="server" class="input-hidden" />
                                    <label for="smiling9" style="margin-right:15px;">
                                        <img
                                            src="Images/3n.jpg"
                                            alt="I'm smiling" />
                                    </label>

                                    <input type="radio" name="emotion9" id="happy9" runat="server" class="input-hidden" />
                                    <label for="happy9" style="margin-right:15px;">
                                        <img
                                            src="Images/4h.jpg"
                                            alt="I'm happy" />
                                    </label>

                                    <input type="radio" name="emotion9" id="inlove9" runat="server" class="input-hidden" />
                                    <label for="inlove9" style="margin-right:15px;">
                                        <img
                                            src="Images/5e.jpg"
                                            alt="I'm inlove" />
                                    </label>
                                    </div>
                                    
                                    
                                </div>
                                <br />
                                <div>
                                    <asp:Label ID="Label10" Font-Bold="true" Text="Desire to take responsibility" runat="server" />
                                    <br />
                                    <div style="text-align:right">
                                        <input type="radio" name="emotion10" id="sad10" runat="server" class="input-hidden" />
                                    <label for="sad10" style="margin-right:15px;">
                                        <img
                                            src="Images/1s.jpg"
                                            alt="I'm sad" />
                                    </label>

                                    <input type="radio" name="emotion10" id="confused10" runat="server" class="input-hidden" />
                                    <label for="confused10" style="margin-right:15px;">
                                        <img
                                            src="Images/2f.jpg"
                                            alt="I'm confused" />
                                    </label>

                                    <input type="radio" name="emotion10" id="smiling10" runat="server" class="input-hidden" />
                                    <label for="smiling10" style="margin-right:15px;">
                                        <img
                                            src="Images/3n.jpg"
                                            alt="I'm smiling" />
                                    </label>

                                    <input type="radio" name="emotion10" id="happy10" runat="server" class="input-hidden" />
                                    <label for="happy10" style="margin-right:15px;">
                                        <img
                                            src="Images/4h.jpg"
                                            alt="I'm happy" />
                                    </label>

                                    <input type="radio" name="emotion10" id="inlove10" runat="server" class="input-hidden" />
                                    <label for="inlove10" style="margin-right:15px;">
                                        <img
                                            src="Images/5e.jpg"
                                            alt="I'm inlove" />
                                    </label>
                                    </div>
                                    
                                    
                                </div>
                                <br />
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div class="form-group" align="left">
                                <div>
                                    <asp:Label ID="Label1" Font-Bold="true" Text="Performance at work" runat="server" />
                                    <br />
                                    <div style="text-align:right">
                                        <input type="radio" name="emotion1" id="sad1" runat="server" class="input-hidden" />
                                    <label for="sad1" style="margin-right:15px;">
                                        <img
                                            src="Images/1s.jpg"
                                            alt="I'm sad" />
                                    </label>

                                    <input type="radio" name="emotion1" id="confused1" runat="server" class="input-hidden" />
                                    <label for="confused1" style="margin-right:15px;">
                                        <img
                                            src="Images/2f.jpg"
                                            alt="I'm confused" />
                                    </label>

                                    <input type="radio" name="emotion1" id="smiling1" runat="server" class="input-hidden" />
                                    <label for="smiling1" style="margin-right:15px;">
                                        <img
                                            src="Images/3n.jpg"
                                            alt="I'm smiling" />
                                    </label>

                                    <input type="radio" name="emotion1" id="happy1" runat="server" class="input-hidden" />
                                    <label for="happy1" style="margin-right:15px;">
                                        <img
                                            src="Images/4h.jpg"
                                            alt="I'm happy" />
                                    </label>

                                    <input type="radio" name="emotion1" id="inlove1" runat="server" class="input-hidden" />
                                    <label for="inlove1" style="margin-right:15px;">
                                        <img
                                            src="Images/5e.jpg"
                                            alt="I'm inlove" />
                                    </label>
                                    </div>
                                    
                                    
                                </div>
                                <br />
                                <div>
                                    <asp:Label ID="Label2" Font-Bold="true" Text="Attendance and Departure" runat="server" />
                                    <br />
                                    <div style="text-align:right;">
                                        <input type="radio" name="emotion2" id="sad2" runat="server" class="input-hidden" />
                                    <label for="sad2" style="margin-right:15px;">
                                        <img
                                            src="Images/1s.jpg"
                                            alt="I'm sad" />
                                    </label>

                                    <input type="radio" name="emotion2" id="confused2" runat="server" class="input-hidden" />
                                    <label for="confused2" style="margin-right:15px;">
                                        <img
                                            src="Images/2f.jpg"
                                            alt="I'm confused" />
                                    </label>

                                    <input type="radio" name="emotion2" id="smiling2" runat="server" class="input-hidden" />
                                    <label for="smiling2" style="margin-right:15px;">
                                        <img
                                            src="Images/3n.jpg"
                                            alt="I'm smiling" />
                                    </label>

                                    <input type="radio" name="emotion2" id="happy2" runat="server" class="input-hidden" />
                                    <label for="happy2" style="margin-right:15px;">
                                        <img
                                            src="Images/4h.jpg"
                                            alt="I'm happy" />
                                    </label>

                                    <input type="radio" name="emotion2" id="inlove2" runat="server" class="input-hidden" />
                                    <label for="inlove2" style="margin-right:15px;">
                                        <img
                                            src="Images/5e.jpg"
                                            alt="I'm inlove" />
                                    </label>
                                    </div>
                                    
                                    
                                </div>
                                <br />
                                <div>
                                    <asp:Label ID="Label3" Font-Bold="true" Text="Optimize performance and check bugs" runat="server" />
                                    <br />
                                    <div style="text-align:right">
                                        <input type="radio" name="emotion3" id="sad3" runat="server" class="input-hidden" />
                                    <label for="sad3" style="margin-right:15px;">
                                        <img
                                            src="Images/1s.jpg"
                                            alt="I'm sad" />
                                    </label>

                                    <input type="radio" name="emotion3" id="confused3" runat="server" class="input-hidden" />
                                    <label for="confused3" style="margin-right:15px;">
                                        <img
                                            src="Images/2f.jpg"
                                            alt="I'm confused" />
                                    </label>

                                    <input type="radio" name="emotion3" id="smiling3" runat="server" class="input-hidden" />
                                    <label for="smiling3" style="margin-right:15px;">
                                        <img
                                            src="Images/3n.jpg"
                                            alt="I'm smiling" />
                                    </label>

                                    <input type="radio" name="emotion3" id="happy3" runat="server" class="input-hidden" />
                                    <label for="happy3" style="margin-right:15px;">
                                        <img
                                            src="Images/4h.jpg"
                                            alt="I'm happy" />
                                    </label>

                                    <input type="radio" name="emotion3" id="inlove3" runat="server" class="input-hidden" />
                                    <label for="inlove3" style="margin-right:15px;">
                                        <img
                                            src="Images/5e.jpg"
                                            alt="I'm inlove" />
                                    </label>
                                    </div>
                                    
                                    
                                </div>
                                <br />
                                <div>
                                    <asp:Label ID="Label11" Font-Bold="true" Text="Initiating constructive ideas" runat="server" />
                                    <br />
                                    <div style="text-align:right">
                                        <input type="radio" name="emotion11" id="sad11" runat="server" class="input-hidden" />
                                    <label for="sad11" style="margin-right:15px;">
                                        <img
                                            src="Images/1s.jpg"
                                            alt="I'm sad" />
                                    </label>

                                    <input type="radio" name="emotion11" id="confused11" runat="server" class="input-hidden" />
                                    <label for="confused11" style="margin-right:15px;">
                                        <img
                                            src="Images/2f.jpg"
                                            alt="I'm confused" />
                                    </label>

                                    <input type="radio" name="emotion11" id="smiling11" runat="server" class="input-hidden" />
                                    <label for="smiling11" style="margin-right:15px;">
                                        <img
                                            src="Images/3n.jpg"
                                            alt="I'm smiling" />
                                    </label>

                                    <input type="radio" name="emotion11" id="happy11" runat="server" class="input-hidden" />
                                    <label for="happy11" style="margin-right:15px;">
                                        <img
                                            src="Images/4h.jpg"
                                            alt="I'm happy" />
                                    </label>

                                    <input type="radio" name="emotion11" id="inlove11" runat="server" class="input-hidden" />
                                    <label for="inlove11" style="margin-right:15px;">
                                        <img
                                            src="Images/5e.jpg"
                                            alt="I'm inlove" />
                                    </label>
                                    </div>
                                    
                                    
                                </div>
                                <br />
                                <div>
                                    <asp:Label ID="Label12" Font-Bold="true" Text="Ability to solve problems" runat="server" />
                                    <br />
                                    <div style="text-align:right">
                                        <input type="radio" name="emotion12" id="sad12" runat="server" class="input-hidden" />
                                    <label for="sad12" style="margin-right:15px;">
                                        <img
                                            src="Images/1s.jpg"
                                            alt="I'm sad" />
                                    </label>

                                    <input type="radio" name="emotion12" id="confused12" runat="server" class="input-hidden" />
                                    <label for="confused12" style="margin-right:15px;">
                                        <img
                                            src="Images/2f.jpg"
                                            alt="I'm confused" />
                                    </label>

                                    <input type="radio" name="emotion12" id="smiling12" runat="server" class="input-hidden" />
                                    <label for="smiling12" style="margin-right:15px;">
                                        <img
                                            src="Images/3n.jpg"
                                            alt="I'm smiling" />
                                    </label>

                                    <input type="radio" name="emotion12" id="happy12" runat="server" class="input-hidden" />
                                    <label for="happy12" style="margin-right:15px;">
                                        <img
                                            src="Images/4h.jpg"
                                            alt="I'm happy" />
                                    </label>

                                    <input type="radio" name="emotion12" id="inlove12" runat="server" class="input-hidden" />
                                    <label for="inlove12" style="margin-right:15px;">
                                        <img
                                            src="Images/5e.jpg"
                                            alt="I'm inlove" />
                                    </label>
                                    </div>
                                    
                                    
                                </div>
                                <br />
                                <div>
                                    <asp:Label ID="Label13" Font-Bold="true" Text="Out of the box results" runat="server" />
                                    <br />
                                    <div style="text-align:right">
                                        <input type="radio" name="emotion13" id="sad13" runat="server" class="input-hidden" />
                                    <label for="sad13" style="margin-right:15px;">
                                        <img
                                            src="Images/1s.jpg"
                                            alt="I'm sad" />
                                    </label>

                                    <input type="radio" name="emotion13" id="confused13" runat="server" class="input-hidden" />
                                    <label for="confused13" style="margin-right:15px;">
                                        <img
                                            src="Images/2f.jpg"
                                            alt="I'm confused" />
                                    </label>

                                    <input type="radio" name="emotion13" id="smiling13" runat="server" class="input-hidden" />
                                    <label for="smiling13" style="margin-right:15px;">
                                        <img
                                            src="Images/3n.jpg"
                                            alt="I'm smiling" />
                                    </label>

                                    <input type="radio" name="emotion13" id="happy13" runat="server" class="input-hidden" />
                                    <label for="happy13" style="margin-right:15px;">
                                        <img
                                            src="Images/4h.jpg"
                                            alt="I'm happy" />
                                    </label>

                                    <input type="radio" name="emotion13" id="inlove13" runat="server" class="input-hidden" />
                                    <label for="inlove13" style="margin-right:15px;">
                                        <img
                                            src="Images/5e.jpg"
                                            alt="I'm inlove" />
                                    </label>
                                    </div>
                                    
                                    
                                </div>
                                <br />
                                <div>
                                    <asp:Label ID="Label14" Font-Bold="true" Text="General shape" runat="server" />
                                    <br />
                                    <div style="text-align:right">
                                        <input type="radio" name="emotion14" id="sad14" runat="server" class="input-hidden" />
                                    <label for="sad14" style="margin-right:15px;">
                                        <img
                                            src="Images/1s.jpg"
                                            alt="I'm sad" />
                                    </label>

                                    <input type="radio" name="emotion14" id="confused14" runat="server" class="input-hidden" />
                                    <label for="confused14" style="margin-right:15px;">
                                        <img
                                            src="Images/2f.jpg"
                                            alt="I'm confused" />
                                    </label>

                                    <input type="radio" name="emotion14" id="smiling14" runat="server" class="input-hidden" />
                                    <label for="smiling14" style="margin-right:15px;">
                                        <img
                                            src="Images/3n.jpg"
                                            alt="I'm smiling" />
                                    </label>

                                    <input type="radio" name="emotion14" id="happy14" runat="server" class="input-hidden" />
                                    <label for="happy14" style="margin-right:15px;">
                                        <img
                                            src="Images/4h.jpg"
                                            alt="I'm happy" />
                                    </label>

                                    <input type="radio" name="emotion14" id="inlove14" runat="server" class="input-hidden" />
                                    <label for="inlove14" style="margin-right:15px;">
                                        <img
                                            src="Images/5e.jpg"
                                            alt="I'm inlove" />
                                    </label>
                                    </div>
                                    
                                    
                                </div>
                                <br />
                            </div>
                        </div>

                        
                    </div>
                    <hr />
                    <br />
                    <div class="row" align="center">

                        <div class="col-sm-6">
                            <div class="form-group" align="left">
                                <label>Negative Comment</label>
                                <textarea  id="txtNComent" runat="server" class="form-control" placeholder="Negative Comment">
                                     </textarea>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group" align="left">
                                <label>Positive Comment</label>
                                <textarea  id="txtPcoment" runat="server" class="form-control" placeholder="Positive Comment">
                                     </textarea>
                            </div>
                        </div>
                        
                        <%-- f --%>
                        <div class="col-sm-12" align="left">
                            <asp:Button Text=" Send the Review " ID="btnSave" runat="server" OnClick="btnSave_Click" class="btn btn-info btn-md" style="width:100%" />
                            <br />
                        </div>
                    </div>
                </div>
                <div class="col-sm-8 col-sm-push-2">
                    <br />
                    <br />
                </div>



        </div>
    </div>
        </div>
    </div>
        </form>
    <script>
        
        function change(obj)
        {
            var selectBox = obj;
            var selected = selectBox.options[selectBox.selectedIndex].value;
            var EmployeeGeneralMananger = document.getElementById("EmployeeGeneralMananger")
            var EmployeeAccounting = document.getElementById("EmployeeAccounting")
            var EmployeeReception = document.getElementById("EmployeeReception")
            var EmployeeHouseKeeping = document.getElementById("EmployeeHouseKeeping")
            var EmployeeCity2Day = document.getElementById("EmployeeCity2Day")
            if (selected === 'General Mananger')
            {
                EmployeeGeneralMananger.style.display = "block";
            }
            else
            {
                EmployeeGeneralMananger.style.display = "none";
            }
            if (selected === 'Accounting') {
                EmployeeAccounting.style.display = "block";
            }
            else {
                EmployeeAccounting.style.display = "none";
            }
            if (selected === 'Reception') {
                EmployeeReception.style.display = "block";
            }
            else {
                EmployeeReception.style.display = "none";
            }
            if (selected === 'House Keeping') {
                EmployeeHouseKeeping.style.display = "block";
            }
            else {
                EmployeeHouseKeeping.style.display = "none";
            }
            if (selected === 'City2Day') {
                EmployeeCity2Day.style.display = "block";
            }
            else {
                EmployeeCity2Day.style.display = "none";
            }

        }

    </script>
</body>
</html>
