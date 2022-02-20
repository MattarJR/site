<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="HeaderTaqeemi.ascx.cs" Inherits="taqeemi.HeaderTaqeemi" %>

<!-- Navigation -->
<nav class="navbar navbar-expand-lg navbar-dark static-top" style="background-color:#17a2b8">
  <div class="container">
    <a class="navbar-brand" style="display: inline-block;
    padding-top: .3125rem;
    padding-bottom: .3125rem;
    margin-right: 10rem;
    font-size: 3.25rem;
    line-height: inherit;
    white-space: nowrap;" href="Home.aspx">Taqeemi</a>
    <button style="font-size:larger;font-weight:bold;color:#eee"  class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span  class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarResponsive" style="text-align: right;margin-right: 20px;" >
      <ul class="navbar-nav ml-auto" style="font-size:larger;font-weight:bold;color:#eee">
        <li class="nav-item "><%--active--%>
          <a class="nav-link" href="SignUp.aspx">Sign Up
                <span class="sr-only">(current)</span>
              </a>
        </li>
                  <li class="nav-item">
          <a class="nav-link" href="Login.aspx">Login</a>
        </li>
        <%--<li class="nav-item">
          <a class="nav-link" href="Review.aspx">Make Review</a>
        </li>--%>
        <%--<li class="nav-item">
          <a class="nav-link" href="TotalVoting.aspx">Total Voting</a>
        </li>--%>
      </ul>
    </div>
  </div>
</nav>
