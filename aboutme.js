// hey, I am comment in js

/*


https://www.google.com/search?safe=strict&biw=1280&bih=610&tbm=isch&sa=1&ei=PVpAXY-8Lcyzggfr5qe4DA&q=k+darmas&oq=k+darmas&gs_l=img.3..0i10i24.69816.78999..79691...0.0..0.81.599.9......0....1..gws-wiz-img.....0..0j0i67j0i10i1j0i5i30j0i24.Sr64Gd4OzyM&ved=0ahUKEwjPzuKH89zjAhXMmeAKHWvzCccQ4dUDCAY&uact=5#imgrc=7ULvkEprex8ypM:

https://www.google.com/search?safe=strict&biw=1280&bih=610&tbm=isch&sa=1&ei=j1pAXfRshLaCB5ygj_gK&q=cdramas&oq=cdramas&gs_l=img.3..0i24l8j0i10i24j0i24.104967.137895..138246...3.0..0.110.894.12j1......0....1..gws-wiz-img.....0..0j0i67j0i10j0i5i30.kYjHTTxPn_8&ved=0ahUKEwi08MKu89zjAhUEm-AKHRzQA68Q4dUDCAY&uact=5#imgrc=ulvcrKlA79shbM:

*/

alert("Hello, this is my page!");

function makeImageBig(x){
    x.style.height = "500px"
    x.style.width = "600px"
}

function makeImageOriginalSize(x){
    x.style.height = "200px"
    x.style.width = "200px"
}

function showHideSection(section){
    var showHideSection = document.getElementById(section)
    if (showHideSection.style.display == "none"){
        showHideSection.style.display = "block";
        document.getElementById("bragButton")
    } else {
        showHideSection.style.display="none"
    }
}


