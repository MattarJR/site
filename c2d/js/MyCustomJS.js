//import { forEach } from "../fontawesome-free-5.2.0-web/js/v4-shims";

/* Loader*/
$(window).on('load', function () {
    $('#myloader').fadeOut(1000);
})

//////////////////////////////SignUp////////////////////////////////////
// Gender 
function change(obj) {
    var selectBox = obj;
    var selected = selectBox.options[selectBox.selectedIndex].value;
    var Male = document.getElementById("MaleJopDiv");
    var Famale = document.getElementById("FamelJopDev");
    var JopTitel = document.getElementById("JopTitel");
    //
    JopTitel.style.display = "none";
    if (selected === '1') {
        Male.style.display = "block";
        MaleJop.value = "1";
    }
    else {
        Male.style.display = "none";
    }
    //
    if (selected === '2') {
        Famale.style.display = "block";
        FamelJop.value = "1";
    }
    else {
        Famale.style.display = "none";
    }
}

// Male JopTitel
function MaleJopTitel(obj) {
    var selectbox = obj;
    var selected = selectbox.options[selectbox.selectedIndex].value;
    var JopTitel = document.getElementById("JopTitel");
    if (selected === "8") {
        JopTitel.style.display = "block";
    }
    else { JopTitel.style.display = "none"; }
}

// Famale JopTitel
function FamaleJopTitel(obj) {
    var selectbox = obj;
    var selected = selectbox.options[selectbox.selectedIndex].value;
    var JopTitel = document.getElementById("JopTitel");
    if (selected === "5") {
        JopTitel.style.display = "block";
    }
    else { JopTitel.style.display = "none"; }
}
// Jop Another
function PostionsFun(obj) {
    var selectbox = obj;
    var selected = selectbox.options[selectbox.selectedIndex].value;
    var JopTitel = document.getElementById("JopTitel");
    if (selected === "4") {
        JopTitel.style.display = "block";
    }
    else { JopTitel.style.display = "none"; }
}

// ////////////////////////////////////////////  Sat /////////////////////////////
//Sat
function SatFun() {
    // Get the checkbox
    var SatChk = document.getElementById("SatChk");
    // Get the output text
    var SatShift1 = document.getElementById("SatShift1");

    // If the checkbox is checked, display the output text
    if (SatChk.checked == true) {
        SatShift1.style.display = "block";
    } else {
        SatShift1.style.display = "none";
    }
}
//
// Shift1 New
function SatNewShift1() {
    var SatNewShift1 = document.getElementById("SatNewShift1");
    var SatShift2 = document.getElementById("SatShift2");
    if (SatNewShift1.checked == true) {
        SatShift2.style.display = "block";
    }
    else { SatShift2.style.display = "none"; }
}
// Shift2 New
function SatNewShift2() {
    var SatNewShift2 = document.getElementById("SatNewShift2");
    var SatShift3 = document.getElementById("SatShift3");
    if (SatNewShift2.checked == true) {
        SatShift3.style.display = "block";
    }
    else { SatShift3.style.display = "none"; }
}
// Shift3 New
function SatNewShift3() {
    var SatNewShift3 = document.getElementById("SatNewShift3");
    var SatShift4 = document.getElementById("SatShift4");
    if (SatNewShift3.checked == true) {
        SatShift4.style.display = "block";
    }
    else { SatShift4.style.display = "none"; }
}
// Shift4 New
function SatNewShift4() {
    var SatNewShift3 = document.getElementById("SatNewShift3");
    var SatShift5 = document.getElementById("SatShift5");
    if (SatNewShift3.checked == true) {
        SatShift5.style.display = "block";
    }
    else { SatShift5.style.display = "none"; }
}
//
//  Shift1  remove
function SatRemoveShift1() {
    var SatRemoveShift1 = document.getElementById("SatRemoveShift1");
    var SatChk = document.getElementById("SatChk");
    var SatShift1 = document.getElementById("SatShift1");
    if (SatRemoveShift1.checked == true) {
        SatChk.style.display = "none";
        SatShift1.style.display = "none";
    }
}
//  Shift2  remove
function SatRemoveShift2() {
    var SatRemoveShift2 = document.getElementById("SatRemoveShift2");
    var SatShift2 = document.getElementById("SatShift2");
    if (SatRemoveShift2.checked == true) {
        SatShift2.style.display = "none";
    }
}
//  Shift3  remove
function SatRemoveShift3() {
    var SatRemoveShift3 = document.getElementById("SatRemoveShift3");
    var SatShift3 = document.getElementById("SatShift3");
    if (SatRemoveShift3.checked == true) {
        SatShift3.style.display = "none";
    }
}
//  Shift4  remove
function SatRemoveShift4() {
    var SatRemoveShift4 = document.getElementById("SatRemoveShift4");
    var SatShift4 = document.getElementById("SatShift4");
    if (SatRemoveShift4.checked == true) {
        SatShift4.style.display = "none";
    }
}
//  Shift5  remove
function SatRemoveShift5() {
    var SatRemoveShift5 = document.getElementById("SatRemoveShift5");
    var SatShift5 = document.getElementById("SatShift5");
    if (SatRemoveShift5.checked == true) {
        SatShift5.style.display = "none";
    }
}

// ////////////////////////////////////////////  Sun /////////////////////////////
//Sun
function SunFun() {
    // Get the checkbox
    var SunChk = document.getElementById("SunChk");
    // Get the output text
    var SunShift1 = document.getElementById("SunShift1");

    // If the checkbox is checked, display the output text
    if (SunChk.checked == true) {
        SunShift1.style.display = "block";
    } else {
        SunShift1.style.display = "none";
    }
}
// ////////////////////////////////////////////  Mon /////////////////////////////
// Mon
function MonFun() {
    // Get the checkbox
    var MonChk = document.getElementById("MonChk");
    // Get the output text
    var MonShift1 = document.getElementById("MonShift1");

    // If the checkbox is checked, display the output text
    if (MonChk.checked == true) {
        MonShift1.style.display = "block";
    } else {
        MonShift1.style.display = "none";
    }
}
// ////////////////////////////////////////////  Tue /////////////////////////////
// Tue
function TueFun() {
    // Get the checkbox
    var TueChk = document.getElementById("TueChk");
    // Get the output text
    var TueShift1 = document.getElementById("TueShift1");

    // If the checkbox is checked, display the output text
    if (TueChk.checked == true) {
        TueShift1.style.display = "block";
    } else {
        TueShift1.style.display = "none";
    }
}
// ////////////////////////////////////////////  Wed /////////////////////////////
// Wed  
function WedFun() {
    // Get the checkbox
    var WedChk = document.getElementById("WedChk");
    // Get the output text
    var WedShift1 = document.getElementById("WedShift1");

    // If the checkbox is checked, display the output text
    if (WedChk.checked == true) {
        WedShift1.style.display = "block";
    } else {
        WedShift1.style.display = "none";
    }
}
// ////////////////////////////////////////////  Thu /////////////////////////////
// Thu  
function ThuFun() {
    // Get the checkbox
    var ThuChk = document.getElementById("ThuChk");
    // Get the output text
    var ThuShift1 = document.getElementById("ThuShift1");

    // If the checkbox is checked, display the output text
    if (ThuChk.checked == true) {
        ThuShift1.style.display = "block";
    } else {
        ThuShift1.style.display = "none";
    }
}
// ////////////////////////////////////////////  Fri /////////////////////////////
// Fri  
function FriFun() {
    // Get the checkbox
    var FriChk = document.getElementById("FriChk");
    // Get the output text
    var FriShift1 = document.getElementById("FriShift1");

    // If the checkbox is checked, display the output text
    if (FriChk.checked == true) {
        FriShift1.style.display = "block";
    } else {
        FriShift1.style.display = "none";
    }
}
// ////////////////////////////////////////////  AllDays /////////////////////////////
// AllDays  
function AllDaysFun() {
    // Get the checkbox
    var SatChkDiv = document.getElementById("SatChkDiv");
    var SunChkDiv = document.getElementById("SunChkDiv");
    var MonChkDiv = document.getElementById("MonChkDiv");
    var TueChkDiv = document.getElementById("TueChkDiv");
    var WedChkDiv = document.getElementById("WedChkDiv");
    var ThuChkDiv = document.getElementById("ThuChkDiv");
    var FriChkDiv = document.getElementById("FriChkDiv");
    var AllDaysChk = document.getElementById("AllDaysChk");
    // Get the output text
    var AllDaysShift1 = document.getElementById("AllDaysShift1");

    // If the checkbox is checked, display the output text
    if (AllDaysChk.checked == true) {
        AllDaysShift1.style.display = "block";
        SatChkDiv.style.display = "none";
        SunChkDiv.style.display = "none";
        MonChkDiv.style.display = "none";
        TueChkDiv.style.display = "none";
        WedChkDiv.style.display = "none";
        ThuChkDiv.style.display = "none";
        FriChkDiv.style.display = "none";
    } else {
        AllDaysShift1.style.display = "none";
        SatChkDiv.style.display = "block";
        SunChkDiv.style.display = "block";
        MonChkDiv.style.display = "block";
        TueChkDiv.style.display = "block";
        WedChkDiv.style.display = "block";
        ThuChkDiv.style.display = "block";
        FriChkDiv.style.display = "block";
    }
}

