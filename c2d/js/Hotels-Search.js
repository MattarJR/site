/* Loader*/
$(window).on('load', function () {
    $('#myloader').fadeOut(1000);
})

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

//////Incres / Room / Adult / Child ( Search hotel page Mobile )////////
function IncresRoom() {
    var Roomtext = document.getElementById("RoomNumber");
    if (parseInt(Roomtext.innerText) < 4) {
        Roomtext = (parseInt(Roomtext.innerText) + 1);
        document.getElementById("RoomNumber").innerText = Roomtext;
    }
}
function IncresAdult() {
    var Roomtext = document.getElementById("RoomNumber");
    var Adulttext = document.getElementById("AdultNumber");
    var max = parseInt(Roomtext.innerText) * 3;
    if (parseInt(Adulttext.innerText) < max) {
        Adulttext = (parseInt(Adulttext.innerText) + 1);
        document.getElementById("AdultNumber").innerText = Adulttext;
        document.getElementById("ChildernNumber").innerText = "0";
        document.getElementById("chiledagediv").style.display = "none";
        document.getElementById("child2div").style.display = "none";
        document.getElementById("child3div").style.display = "none";
        document.getElementById("child4div").style.display = "none";
        document.getElementById("child5div").style.display = "none";
        document.getElementById("child6div").style.display = "none";

    }

}
function IncresChild() {
    var Roomtext = document.getElementById("RoomNumber");
    var Adulttext = document.getElementById("AdultNumber");
    var max = (parseInt(Roomtext.innerText) * 3) - parseInt(Adulttext.innerText);
    //
    var chiledtext = document.getElementById("ChildernNumber");
    var divage = document.getElementById("chiledagediv");
    var child2div = document.getElementById("child2div");
    var child3div = document.getElementById("child3div");
    var child4div = document.getElementById("child4div");
    var child5div = document.getElementById("child5div");
    var child6div = document.getElementById("child6div");
    if (parseInt(chiledtext.innerText) < max) {
        chiledtext = (parseInt(chiledtext.innerText) + 1);
        document.getElementById("ChildernNumber").innerText = chiledtext;
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
    var Roomtext = document.getElementById("RoomNumber");
    if (parseInt(Roomtext.innerText) > 1) {
        Roomtext = (parseInt(Roomtext.innerText) - 1);
        document.getElementById("RoomNumber").innerText = Roomtext;
        document.getElementById("AdultNumber").innerText = "1";
        document.getElementById("ChildernNumber").innerText = "0";
        document.getElementById("chiledagediv").style.display = "none";
        document.getElementById("child2div").style.display = "none";
        document.getElementById("child3div").style.display = "none";
        document.getElementById("child4div").style.display = "none";
        document.getElementById("child5div").style.display = "none";
        document.getElementById("child6div").style.display = "none";
    }

}
function DecresAdult() {
    var Adulttext = document.getElementById("AdultNumber");
    if (parseInt(Adulttext.innerText) > 1) {
        Adulttext = (parseInt(Adulttext.innerText) - 1);
        document.getElementById("AdultNumber").innerText = Adulttext;
        document.getElementById("ChildernNumber").innerText = "0";
        document.getElementById("chiledagediv").style.display = "none";
        document.getElementById("child2div").style.display = "none";
        document.getElementById("child3div").style.display = "none";
        document.getElementById("child4div").style.display = "none";
        document.getElementById("child5div").style.display = "none";
        document.getElementById("child6div").style.display = "none";
    }
}
function DecresChild() {
    var chiledtext = document.getElementById("ChildernNumber");
    var divage = document.getElementById("chiledagediv");
    var child2div = document.getElementById("child2div");
    var child3div = document.getElementById("child3div");
    var child4div = document.getElementById("child4div");
    var child5div = document.getElementById("child5div");
    var child6div = document.getElementById("child6div");
    if (parseInt(chiledtext.innerText) > 0) {
        chiledtext = (parseInt(chiledtext.innerText) - 1);
        document.getElementById("ChildernNumber").innerText = chiledtext;
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

function CalcAdult() {
    //
    var txtSearcD = document.getElementById("txtSearcD").innerText;
    if (txtSearcD == null) {
        txtSearcD.Text = "Riyadh";
    }
    var RoomCount = document.getElementById("RoomCount");
    var AdultCount = document.getElementById("AdultCount");
    var ChildrenCount = document.getElementById("ChildrenCount");
    //
    var _RoomCount = 0;
    var _AdultCount = 0;
    var _ChildrenCount = 0;
    //
    const mediaQuery = window.matchMedia('(max-width: 980px)')
    // Then trigger an alert screen.width < 980
    if (mediaQuery.matches) {
        var RoomNumber = document.getElementById("RoomNumber").innerText;
        var AdultNumber = document.getElementById("AdultNumber").innerText;
        var ChildernNumber = document.getElementById("ChildernNumber").innerText;
        _RoomCount = parseInt(RoomNumber);
        _AdultCount = parseInt(AdultNumber);
        _ChildrenCount = parseInt(ChildernNumber);
        document.getElementById('MSerachDiv').style.display = 'none';
        document.getElementById('MResultDiv').style.display = 'block';
    } else {
        //
        var Droom1 = document.getElementById("room1");
        var DAdult1 = document.getElementById("Adult1");
        var DChild1_R1 = document.getElementById("childAge1");
        var DSelectchildAge1_R1 = document.getElementById("selectchildAge1");
        var DChild2_R1 = document.getElementById("childAge2");
        var DSelectchildAge2_R1 = document.getElementById("selectchildAge2");
        //
        var Droom2 = document.getElementById("room2");
        var DAdult2 = document.getElementById("Adult2");
        var DChild1_R2 = document.getElementById("childAge1R2");
        var DSelectchildAge1_R2 = document.getElementById("selectchildAge3");
        var DChild2_R2 = document.getElementById("childAge2R2");
        var DSelectchildAge2_R2 = document.getElementById("selectchildAge4");
        //
        var Droom3 = document.getElementById("room3");
        var DAdult3 = document.getElementById("Adult3");
        var DChild1_R3 = document.getElementById("childAge1R3");
        var DSelectchildAge1_R3 = document.getElementById("selectchildAge1R3");
        var DChild2_R3 = document.getElementById("childAge2R3");
        var DSelectchildAge2_R3 = document.getElementById("selectchildAge2R3");
        //
        var Droom4 = document.getElementById("room4");
        var DAdult4 = document.getElementById("Adult4");
        var DChild1_R4 = document.getElementById("childAge1R4");
        var DSelectchildAge1_R4 = document.getElementById("selectchildAge1R4");
        var DChild2_R4 = document.getElementById("childAge2R4");
        var DSelectchildAge2_R4 = document.getElementById("selectchildAge2R4");
        //

        if (Droom1.style.display != "none") {
            _RoomCount = 1;
            _AdultCount = parseInt(DAdult1.value);
            //
            if (DChild1_R1.style.display != "none") {
                if (DSelectchildAge1_R1.value > 6) {
                    _AdultCount += 1;
                } else {
                    _ChildrenCount += 1;
                }
            }
            if (DChild2_R1.style.display != "none") {
                if (DSelectchildAge2_R1.value > 6) {
                    _AdultCount += 1;
                } else {
                    _ChildrenCount += 1;
                }
            }
        }
        if (Droom2.style.display != "none") {
            _RoomCount = 2;
            _AdultCount += parseInt(DAdult2.value);
            //
            if (DChild1_R2.style.display != "none") {
                if (DSelectchildAge1_R2.value > 6) {
                    _AdultCount += 1;
                } else {
                    _ChildrenCount += 1;
                }
            }
            if (DChild2_R2.style.display != "none") {
                if (DSelectchildAge2_R2.value > 6) {
                    _AdultCount += 1;
                } else {
                    _ChildrenCount += 1;
                }
            }
        }
        if (Droom3.style.display != "none") {
            _RoomCount = 3;
            _AdultCount += parseInt(DAdult3.value);
            //
            if (DChild1_R3.style.display != "none") {
                if (DSelectchildAge1_R3.value > 6) {
                    _AdultCount += 1;
                } else {
                    _ChildrenCount += 1;
                }
            }
            if (DChild2_R3.style.display != "none") {
                if (DSelectchildAge2_R3.value > 6) {
                    _AdultCount += 1;
                } else {
                    _ChildrenCount += 1;
                }
            }
        }
        if (Droom4.style.display != "none") {
            _RoomCount = 4;
            _AdultCount += parseInt(DAdult4.value);
            //
            if (DChild1_R4.style.display != "none") {
                if (DSelectchildAge1_R4.value > 6) {
                    _AdultCount += 1;
                } else {
                    _ChildrenCount += 1;
                }
            }
            if (DChild2_R4.style.display != "none") {
                if (DSelectchildAge2_R4.value > 6) {
                    _AdultCount += 1;
                } else {
                    _ChildrenCount += 1;
                }
            }
        }
    }
    RoomCount.value = _RoomCount.toString();
    AdultCount.value = _AdultCount.toString();
    ChildrenCount.value = _ChildrenCount.toString();
}

function ShowUnitDetails(unit) {
    var Z = document.getElementsByClassName("repeaterItemDiv");
    for (var i = 0; Z[i]; ++i) {
        Z[i].style.display = "none";
    }
    var x = document.getElementsByClassName(unit.alt)[0];
    x.style.display = "block";
}

$(function () {
    $('.date-picker').datepicker({
        changeMonth: true,
        numberOfMonths: 1,
        dateFormat: 'mm/dd/yy',
    });
}); 

function openNav() {
    document.getElementById("mySidenav").style.width = "270px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$(function () {
    var availableTags = [
        "Riyadh",
        "Mecca",
        "Jedah",
        "Cairo",
        "Al Madena",
        "Suite Inn Hotel Riyadh",
        "Suite Inn Hotel Mecca",
        "Scheme"
    ];
    $("#txtSearcD").autocomplete({ source: availableTags });
    $("#txtSearchM").autocomplete({ source: availableTags });

});

//<% --Star / Prop Type  Filter-- %>
function Filters() {
    var StarFilter = false, TypeFilter = false; ReviewFilter = false; FacilityFilter = false;
    var star1 = document.getElementById("star1");
    var star2 = document.getElementById("star2");
    var star3 = document.getElementById("star3");
    var star4 = document.getElementById("star4");
    var star5 = document.getElementById("star5");
    var Unrated = document.getElementById("Unrated");
    //
    var HTypeHotel = document.getElementById("HTypeHotel");
    var HTypeApartments = document.getElementById("HTypeApartments");
    var HTypeChalets = document.getElementById("HTypeChalets");
    var HTypeResorts = document.getElementById("HTypeResorts");
    var HTypeMotels = document.getElementById("HTypeMotels");
    //
    var excellent = document.getElementById("excellent");
    var wonderful = document.getElementById("wonderful");
    var verygood = document.getElementById("verygood");
    var good = document.getElementById("good");
    var fair = document.getElementById("fair");
    var okk = document.getElementById("okk");
    //
    var freewifi = document.getElementById("freewifi");
    var parking = document.getElementById("parking");
    var airportshuttle = document.getElementById("airportshuttle");
    var roomservice = document.getElementById("roomservice");
    var swimmingpool = document.getElementById("swimmingpool");
    var fitnesscenter = document.getElementById("fitnesscenter");
    var spa = document.getElementById("spa");
    var petfriendly = document.getElementById("petfriendly");
    var resturant = document.getElementById("resturant");
    var frontdesk = document.getElementById("frontdesk");
    var nonsmoking = document.getElementById("nonsmoking");
    //
    if (star1.checked == true
        || star2.checked == true
        || star3.checked == true
        || star4.checked == true
        || star5.checked == true
        || Unrated.checked == true) {
        StarFilter = true;
    }
    if (HTypeHotel.checked == true
        || HTypeApartments.checked == true
        || HTypeChalets.checked == true
        || HTypeResorts.checked == true
        || HTypeMotels.checked == true) {
        TypeFilter = true;
    }
    if (excellent.checked == true
        || wonderful.checked == true
        || verygood.checked == true
        || good.checked == true
        || fair.checked == true
        || okk.checked == true) {
        ReviewFilter = true;
    }
    if (freewifi.checked == true
        || parking.checked == true
        || airportshuttle.checked == true
        || roomservice.checked == true
        || swimmingpool.checked == true
        || fitnesscenter.checked == true
        || spa.checked == true
        || petfriendly.checked == true
        || resturant.checked == true
        || frontdesk.checked == true
        || nonsmoking.checked == true) {
        FacilityFilter = true;
    }
    // No Filter
    if (StarFilter == false && TypeFilter == false && ReviewFilter == false && FacilityFilter == false) {
        var hotel = document.getElementsByClassName("HotelContaner");
        for (var i = 0; i < hotel.length; ++i) {
            hotel[i].style.display = "block";
        }
    }
    // StarFilter 
    if (StarFilter == true && TypeFilter == false && ReviewFilter == false && FacilityFilter == false) {
        var hotel = document.getElementsByClassName("HotelContaner");
        for (var i = 0; i < hotel.length; ++i) {
            // Stars
            var HStars = hotel[i].getElementsByClassName("HStars");
            var starNum = HStars[0].value;
            // Check Stars
            var chk = false;
            if (starNum == 1) {
                if (star1.checked) {
                    chk = true;
                }
            }
            if (starNum == 2) {
                if (star2.checked) {
                    hotel[i].style.display = "block";
                }
            }
            if (starNum == 3) {
                if (star3.checked) {
                    chk = true;
                }
            }
            if (starNum == 4) {
                if (star4.checked) {
                    chk = true;
                }
            }
            if (starNum == 5) {
                if (star5.checked) {
                    chk = true;
                }
            }
            if (starNum == 0) {
                if (Unrated.checked) {
                    chk = true;
                }
            }
            if (chk) {
                hotel[i].style.display = "block";
            } else { hotel[i].style.display = "none"; }
        }
    }
    // TypeFilter 
    if (StarFilter == false && TypeFilter == true && ReviewFilter == false && FacilityFilter == false) {
        var hotel = document.getElementsByClassName("HotelContaner");
        for (var i = 0; i < hotel.length; ++i) {
            // Type
            var HType = hotel[i].getElementsByClassName("HType");
            var Type = HType[0].value;
            // Check Type
            var chk = false;
            if (Type == "Hotels") {
                if (HTypeHotel.checked) { chk = true; }
            }
            if (Type == "Apartments") {
                if (HTypeApartments.checked) { chk = true; }
            }
            if (Type == "Chalets") {
                if (HTypeChalets.checked) { chk = true; }
            }
            if (Type == "Resorts") {
                if (HTypeResorts.checked) { chk = true; }
            }
            if (Type == "Motels") {
                if (HTypeMotels.checked) { chk = true; }
            }
            if (chk) {
                hotel[i].style.display = "block";
            } else { hotel[i].style.display = "none"; }
        }
    }
    // ReviewFilter
    if (StarFilter == false && TypeFilter == false && ReviewFilter == true && FacilityFilter == false) {
        var hotel = document.getElementsByClassName("HotelContaner");
        for (var i = 0; i < hotel.length; ++i) {
            // Review
            var Review = hotel[i].getElementsByClassName("Review");
            var Reviews = Review[0].value;
            // Check Review
            var chk = false;
            if (Reviews == "Excellent 9+") {
                if (excellent.checked) { chk = true; }
            }
            if (Reviews == "Wonderful 8+") {
                if (wonderful.checked) { chk = true; }
            }
            if (Reviews == "Very Good 7+") {
                if (verygood.checked) { chk = true; }
            }
            if (Reviews == "Good 6+") {
                if (good.checked) { chk = true; }
            }
            if (Reviews == "Fair 5+") {
                if (fair.checked) { chk = true; }
            }
            if (Reviews == "Okay") {
                if (okk.checked) { chk = true; }
            }
            if (chk) {
                hotel[i].style.display = "block";
            } else { hotel[i].style.display = "none"; }
        }
    }
    // FacilityFilter
    if (StarFilter == false && TypeFilter == false && ReviewFilter == false && FacilityFilter == true) {
        var hotel = document.getElementsByClassName("HotelContaner");
        for (var i = 0; i < hotel.length; ++i) {
            // Facility
            var Facility = hotel[i].getElementsByClassName("Facility");
            var Facilities = Facility[0].value;
            // Check Facility
            var chk = false;
            if (Facilities == "freewifi") {
                if (freewifi.checked) { chk = true; }
            }
            if (Facilities == "parking") {
                if (parking.checked) { chk = true; }
            }
            if (Facilities == "airportshuttle") {
                if (airportshuttle.checked) { chk = true; }
            }
            if (Facilities == "roomservice") {
                if (roomservice.checked) { chk = true; }
            }
            if (Facilities == "swimmingpool") {
                if (swimmingpool.checked) { chk = true; }
            }
            if (Facilities == "fitnesscenter") {
                if (fitnesscenter.checked) { chk = true; }
            }
            if (Facilities == "spa") {
                if (spa.checked) { chk = true; }
            }
            if (Facilities == "petfriendly") {
                if (petfriendly.checked) { chk = true; }
            }
            if (Facilities == "resturant") {
                if (resturant.checked) { chk = true; }
            }
            if (Facilities == "frontdesk") {
                if (frontdesk.checked) { chk = true; }
            }
            if (Facilities == "nonsmoking") {
                if (nonsmoking.checked) { chk = true; }
            }
            if (chk) {
                hotel[i].style.display = "block";
            } else { hotel[i].style.display = "none"; }
        }
    }
    //
    if (StarFilter == true && TypeFilter == true && ReviewFilter == true && FacilityFilter == true) {
        var hotel = document.getElementsByClassName("HotelContaner");
        for (var i = 0; i < hotel.length; ++i) {
            var chstar1 = false, chstar2 = false, chstar3 = false, chstar4 = false, chstar5 = false, chUnrated = false;
            var TypeHotel = false, TypeApartments = false, TypeChalets = false, TypeResorts = false, TypeMotels = false;
            var excellent9 = false, wonderful8 = false, verygood7 = false, good6 = false, fair5 = false, nk5 = false;
            var wifi1 = false, park2 = false, airport3 = false, Service4 = false, Swimming5 = false, Fitness6 = false,
                Spa7 = false, Pet8 = false, Resturant9 = false, Front10 = false, NoneSmoking11 = false;
            // Stars
            var HStars = hotel[i].getElementsByClassName("HStars");
            var starNum = HStars[0].value;
            // Type
            var HType = hotel[i].getElementsByClassName("HType");
            var Type = HType[0].value;
            // Review
            var Review = hotel[i].getElementsByClassName("Review");
            var Reviews = Review[0].value;
            // Facility
            var Facility = hotel[i].getElementsByClassName("Facility");
            var Facilities = Facility[0].value;
            // Check Stars
            if (starNum == 1) {
                if (star1.checked) {
                    chstar1 = true;
                    // Check Type
                    if (Type == "Hotels") {
                        if (HTypeHotel.checked) { TypeHotel = true; } else { TypeHotel = false; }
                    }
                    if (Type == "Apartments") {
                        if (HTypeApartments.checked) { TypeApartments = true; } else { TypeApartments = false; }
                    }
                    if (Type == "Chalets") {
                        if (HTypeChalets.checked) { TypeChalets = true; } else { TypeChalets = false; }
                    }
                    if (Type == "Resorts") {
                        if (HTypeResorts.checked) { TypeResorts = true; } else { TypeResorts = false; }
                    }
                    if (Type == "Motels") {
                        if (HTypeMotels.checked) { TypeMotels = true; } else { TypeMotels = false; }
                    }
                    // Check Review
                    if (Reviews == "Excellent 9+") {
                        if (excellent.checked) { excellent9 = true; } else { excellent9 = false; }
                    }
                    if (Reviews == "Wonderful 8+") {
                        if (wonderful.checked) { wonderful8 = true; } else { wonderful8 = false; }
                    }
                    if (Reviews == "Very Good 7+") {
                        if (verygood.checked) { verygood7 = true; } else { verygood7 = false; }
                    }
                    if (Reviews == "Good 6+") {
                        if (good.checked) { good6 = true; } else { good6 = false; }
                    }
                    if (Reviews == "Fair 5+") {
                        if (fair.checked) { fair5 = true; } else { fair5 = false; }
                    }
                    if (Reviews == "Okay") {
                        if (okk.checked) { nk5 = true; } else { nk5 = false; }
                    }
                    // Check Facility
                    if (Facilities == "Free WiFi") {
                        if (freewifi.checked) { wifi1 = true; } else { wifi1 = false; }
                    }
                    if (Facilities == "parking") {
                        if (parking.checked) { park2 = true; } else { park2 = false; }
                    }
                    if (Facilities == "Airport Shuttle") {
                        if (airportshuttle.checked) { airport3 = true; } else { airport3 = false; }
                    }
                    if (Facilities == "Room Service") {
                        if (roomservice.checked) { Service4 = true; } else { Service4 = false; }
                    }
                    if (Facilities == "Swimming Pool") {
                        if (swimmingpool.checked) { Swimming5 = true; } else { Swimming5 = false; }
                    }
                    if (Facilities == "Fitness center") {
                        if (fitnesscenter.checked) { Fitness6 = true; } else { Fitness6 = false; }
                    }
                    if (Facilities == "Spa") {
                        if (spa.checked) { Spa7 = true; } else { Spa7 = false; }
                    }
                    if (Facilities == "Pet Friendly") {
                        if (petfriendly.checked) { Pet8 = true; } else { Pet8 = false; }
                    }
                    if (Facilities == "Resturant") {
                        if (resturant.checked) { Resturant9 = true; } else { Resturant9 = false; }
                    }
                    if (Facilities == "Front Disk open 24/7") {
                        if (frontdesk.checked) { Front10 = true; } else { Front10 = false; }
                    }
                    if (Facilities == "None-Smoking Rooms") {
                        if (nonsmoking.checked) { NoneSmoking11 = true; } else { NoneSmoking11 = false; }
                    }
                }
                else { chstar1 = false; }
            }
            if (starNum == 2) {
                if (star2.checked) {
                    chstar2 = true;
                    // Check Type
                    if (Type == "Hotels") {
                        if (HTypeHotel.checked) { TypeHotel = true; } else { TypeHotel = false; }
                    }
                    if (Type == "Apartments") {
                        if (HTypeApartments.checked) { TypeApartments = true; } else { TypeApartments = false; }
                    }
                    if (Type == "Chalets") {
                        if (HTypeChalets.checked) { TypeChalets = true; } else { TypeChalets = false; }
                    }
                    if (Type == "Resorts") {
                        if (HTypeResorts.checked) { TypeResorts = true; } else { TypeResorts = false; }
                    }
                    if (Type == "Motels") {
                        if (HTypeMotels.checked) { TypeMotels = true; } else { TypeMotels = false; }
                    }
                    // Check Review
                    if (Reviews == "Excellent 9+") {
                        if (excellent.checked) { excellent9 = true; } else { excellent9 = false; }
                    }
                    if (Reviews == "Wonderful 8+") {
                        if (wonderful.checked) { wonderful8 = true; } else { wonderful8 = false; }
                    }
                    if (Reviews == "Very Good 7+") {
                        if (verygood.checked) { verygood7 = true; } else { verygood7 = false; }
                    }
                    if (Reviews == "Good 6+") {
                        if (good.checked) { good6 = true; } else { good6 = false; }
                    }
                    if (Reviews == "Fair 5+") {
                        if (fair.checked) { fair5 = true; } else { fair5 = false; }
                    }
                    if (Reviews == "Okay") {
                        if (okk.checked) { nk5 = true; } else { nk5 = false; }
                    }
                    // Check Facility
                    if (Facilities == "Free WiFi") {
                        if (freewifi.checked) { wifi1 = true; } else { wifi1 = false; }
                    }
                    if (Facilities == "parking") {
                        if (parking.checked) { park2 = true; } else { park2 = false; }
                    }
                    if (Facilities == "Airport Shuttle") {
                        if (airportshuttle.checked) { airport3 = true; } else { airport3 = false; }
                    }
                    if (Facilities == "Room Service") {
                        if (roomservice.checked) { Service4 = true; } else { Service4 = false; }
                    }
                    if (Facilities == "Swimming Pool") {
                        if (swimmingpool.checked) { Swimming5 = true; } else { Swimming5 = false; }
                    }
                    if (Facilities == "Fitness center") {
                        if (fitnesscenter.checked) { Fitness6 = true; } else { Fitness6 = false; }
                    }
                    if (Facilities == "Spa") {
                        if (spa.checked) { Spa7 = true; } else { Spa7 = false; }
                    }
                    if (Facilities == "Pet Friendly") {
                        if (petfriendly.checked) { Pet8 = true; } else { Pet8 = false; }
                    }
                    if (Facilities == "Resturant") {
                        if (resturant.checked) { Resturant9 = true; } else { Resturant9 = false; }
                    }
                    if (Facilities == "Front Disk open 24/7") {
                        if (frontdesk.checked) { Front10 = true; } else { Front10 = false; }
                    }
                    if (Facilities == "None-Smoking Rooms") {
                        if (nonsmoking.checked) { NoneSmoking11 = true; } else { NoneSmoking11 = false; }
                    }
                } else { chstar2 = false; }
            }
            if (starNum == 3) {
                if (star3.checked) {
                    chstar3 = true;
                    // Check Type
                    if (Type == "Hotels") {
                        if (HTypeHotel.checked) { TypeHotel = true; } else { TypeHotel = false; }
                    }
                    if (Type == "Apartments") {
                        if (HTypeApartments.checked) { TypeApartments = true; } else { TypeApartments = false; }
                    }
                    if (Type == "Chalets") {
                        if (HTypeChalets.checked) { TypeChalets = true; } else { TypeChalets = false; }
                    }
                    if (Type == "Resorts") {
                        if (HTypeResorts.checked) { TypeResorts = true; } else { TypeResorts = false; }
                    }
                    if (Type == "Motels") {
                        if (HTypeMotels.checked) { TypeMotels = true; } else { TypeMotels = false; }
                    }
                    // Check Review
                    if (Reviews == "Excellent 9+") {
                        if (excellent.checked) { excellent9 = true; } else { excellent9 = false; }
                    }
                    if (Reviews == "Wonderful 8+") {
                        if (wonderful.checked) { wonderful8 = true; } else { wonderful8 = false; }
                    }
                    if (Reviews == "Very Good 7+") {
                        if (verygood.checked) { verygood7 = true; } else { verygood7 = false; }
                    }
                    if (Reviews == "Good 6+") {
                        if (good.checked) { good6 = true; } else { good6 = false; }
                    }
                    if (Reviews == "Fair 5+") {
                        if (fair.checked) { fair5 = true; } else { fair5 = false; }
                    }
                    if (Reviews == "Okay") {
                        if (okk.checked) { nk5 = true; } else { nk5 = false; }
                    }
                    // Check Facility
                    if (Facilities == "Free WiFi") {
                        if (freewifi.checked) { wifi1 = true; } else { wifi1 = false; }
                    }
                    if (Facilities == "parking") {
                        if (parking.checked) { park2 = true; } else { park2 = false; }
                    }
                    if (Facilities == "Airport Shuttle") {
                        if (airportshuttle.checked) { airport3 = true; } else { airport3 = false; }
                    }
                    if (Facilities == "Room Service") {
                        if (roomservice.checked) { Service4 = true; } else { Service4 = false; }
                    }
                    if (Facilities == "Swimming Pool") {
                        if (swimmingpool.checked) { Swimming5 = true; } else { Swimming5 = false; }
                    }
                    if (Facilities == "Fitness center") {
                        if (fitnesscenter.checked) { Fitness6 = true; } else { Fitness6 = false; }
                    }
                    if (Facilities == "Spa") {
                        if (spa.checked) { Spa7 = true; } else { Spa7 = false; }
                    }
                    if (Facilities == "Pet Friendly") {
                        if (petfriendly.checked) { Pet8 = true; } else { Pet8 = false; }
                    }
                    if (Facilities == "Resturant") {
                        if (resturant.checked) { Resturant9 = true; } else { Resturant9 = false; }
                    }
                    if (Facilities == "Front Disk open 24/7") {
                        if (frontdesk.checked) { Front10 = true; } else { Front10 = false; }
                    }
                    if (Facilities == "None-Smoking Rooms") {
                        if (nonsmoking.checked) { NoneSmoking11 = true; } else { NoneSmoking11 = false; }
                    }
                } else { chstar3 = false; }
            }
            if (starNum == 4) {
                if (star4.checked) {
                    chstar4 = true;
                    // Check Type
                    if (Type == "Hotels") {
                        if (HTypeHotel.checked) { TypeHotel = true; } else { TypeHotel = false; }
                    }
                    if (Type == "Apartments") {
                        if (HTypeApartments.checked) { TypeApartments = true; } else { TypeApartments = false; }
                    }
                    if (Type == "Chalets") {
                        if (HTypeChalets.checked) { TypeChalets = true; } else { TypeChalets = false; }
                    }
                    if (Type == "Resorts") {
                        if (HTypeResorts.checked) { TypeResorts = true; } else { TypeResorts = false; }
                    }
                    if (Type == "Motels") {
                        if (HTypeMotels.checked) { TypeMotels = true; } else { TypeMotels = false; }
                    }
                    // Check Review
                    if (Reviews == "Excellent 9+") {
                        if (excellent.checked) { excellent9 = true; } else { excellent9 = false; }
                    }
                    if (Reviews == "Wonderful 8+") {
                        if (wonderful.checked) { wonderful8 = true; } else { wonderful8 = false; }
                    }
                    if (Reviews == "Very Good 7+") {
                        if (verygood.checked) { verygood7 = true; } else { verygood7 = false; }
                    }
                    if (Reviews == "Good 6+") {
                        if (good.checked) { good6 = true; } else { good6 = false; }
                    }
                    if (Reviews == "Fair 5+") {
                        if (fair.checked) { fair5 = true; } else { fair5 = false; }
                    }
                    if (Reviews == "Okay") {
                        if (okk.checked) { nk5 = true; } else { nk5 = false; }
                    }
                    // Check Facility
                    if (Facilities == "Free WiFi") {
                        if (freewifi.checked) { wifi1 = true; } else { wifi1 = false; }
                    }
                    if (Facilities == "parking") {
                        if (parking.checked) { park2 = true; } else { park2 = false; }
                    }
                    if (Facilities == "Airport Shuttle") {
                        if (airportshuttle.checked) { airport3 = true; } else { airport3 = false; }
                    }
                    if (Facilities == "Room Service") {
                        if (roomservice.checked) { Service4 = true; } else { Service4 = false; }
                    }
                    if (Facilities == "Swimming Pool") {
                        if (swimmingpool.checked) { Swimming5 = true; } else { Swimming5 = false; }
                    }
                    if (Facilities == "Fitness center") {
                        if (fitnesscenter.checked) { Fitness6 = true; } else { Fitness6 = false; }
                    }
                    if (Facilities == "Spa") {
                        if (spa.checked) { Spa7 = true; } else { Spa7 = false; }
                    }
                    if (Facilities == "Pet Friendly") {
                        if (petfriendly.checked) { Pet8 = true; } else { Pet8 = false; }
                    }
                    if (Facilities == "Resturant") {
                        if (resturant.checked) { Resturant9 = true; } else { Resturant9 = false; }
                    }
                    if (Facilities == "Front Disk open 24/7") {
                        if (frontdesk.checked) { Front10 = true; } else { Front10 = false; }
                    }
                    if (Facilities == "None-Smoking Rooms") {
                        if (nonsmoking.checked) { NoneSmoking11 = true; } else { NoneSmoking11 = false; }
                    }
                } else { chstar4 = false; }
            }
            if (starNum == 5) {
                if (star5.checked) {
                    chstar5 = true;
                    // Check Type
                    if (Type == "Hotels") {
                        if (HTypeHotel.checked) { TypeHotel = true; } else { TypeHotel = false; }
                    }
                    if (Type == "Apartments") {
                        if (HTypeApartments.checked) { TypeApartments = true; } else { TypeApartments = false; }
                    }
                    if (Type == "Chalets") {
                        if (HTypeChalets.checked) { TypeChalets = true; } else { TypeChalets = false; }
                    }
                    if (Type == "Resorts") {
                        if (HTypeResorts.checked) { TypeResorts = true; } else { TypeResorts = false; }
                    }
                    if (Type == "Motels") {
                        if (HTypeMotels.checked) { TypeMotels = true; } else { TypeMotels = false; }
                    }
                    // Check Review
                    if (Reviews == "Excellent 9+") {
                        if (excellent.checked) { excellent9 = true; } else { excellent9 = false; }
                    }
                    if (Reviews == "Wonderful 8+") {
                        if (wonderful.checked) { wonderful8 = true; } else { wonderful8 = false; }
                    }
                    if (Reviews == "Very Good 7+") {
                        if (verygood.checked) { verygood7 = true; } else { verygood7 = false; }
                    }
                    if (Reviews == "Good 6+") {
                        if (good.checked) { good6 = true; } else { good6 = false; }
                    }
                    if (Reviews == "Fair 5+") {
                        if (fair.checked) { fair5 = true; } else { fair5 = false; }
                    }
                    if (Reviews == "Okay") {
                        if (okk.checked) { nk5 = true; } else { nk5 = false; }
                    }
                    // Check Facility
                    if (Facilities == "Free WiFi") {
                        if (freewifi.checked) { wifi1 = true; } else { wifi1 = false; }
                    }
                    if (Facilities == "parking") {
                        if (parking.checked) { park2 = true; } else { park2 = false; }
                    }
                    if (Facilities == "Airport Shuttle") {
                        if (airportshuttle.checked) { airport3 = true; } else { airport3 = false; }
                    }
                    if (Facilities == "Room Service") {
                        if (roomservice.checked) { Service4 = true; } else { Service4 = false; }
                    }
                    if (Facilities == "Swimming Pool") {
                        if (swimmingpool.checked) { Swimming5 = true; } else { Swimming5 = false; }
                    }
                    if (Facilities == "Fitness center") {
                        if (fitnesscenter.checked) { Fitness6 = true; } else { Fitness6 = false; }
                    }
                    if (Facilities == "Spa") {
                        if (spa.checked) { Spa7 = true; } else { Spa7 = false; }
                    }
                    if (Facilities == "Pet Friendly") {
                        if (petfriendly.checked) { Pet8 = true; } else { Pet8 = false; }
                    }
                    if (Facilities == "Resturant") {
                        if (resturant.checked) { Resturant9 = true; } else { Resturant9 = false; }
                    }
                    if (Facilities == "Front Disk open 24/7") {
                        if (frontdesk.checked) { Front10 = true; } else { Front10 = false; }
                    }
                    if (Facilities == "None-Smoking Rooms") {
                        if (nonsmoking.checked) { NoneSmoking11 = true; } else { NoneSmoking11 = false; }
                    }
                } else { chstar5 = false; }
            }
            if (starNum == 0) {
                if (Unrated.checked) {
                    chUnrated = true;
                    // Check Type
                    if (Type == "Hotels") {
                        if (HTypeHotel.checked) { TypeHotel = true; } else { TypeHotel = false; }
                    }
                    if (Type == "Apartments") {
                        if (HTypeApartments.checked) { TypeApartments = true; } else { TypeApartments = false; }
                    }
                    if (Type == "Chalets") {
                        if (HTypeChalets.checked) { TypeChalets = true; } else { TypeChalets = false; }
                    }
                    if (Type == "Resorts") {
                        if (HTypeResorts.checked) { TypeResorts = true; } else { TypeResorts = false; }
                    }
                    if (Type == "Motels") {
                        if (HTypeMotels.checked) { TypeMotels = true; } else { TypeMotels = false; }
                    }
                    // Check Review
                    if (Reviews == "Excellent 9+") {
                        if (excellent.checked) { excellent9 = true; } else { excellent9 = false; }
                    }
                    if (Reviews == "Wonderful 8+") {
                        if (wonderful.checked) { wonderful8 = true; } else { wonderful8 = false; }
                    }
                    if (Reviews == "Very Good 7+") {
                        if (verygood.checked) { verygood7 = true; } else { verygood7 = false; }
                    }
                    if (Reviews == "Good 6+") {
                        if (good.checked) { good6 = true; } else { good6 = false; }
                    }
                    if (Reviews == "Fair 5+") {
                        if (fair.checked) { fair5 = true; } else { fair5 = false; }
                    }
                    if (Reviews == "Okay") {
                        if (okk.checked) { nk5 = true; } else { nk5 = false; }
                    }
                    // Check Facility
                    if (Facilities == "Free WiFi") {
                        if (freewifi.checked) { wifi1 = true; } else { wifi1 = false; }
                    }
                    if (Facilities == "parking") {
                        if (parking.checked) { park2 = true; } else { park2 = false; }
                    }
                    if (Facilities == "Airport Shuttle") {
                        if (airportshuttle.checked) { airport3 = true; } else { airport3 = false; }
                    }
                    if (Facilities == "Room Service") {
                        if (roomservice.checked) { Service4 = true; } else { Service4 = false; }
                    }
                    if (Facilities == "Swimming Pool") {
                        if (swimmingpool.checked) { Swimming5 = true; } else { Swimming5 = false; }
                    }
                    if (Facilities == "Fitness center") {
                        if (fitnesscenter.checked) { Fitness6 = true; } else { Fitness6 = false; }
                    }
                    if (Facilities == "Spa") {
                        if (spa.checked) { Spa7 = true; } else { Spa7 = false; }
                    }
                    if (Facilities == "Pet Friendly") {
                        if (petfriendly.checked) { Pet8 = true; } else { Pet8 = false; }
                    }
                    if (Facilities == "Resturant") {
                        if (resturant.checked) { Resturant9 = true; } else { Resturant9 = false; }
                    }
                    if (Facilities == "Front Disk open 24/7") {
                        if (frontdesk.checked) { Front10 = true; } else { Front10 = false; }
                    }
                    if (Facilities == "None-Smoking Rooms") {
                        if (nonsmoking.checked) { NoneSmoking11 = true; } else { NoneSmoking11 = false; }
                    }
                } else { chUnrated = false; }
            }
            // final
            if (
                (chstar1 == true
                    || chstar2 == true
                    || chstar3 == true
                    || chstar4 == true
                    || chstar5 == true
                    || chUnrated == true)
                &&
                (TypeHotel == true
                    || TypeApartments == true
                    || TypeChalets == true
                    || TypeResorts == true
                    || TypeMotels == true)
                &&
                (excellent9 == true
                    || wonderful8 == true
                    || verygood7 == true
                    || good6 == true
                    || fair5 == true
                    || nk5 == true)
                &&
                (wifi1 == true
                    || park2 == true
                    || airport3 == true
                    || Service4 == true
                    || Swimming5 == true
                    || Fitness6 == true
                    || Spa7 == true
                    || Pet8 == true
                    || Resturant9 == true
                    || Front10 == true
                    || NoneSmoking11 == true)
            ) {
                hotel[i].style.display = "block";
            }
            else { hotel[i].style.display = "none"; }
        }
    }
    //

}
function MFilters() {
    var StarFilter = false, TypeFilter = false; ReviewFilter = false; FacilityFilter = false;
    var star1 = document.getElementById("Mstar1");
    var star2 = document.getElementById("Mstar2");
    var star3 = document.getElementById("Mstar3");
    var star4 = document.getElementById("Mstar4");
    var star5 = document.getElementById("Mstar5");
    var Unrated = document.getElementById("MUnrated");
    //
    var HTypeHotel = document.getElementById("MHTypeHotel");
    var HTypeApartments = document.getElementById("MHTypeApartments");
    var HTypeChalets = document.getElementById("MHTypeChalets");
    var HTypeResorts = document.getElementById("MHTypeResorts");
    var HTypeMotels = document.getElementById("MHTypeMotels");
    //
    var excellent = document.getElementById("Mexcellent");
    var wonderful = document.getElementById("Mwonderful");
    var verygood = document.getElementById("Mverygood");
    var good = document.getElementById("Mgood");
    var fair = document.getElementById("Mfair");
    var okk = document.getElementById("Mokk");
    //
    var freewifi = document.getElementById("Mfreewifi");
    var parking = document.getElementById("Mparking");
    var airportshuttle = document.getElementById("Mairportshuttle");
    var roomservice = document.getElementById("Mroomservice");
    var swimmingpool = document.getElementById("Mswimmingpool");
    var fitnesscenter = document.getElementById("Mfitnesscenter");
    var spa = document.getElementById("Mspa");
    var petfriendly = document.getElementById("Mpetfriendly");
    var resturant = document.getElementById("Mresturant");
    var frontdesk = document.getElementById("Mfrontdesk");
    var nonsmoking = document.getElementById("Mnonsmoking");
    if (star1.checked == true
        || star2.checked == true
        || star3.checked == true
        || star4.checked == true
        || star5.checked == true
        || Unrated.checked == true) {
        StarFilter = true;
    }
    if (HTypeHotel.checked == true
        || HTypeApartments.checked == true
        || HTypeChalets.checked == true
        || HTypeResorts.checked == true
        || HTypeMotels.checked == true) {
        TypeFilter = true;
    }
    if (excellent.checked == true
        || wonderful.checked == true
        || verygood.checked == true
        || good.checked == true
        || fair.checked == true
        || okk.checked == true) {
        ReviewFilter = true;
    }
    if (freewifi.checked == true
        || parking.checked == true
        || airportshuttle.checked == true
        || roomservice.checked == true
        || swimmingpool.checked == true
        || fitnesscenter.checked == true
        || spa.checked == true
        || petfriendly.checked == true
        || resturant.checked == true
        || frontdesk.checked == true
        || nonsmoking.checked == true) {
        FacilityFilter = true;
    }
    // No Filter
    if (StarFilter == false && TypeFilter == false && ReviewFilter == false && FacilityFilter == false) {
        var hotel = document.getElementsByClassName("HotelContaner");
        for (var i = 0; i < hotel.length; ++i) {
            hotel[i].style.display = "block";
        }
    }
    // StarFilter 
    if (StarFilter == true && TypeFilter == false && ReviewFilter == false && FacilityFilter == false) {
        var hotel = document.getElementsByClassName("HotelContaner");
        for (var i = 0; i < hotel.length; ++i) {
            // Stars
            var HStars = hotel[i].getElementsByClassName("HStars");
            var starNum = HStars[0].value;
            // Check Stars
            var chk = false;
            if (starNum == 1) {
                if (star1.checked) {
                    chk = true;
                }
            }
            if (starNum == 2) {
                if (star2.checked) {
                    hotel[i].style.display = "block";
                }
            }
            if (starNum == 3) {
                if (star3.checked) {
                    chk = true;
                }
            }
            if (starNum == 4) {
                if (star4.checked) {
                    chk = true;
                }
            }
            if (starNum == 5) {
                if (star5.checked) {
                    chk = true;
                }
            }
            if (starNum == 0) {
                if (Unrated.checked) {
                    chk = true;
                }
            }
            if (chk) {
                hotel[i].style.display = "block";
            } else { hotel[i].style.display = "none"; }
        }
    }
    // TypeFilter 
    if (StarFilter == false && TypeFilter == true && ReviewFilter == false && FacilityFilter == false) {
        var hotel = document.getElementsByClassName("HotelContaner");
        for (var i = 0; i < hotel.length; ++i) {
            // Type
            var HType = hotel[i].getElementsByClassName("HType");
            var Type = HType[0].value;
            // Check Stars
            var chk = false;
            if (Type == "Hotels") {
                if (HTypeHotel.checked) { chk = true; }
            }
            if (Type == "Apartments") {
                if (HTypeApartments.checked) { chk = true; }
            }
            if (Type == "Chalets") {
                if (HTypeChalets.checked) { chk = true; }
            }
            if (Type == "Resorts") {
                if (HTypeResorts.checked) { chk = true; }
            }
            if (Type == "Motels") {
                if (HTypeMotels.checked) { chk = true; }
            }
            if (chk) {
                hotel[i].style.display = "block";
            } else { hotel[i].style.display = "none"; }
        }
    }
    // ReviewFilter
    if (StarFilter == false && TypeFilter == false && ReviewFilter == true && FacilityFilter == false) {
        var hotel = document.getElementsByClassName("HotelContaner");
        for (var i = 0; i < hotel.length; ++i) {
            // Review
            var Review = hotel[i].getElementsByClassName("Review");
            var Reviews = Review[0].value;
            // Check Review
            var chk = false;
            if (Reviews == "Excellent 9+") {
                if (excellent.checked) { chk = true; }
            }
            if (Reviews == "Wonderful 8+") {
                if (wonderful.checked) { chk = true; }
            }
            if (Reviews == "Very Good 7+") {
                if (verygood.checked) { chk = true; }
            }
            if (Reviews == "Good 6+") {
                if (good.checked) { chk = true; }
            }
            if (Reviews == "Fair 5+") {
                if (fair.checked) { chk = true; }
            }
            if (Reviews == "Okay") {
                if (okk.checked) { chk = true; }
            }
            if (chk) {
                hotel[i].style.display = "block";
            } else { hotel[i].style.display = "none"; }
        }
    }
    // FacilityFilter
    if (StarFilter == false && TypeFilter == false && ReviewFilter == false && FacilityFilter == true) {
        var hotel = document.getElementsByClassName("HotelContaner");
        for (var i = 0; i < hotel.length; ++i) {
            // Facility
            var Facility = hotel[i].getElementsByClassName("Facility");
            var Facilities = Facility[0].value;
            // Check Facility
            var chk = false;
            if (Facilities == "freewifi") {
                if (freewifi.checked) { chk = true; }
            }
            if (Facilities == "parking") {
                if (parking.checked) { chk = true; }
            }
            if (Facilities == "airportshuttle") {
                if (airportshuttle.checked) { chk = true; }
            }
            if (Facilities == "roomservice") {
                if (roomservice.checked) { chk = true; }
            }
            if (Facilities == "swimmingpool") {
                if (swimmingpool.checked) { chk = true; }
            }
            if (Facilities == "fitnesscenter") {
                if (fitnesscenter.checked) { chk = true; }
            }
            if (Facilities == "spa") {
                if (spa.checked) { chk = true; }
            }
            if (Facilities == "petfriendly") {
                if (petfriendly.checked) { chk = true; }
            }
            if (Facilities == "resturant") {
                if (resturant.checked) { chk = true; }
            }
            if (Facilities == "frontdesk") {
                if (frontdesk.checked) { chk = true; }
            }
            if (Facilities == "nonsmoking") {
                if (nonsmoking.checked) { chk = true; }
            }
            if (chk) {
                hotel[i].style.display = "block";
            } else { hotel[i].style.display = "none"; }
        }
    }
    //
    if (StarFilter == true && TypeFilter == true && ReviewFilter == true && FacilityFilter == true) {
        var hotel = document.getElementsByClassName("HotelContaner");
        for (var i = 0; i < hotel.length; ++i) {
            var chstar1 = false, chstar2 = false, chstar3 = false, chstar4 = false, chstar5 = false, chUnrated = false;
            var TypeHotel = false, TypeApartments = false, TypeChalets = false, TypeResorts = false, TypeMotels = false;
            var excellent9 = false, wonderful8 = false, verygood7 = false, good6 = false, fair5 = false, nk5 = false;
            var wifi1 = false, park2 = false, airport3 = false, Service4 = false, Swimming5 = false, Fitness6 = false,
                Spa7 = false, Pet8 = false, Resturant9 = false, Front10 = false, NoneSmoking11 = false;
            // Stars
            var HStars = hotel[i].getElementsByClassName("HStars");
            var starNum = HStars[0].value;
            // Type
            var HType = hotel[i].getElementsByClassName("HType");
            var Type = HType[0].value;
            // Review
            var Review = hotel[i].getElementsByClassName("Review");
            var Reviews = Review[0].value;
            // Facility
            var Facility = hotel[i].getElementsByClassName("Facility");
            var Facilities = Facility[0].value;
            // Check Stars
            if (starNum == 1) {
                if (star1.checked) {
                    chstar1 = true;
                    // Check Type
                    if (Type == "Hotels") {
                        if (HTypeHotel.checked) { TypeHotel = true; } else { TypeHotel = false; }
                    }
                    if (Type == "Apartments") {
                        if (HTypeApartments.checked) { TypeApartments = true; } else { TypeApartments = false; }
                    }
                    if (Type == "Chalets") {
                        if (HTypeChalets.checked) { TypeChalets = true; } else { TypeChalets = false; }
                    }
                    if (Type == "Resorts") {
                        if (HTypeResorts.checked) { TypeResorts = true; } else { TypeResorts = false; }
                    }
                    if (Type == "Motels") {
                        if (HTypeMotels.checked) { TypeMotels = true; } else { TypeMotels = false; }
                    }
                    // Check Review
                    if (Reviews == "Excellent 9+") {
                        if (excellent.checked) { excellent9 = true; } else { excellent9 = false; }
                    }
                    if (Reviews == "Wonderful 8+") {
                        if (wonderful.checked) { wonderful8 = true; } else { wonderful8 = false; }
                    }
                    if (Reviews == "Very Good 7+") {
                        if (verygood.checked) { verygood7 = true; } else { verygood7 = false; }
                    }
                    if (Reviews == "Good 6+") {
                        if (good.checked) { good6 = true; } else { good6 = false; }
                    }
                    if (Reviews == "Fair 5+") {
                        if (fair.checked) { fair5 = true; } else { fair5 = false; }
                    }
                    if (Reviews == "Okay") {
                        if (okk.checked) { nk5 = true; } else { nk5 = false; }
                    }
                    // Check Facility
                    if (Facilities == "Free WiFi") {
                        if (freewifi.checked) { wifi1 = true; } else { wifi1 = false; }
                    }
                    if (Facilities == "parking") {
                        if (parking.checked) { park2 = true; } else { park2 = false; }
                    }
                    if (Facilities == "Airport Shuttle") {
                        if (airportshuttle.checked) { airport3 = true; } else { airport3 = false; }
                    }
                    if (Facilities == "Room Service") {
                        if (roomservice.checked) { Service4 = true; } else { Service4 = false; }
                    }
                    if (Facilities == "Swimming Pool") {
                        if (swimmingpool.checked) { Swimming5 = true; } else { Swimming5 = false; }
                    }
                    if (Facilities == "Fitness center") {
                        if (fitnesscenter.checked) { Fitness6 = true; } else { Fitness6 = false; }
                    }
                    if (Facilities == "Spa") {
                        if (spa.checked) { Spa7 = true; } else { Spa7 = false; }
                    }
                    if (Facilities == "Pet Friendly") {
                        if (petfriendly.checked) { Pet8 = true; } else { Pet8 = false; }
                    }
                    if (Facilities == "Resturant") {
                        if (resturant.checked) { Resturant9 = true; } else { Resturant9 = false; }
                    }
                    if (Facilities == "Front Disk open 24/7") {
                        if (frontdesk.checked) { Front10 = true; } else { Front10 = false; }
                    }
                    if (Facilities == "None-Smoking Rooms") {
                        if (nonsmoking.checked) { NoneSmoking11 = true; } else { NoneSmoking11 = false; }
                    }
                }
                else { chstar1 = false; }
            }
            if (starNum == 2) {
                if (star2.checked) {
                    chstar2 = true;
                    // Check Type
                    if (Type == "Hotels") {
                        if (HTypeHotel.checked) { TypeHotel = true; } else { TypeHotel = false; }
                    }
                    if (Type == "Apartments") {
                        if (HTypeApartments.checked) { TypeApartments = true; } else { TypeApartments = false; }
                    }
                    if (Type == "Chalets") {
                        if (HTypeChalets.checked) { TypeChalets = true; } else { TypeChalets = false; }
                    }
                    if (Type == "Resorts") {
                        if (HTypeResorts.checked) { TypeResorts = true; } else { TypeResorts = false; }
                    }
                    if (Type == "Motels") {
                        if (HTypeMotels.checked) { TypeMotels = true; } else { TypeMotels = false; }
                    }
                    // Check Review
                    if (Reviews == "Excellent 9+") {
                        if (excellent.checked) { excellent9 = true; } else { excellent9 = false; }
                    }
                    if (Reviews == "Wonderful 8+") {
                        if (wonderful.checked) { wonderful8 = true; } else { wonderful8 = false; }
                    }
                    if (Reviews == "Very Good 7+") {
                        if (verygood.checked) { verygood7 = true; } else { verygood7 = false; }
                    }
                    if (Reviews == "Good 6+") {
                        if (good.checked) { good6 = true; } else { good6 = false; }
                    }
                    if (Reviews == "Fair 5+") {
                        if (fair.checked) { fair5 = true; } else { fair5 = false; }
                    }
                    if (Reviews == "Okay") {
                        if (okk.checked) { nk5 = true; } else { nk5 = false; }
                    }
                    // Check Facility
                    if (Facilities == "Free WiFi") {
                        if (freewifi.checked) { wifi1 = true; } else { wifi1 = false; }
                    }
                    if (Facilities == "parking") {
                        if (parking.checked) { park2 = true; } else { park2 = false; }
                    }
                    if (Facilities == "Airport Shuttle") {
                        if (airportshuttle.checked) { airport3 = true; } else { airport3 = false; }
                    }
                    if (Facilities == "Room Service") {
                        if (roomservice.checked) { Service4 = true; } else { Service4 = false; }
                    }
                    if (Facilities == "Swimming Pool") {
                        if (swimmingpool.checked) { Swimming5 = true; } else { Swimming5 = false; }
                    }
                    if (Facilities == "Fitness center") {
                        if (fitnesscenter.checked) { Fitness6 = true; } else { Fitness6 = false; }
                    }
                    if (Facilities == "Spa") {
                        if (spa.checked) { Spa7 = true; } else { Spa7 = false; }
                    }
                    if (Facilities == "Pet Friendly") {
                        if (petfriendly.checked) { Pet8 = true; } else { Pet8 = false; }
                    }
                    if (Facilities == "Resturant") {
                        if (resturant.checked) { Resturant9 = true; } else { Resturant9 = false; }
                    }
                    if (Facilities == "Front Disk open 24/7") {
                        if (frontdesk.checked) { Front10 = true; } else { Front10 = false; }
                    }
                    if (Facilities == "None-Smoking Rooms") {
                        if (nonsmoking.checked) { NoneSmoking11 = true; } else { NoneSmoking11 = false; }
                    }
                } else { chstar2 = false; }
            }
            if (starNum == 3) {
                if (star3.checked) {
                    chstar3 = true;
                    // Check Type
                    if (Type == "Hotels") {
                        if (HTypeHotel.checked) { TypeHotel = true; } else { TypeHotel = false; }
                    }
                    if (Type == "Apartments") {
                        if (HTypeApartments.checked) { TypeApartments = true; } else { TypeApartments = false; }
                    }
                    if (Type == "Chalets") {
                        if (HTypeChalets.checked) { TypeChalets = true; } else { TypeChalets = false; }
                    }
                    if (Type == "Resorts") {
                        if (HTypeResorts.checked) { TypeResorts = true; } else { TypeResorts = false; }
                    }
                    if (Type == "Motels") {
                        if (HTypeMotels.checked) { TypeMotels = true; } else { TypeMotels = false; }
                    }
                    // Check Review
                    if (Reviews == "Excellent 9+") {
                        if (excellent.checked) { excellent9 = true; } else { excellent9 = false; }
                    }
                    if (Reviews == "Wonderful 8+") {
                        if (wonderful.checked) { wonderful8 = true; } else { wonderful8 = false; }
                    }
                    if (Reviews == "Very Good 7+") {
                        if (verygood.checked) { verygood7 = true; } else { verygood7 = false; }
                    }
                    if (Reviews == "Good 6+") {
                        if (good.checked) { good6 = true; } else { good6 = false; }
                    }
                    if (Reviews == "Fair 5+") {
                        if (fair.checked) { fair5 = true; } else { fair5 = false; }
                    }
                    if (Reviews == "Okay") {
                        if (okk.checked) { nk5 = true; } else { nk5 = false; }
                    }
                    // Check Facility
                    if (Facilities == "Free WiFi") {
                        if (freewifi.checked) { wifi1 = true; } else { wifi1 = false; }
                    }
                    if (Facilities == "parking") {
                        if (parking.checked) { park2 = true; } else { park2 = false; }
                    }
                    if (Facilities == "Airport Shuttle") {
                        if (airportshuttle.checked) { airport3 = true; } else { airport3 = false; }
                    }
                    if (Facilities == "Room Service") {
                        if (roomservice.checked) { Service4 = true; } else { Service4 = false; }
                    }
                    if (Facilities == "Swimming Pool") {
                        if (swimmingpool.checked) { Swimming5 = true; } else { Swimming5 = false; }
                    }
                    if (Facilities == "Fitness center") {
                        if (fitnesscenter.checked) { Fitness6 = true; } else { Fitness6 = false; }
                    }
                    if (Facilities == "Spa") {
                        if (spa.checked) { Spa7 = true; } else { Spa7 = false; }
                    }
                    if (Facilities == "Pet Friendly") {
                        if (petfriendly.checked) { Pet8 = true; } else { Pet8 = false; }
                    }
                    if (Facilities == "Resturant") {
                        if (resturant.checked) { Resturant9 = true; } else { Resturant9 = false; }
                    }
                    if (Facilities == "Front Disk open 24/7") {
                        if (frontdesk.checked) { Front10 = true; } else { Front10 = false; }
                    }
                    if (Facilities == "None-Smoking Rooms") {
                        if (nonsmoking.checked) { NoneSmoking11 = true; } else { NoneSmoking11 = false; }
                    }
                } else { chstar3 = false; }
            }
            if (starNum == 4) {
                if (star4.checked) {
                    chstar4 = true;
                    // Check Type
                    if (Type == "Hotels") {
                        if (HTypeHotel.checked) { TypeHotel = true; } else { TypeHotel = false; }
                    }
                    if (Type == "Apartments") {
                        if (HTypeApartments.checked) { TypeApartments = true; } else { TypeApartments = false; }
                    }
                    if (Type == "Chalets") {
                        if (HTypeChalets.checked) { TypeChalets = true; } else { TypeChalets = false; }
                    }
                    if (Type == "Resorts") {
                        if (HTypeResorts.checked) { TypeResorts = true; } else { TypeResorts = false; }
                    }
                    if (Type == "Motels") {
                        if (HTypeMotels.checked) { TypeMotels = true; } else { TypeMotels = false; }
                    }
                    // Check Review
                    if (Reviews == "Excellent 9+") {
                        if (excellent.checked) { excellent9 = true; } else { excellent9 = false; }
                    }
                    if (Reviews == "Wonderful 8+") {
                        if (wonderful.checked) { wonderful8 = true; } else { wonderful8 = false; }
                    }
                    if (Reviews == "Very Good 7+") {
                        if (verygood.checked) { verygood7 = true; } else { verygood7 = false; }
                    }
                    if (Reviews == "Good 6+") {
                        if (good.checked) { good6 = true; } else { good6 = false; }
                    }
                    if (Reviews == "Fair 5+") {
                        if (fair.checked) { fair5 = true; } else { fair5 = false; }
                    }
                    if (Reviews == "Okay") {
                        if (okk.checked) { nk5 = true; } else { nk5 = false; }
                    }
                    // Check Facility
                    if (Facilities == "Free WiFi") {
                        if (freewifi.checked) { wifi1 = true; } else { wifi1 = false; }
                    }
                    if (Facilities == "parking") {
                        if (parking.checked) { park2 = true; } else { park2 = false; }
                    }
                    if (Facilities == "Airport Shuttle") {
                        if (airportshuttle.checked) { airport3 = true; } else { airport3 = false; }
                    }
                    if (Facilities == "Room Service") {
                        if (roomservice.checked) { Service4 = true; } else { Service4 = false; }
                    }
                    if (Facilities == "Swimming Pool") {
                        if (swimmingpool.checked) { Swimming5 = true; } else { Swimming5 = false; }
                    }
                    if (Facilities == "Fitness center") {
                        if (fitnesscenter.checked) { Fitness6 = true; } else { Fitness6 = false; }
                    }
                    if (Facilities == "Spa") {
                        if (spa.checked) { Spa7 = true; } else { Spa7 = false; }
                    }
                    if (Facilities == "Pet Friendly") {
                        if (petfriendly.checked) { Pet8 = true; } else { Pet8 = false; }
                    }
                    if (Facilities == "Resturant") {
                        if (resturant.checked) { Resturant9 = true; } else { Resturant9 = false; }
                    }
                    if (Facilities == "Front Disk open 24/7") {
                        if (frontdesk.checked) { Front10 = true; } else { Front10 = false; }
                    }
                    if (Facilities == "None-Smoking Rooms") {
                        if (nonsmoking.checked) { NoneSmoking11 = true; } else { NoneSmoking11 = false; }
                    }
                } else { chstar4 = false; }
            }
            if (starNum == 5) {
                if (star5.checked) {
                    chstar5 = true;
                    // Check Type
                    if (Type == "Hotels") {
                        if (HTypeHotel.checked) { TypeHotel = true; } else { TypeHotel = false; }
                    }
                    if (Type == "Apartments") {
                        if (HTypeApartments.checked) { TypeApartments = true; } else { TypeApartments = false; }
                    }
                    if (Type == "Chalets") {
                        if (HTypeChalets.checked) { TypeChalets = true; } else { TypeChalets = false; }
                    }
                    if (Type == "Resorts") {
                        if (HTypeResorts.checked) { TypeResorts = true; } else { TypeResorts = false; }
                    }
                    if (Type == "Motels") {
                        if (HTypeMotels.checked) { TypeMotels = true; } else { TypeMotels = false; }
                    }
                    // Check Review
                    if (Reviews == "Excellent 9+") {
                        if (excellent.checked) { excellent9 = true; } else { excellent9 = false; }
                    }
                    if (Reviews == "Wonderful 8+") {
                        if (wonderful.checked) { wonderful8 = true; } else { wonderful8 = false; }
                    }
                    if (Reviews == "Very Good 7+") {
                        if (verygood.checked) { verygood7 = true; } else { verygood7 = false; }
                    }
                    if (Reviews == "Good 6+") {
                        if (good.checked) { good6 = true; } else { good6 = false; }
                    }
                    if (Reviews == "Fair 5+") {
                        if (fair.checked) { fair5 = true; } else { fair5 = false; }
                    }
                    if (Reviews == "Okay") {
                        if (okk.checked) { nk5 = true; } else { nk5 = false; }
                    }
                    // Check Facility
                    if (Facilities == "Free WiFi") {
                        if (freewifi.checked) { wifi1 = true; } else { wifi1 = false; }
                    }
                    if (Facilities == "parking") {
                        if (parking.checked) { park2 = true; } else { park2 = false; }
                    }
                    if (Facilities == "Airport Shuttle") {
                        if (airportshuttle.checked) { airport3 = true; } else { airport3 = false; }
                    }
                    if (Facilities == "Room Service") {
                        if (roomservice.checked) { Service4 = true; } else { Service4 = false; }
                    }
                    if (Facilities == "Swimming Pool") {
                        if (swimmingpool.checked) { Swimming5 = true; } else { Swimming5 = false; }
                    }
                    if (Facilities == "Fitness center") {
                        if (fitnesscenter.checked) { Fitness6 = true; } else { Fitness6 = false; }
                    }
                    if (Facilities == "Spa") {
                        if (spa.checked) { Spa7 = true; } else { Spa7 = false; }
                    }
                    if (Facilities == "Pet Friendly") {
                        if (petfriendly.checked) { Pet8 = true; } else { Pet8 = false; }
                    }
                    if (Facilities == "Resturant") {
                        if (resturant.checked) { Resturant9 = true; } else { Resturant9 = false; }
                    }
                    if (Facilities == "Front Disk open 24/7") {
                        if (frontdesk.checked) { Front10 = true; } else { Front10 = false; }
                    }
                    if (Facilities == "None-Smoking Rooms") {
                        if (nonsmoking.checked) { NoneSmoking11 = true; } else { NoneSmoking11 = false; }
                    }
                } else { chstar5 = false; }
            }
            if (starNum == 0) {
                if (Unrated.checked) {
                    chUnrated = true;
                    // Check Type
                    if (Type == "Hotels") {
                        if (HTypeHotel.checked) { TypeHotel = true; } else { TypeHotel = false; }
                    }
                    if (Type == "Apartments") {
                        if (HTypeApartments.checked) { TypeApartments = true; } else { TypeApartments = false; }
                    }
                    if (Type == "Chalets") {
                        if (HTypeChalets.checked) { TypeChalets = true; } else { TypeChalets = false; }
                    }
                    if (Type == "Resorts") {
                        if (HTypeResorts.checked) { TypeResorts = true; } else { TypeResorts = false; }
                    }
                    if (Type == "Motels") {
                        if (HTypeMotels.checked) { TypeMotels = true; } else { TypeMotels = false; }
                    }
                    // Check Review
                    if (Reviews == "Excellent 9+") {
                        if (excellent.checked) { excellent9 = true; } else { excellent9 = false; }
                    }
                    if (Reviews == "Wonderful 8+") {
                        if (wonderful.checked) { wonderful8 = true; } else { wonderful8 = false; }
                    }
                    if (Reviews == "Very Good 7+") {
                        if (verygood.checked) { verygood7 = true; } else { verygood7 = false; }
                    }
                    if (Reviews == "Good 6+") {
                        if (good.checked) { good6 = true; } else { good6 = false; }
                    }
                    if (Reviews == "Fair 5+") {
                        if (fair.checked) { fair5 = true; } else { fair5 = false; }
                    }
                    if (Reviews == "Okay") {
                        if (okk.checked) { nk5 = true; } else { nk5 = false; }
                    }
                    // Check Facility
                    if (Facilities == "Free WiFi") {
                        if (freewifi.checked) { wifi1 = true; } else { wifi1 = false; }
                    }
                    if (Facilities == "parking") {
                        if (parking.checked) { park2 = true; } else { park2 = false; }
                    }
                    if (Facilities == "Airport Shuttle") {
                        if (airportshuttle.checked) { airport3 = true; } else { airport3 = false; }
                    }
                    if (Facilities == "Room Service") {
                        if (roomservice.checked) { Service4 = true; } else { Service4 = false; }
                    }
                    if (Facilities == "Swimming Pool") {
                        if (swimmingpool.checked) { Swimming5 = true; } else { Swimming5 = false; }
                    }
                    if (Facilities == "Fitness center") {
                        if (fitnesscenter.checked) { Fitness6 = true; } else { Fitness6 = false; }
                    }
                    if (Facilities == "Spa") {
                        if (spa.checked) { Spa7 = true; } else { Spa7 = false; }
                    }
                    if (Facilities == "Pet Friendly") {
                        if (petfriendly.checked) { Pet8 = true; } else { Pet8 = false; }
                    }
                    if (Facilities == "Resturant") {
                        if (resturant.checked) { Resturant9 = true; } else { Resturant9 = false; }
                    }
                    if (Facilities == "Front Disk open 24/7") {
                        if (frontdesk.checked) { Front10 = true; } else { Front10 = false; }
                    }
                    if (Facilities == "None-Smoking Rooms") {
                        if (nonsmoking.checked) { NoneSmoking11 = true; } else { NoneSmoking11 = false; }
                    }
                } else { chUnrated = false; }
            }
            // final
            if (
                (chstar1 == true
                    || chstar2 == true
                    || chstar3 == true
                    || chstar4 == true
                    || chstar5 == true
                    || chUnrated == true)
                &&
                (TypeHotel == true
                    || TypeApartments == true
                    || TypeChalets == true
                    || TypeResorts == true
                    || TypeMotels == true)
                &&
                (excellent9 == true
                    || wonderful8 == true
                    || verygood7 == true
                    || good6 == true
                    || fair5 == true
                    || nk5 == true)
                &&
                (wifi1 == true
                    || park2 == true
                    || airport3 == true
                    || Service4 == true
                    || Swimming5 == true
                    || Fitness6 == true
                    || Spa7 == true
                    || Pet8 == true
                    || Resturant9 == true
                    || Front10 == true
                    || NoneSmoking11 == true)
            ) {
                hotel[i].style.display = "block";
            }
            else { hotel[i].style.display = "none"; }
        }
    }

}
function MSort() {
    var hotel = document.getElementsByClassName("HotelContaner");
    //
    var Mhighestprice = document.getElementById("Mhighestprice");
    var MLowestprice = document.getElementById("MLowestprice");
    var MTopRated = document.getElementById("MTopRated");
    var MFreeCancellation = document.getElementById("MFreeCancellation");
    var MBreakfastincluded = document.getElementById("MBreakfastincluded");
    //
    if (Mhighestprice.checked == true || MLowestprice.checked == true
        || MTopRated.checked == true || MFreeCancellation.checked == true
        || MBreakfastincluded.checked == true) {
        for (var i = 0; i < hotel.length; ++i) {

            // highes tprice 
            if (Mhighestprice.checked) {

            }
            // Lowes tprice
            if (MLowestprice.checked) {

            }
            // Top Rated
            if (MTopRated.checked) {

            }
            // Free Cancel
            if (MFreeCancellation.checked) {
                var Cancel = hotel[i].getElementsByClassName("CancelStatement");
                if (Cancel[0].innerText == "Free Cancellation") {
                    hotel[i].style.display = "block";
                } else { hotel[i].style.display = "none"; }
            }
            // Breakfast included
            if (MBreakfastincluded.checked) {
                var meals = hotel[i].getElementsByClassName("PopapText");
                if (meals[0].innerText == "Breakfast , included") {
                    hotel[i].style.display = "block";
                } else { hotel[i].style.display = "none"; }
            }

        }
    }
    else { ClearMSort(); }
}
function ClearMFilters() {
    var hotel = document.getElementsByClassName("HotelContaner");
    for (var i = 0; i < hotel.length; ++i) {
        hotel[i].style.display = "block";
    }
}
function ClearMSort() {
    var hotel = document.getElementsByClassName("HotelContaner");
    for (var i = 0; i < hotel.length; ++i) {
        hotel[i].style.display = "block";
    }
}
function MSearch() {
    document.getElementById('MSerachDiv').style.display = 'none';
    document.getElementById('MResultDiv').style.display = 'block';
}
function ShowRoomPanal() {
    if (document.getElementById("rooms").style.display == "none") {
        document.getElementById("rooms").style.display = "block";
    } else { document.getElementById("rooms").style.display = "none"; }
}

//Search btn (M)
function BtnShowMSearch() {
    var _MSerachDiv = document.getElementById('MSerachDiv');
    if (_MSerachDiv.style.display == "none") {
        _MSerachDiv.style.display = 'block';
    } else {
        _MSerachDiv.style.display = 'none';
    }
}

// Bind Search
function BindSearch() {
    const mediaQuery = window.matchMedia('(max-width: 980px)')
    if (mediaQuery.matches) {
        var _CheckIn = document.getElementById('txtMCheckIn').value;
        var _CheckOut = document.getElementById('txtMCheckOut').value;

    } else {
        var _CheckIn = document.getElementById('txtDCheckIn').value;
        var _CheckOut = document.getElementById('txtDCheckOut').value;
    }
    // Nights
    function parseDate(str) {
        var mdy = str.split('/');
        return new Date(mdy[2], mdy[0] - 1, mdy[1]);
    }
    function datediff(first, second) {
        return Math.round((second - first) / (1000 * 60 * 60 * 24));
    }
    var days = datediff(parseDate(_CheckIn), parseDate(_CheckOut));
    var txtNights = document.getElementsByClassName("Nights");
    var R2ID = 0;
    for (var i = 0; txtNights[i]; ++i) {
        if (isNaN(days)) {
            txtNights[i].innerText = 1 + " Night";
        }
        if (days == 0) {
            txtNights[i].innerText = days + " Night";
        }
        if (days == 1) {
            txtNights[i].innerText = days + " Night";
        }
        if (days > 1) {
            txtNights[i].innerText = days + " Nights";
        }
        var HAvail = document.getElementsByClassName("HAvailClass");
        var starts = document.getElementsByClassName("startsClass");
        var gustnumber = document.getElementsByClassName("gustnumberClass");
        var Repater1Count = document.getElementById("Repeater1Count");
        if (parseInt(Repater1Count.value) >= i) {
            // starts
            if (starts[i].innerText.trim() == "1") {
                document.getElementById("Repeater1_Star1_" + i).className = " fa fa-star checked ";
            }
            if (starts[i].innerText.trim() == "2") {
                document.getElementById("Repeater1_Star1_" + i).className = " fa fa-star checked ";
                document.getElementById("Repeater1_Star2_" + i).className = " fa fa-star checked ";
            }
            if (starts[i].innerText.trim() == "3") {
                document.getElementById("Repeater1_Star1_" + i).className = " fa fa-star checked ";
                document.getElementById("Repeater1_Star2_" + i).className = " fa fa-star checked ";
                document.getElementById("Repeater1_Star3_" + i).className = " fa fa-star checked ";
            }
            if (starts[i].innerText.trim() == "4") {
                document.getElementById("Repeater1_Star1_" + i).className = " fa fa-star checked ";
                document.getElementById("Repeater1_Star2_" + i).className = " fa fa-star checked ";
                document.getElementById("Repeater1_Star3_" + i).className = " fa fa-star checked ";
                document.getElementById("Repeater1_Star4_" + i).className = " fa fa-star checked ";
            }
            if (starts[i].innerText.trim() == "5") {
                document.getElementById("Repeater1_Star1_" + i).className = " fa fa-star checked ";
                document.getElementById("Repeater1_Star2_" + i).className = " fa fa-star checked ";
                document.getElementById("Repeater1_Star3_" + i).className = " fa fa-star checked ";
                document.getElementById("Repeater1_Star4_" + i).className = " fa fa-star checked ";
                document.getElementById("Repeater1_Star5_" + i).className = " fa fa-star checked ";
            }
            if (starts[i].innerText.trim() == "6") {
                document.getElementById("Repeater1_Star1_" + i).className = " fa fa-star checked ";
                document.getElementById("Repeater1_Star2_" + i).className = " fa fa-star checked ";
                document.getElementById("Repeater1_Star3_" + i).className = " fa fa-star checked ";
                document.getElementById("Repeater1_Star4_" + i).className = " fa fa-star checked ";
                document.getElementById("Repeater1_Star5_" + i).className = " fa fa-star checked ";
                document.getElementById("Repeater1_Star6_" + i).className = " fa fa-star checked ";
            }
            if (starts[i].innerText.trim() == "7") {
                document.getElementById("Repeater1_Star1_" + i).className = " fa fa-star checked ";
                document.getElementById("Repeater1_Star2_" + i).className = " fa fa-star checked ";
                document.getElementById("Repeater1_Star3_" + i).className = " fa fa-star checked ";
                document.getElementById("Repeater1_Star4_" + i).className = " fa fa-star checked ";
                document.getElementById("Repeater1_Star5_" + i).className = " fa fa-star checked ";
                document.getElementById("Repeater1_Star6_" + i).className = " fa fa-star checked ";
                document.getElementById("Repeater1_Star7_" + i).className = " fa fa-star checked ";
            }
            // gustnumber
            if (gustnumber[i].innerText.trim() == "1") {
                document.getElementById("Repeater1_gustnumber1_" + i).className = " fa fa-user ";
            }
            if (gustnumber[i].innerText.trim() == "2") {
                document.getElementById("Repeater1_gustnumber1_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber2_" + i).className = " fa fa-user ";
            }
            if (gustnumber[i].innerText.trim() == "3") {
                document.getElementById("Repeater1_gustnumber1_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber2_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber3_" + i).className = " fa fa-user ";
            }
            if (gustnumber[i].innerText.trim() == "4") {
                document.getElementById("Repeater1_gustnumber1_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber2_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber3_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber4_" + i).className = " fa fa-user ";
            }
            if (gustnumber[i].innerText.trim() == "5") {
                document.getElementById("Repeater1_gustnumber1_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber2_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber3_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber4_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber5_" + i).className = " fa fa-user ";
            }
            if (gustnumber[i].innerText.trim() == "6") {
                document.getElementById("Repeater1_gustnumber1_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber2_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber3_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber4_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber5_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber6_" + i).className = " fa fa-user ";
            }
            if (gustnumber[i].innerText.trim() == "7") {
                document.getElementById("Repeater1_gustnumber1_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber2_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber3_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber4_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber5_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber6_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber7_" + i).className = " fa fa-user ";
            }
            if (gustnumber[i].innerText.trim() == "8") {
                document.getElementById("Repeater1_gustnumber1_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber2_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber3_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber4_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber5_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber6_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber7_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber8_" + i).className = " fa fa-user ";
            }
            if (gustnumber[i].innerText.trim() == "9") {
                document.getElementById("Repeater1_gustnumber1_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber2_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber3_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber4_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber5_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber6_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber7_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber8_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber9_" + i).className = " fa fa-user ";
            }
            if (gustnumber[i].innerText.trim() == "10") {
                document.getElementById("Repeater1_gustnumber1_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber2_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber3_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber4_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber5_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber6_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber7_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber8_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber9_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber10_" + i).className = " fa fa-user ";
            }
            if (gustnumber[i].innerText.trim() == "11") {
                document.getElementById("Repeater1_gustnumber1_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber2_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber3_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber4_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber5_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber6_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber7_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber8_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber9_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber10_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber11_" + i).className = " fa fa-user ";
            }
            if (gustnumber[i].innerText.trim() == "12") {
                document.getElementById("Repeater1_gustnumber1_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber2_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber3_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber4_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber5_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber6_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber7_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber8_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber9_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber10_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber11_" + i).className = " fa fa-user ";
                document.getElementById("Repeater1_gustnumber12_" + i).className = " fa fa-user ";
            }
            if (parseInt(HAvail[i].innerText) > 0) {
                // Price
                var NormalPrice = document.getElementById("Repeater1_txtDailyRoomPrice_" + i);
                var HotelDiscountPercent = document.getElementById("Repeater1_HotelDiscountPercent_" + i);
                var PriceAfterDis = document.getElementById("Repeater1_txtRoomPriceAfterDis2_" + i);
                var Currentcy = document.getElementById("Repeater1_Currentcy_" + i);
                //
                if (NormalPrice.innerText == "" && NormalPrice.innerText == "0") {
                    txtSoled.Text = "Price Out Range";
                    document.getElementById("Repeater1_txtDailyRoomPrice_" + i).innerText = "Price Out Range";
                    document.getElementById("Repeater1_HotelDiscountPercent_" + i).style.display = "none";
                    document.getElementById("Repeater1_txtRoomPriceAfterDis2_" + i).style.display = "none";
                }
                else {
                    if (HotelDiscountPercent.innerText != "" && HotelDiscountPercent.innerText != "0.00") {
                        NormalPrice.innerText = NormalPrice.innerText;
                        var percent = parseFloat(HotelDiscountPercent.innerText);
                        var Discount = (parseFloat(NormalPrice.innerText) * percent) / 100;
                        PriceAfterDis.innerText = (parseFloat(NormalPrice.innerText) - Discount).toFixed(2);
                        PriceAfterDis.style.display = "inline-block";
                    }
                    else {
                        PriceAfterDis.innerText = NormalPrice.innerText;
                        PriceAfterDis.style.display = "block";
                        NormalPrice.style.display = "none";
                    }
                    Currentcy.InnerText = "SAR";
                    Currentcy.style.display = "inline-block";
                }
                // RatePlan
                var Priceplan = "";
                var txtMeals = document.getElementsByClassName("txtMeals");
                var txtBreakfast = document.getElementById("Repeater1_txtBreakfast_" + i);
                var txtLunch = document.getElementById("Repeater1_txtLunch_" + i);
                var txtDinner = document.getElementById("Repeater1_txtDinner_" + i);
                var txtAllInclusive = document.getElementById("Repeater1_txtAllInclusive_" + i);
                var PopapBox = document.getElementById("Repeater1_PopapBox_" + i);
                var PopapText = document.getElementsByClassName("PopapText");
                //
                if (txtBreakfast.innerText.trim() == "1") {
                    Priceplan += " Breakfast ,";
                }
                if (txtLunch.innerText.trim() == "1") {
                    Priceplan += " Lunch ,";
                }
                if (txtDinner.innerText.trim() == "1") {
                    Priceplan += " Dinner ,";
                }
                if (txtAllInclusive.innerText.trim() == "1") {
                    Priceplan += " All inclusive ,";
                }
                else { Priceplan += " included"; }
                if (txtBreakfast.innerText.trim() != "1" && txtLunch.innerText.trim() != "1" && txtDinner.innerText.trim() != "1" && txtAllInclusive.innerText.trim() != "1") {
                    Priceplan = "No Meals";
                }
                if (Priceplan != "No Meals") {
                    PopapBox.style.display = "block";
                    PopapText[i].innerText = Priceplan;
                    txtMeals[i].innerText = Priceplan;
                }
            }
            else {
                document.getElementById("Repeater1_txtSoled_" + i).innerText = "Sold Out";
                document.getElementById("Repeater1_txtSoled_" + i).style.display = "block";
                //document.getElementById("Repeater1_BtnReplay_" + i).style.display = "none";
                document.getElementById("Repeater1_BtnReplay_" + i).value = "View";
                document.getElementById("Repeater1_txtDailyRoomPrice_" + i).style.display = "none";
                document.getElementById("Repeater1_HotelDiscountPercent_" + i).style.display = "none";
                document.getElementById("Repeater1_txtRoomPriceAfterDis2_" + i).style.display = "none";
                document.getElementById("Repeater1_Currentcy_" + i).style.display = "none";
                //document.getElementById("Repeater1_divrep_" + i).style.backgroundColor = "lightsteelblue";
            }
        }
        else {
            // starts
            if (starts[i].innerText.trim() == "1") {
                document.getElementById("Repeater2_Star1_" + R2ID).className = " fa fa-star checked ";
            }
            if (starts[i].innerText.trim() == "2") {
                document.getElementById("Repeater2_Star1_" + R2ID).className = " fa fa-star checked ";
                document.getElementById("Repeater2_Star2_" + R2ID).className = " fa fa-star checked ";
            }
            if (starts[i].innerText.trim() == "3") {
                document.getElementById("Repeater2_Star1_" + R2ID).className = " fa fa-star checked ";
                document.getElementById("Repeater2_Star2_" + R2ID).className = " fa fa-star checked ";
                document.getElementById("Repeater2_Star3_" + R2ID).className = " fa fa-star checked ";
            }
            if (starts[i].innerText.trim() == "4") {
                document.getElementById("Repeater2_Star1_" + R2ID).className = " fa fa-star checked ";
                document.getElementById("Repeater2_Star2_" + R2ID).className = " fa fa-star checked ";
                document.getElementById("Repeater2_Star3_" + R2ID).className = " fa fa-star checked ";
                document.getElementById("Repeater2_Star4_" + R2ID).className = " fa fa-star checked ";
            }
            if (starts[i].innerText.trim() == "5") {
                document.getElementById("Repeater2_Star1_" + R2ID).className = " fa fa-star checked ";
                document.getElementById("Repeater2_Star2_" + R2ID).className = " fa fa-star checked ";
                document.getElementById("Repeater2_Star3_" + R2ID).className = " fa fa-star checked ";
                document.getElementById("Repeater2_Star4_" + R2ID).className = " fa fa-star checked ";
                document.getElementById("Repeater2_Star5_" + R2ID).className = " fa fa-star checked ";
            }
            //////////////////////
            if (gustnumber[i].innerText.trim() == "1") {
                document.getElementById("Repeater2_gustnumber1_" + R2ID).className = " fa fa-user ";
            }
            if (gustnumber[i].innerText.trim() == "2") {
                document.getElementById("Repeater2_gustnumber1_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber2_" + R2ID).className = " fa fa-user ";
            }
            if (gustnumber[i].innerText.trim() == "3") {
                document.getElementById("Repeater2_gustnumber1_" + iR2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber2_" + iR2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber3_" + R2ID).className = " fa fa-user ";
            }
            if (gustnumber[i].innerText.trim() == "4") {
                document.getElementById("Repeater2_gustnumber1_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber2_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber3_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber4_" + R2ID).className = " fa fa-user ";
            }
            if (gustnumber[i].innerText.trim() == "5") {
                document.getElementById("Repeater2_gustnumber1_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber2_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber3_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber4_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber5_" + R2ID).className = " fa fa-user ";
            }
            if (gustnumber[i].innerText.trim() == "6") {
                document.getElementById("Repeater2_gustnumber1_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber2_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber3_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber4_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber5_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber6_" + R2ID).className = " fa fa-user ";
            }
            if (gustnumber[i].innerText.trim() == "7") {
                document.getElementById("Repeater2_gustnumber1_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber2_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber3_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber4_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber5_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber6_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber7_" + R2ID).className = " fa fa-user ";
            }
            if (gustnumber[i].innerText.trim() == "8") {
                document.getElementById("Repeater2_gustnumber1_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber2_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber3_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber4_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber5_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber6_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber7_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber8_" + R2ID).className = " fa fa-user ";
            }
            if (gustnumber[i].innerText.trim() == "9") {
                document.getElementById("Repeater2_gustnumber1_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber2_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber3_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber4_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber5_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber6_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber7_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber8_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber9_" + R2ID).className = " fa fa-user ";
            }
            if (gustnumber[i].innerText.trim() == "10") {
                document.getElementById("Repeater2_gustnumber1_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber2_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber3_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber4_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber5_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber6_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber7_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber8_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber9_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber10_" + R2ID).className = " fa fa-user ";
            }
            if (gustnumber[i].innerText.trim() == "11") {
                document.getElementById("Repeater2_gustnumber1_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber2_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber3_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber4_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber5_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber6_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber7_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber8_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber9_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber10_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber11_" + R2ID).className = " fa fa-user ";
            }
            if (gustnumber[i].innerText.trim() == "12") {
                document.getElementById("Repeater2_gustnumber1_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber2_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber3_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber4_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber5_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber6_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber7_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber8_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber9_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber10_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber11_" + R2ID).className = " fa fa-user ";
                document.getElementById("Repeater2_gustnumber12_" + R2ID).className = " fa fa-user ";
            }
            ///////////////////////////

            if (parseInt(HAvail[i].innerText) > 0) {
                // Price
                var NormalPrice = document.getElementById("Repeater2_txtDailyRoomPrice_" + R2ID);
                var HotelDiscountPercent = document.getElementById("Repeater2_HotelDiscountPercent_" + R2ID);
                var PriceAfterDis = document.getElementById("Repeater2_txtRoomPriceAfterDis2_" + R2ID);
                var Currentcy = document.getElementById("Repeater2_Currentcy_" + R2ID);
                //
                if (NormalPrice.innerText == "" && NormalPrice.innerText == "0") {
                    txtSoled.Text = "Price Out Range";
                    document.getElementById("Repeater2_txtDailyRoomPrice_" + R2ID).innerText = "Price Out Range";
                    document.getElementById("Repeater2_HotelDiscountPercent_" + R2ID).style.display = "none";
                    document.getElementById("Repeater2_txtRoomPriceAfterDis2_" + R2ID).style.display = "none";
                }
                else {
                    if (HotelDiscountPercent.innerText != "" && HotelDiscountPercent.innerText != "0") {
                        NormalPrice.innerText = NormalPrice.innerText;
                        var percent = parseFloat(HotelDiscountPercent.innerText);
                        var Discount = (parseFloat(NormalPrice.innerText) * percent) / 100;
                        PriceAfterDis.innerText = (parseFloat(NormalPrice.innerText) - Discount).toFixed(2);
                        PriceAfterDis.style.display = "inline-block";
                    }
                    else {
                        PriceAfterDis.innerText = NormalPrice.Text;
                        PriceAfterDis.style.display = "block";
                        NormalPrice.style.display = "none";
                    }
                    Currentcy.InnerText = "SAR";
                    Currentcy.style.display = "inline-block";
                }
                // RatePlan
                var Priceplan = "";
                var txtMeals = document.getElementsByClassName("txtMeals");
                var txtBreakfast = document.getElementById("Repeater2_txtBreakfast_" + R2ID);
                var txtLunch = document.getElementById("Repeater2_txtLunch_" + R2ID);
                var txtDinner = document.getElementById("Repeater2_txtDinner_" + R2ID);
                var txtAllInclusive = document.getElementById("Repeater2_txtAllInclusive_" + R2ID);
                var PopapBox = document.getElementById("Repeater2_PopapBox_" + R2ID);
                var PopapText = document.getElementsByClassName("PopapText");
                //
                if (txtBreakfast.innerText.trim() == "1") {
                    Priceplan += " Breakfast ,";
                }
                if (txtLunch.innerText.trim() == "1") {
                    Priceplan += " Lunch ,";
                }
                if (txtDinner.innerText.trim() == "1") {
                    Priceplan += " Dinner ,";
                }
                if (txtAllInclusive.innerText.trim() == "1") {
                    Priceplan += " All inclusive ,";
                }
                else { Priceplan += " included"; }
                if (txtBreakfast.innerText.trim() != "1" && txtLunch.innerText.trim() != "1" && txtDinner.innerText.trim() != "1" && txtAllInclusive.innerText.trim() != "1") {
                    Priceplan = "No Meals";
                }
                if (Priceplan != "No Meals") {
                    PopapBox.style.display = "block";
                    PopapText[i].innerText = Priceplan;
                    txtMeals[i].innerText = Priceplan;
                }
            }
            else {
                document.getElementById("Repeater2_txtSoled_" + R2ID).innerText = "Sold Out";
                document.getElementById("Repeater2_txtSoled_" + R2ID).style.display = "block";
                //document.getElementById("Repeater1_BtnReplay_" + i).style.display = "none";
                document.getElementById("Repeater2_BtnReplay_" + R2ID).value = "View";
                document.getElementById("Repeater2_txtDailyRoomPrice_" + R2ID).style.display = "none";
                document.getElementById("Repeater2_HotelDiscountPercent_" + R2ID).style.display = "none";
                document.getElementById("Repeater2_txtRoomPriceAfterDis2_" + R2ID).style.display = "none";
                document.getElementById("Repeater2_Currentcy_" + R2ID).style.display = "none";
                //document.getElementById("Repeater1_divrep_" + i).style.backgroundColor = "lightsteelblue";
            }

            R2ID++;
        }
    }
    // Price
    var min = 0, max = 0;
    var Price = document.getElementsByClassName("Price");
    min = parseFloat(Price[0].innerText);
    for (var i = 0; Price[i]; ++i) {

        if (parseFloat(Price[i].innerText) < min) {
            min = Price[i].innerText;
        }
        if (parseFloat(Price[i].innerText) > max) {
            max = Price[i].innerText;
        }
    }
    document.getElementById("MinPrice").value = min;
    document.getElementById("MaxPrice").value = max;
    document.getElementById("MMinPrice").value = min;
    document.getElementById("MMaxPrice").value = max;
}

function login() {
    var UserNameM = document.getElementById('UserNameM').innerText;
    var logM = document.getElementById('logM');
    if (UserNameM != "Customer") {
        logM.innerHTML = " logout";
    }
    else {
        logM.innerHTML = " login";
    }
}

function ShowLoader() {
    document.getElementById("loader2").style.display = "block";
}
function HideLoader() {
    document.getElementById("loader2").style.display = "none";
}

//<% --Price Filter-- %>
function myFunction(x) {
    if (x.matches) { // If media query matches

        var Mytext = $(".fscaret");
        $(".fscaret").click(function () {

            var FilterPrice = Mytext[1].innerText;
            var hotel = document.getElementsByClassName("HotelContaner");
            for (var i = 0; i < hotel.length; ++i) {
                var price = hotel[i].getElementsByClassName("DaliyPrice");
                if (price[0].innerText <= FilterPrice) {
                    hotel[i].style.display = "block";
                } else { hotel[i].style.display = "none"; }
            }

        });
    } else {
        var Mytext = $(".fscaret");
        $(".fscaret").click(function () {

            var FilterPrice = Mytext[0].innerText;
            var hotel = document.getElementsByClassName("HotelContaner");
            for (var i = 0; i < hotel.length; ++i) {
                var price = hotel[i].getElementsByClassName("DaliyPrice");
                if (price[0].innerText <= FilterPrice) {
                    hotel[i].style.display = "block";
                } else { hotel[i].style.display = "none"; }
            }

        });
    }
}
var x = window.matchMedia("(max-width: 900px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