/////////////////// AddAds/////////////////////////////
// chekSale  
function chekSale(checkbox) {
    var ChekSale = document.getElementById('chekSale');
    var ChekPur = document.getElementById('chekPurchase');
    //var PriceFix = document.getElementById('PriceFix');
    //var PriceDIv = document.getElementById('PriceDIv');
    //var PriceStatusDiv = document.getElementById('PriceStatusDiv');

    if (ChekSale.checked == true) {
        ChekPur.checked = false;
        //PriceFix.style.display = "block";
        //PriceDIv.style.display = "none";
        //PriceStatusDiv.style.display = "block";
    }
    else {
        ChekPur.checked = true;
        //PriceFix.style.display = "none";
        //PriceDIv.style.display = "block";
        //PriceStatusDiv.style.display = "none";
    }
}

// chekPurchase 

function chekPurchase(checkbox) {
    var ChekSale = document.getElementById('chekSale');
    var ChekPur = document.getElementById('chekPurchase');
    //var PriceDIv = document.getElementById('PriceDIv');
    //var PriceFix = document.getElementById('PriceFix');
    //var PriceStatusDiv = document.getElementById('PriceStatusDiv');
    if (ChekPur.checked == true) {
        ChekSale.checked = false;
        //PriceFix.style.display = "none";
        //PriceDIv.style.display = "block";
        //PriceStatusDiv.style.display = "none";

    }
    else {
        ChekSale.checked = true;
        //PriceFix.style.display = "block";
        //PriceDIv.style.display = "none";
        //PriceStatusDiv.style.display = "block";
    }
}

//   chekNew 
function chekNew(checkbox) {
    var checkNew = document.getElementById('checkNew');
    var checkUsed = document.getElementById('checkUsed');
    var UsedList = document.getElementById('UsedList');
    var CheckExcelent = document.getElementById('CheckExcelent');
    var CheckGood = document.getElementById('CheckGood');
    var CheckFair = document.getElementById('CheckFair');
    if (checkNew.checked == true) {
        checkUsed.checked = false;
        CheckExcelent.checked = false;
        CheckGood.checked = false;
        CheckFair.checked = false;
        UsedList.style.display = "none";
    }
    else { UsedList.style.display = "block"; checkUsed.checked = true;  }

}

// chekUsed 
function chekUsed(checkbox) {
    var checkNew = document.getElementById('checkNew');
    var checkUsed = document.getElementById('checkUsed');
    var UsedList = document.getElementById('UsedList');
    if (checkUsed.checked == true) {
        checkNew.checked = false;
        UsedList.style.display = "block";
        PriceDIv.style.display = "none";
    }
    else {
        UsedList.style.display = "none";
        checkNew.checked = true;
        PriceDIv.style.display = "none";
       
    }
}

// chekExcelent  
function chekExcelent(checkbox) {
    var CheckExcelent = document.getElementById('CheckExcelent');
    var CheckGood = document.getElementById('CheckGood');
    var CheckFair = document.getElementById('CheckFair');

    if (CheckExcelent.checked == true) {
        CheckGood.checked = false;
        CheckFair.checked = false;
    }

}

//     chekGood 
function chekGood(checkbox) {
    var CheckExcelent = document.getElementById('CheckExcelent');
    var CheckGood = document.getElementById('CheckGood');
    var CheckFair = document.getElementById('CheckFair');


    if (CheckGood.checked == true) {
        CheckExcelent.checked = false;
        CheckFair.checked = false;
    }


}

// chekFair  
function chekFair(checkbox) {
    var CheckExcelent = document.getElementById('CheckExcelent');
    var CheckGood = document.getElementById('CheckGood');
    var CheckFair = document.getElementById('CheckFair');

    if (CheckFair.checked == true) {
        CheckGood.checked = false;
        CheckExcelent.checked = false;
    }

}

// CheckFixed  
function GetCheckFixed(checkbox) {
    var CheckFixed = document.getElementById('CheckFixed');
    var CheckNotFixed = document.getElementById('CheckNotFixed');
    var txtPriceFixed = document.getElementById('txtPriceFixed'); // Fixed  
    var PriceDIv = document.getElementById('PriceDIv'); // Not Fixed  

    if (CheckFixed.checked == true) {
        CheckNotFixed.checked = false;
        txtPriceFixed.style.display = "block";
        PriceDIv.style.display = "none";
    }
    else { CheckNotFixed.checked = true; txtPriceFixed.style.display = "none"; PriceDIv.style.display = "block";}

}

// CheckNotFixed  
function GetCheckNotFixed(checkbox) {
    var CheckFixed = document.getElementById('CheckFixed');
    var CheckNotFixed = document.getElementById('CheckNotFixed');
    var txtPriceFixed = document.getElementById('txtPriceFixed'); // Fixed  
    var PriceDIv = document.getElementById('PriceDIv'); // Not Fixed  

    if (CheckNotFixed.checked == true) {
        CheckFixed.checked = false;
        txtPriceFixed.style.display = "none";
        PriceDIv.style.display = "block";
    }
    else { CheckFixed.checked = true; txtPriceFixed.style.display = "block"; PriceDIv.style.display = "none";}
}


// View Comments

function ViewComment() {
    var commentdiv = document.getElementById("commentdiv");

    if (commentdiv.style.display == "none") {
        commentdiv.style.display = "block";
    }
    else {
        commentdiv.style.display = "none";
    }
}

/////////////////////////////////////////// create div ///////////////////////

function CreateDiv(divid) {
    var mydiv = document.createElement("div");


    mydiv.style.background = "red";
    mydiv.style.color = "white";
    mydiv.innerHTML = "Hello";
    mydiv.setAttribute("id", divid);
    mydiv.classList.add("col-xs-12");
    document.getElementById("maindiv").appendChild(mydiv);


}




function Colorout(obj) {

    var a1 = document.getElementById("acolorD1");
    a1.style.color = "white";
}
function Color(obj) {

    var a1 = document.getElementById("acolorD1");
    a1.style.color = "yellow";
}


function Childern(obj) {
    var selectBox = obj;
    var selected = selectBox.options[selectBox.selectedIndex].value;

    var ChildernAgeDiv1 = document.getElementById("ChildernAgeDiv1");
    var ChildernAgeDiv2 = document.getElementById("ChildernAgeDiv2");
    var ChildernAgeDiv3 = document.getElementById("ChildernAgeDiv3");
    var ChildernAgeDiv4 = document.getElementById("ChildernAgeDiv4");
    var ChildernAgeDiv5 = document.getElementById("ChildernAgeDiv5");

    if (selected === '1') {
        ChildernAgeDiv1.style.display = "block";
        ChildernAgeDiv2.style.display = "none";
        ChildernAgeDiv3.style.display = "none";
        ChildernAgeDiv4.style.display = "none";
        ChildernAgeDiv5.style.display = "none";
    }
    else if (selected === '2') {
        ChildernAgeDiv1.style.display = "block";
        ChildernAgeDiv2.style.display = "block";
        ChildernAgeDiv3.style.display = "none";
        ChildernAgeDiv4.style.display = "none";
        ChildernAgeDiv5.style.display = "none";
    }
    else if (selected === '3') {
        ChildernAgeDiv1.style.display = "block";
        ChildernAgeDiv2.style.display = "block";
        ChildernAgeDiv3.style.display = "block";
        ChildernAgeDiv4.style.display = "none";
        ChildernAgeDiv5.style.display = "none";

    }
    else if (selected === '4') {
        ChildernAgeDiv1.style.display = "block";
        ChildernAgeDiv2.style.display = "block";
        ChildernAgeDiv3.style.display = "block";
        ChildernAgeDiv4.style.display = "block";
        ChildernAgeDiv5.style.display = "none";
    }
    else if (selected === '5') {
        ChildernAgeDiv1.style.display = "block";
        ChildernAgeDiv2.style.display = "block";
        ChildernAgeDiv3.style.display = "block";
        ChildernAgeDiv4.style.display = "block";
        ChildernAgeDiv5.style.display = "block";
    }
    else if (selected === '0') {
        ChildernAgeDiv1.style.display = "none";
        ChildernAgeDiv2.style.display = "none";
        ChildernAgeDiv3.style.display = "none";
        ChildernAgeDiv4.style.display = "none";
        ChildernAgeDiv5.style.display = "none";
    }
}
function ChildernMobile(obj) {
    var selectBox = obj;
    var selected = selectBox.options[selectBox.selectedIndex].value;

    var ChildernAgeDiv1 = document.getElementById("ChildernAgeDiv1Mobile");
    var ChildernAgeDiv2 = document.getElementById("ChildernAgeDiv2Mobile");
    var ChildernAgeDiv3 = document.getElementById("ChildernAgeDiv3Mobile");
    var ChildernAgeDiv4 = document.getElementById("ChildernAgeDiv4Mobile");
    var ChildernAgeDiv5 = document.getElementById("ChildernAgeDiv5Mobile");

    if (selected === '1') {
        ChildernAgeDiv1.style.display = "block";
        ChildernAgeDiv2.style.display = "none";
        ChildernAgeDiv3.style.display = "none";
        ChildernAgeDiv4.style.display = "none";
        ChildernAgeDiv5.style.display = "none";
    }
    else if (selected === '2') {
        ChildernAgeDiv1.style.display = "block";
        ChildernAgeDiv2.style.display = "block";
        ChildernAgeDiv3.style.display = "none";
        ChildernAgeDiv4.style.display = "none";
        ChildernAgeDiv5.style.display = "none";
    }
    else if (selected === '3') {
        ChildernAgeDiv1.style.display = "block";
        ChildernAgeDiv2.style.display = "block";
        ChildernAgeDiv3.style.display = "block";
        ChildernAgeDiv4.style.display = "none";
        ChildernAgeDiv5.style.display = "none";

    }
    else if (selected === '4') {
        ChildernAgeDiv1.style.display = "block";
        ChildernAgeDiv2.style.display = "block";
        ChildernAgeDiv3.style.display = "block";
        ChildernAgeDiv4.style.display = "block";
        ChildernAgeDiv5.style.display = "none";
    }
    else if (selected === '5') {
        ChildernAgeDiv1.style.display = "block";
        ChildernAgeDiv2.style.display = "block";
        ChildernAgeDiv3.style.display = "block";
        ChildernAgeDiv4.style.display = "block";
        ChildernAgeDiv5.style.display = "block";
    }
    else if (selected === '0') {
        ChildernAgeDiv1.style.display = "none";
        ChildernAgeDiv2.style.display = "none";
        ChildernAgeDiv3.style.display = "none";
        ChildernAgeDiv4.style.display = "none";
        ChildernAgeDiv5.style.display = "none";
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
   modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
   modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
   if (event.target == modal) {
       modal.style.display = "none";
   }
}

*/

////////////////////////////////////////////// D Chilldren///////////////////////////////////////////////////

function AdultR1change(obj) {
    var selectBox = obj;
    var selected = selectBox.options[selectBox.selectedIndex].value;
    var Children1R1 = document.getElementById("Children1R1");
    var Children2R1 = document.getElementById("Children2R1");
    var Children3R1 = document.getElementById("Children3R1");
    var childAge1 = document.getElementById("childAge1");
    var childAge2 = document.getElementById("childAge2");
    //
    if (selected === '1') {
        Children1R1.style.display = "block";
        Children2R1.style.display = "none";
        Children3R1.style.display = "none";

    }
    if (selected === '2') {
        Children1R1.style.display = "none";
        Children2R1.style.display = "block";
        Children3R1.style.display = "none";
        childAge2.style.display = "none";
    }
    if (selected === '3') {
        Children1R1.style.display = "none";
        Children2R1.style.display = "none";
        Children3R1.style.display = "block";
        childAge1.style.display = "none";
        childAge2.style.display = "none";
    }
}
//
function AdultR2change(obj) {
    var selectBox = obj;
    var selected = selectBox.options[selectBox.selectedIndex].value;
    var Children1R1 = document.getElementById("Children1R2");
    var Children2R1 = document.getElementById("Children2R2");
    var Children3R1 = document.getElementById("Children3R2");
    var childAge1 = document.getElementById("childAge1R2");
    var childAge2 = document.getElementById("childAge2R2");
    //
    if (selected === '1') {
        Children1R1.style.display = "block";
        Children2R1.style.display = "none";
        Children3R1.style.display = "none";

    }
    if (selected === '2') {
        Children1R1.style.display = "none";
        Children2R1.style.display = "block";
        Children3R1.style.display = "none";
        childAge2.style.display = "none";
    }
    if (selected === '3') {
        Children1R1.style.display = "none";
        Children2R1.style.display = "none";
        Children3R1.style.display = "block";
        childAge1.style.display = "none";
        childAge2.style.display = "none";
    }
}
//
function AdultR3change(obj) {
    var selectBox = obj;
    var selected = selectBox.options[selectBox.selectedIndex].value;
    var Children1R1 = document.getElementById("Children1R3");
    var Children2R1 = document.getElementById("Children2R3");
    var Children3R1 = document.getElementById("Children3R3");
    var childAge1 = document.getElementById("childAge1R3");
    var childAge2 = document.getElementById("childAge2R3");
    //
    if (selected === '1') {
        Children1R1.style.display = "block";
        Children2R1.style.display = "none";
        Children3R1.style.display = "none";

    }
    if (selected === '2') {
        Children1R1.style.display = "none";
        Children2R1.style.display = "block";
        Children3R1.style.display = "none";
        childAge2.style.display = "none";
    }
    if (selected === '3') {
        Children1R1.style.display = "none";
        Children2R1.style.display = "none";
        Children3R1.style.display = "block";
        childAge1.style.display = "none";
        childAge2.style.display = "none";
    }
}
//
function AdultR4change(obj) {
    var selectBox = obj;
    var selected = selectBox.options[selectBox.selectedIndex].value;
    var Children1R1 = document.getElementById("Children1R4");
    var Children2R1 = document.getElementById("Children2R4");
    var Children3R1 = document.getElementById("Children3R4");
    var childAge1 = document.getElementById("childAge1R4");
    var childAge2 = document.getElementById("childAge2R4");
    //
    if (selected === '1') {
        Children1R1.style.display = "block";
        Children2R1.style.display = "none";
        Children3R1.style.display = "none";

    }
    if (selected === '2') {
        Children1R1.style.display = "none";
        Children2R1.style.display = "block";
        Children3R1.style.display = "none";
        childAge2.style.display = "none";
    }
    if (selected === '3') {
        Children1R1.style.display = "none";
        Children2R1.style.display = "none";
        Children3R1.style.display = "block";
        childAge1.style.display = "none";
        childAge2.style.display = "none";
    }
}
//
function Childrenchange(obj) {
    var selectBox = obj;
    var selected = selectBox.options[selectBox.selectedIndex].value;
    var childAge1 = document.getElementById("childAge1");
    var childAge2 = document.getElementById("childAge2");
    //
    if (selected === '0') {
        childAge1.style.display = "none";
        childAge2.style.display = "none";
    }
    //
    if (selected === '1') {
        childAge1.style.display = "block";
        childAge2.style.display = "none";
    }
    if (selected === '2') {
        childAge1.style.display = "block";
        childAge2.style.display = "block";
    }
}
//
function ChildrenchangeR2(obj) {
    var selectBox = obj;
    var selected = selectBox.options[selectBox.selectedIndex].value;
    var childAge1 = document.getElementById("childAge1R2");
    var childAge2 = document.getElementById("childAge2R2");
    //
    if (selected === '0') {
        childAge1.style.display = "none";
        childAge2.style.display = "none";
    }
    //
    if (selected === '1') {
        childAge1.style.display = "block";
        childAge2.style.display = "none";
    }
    if (selected === '2') {
        childAge1.style.display = "block";
        childAge2.style.display = "block";
    }
}
//
function ChildrenchangeR3(obj) {
    var selectBox = obj;
    var selected = selectBox.options[selectBox.selectedIndex].value;
    var childAge1 = document.getElementById("childAge1R3");
    var childAge2 = document.getElementById("childAge2R3");
    //
    if (selected === '0') {
        childAge1.style.display = "none";
        childAge2.style.display = "none";
    }
    //
    if (selected === '1') {
        childAge1.style.display = "block";
        childAge2.style.display = "none";
    }
    if (selected === '2') {
        childAge1.style.display = "block";
        childAge2.style.display = "block";
    }
}
//
function ChildrenchangeR4(obj) {
    var selectBox = obj;
    var selected = selectBox.options[selectBox.selectedIndex].value;
    var childAge1 = document.getElementById("childAge1R4");
    var childAge2 = document.getElementById("childAge2R4");
    //
    if (selected === '0') {
        childAge1.style.display = "none";
        childAge2.style.display = "none";
    }
    //
    if (selected === '1') {
        childAge1.style.display = "block";
        childAge2.style.display = "none";
    }
    if (selected === '2') {
        childAge1.style.display = "block";
        childAge2.style.display = "block";
    }
}
//
function Showroom2() {

    var btnroom1 = document.getElementById("btnroom1");
    var Room2 = document.getElementById("room2");
    if (Room2.style.display == "none") {
        Room2.style.display = "block";
        btnroom1.style.display = "none";
    } else { Room2.style.display = "none"; btnroom1.style.display = "block"; }

}
//
function Showroom3() {

    var btnroom1 = document.getElementById("btnroom2");
    var Room2 = document.getElementById("room3");
    var remove2 = document.getElementById("remove2");
    if (Room2.style.display == "none") {
        Room2.style.display = "block";
        btnroom1.style.display = "none";
        remove2.style.display = "none";
    } else { Room2.style.display = "none"; btnroom1.style.display = "block"; remove2.style.display = "block"; }

}
//
function Showroom4() {

    var btnroom1 = document.getElementById("btnroom3");
    var Room2 = document.getElementById("room4");
    var remove3 = document.getElementById("remove3");
    if (Room2.style.display == "none") {
        Room2.style.display = "block";
        btnroom1.style.display = "none";
        remove3.style.display = "none";
    } else { Room2.style.display = "none"; btnroom1.style.display = "block"; remove3.style.display = "block"; }

}
//
function Hideroom2() {
    var btnroom1 = document.getElementById("btnroom1");
    var Room2 = document.getElementById("room2");
    Room2.style.display = "none";
    btnroom1.style.display = "block";
}
//
function Hideroom3() {
    var btnroom1 = document.getElementById("btnroom2");
    var Room2 = document.getElementById("room3");
    var remove2 = document.getElementById("remove2");
    Room2.style.display = "none";
    btnroom1.style.display = "block";
    remove2.style.display = "block";
}
//
function Hideroom4() {
    var btnroom1 = document.getElementById("btnroom3");
    var Room2 = document.getElementById("room4");
    var remove3 = document.getElementById("remove3");
    Room2.style.display = "none";
    remove3.style.display = "block";
    btnroom1.style.display = "block";
}

//$(document).ready(function () {
//    $('.danger').popover({
//        html: true,
//        content: function () {
//            return $('#rooms').html();
//        }
//    });
//});


//////Incres / Room / Adult / Child ( Search hotel page Mobile )////////
function IncresRoom() {
    var Roomtext = document.getElementById("HotelsHeader_RoomNumber");
    if (parseInt(Roomtext.innerText) < 4) {
        Roomtext = (parseInt(Roomtext.innerText) + 1);
        document.getElementById("HotelsHeader_RoomNumber").innerText = Roomtext;
    }
}
function IncresAdult() {
    var Roomtext = document.getElementById("HotelsHeader_RoomNumber");
    var Adulttext = document.getElementById("HotelsHeader_AdultNumber");
    var max = parseInt(Roomtext.innerText) * 3;
    if (parseInt(Adulttext.innerText) < max) {
        Adulttext = (parseInt(Adulttext.innerText) + 1);
        document.getElementById("HotelsHeader_AdultNumber").innerText = Adulttext;
        document.getElementById("HotelsHeader_ChildernNumber").innerText = "0";
        document.getElementById("chiledagediv").style.display = "none";
        document.getElementById("child2div").style.display = "none";
        document.getElementById("child3div").style.display = "none";
        document.getElementById("child4div").style.display = "none";
        document.getElementById("child5div").style.display = "none";
        document.getElementById("child6div").style.display = "none";

    }

}
function IncresChild() {
    var Roomtext = document.getElementById("HotelsHeader_RoomNumber");
    var Adulttext = document.getElementById("HotelsHeader_AdultNumber");
    var max = (parseInt(Roomtext.innerText) * 3) - parseInt(Adulttext.innerText);
    //
    var chiledtext = document.getElementById("HotelsHeader_ChildernNumber");
    var divage = document.getElementById("chiledagediv");
    var child2div = document.getElementById("child2div");
    var child3div = document.getElementById("child3div");
    var child4div = document.getElementById("child4div");
    var child5div = document.getElementById("child5div");
    var child6div = document.getElementById("child6div");
    if (parseInt(chiledtext.innerText) < max) {
        chiledtext = (parseInt(chiledtext.innerText) + 1);
        document.getElementById("HotelsHeader_ChildernNumber").innerText = chiledtext;
    }
    //
    if (parseInt(chiledtext) == 1) { divage.style.display = "block"; }
    else if (parseInt(chiledtext) == 2) { child2div.style.display = "block"; }
    else if (parseInt(chiledtext) == 3) { child3div.style.display = "block"; }
    else if (parseInt(chiledtext) == 4) { child4div.style.display = "block"; }
    else if (parseInt(chiledtext) == 5) { child5div.style.display = "block"; }
    else if (parseInt(chiledtext) == 6) { child6div.style.display = "block"; }

}
//////Decres / Room / Adult / Child ( Search hotel page Mobile )////////
function DecresRoom() {
    var Roomtext = document.getElementById("HotelsHeader_RoomNumber");
    if (parseInt(Roomtext.innerText) > 1) {
        Roomtext = (parseInt(Roomtext.innerText) - 1);
        document.getElementById("HotelsHeader_RoomNumber").innerText = Roomtext;
        document.getElementById("HotelsHeader_AdultNumber").innerText = "1";
        document.getElementById("HotelsHeader_ChildernNumber").innerText = "0";
        document.getElementById("chiledagediv").style.display = "none";
        document.getElementById("child2div").style.display = "none";
        document.getElementById("child3div").style.display = "none";
        document.getElementById("child4div").style.display = "none";
        document.getElementById("child5div").style.display = "none";
        document.getElementById("child6div").style.display = "none";
    }

}
function DecresAdult() {
    var Adulttext = document.getElementById("HotelsHeader_AdultNumber");
    if (parseInt(Adulttext.innerText) > 1) {
        Adulttext = (parseInt(Adulttext.innerText) - 1);
        document.getElementById("HotelsHeader_AdultNumber").innerText = Adulttext;
        document.getElementById("HotelsHeader_ChildernNumber").innerText = "0";
        document.getElementById("chiledagediv").style.display = "none";
        document.getElementById("child2div").style.display = "none";
        document.getElementById("child3div").style.display = "none";
        document.getElementById("child4div").style.display = "none";
        document.getElementById("child5div").style.display = "none";
        document.getElementById("child6div").style.display = "none";
    }
}
function DecresChild() {
    var chiledtext = document.getElementById("HotelsHeader_ChildernNumber");
    var divage = document.getElementById("chiledagediv");
    var child2div = document.getElementById("child2div");
    var child3div = document.getElementById("child3div");
    var child4div = document.getElementById("child4div");
    var child5div = document.getElementById("child5div");
    var child6div = document.getElementById("child6div");
    if (parseInt(chiledtext.innerText) > 0) {
        chiledtext = (parseInt(chiledtext.innerText) - 1);
        document.getElementById("HotelsHeader_ChildernNumber").innerText = chiledtext;
    }
    //
    if (parseInt(chiledtext) == 0) { divage.style.display = "none"; }
    if (parseInt(chiledtext) == 1) { divage.style.display = "block"; child2div.style.display = "none"; }
    if (parseInt(chiledtext) == 2) { child2div.style.display = "block"; child3div.style.display = "none"; child4div.style.display = "none"; child5div.style.display = "none"; child6div.style.display = "none"; }
    if (parseInt(chiledtext) == 3) { child3div.style.display = "block"; child4div.style.display = "none"; child5div.style.display = "none"; child6div.style.display = "none"; }
    if (parseInt(chiledtext) == 4) { child4div.style.display = "block"; child5div.style.display = "none"; child6div.style.display = "none"; }
    if (parseInt(chiledtext) == 5) { child5div.style.display = "block"; child6div.style.display = "none"; }
    if (parseInt(chiledtext) == 6) { child6div.style.display = "block"; }

}



//////////////////// Hotel Profile Page ////////////////////////////

function selectroom() {
    var btnSelectRooms = document.getElementById('btnSelectRoom');
    if (btnSelectRooms.value == "Rooms") {
        document.getElementById('MRoomsDiv').style.display = 'block';
        document.getElementById('MPhotoDiv').style.display = 'none';
        btnSelectRooms.value = "Photos";
    }
    else {
        document.getElementById('MRoomsDiv').style.display = 'none';
        document.getElementById('MPhotoDiv').style.display = 'block';
        btnSelectRooms.value = "Rooms";
    }

}

//  RoomAmenities

$(document).ready(function () {
    $(".x").click(function () {
        $(".collapse").collapse('hide');
    });
});


// Hotel Profile
function Summary() {

    $("#SelectedUnitD").empty();
    $("#SelectedUnitDPrice").empty();
    $("#table_container").empty();
    var VAT = 0;
    var Municipality = 0;
    var totalBefore = 0;
    // Avail
    var inputElements = document.getElementsByClassName('Avail');
    var IMGElements = document.getElementsByClassName('Img');
    for (var i = 0; inputElements[i]; ++i) {
        if (parseInt(inputElements[i].options[inputElements[i].selectedIndex].text) > 0) {
            var para = document.createElement("p");
            var node = document.createTextNode(inputElements[i].options[inputElements[i].selectedIndex].value + " : " + inputElements[i].options[inputElements[i].selectedIndex].text);
            para.appendChild(node);
            var element = document.getElementById("SelectedUnitD");
            element.appendChild(para);
            // Img
            for (var x = 0; IMGElements[x]; ++x) {
                if (IMGElements[x].alt == inputElements[i].options[inputElements[i].selectedIndex].value) {
                    var Div = document.createElement("div");
                    Div.classList.add("col-lg-4");
                    var Img = document.createElement("img");
                    Img.attributes["class"] = "img-responsive center-block";
                    Img.style.height = '100px';
                    Img.src = IMGElements[x].src;
                    var span = document.createElement("span");
                    span.innerText = IMGElements[x].alt;
                    var br = document.createElement("br");
                    Div.appendChild(span);
                    Div.appendChild(br);
                    Div.appendChild(Img);
                    var Container = document.getElementById("table_container");
                    Container.appendChild(Div);
                }
            }
            // price
            var inputElementsP = $("input:radio:checked");
            for (var p = 0; inputElementsP[p]; ++p) {
                if (inputElementsP[p].name == inputElements[i].name) {

                    totalBefore += parseFloat((inputElementsP[p].value * inputElements[i].options[inputElements[i].selectedIndex].text));
                }
            }
        }
    }
    // Price 

    LableTotalBefore.innerText = totalBefore + " SR";
    document.getElementById("txtTotalBefore").value = totalBefore;
    Municipality = (totalBefore * 5) / 100;
    LBMunicipality.innerText = Municipality;
    VAT = ((totalBefore + Municipality) * 5) / 100;
    LBVAT.innerText = VAT;
}


// Printing Reservation
/*Printing script*/
function printpage(DivID) {
    var getpanel = document.getElementById(DivID);
    var MainWindow = window.open(", ", 'left=0,top=0,width=0,height=0');
    MainWindow.document.write('<html><head><title>Print Reservation</title> ');
    MainWindow.document.write('<meta name="viewport" content="width=device-width, initial-scale=1" /> ');
    MainWindow.document.write('<link rel="stylesheet" href="../css/MyBS.css" type="text/css" media="all" /> ');
    MainWindow.document.write('<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" /> ');
    MainWindow.document.write('<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js">  ');
    MainWindow.document.write('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js">  ');
    MainWindow.document.write('<link rel="stylesheet" type="text/css" href="../css/MyCustomStyle.css" media="all" />');
    MainWindow.document.write('</head><body>');
    MainWindow.document.write(getpanel.innerHTML);
    MainWindow.document.close();
    setTimeout(function () { MainWindow.print(); }, 500);
    return false;
}

//////////////////// Header Shopping ////////////////////////////

var path = window.location.pathname;
var page = path.split("/").pop();
var SearchDivD = document.getElementById("SearchD");
var SearchDivM = document.getElementById("DivSearchM");
//
var CategoryDivD = document.getElementById("CategoryDivD");
var CategoryDivM = document.getElementsByClassName("MenuMLi");
if (page == "index.aspx") {
    // Search
    if (SearchDivD != null) {
        SearchDivD.style.display = "none";
    }
    if (SearchDivM != null) {
        SearchDivM.style.display = "none";
    }
    // Category
    
    // Mobile Search
    if (CategoryDivD != null) {
        CategoryDivD.style.display = "none";
    }
    // Mobile Category
    if (CategoryDivM != null) {
        for (var i = 0; CategoryDivM[i]; ++i) {
            CategoryDivM[i].style.display = "none";
        }
    }
  
}


////////////////////// Hotel Search Page ////////////////////////////

function Childern(obj) {
    var selectBox = obj;
    var selected = selectBox.options[selectBox.selectedIndex].value;

    var ChildernAgeDiv1 = document.getElementById("ChildernAgeDiv1");
    var ChildernAgeDiv2 = document.getElementById("ChildernAgeDiv2");
    var ChildernAgeDiv3 = document.getElementById("ChildernAgeDiv3");
    var ChildernAgeDiv4 = document.getElementById("ChildernAgeDiv4");
    var ChildernAgeDiv5 = document.getElementById("ChildernAgeDiv5");

    if (selected === '1') {
        ChildernAgeDiv1.style.display = "block";
        ChildernAgeDiv2.style.display = "none";
        ChildernAgeDiv3.style.display = "none";
        ChildernAgeDiv4.style.display = "none";
        ChildernAgeDiv5.style.display = "none";
    }
    else if (selected === '2') {
        ChildernAgeDiv1.style.display = "block";
        ChildernAgeDiv2.style.display = "block";
        ChildernAgeDiv3.style.display = "none";
        ChildernAgeDiv4.style.display = "none";
        ChildernAgeDiv5.style.display = "none";
    }
    else if (selected === '3') {
        ChildernAgeDiv1.style.display = "block";
        ChildernAgeDiv2.style.display = "block";
        ChildernAgeDiv3.style.display = "block";
        ChildernAgeDiv4.style.display = "none";
        ChildernAgeDiv5.style.display = "none";

    }
    else if (selected === '4') {
        ChildernAgeDiv1.style.display = "block";
        ChildernAgeDiv2.style.display = "block";
        ChildernAgeDiv3.style.display = "block";
        ChildernAgeDiv4.style.display = "block";
        ChildernAgeDiv5.style.display = "none";
    }
    else if (selected === '5') {
        ChildernAgeDiv1.style.display = "block";
        ChildernAgeDiv2.style.display = "block";
        ChildernAgeDiv3.style.display = "block";
        ChildernAgeDiv4.style.display = "block";
        ChildernAgeDiv5.style.display = "block";
    }
    else if (selected === '0') {
        ChildernAgeDiv1.style.display = "none";
        ChildernAgeDiv2.style.display = "none";
        ChildernAgeDiv3.style.display = "none";
        ChildernAgeDiv4.style.display = "none";
        ChildernAgeDiv5.style.display = "none";
    }
}
function ChildernMobile(obj) {
    var selectBox = obj;
    var selected = selectBox.options[selectBox.selectedIndex].value;

    var ChildernAgeDiv1 = document.getElementById("ChildernAgeDiv1Mobile");
    var ChildernAgeDiv2 = document.getElementById("ChildernAgeDiv2Mobile");
    var ChildernAgeDiv3 = document.getElementById("ChildernAgeDiv3Mobile");
    var ChildernAgeDiv4 = document.getElementById("ChildernAgeDiv4Mobile");
    var ChildernAgeDiv5 = document.getElementById("ChildernAgeDiv5Mobile");

    if (selected === '1') {
        ChildernAgeDiv1.style.display = "block";
        ChildernAgeDiv2.style.display = "none";
        ChildernAgeDiv3.style.display = "none";
        ChildernAgeDiv4.style.display = "none";
        ChildernAgeDiv5.style.display = "none";
    }
    else if (selected === '2') {
        ChildernAgeDiv1.style.display = "block";
        ChildernAgeDiv2.style.display = "block";
        ChildernAgeDiv3.style.display = "none";
        ChildernAgeDiv4.style.display = "none";
        ChildernAgeDiv5.style.display = "none";
    }
    else if (selected === '3') {
        ChildernAgeDiv1.style.display = "block";
        ChildernAgeDiv2.style.display = "block";
        ChildernAgeDiv3.style.display = "block";
        ChildernAgeDiv4.style.display = "none";
        ChildernAgeDiv5.style.display = "none";

    }
    else if (selected === '4') {
        ChildernAgeDiv1.style.display = "block";
        ChildernAgeDiv2.style.display = "block";
        ChildernAgeDiv3.style.display = "block";
        ChildernAgeDiv4.style.display = "block";
        ChildernAgeDiv5.style.display = "none";
    }
    else if (selected === '5') {
        ChildernAgeDiv1.style.display = "block";
        ChildernAgeDiv2.style.display = "block";
        ChildernAgeDiv3.style.display = "block";
        ChildernAgeDiv4.style.display = "block";
        ChildernAgeDiv5.style.display = "block";
    }
    else if (selected === '0') {
        ChildernAgeDiv1.style.display = "none";
        ChildernAgeDiv2.style.display = "none";
        ChildernAgeDiv3.style.display = "none";
        ChildernAgeDiv4.style.display = "none";
        ChildernAgeDiv5.style.display = "none";
    }
}
function AdultR1change(obj) {
    var selectBox = obj;
    var selected = selectBox.options[selectBox.selectedIndex].value;
    var Children1R1 = document.getElementById("Children1R1");
    var Children2R1 = document.getElementById("Children2R1");
    var Children3R1 = document.getElementById("Children3R1");
    var childAge1 = document.getElementById("childAge1");
    var childAge2 = document.getElementById("childAge2");
    //
    if (selected === '1') {
        Children1R1.style.display = "block";
        Children2R1.style.display = "none";
        Children3R1.style.display = "none";

    }
    if (selected === '2') {
        Children1R1.style.display = "none";
        Children2R1.style.display = "block";
        Children3R1.style.display = "none";
        childAge2.style.display = "none";
    }
    if (selected === '3') {
        Children1R1.style.display = "none";
        Children2R1.style.display = "none";
        Children3R1.style.display = "block";
        childAge1.style.display = "none";
        childAge2.style.display = "none";
    }
}
//
function AdultR2change(obj) {
    var selectBox = obj;
    var selected = selectBox.options[selectBox.selectedIndex].value;
    var Children1R1 = document.getElementById("Children1R2");
    var Children2R1 = document.getElementById("Children2R2");
    var Children3R1 = document.getElementById("Children3R2");
    var childAge1 = document.getElementById("childAge1R2");
    var childAge2 = document.getElementById("childAge2R2");
    //
    if (selected === '1') {
        Children1R1.style.display = "block";
        Children2R1.style.display = "none";
        Children3R1.style.display = "none";

    }
    if (selected === '2') {
        Children1R1.style.display = "none";
        Children2R1.style.display = "block";
        Children3R1.style.display = "none";
        childAge2.style.display = "none";
    }
    if (selected === '3') {
        Children1R1.style.display = "none";
        Children2R1.style.display = "none";
        Children3R1.style.display = "block";
        childAge1.style.display = "none";
        childAge2.style.display = "none";
    }
}
//
function AdultR3change(obj) {
    var selectBox = obj;
    var selected = selectBox.options[selectBox.selectedIndex].value;
    var Children1R1 = document.getElementById("Children1R3");
    var Children2R1 = document.getElementById("Children2R3");
    var Children3R1 = document.getElementById("Children3R3");
    var childAge1 = document.getElementById("childAge1R3");
    var childAge2 = document.getElementById("childAge2R3");
    //
    if (selected === '1') {
        Children1R1.style.display = "block";
        Children2R1.style.display = "none";
        Children3R1.style.display = "none";

    }
    if (selected === '2') {
        Children1R1.style.display = "none";
        Children2R1.style.display = "block";
        Children3R1.style.display = "none";
        childAge2.style.display = "none";
    }
    if (selected === '3') {
        Children1R1.style.display = "none";
        Children2R1.style.display = "none";
        Children3R1.style.display = "block";
        childAge1.style.display = "none";
        childAge2.style.display = "none";
    }
}
//
function AdultR4change(obj) {
    var selectBox = obj;
    var selected = selectBox.options[selectBox.selectedIndex].value;
    var Children1R1 = document.getElementById("Children1R4");
    var Children2R1 = document.getElementById("Children2R4");
    var Children3R1 = document.getElementById("Children3R4");
    var childAge1 = document.getElementById("childAge1R4");
    var childAge2 = document.getElementById("childAge2R4");
    //
    if (selected === '1') {
        Children1R1.style.display = "block";
        Children2R1.style.display = "none";
        Children3R1.style.display = "none";

    }
    if (selected === '2') {
        Children1R1.style.display = "none";
        Children2R1.style.display = "block";
        Children3R1.style.display = "none";
        childAge2.style.display = "none";
    }
    if (selected === '3') {
        Children1R1.style.display = "none";
        Children2R1.style.display = "none";
        Children3R1.style.display = "block";
        childAge1.style.display = "none";
        childAge2.style.display = "none";
    }
}
//
function Childrenchange(obj) {
    var selectBox = obj;
    var selected = selectBox.options[selectBox.selectedIndex].value;
    var childAge1 = document.getElementById("childAge1");
    var childAge2 = document.getElementById("childAge2");
    //
    if (selected === '0') {
        childAge1.style.display = "none";
        childAge2.style.display = "none";
    }
    //
    if (selected === '1') {
        childAge1.style.display = "block";
        childAge2.style.display = "none";
    }
    if (selected === '2') {
        childAge1.style.display = "block";
        childAge2.style.display = "block";
    }
}
//
function ChildrenchangeR2(obj) {
    var selectBox = obj;
    var selected = selectBox.options[selectBox.selectedIndex].value;
    var childAge1 = document.getElementById("childAge1R2");
    var childAge2 = document.getElementById("childAge2R2");
    //
    if (selected === '0') {
        childAge1.style.display = "none";
        childAge2.style.display = "none";
    }
    //
    if (selected === '1') {
        childAge1.style.display = "block";
        childAge2.style.display = "none";
    }
    if (selected === '2') {
        childAge1.style.display = "block";
        childAge2.style.display = "block";
    }
}
//
function ChildrenchangeR3(obj) {
    var selectBox = obj;
    var selected = selectBox.options[selectBox.selectedIndex].value;
    var childAge1 = document.getElementById("childAge1R3");
    var childAge2 = document.getElementById("childAge2R3");
    //
    if (selected === '0') {
        childAge1.style.display = "none";
        childAge2.style.display = "none";
    }
    //
    if (selected === '1') {
        childAge1.style.display = "block";
        childAge2.style.display = "none";
    }
    if (selected === '2') {
        childAge1.style.display = "block";
        childAge2.style.display = "block";
    }
}
//
function ChildrenchangeR4(obj) {
    var selectBox = obj;
    var selected = selectBox.options[selectBox.selectedIndex].value;
    var childAge1 = document.getElementById("childAge1R4");
    var childAge2 = document.getElementById("childAge2R4");
    //
    if (selected === '0') {
        childAge1.style.display = "none";
        childAge2.style.display = "none";
    }
    //
    if (selected === '1') {
        childAge1.style.display = "block";
        childAge2.style.display = "none";
    }
    if (selected === '2') {
        childAge1.style.display = "block";
        childAge2.style.display = "block";
    }
}
//
function Showroom2() {

    var btnroom1 = document.getElementById("btnroom1");
    var Room2 = document.getElementById("room2");
    if (Room2.style.display == "none") {
        Room2.style.display = "block";
        btnroom1.style.display = "none";
    } else { Room2.style.display = "none"; btnroom1.style.display = "block"; }

}
//
function Showroom3() {

    var btnroom1 = document.getElementById("btnroom2");
    var Room2 = document.getElementById("room3");
    var remove2 = document.getElementById("remove2");
    if (Room2.style.display == "none") {
        Room2.style.display = "block";
        btnroom1.style.display = "none";
        remove2.style.display = "none";
    } else { Room2.style.display = "none"; btnroom1.style.display = "block"; remove2.style.display = "block"; }

}
//
function Showroom4() {

    var btnroom1 = document.getElementById("btnroom3");
    var Room2 = document.getElementById("room4");
    var remove3 = document.getElementById("remove3");
    if (Room2.style.display == "none") {
        Room2.style.display = "block";
        btnroom1.style.display = "none";
        remove3.style.display = "none";
    } else { Room2.style.display = "none"; btnroom1.style.display = "block"; remove3.style.display = "block"; }

}
//
function Hideroom2() {
    var btnroom1 = document.getElementById("btnroom1");
    var Room2 = document.getElementById("room2");
    Room2.style.display = "none";
    btnroom1.style.display = "block";
}
//
function Hideroom3() {
    var btnroom1 = document.getElementById("btnroom2");
    var Room2 = document.getElementById("room3");
    var remove2 = document.getElementById("remove2");
    Room2.style.display = "none";
    btnroom1.style.display = "block";
    remove2.style.display = "block";
}
//
function Hideroom4() {
    var btnroom1 = document.getElementById("btnroom3");
    var Room2 = document.getElementById("room4");
    var remove3 = document.getElementById("remove3");
    Room2.style.display = "none";
    remove3.style.display = "block";
    btnroom1.style.display = "block";
}

//$(document).ready(function () {
//    $('.danger').popover({
//        html: true,
//        content: function () {
//            return $('#rooms').html();
//        }
//    });
//});


//////Incres / Room / Adult / Child ( Search hotel page Mobile )////////
function IncresRoom() {
    var Roomtext = document.getElementById("HotelsHeader_RoomNumber");
    if (parseInt(Roomtext.innerText) < 4) {
        Roomtext = (parseInt(Roomtext.innerText) + 1);
        document.getElementById("HotelsHeader_RoomNumber").innerText = Roomtext;
    }
}
function IncresAdult() {
    var Roomtext = document.getElementById("HotelsHeader_RoomNumber");
    var Adulttext = document.getElementById("HotelsHeader_AdultNumber");
    var max = parseInt(Roomtext.innerText) * 3;
    if (parseInt(Adulttext.innerText) < max) {
        Adulttext = (parseInt(Adulttext.innerText) + 1);
        document.getElementById("HotelsHeader_AdultNumber").innerText = Adulttext;
        document.getElementById("HotelsHeader_ChildernNumber").innerText = "0";
        document.getElementById("chiledagediv").style.display = "none";
        document.getElementById("child2div").style.display = "none";
        document.getElementById("child3div").style.display = "none";
        document.getElementById("child4div").style.display = "none";
        document.getElementById("child5div").style.display = "none";
        document.getElementById("child6div").style.display = "none";

    }

}
function IncresChild() {
    var Roomtext = document.getElementById("HotelsHeader_RoomNumber");
    var Adulttext = document.getElementById("HotelsHeader_AdultNumber");
    var max = (parseInt(Roomtext.innerText) * 3) - parseInt(Adulttext.innerText);
    //
    var chiledtext = document.getElementById("HotelsHeader_ChildernNumber");
    var divage = document.getElementById("chiledagediv");
    var child2div = document.getElementById("child2div");
    var child3div = document.getElementById("child3div");
    var child4div = document.getElementById("child4div");
    var child5div = document.getElementById("child5div");
    var child6div = document.getElementById("child6div");
    if (parseInt(chiledtext.innerText) < max) {
        chiledtext = (parseInt(chiledtext.innerText) + 1);
        document.getElementById("HotelsHeader_ChildernNumber").innerText = chiledtext;
    }
    //
    if (parseInt(chiledtext) == 1) { divage.style.display = "block"; }
    else if (parseInt(chiledtext) == 2) { child2div.style.display = "block"; }
    else if (parseInt(chiledtext) == 3) { child3div.style.display = "block"; }
    else if (parseInt(chiledtext) == 4) { child4div.style.display = "block"; }
    else if (parseInt(chiledtext) == 5) { child5div.style.display = "block"; }
    else if (parseInt(chiledtext) == 6) { child6div.style.display = "block"; }

}
//////Decres / Room / Adult / Child ( Search hotel page Mobile )////////
function DecresRoom() {
    var Roomtext = document.getElementById("HotelsHeader_RoomNumber");
    if (parseInt(Roomtext.innerText) > 1) {
        Roomtext = (parseInt(Roomtext.innerText) - 1);
        document.getElementById("HotelsHeader_RoomNumber").innerText = Roomtext;
        document.getElementById("HotelsHeader_AdultNumber").innerText = "1";
        document.getElementById("HotelsHeader_ChildernNumber").innerText = "0";
        document.getElementById("chiledagediv").style.display = "none";
        document.getElementById("child2div").style.display = "none";
        document.getElementById("child3div").style.display = "none";
        document.getElementById("child4div").style.display = "none";
        document.getElementById("child5div").style.display = "none";
        document.getElementById("child6div").style.display = "none";
    }

}
function DecresAdult() {
    var Adulttext = document.getElementById("HotelsHeader_AdultNumber");
    if (parseInt(Adulttext.innerText) > 1) {
        Adulttext = (parseInt(Adulttext.innerText) - 1);
        document.getElementById("HotelsHeader_AdultNumber").innerText = Adulttext;
        document.getElementById("HotelsHeader_ChildernNumber").innerText = "0";
        document.getElementById("chiledagediv").style.display = "none";
        document.getElementById("child2div").style.display = "none";
        document.getElementById("child3div").style.display = "none";
        document.getElementById("child4div").style.display = "none";
        document.getElementById("child5div").style.display = "none";
        document.getElementById("child6div").style.display = "none";
    }
}
function DecresChild() {
    var chiledtext = document.getElementById("HotelsHeader_ChildernNumber");
    var divage = document.getElementById("chiledagediv");
    var child2div = document.getElementById("child2div");
    var child3div = document.getElementById("child3div");
    var child4div = document.getElementById("child4div");
    var child5div = document.getElementById("child5div");
    var child6div = document.getElementById("child6div");
    if (parseInt(chiledtext.innerText) > 0) {
        chiledtext = (parseInt(chiledtext.innerText) - 1);
        document.getElementById("HotelsHeader_ChildernNumber").innerText = chiledtext;
    }
    //
    if (parseInt(chiledtext) == 0) { divage.style.display = "none"; }
    if (parseInt(chiledtext) == 1) { divage.style.display = "block"; child2div.style.display = "none"; }
    if (parseInt(chiledtext) == 2) { child2div.style.display = "block"; child3div.style.display = "none"; child4div.style.display = "none"; child5div.style.display = "none"; child6div.style.display = "none"; }
    if (parseInt(chiledtext) == 3) { child3div.style.display = "block"; child4div.style.display = "none"; child5div.style.display = "none"; child6div.style.display = "none"; }
    if (parseInt(chiledtext) == 4) { child4div.style.display = "block"; child5div.style.display = "none"; child6div.style.display = "none"; }
    if (parseInt(chiledtext) == 5) { child5div.style.display = "block"; child6div.style.display = "none"; }
    if (parseInt(chiledtext) == 6) { child6div.style.display = "block"; }

}



/*//////////////////////Genral////////////////////*/
 