console.log("Provera");
//#region Forma - provera
function provera(){
  var brojGresaka = 0;

  var imePrezime = document.querySelector("#imePrezime");
  var valImePrezime = imePrezime.value;
  var pImePrezime = document.querySelector("#pImePrezime");

  var adresa = document.querySelector("#adresa");
  var valAdresa = adresa.value;
  var pAdresa = document.querySelector("#pAdresa");

  var grad = document.querySelector("#grad");
  var valGrad = grad.value;
  var pGrad = document.querySelector("#pGrad");

  var posBroj = document.querySelector("#posBroj");
  var valPosBroj = posBroj.value;
  var pPosBroj = document.querySelector("#pPosBroj");

  var telefon = document.querySelector("#telefon");
  var valTelefon = telefon.value;
  var pTelefon = document.querySelector("#pTelefon");

  var ponuda = document.querySelector("#ponuda");
  var pPonuda = document.querySelector("#pPonuda");

  var nacinPreuzimanja=document.getElementsByName("nacinPreuzimanja");
  var pPreuzimanje = document.querySelector("#pPreuzimanje");

  var novaPonuda = document.querySelector("#novaPonuda");
  var valNovaPonuda = novaPonuda.val;
  //Provera imena i prezimena
  let regImePrezime=/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}(\s[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15})+$/;
  if(!(regImePrezime.test(valImePrezime))){
    pImePrezime.removeAttribute("class");
    brojGresaka++;
  }else{
    pImePrezime.setAttribute("class","d-none");
  }
  //Provera adrese
  let regAdresa=/^([A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}\s)+[0-9]{1,4}$/;
  if(!(regAdresa.test(valAdresa))){
    pAdresa.removeAttribute("class");
    brojGresaka++;
  }
  else{
    pAdresa.setAttribute("class","d-none");
  }
  //Provera grada
  let regGrad=/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}(\s[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15})*$/;
  if(!(regGrad.test(valGrad))){
    pGrad.removeAttribute("class");
    brojGresaka++;
  }
  else{
    pGrad.setAttribute("class","d-none");
  }
  //Provera postanskog broja
  let regPosBroj=/^[0-9]{5}$/;
  if(!(regPosBroj.test(valPosBroj))){
    pPosBroj.removeAttribute("class");
    brojGresaka++;
  }
  else{
    pPosBroj.setAttribute("class","d-none");
  }
  //Provera broja telefona
  let regTelefon=/^\d{9,10}$/;
  if(!(regTelefon.test(valTelefon))){
    pTelefon.removeAttribute("class");
    brojGresaka++;
  }
  else{
    pTelefon.setAttribute("class","d-none");
  }
  //Provera padajuce liste
  if(ponuda.options[ponuda.options.selectedIndex].value=="0"){
    pPonuda.removeAttribute("class");
    brojGresaka++;
  }
  else{
    pPonuda.setAttribute("class","d-none");
  }
  //Provera radio button-a
  var vrNacinPreuzimanja="";
  for(let i=0;i<nacinPreuzimanja.length;i++){
    if(nacinPreuzimanja[i].checked){
      vrNacinPreuzimanja=nacinPreuzimanja[i].value;
      break;
    }
  }
  if(vrNacinPreuzimanja==""){
    pPreuzimanje.removeAttribute("class");
    brojGresaka++;
  }
  else{
    pPreuzimanje.setAttribute("class","d-none");
  }
  var alertIspis = "";
  if(novaPonuda.checked){
    alertIspis = "Hvala Vam što ste se prijavili na naš newsletter!";
  }
  if(brojGresaka==0){
    alert("Uspešno ste izvršili porudžbinu.\n" + `${alertIspis}`);
  }
}
//#endregion

//#region Meni
let neuredjenaLista = document.querySelector("#neuredjenaLista");
let nazivOblasti = ["Početna","O nama","U ponudi","Kontakt","O autoru"];
let linkKaOblasti = ["#","#o-nama","#u-ponudi","#kontakt","#o-autoru"];
var ispisNL = "";
for(let i=0; i<nazivOblasti.length; i++)
{
  ispisNL += `<li class="nav-item">
                    <a class="nav-link" href="${linkKaOblasti[i]}">${nazivOblasti[i]}</a>
              </li>`;
}
neuredjenaLista.innerHTML = ispisNL;
//#endregion

//#region Kreiranje slider-a u HTML-u
var slajder = document.querySelector("#carousel");
var pozicijaSlike = ["prva","druga","treca","cetvrta"];
var slikaSlajd = ["assets/img/slider1.png","assets/img/slider2.png","assets/img/slider3.png", "assets/img/slider4.png"];
var ispisCarousel = "";
for(let i=0;i<slikaSlajd.length;i++)
{
  ispisCarousel += `<img src="${slikaSlajd[i]}" alt="Ovo je ${pozicijaSlike} slika u okviru slajdera." class="col-12 px-0"/>`;
}
slajder.innerHTML = ispisCarousel;
//Upotrebljen je plugin slick
$(document).ready(function(){
  $("#carousel").slick({
    autoplay:true,
    speed:2000,
    dots: true,
    arrows:false,
    infinite: true,
    fade: true,
    cssEase: 'linear'
  });
});
//#endregion

//#region Podrucje rada
var podrucjeRadaBlokoviTekst = [
  "<p class='vv-ta-left vv-fs-26 vv-crna-slova'>U ponudi imamo različite vrste hlebova, mini pica, kiflica po kojima smo poznati, krofne, kao i druge pekarske proizvode i peciva. Kompletnu ponudu peciva možete da vidite <a class='vv-narandzasta-slova vv-fw-700' href='#u-ponudi-peciva'>ovde</a>.</p>",
  
  "<p class='vv-ta-left vv-fs-26 vv-crna-slova'>U ponudi imamo nekoliko vrsta pica. Neke od njih su kaprićoza, gurmanska i vulkan za najveće ljubitelje ovog italijanskog specijaliteta. Kompletnu ponudu možete da vidite <a class='vv-narandzasta-slova vv-fw-700' href='#u-ponudi-pice'>ovde</a>.</p>"];
var podrucjeRadaFontAwesome = ["bread","pizza"];
var podrucjeRadaDescId = ["bread", "pizza"];

var podrucjeRadaSvojstva = document.querySelector("#podrucjeRadaSvojstva");

var ispisPodrucjeRada = "";
for(let i=0;i<podrucjeRadaBlokoviTekst.length;i++)
{
  ispisPodrucjeRada += `<section class="col-12 col-xl-5 mr-xl-2 mr-0 mb-2 mb-xl-0 px-0">
                        <div class="desc">
                          <div class="d-flex justify-content-center">
                            <div class="vv-fa-block mt-4">
                              <i class="fas fa-${podrucjeRadaFontAwesome[i]}-slice" aria-hidden="true"></i>
                            </div>
                          </div>
                          <div id="podrucje-rada-${podrucjeRadaDescId[i]}" class="pb-4 pt-2 px-4">
                            <p class="vv-ta-left vv-fs-26 vv-crna-slova">${podrucjeRadaBlokoviTekst[i]}</p>
                          </div>
                        </div>
                      </section>`;
}
podrucjeRadaSvojstva.innerHTML = ispisPodrucjeRada;
//#endregion

//#region O nama
var misijaReg = document.querySelector("#misija");
var idPR = ["misija","vizija"];
var naslovPR = ["Naša misija", "Naša vizija"];
var misijaId = ["misija-desc1","misija-desc2"];
var klaseSekcMisija = ["mt-4 d-xl-block d-none", "d-xl-none d-block"];
var klaseDivMisija = ["pb-4 mt-2 px-xl-3","px-xl-5 my-md-2"];
var pt3Misija = ["","pt-3"];
var ispisONama = "";
for(let i=0; i<idPR.length;i++){
  var divMisija = `<div id="${misijaId[i]}" class="col-12 col-xl-6 row row-cols-1 mx-0 ${klaseSekcMisija[i]}">
                    <div class="px-2 pb-4 mt-2 px-xl-3 px-md-2 d-flex flex-column justify-content-center align-items-center ${klaseDivMisija}">
                      <h3 class="vv-h3 ${pt3Misija[i]}">Naša misija</h3>
                      <p class="vv-fs-22 pt-2">
                        Težimo da svojom ponudom pekarskih proizvoda, kao i pica, zadovoljimo sve potrebe potrošača koji žele kvalitetan obrok.
                      </p>
                      <p class="vv-fs-22 pt-2">
                        Želimo da kupci u formatu pekare dobiju kvalitetnu i raznovrsnu ponudu proizvoda po niskim cenama. Takođe, želimo da prepoznatiljivim, prijatnim ambijentom naše mušterije osete komfort.
                      </p>
                    </div>
                  </div>`;
  var divMisijaPic = `<div id="misija-pic" class="vv-bg-image vv-h-450 col-12 col-xl-6 px-0"></div>`;
  if(misijaId[i] == "misija-desc1")
  {
    ispisONama += divMisija + divMisijaPic;
  }else{
    ispisONama += divMisija;
  }
}
misijaReg.innerHTML = ispisONama;

var descVizija = [
  "Vizija organizacije je da „Pekara Vidak“ bude sinonim za kvalitetnu i ukusnu hranu.",

  "Takođe, želimo da imamo lidersku poziciju na tržištu i da stalnim rastom broja objekata budemo dostupni što većem broju stanovništva, a podizanjem kvaliteta i standarda poveća lojalnost kupaca."
];
var vizijaDesc = document.querySelector("#vizija-desc");
var ispisVizijaTekst = `<div class="px-2 px-xl-3 px-md-2 my-3 d-flex flex-column justify-content-center align-items-center d-none">
                          <h3 class="vv-h3">Naša vizija</h3>`;
for(let i=0; i<descVizija.length; i++){
  ispisVizijaTekst += `<p class="vv-fs-22 pt-3">${descVizija[i]}</p>`;
}
ispisVizijaTekst += '</div>';
vizijaDesc.innerHTML = ispisVizijaTekst;
//#endregion

//#region U ponudi
var uPonudiPecivaSvojstva = document.querySelector("#uPonudiSvojstva");
//OBAVEZNO DODATI DINAMICKU DROPDOWN LISTU ZA GRAMAZU I PARCICE
var pecivaPonuda = ["Krofne","Mini-pice","Kiflice sa viršlama","Hleb"];
var cenaPeciva = ["30 RSD/kom","80 RSD/100 gr.","100 RSD/100 gr.","40 RSD/kom"];
var pecivaId = ["kr","mi","ki","hl"];
var ispisPonudaPeciva = "";
for(let i=0;i<pecivaPonuda.length;i++)
{
  ispisPonudaPeciva += `<article class="col-12 col-md-6 col-xl-3 mb-xl-0 mb-3">
                        <section class="vv-b-grey-double">
                          <div id="pecivo${i+1}-pic" class="vv-bg-image vv-h-320"></div>
                          <div class="vv-header-color naziv d-flex justify-content-center vv-bg-white vv-fw-700 vv-fs-22 py-2">${pecivaPonuda[i]}</div>
                          <div class="ponuda-btn">
                            <div class="d-flex align-items-center price row mx-0">

                              <button type="button" disabled class="vv-fw-700 ponuda-fs btn-lg vv-br-0 col-sm-8 col-12 text-center px-0 mr-0 tx-b">${cenaPeciva[i]}</button>
                              <button type="button" class="btn-secondary vv-br-0 btn-lg col-sm-4 col-12 text-uppercase text-center px-0 mr-0 btn-bg" onclick="window.location.href='#kontakt',poruci('${pecivaId[i]}')">Poruči</button>
                            </div>
                          </div>
                        </section>
                      </article>`;
}
uPonudiPecivaSvojstva.innerHTML = ispisPonudaPeciva;

var uPonudiPizzaSvojstva = document.querySelector("#uPonudiPizza");
var pizzaPonuda = ["Margarita","Capriciosa","Quattro Stagioni","Vegeteriana"];
var cenaPizza = ["100 RSD/parče","120 RSD/parče","140 RSD/parče","150 RSD/parče"];
var pizzeId = ["ma","ca","qu","ve"];

var ispisPonudaPizza = "";

for(let i=0;i<pecivaPonuda.length;i++)
{
  ispisPonudaPizza += `<article class="col-12 col-md-6 col-xl-3 mb-xl-0 mb-3">
                        <section class="vv-b-grey-double">
                          <div id="pizza${i+1}-pic" class="vv-bg-image vv-h-320"></div>
                          <div class="vv-header-color naziv d-flex justify-content-center vv-bg-white vv-fw-700 vv-fs-22 py-2">${pizzaPonuda[i]}</div>
                          <div class="ponuda-btn">
                            <div class="d-flex align-items-center price row mx-0">
                              <button type="button" disabled class="vv-fw-700 ponuda-fs btn-lg vv-br-0 col-sm-8 col-12 text-center px-0 mr-0 tx-b">${cenaPizza[i]}</button>
                              <button type="button" class="btn-secondary vv-br-0 btn-lg col-sm-4 col-12 text-uppercase text-center px-0 mr-0 btn-bg" onclick="window.location.href='#kontakt',poruci('${pizzeId[i]}')">Poruči</button>
                            </div>
                          </div>
                        </section>
                      </article>`; 
}
uPonudiPizzaSvojstva.innerHTML = ispisPonudaPizza;
//#endregion

//#region Kontakt
var kontaktForma = document.getElementById("kontaktForma");
var poljeFormaIdIAGP = ["poljeImePrezime","poljeAdresa","poljeGrad","poljePosBroj","poljeTelefon"];
var formaIdIAGP = ["imePrezime","adresa","grad","posBroj","telefon"];
var labelTekstIAGP = ["Ime i prezime","Adresa","Grad","Poštanski broj","Broj telefona"];
var placeholderiIAGP = ["Marko Marković","Zdravka Čelara 16","Beograd","11060", "062323232"];
var ispisPoljeFormIAGP = "";
var pIdIAGP = ["pImePrezime","pAdresa","pGrad","pPosBroj","pTelefon"];
var tekstPoljeIAGP = ["Pogrešno uneto ime i prezime, početno slovo mora biti veliko.","Pogrešno uneta adresa, unesite naziv ulice i broj.","Pogrešno unet grad, početno slovo mora biti veliko.","Pogrešno uneto, poštanski broj mora imati 5 cifara", "Pogrešno unet  broj telefona. Morate uneti 9 ili 10 cifara."];
for(let i=0;i<poljeFormaIdIAGP.length;i++)
{
  ispisPoljeFormIAGP += `<div id="${poljeFormaIdIAGP[i]}" class="form-group row px-4">
                          <label class="col-12 px-0" for="${formaIdIAGP[i]}">${labelTekstIAGP[i]}:</label>
                          <input id="${formaIdIAGP[i]}" class="col-12 py-1 vv-br-025" type="text" name="${formaIdIAGP[i]}" placeholder="${placeholderiIAGP[i]}">
                          <p id="${pIdIAGP[i]}" class="d-none">${tekstPoljeIAGP[i]}<p/>
                        </div>`;
}
kontaktForma.innerHTML = ispisPoljeFormIAGP;

var opcije = ["kr","mi","ki","hl","ma","ca","qu","ve"];
var opcijeTekst = ["Krofne","Mini-pice","Kiflice sa viršlama","Hleb","Margarita","Capriciosa","Quattro Stagioni","Vegeteriana"];
var ispisIzbor = `<div id="izbor" class="col-12 px-2">
                    <label for="ponuda">Odaberite proizvod:</label>
                    <select id="ponuda" class="form-control">
                      <option value="0">Izaberite...</option>`;
for(i=0; i<opcije.length;i++){
  ispisIzbor += `<option id="${opcije[i]}" value="${opcije[i]}">${opcijeTekst[i]}</option>`;
}
ispisIzbor += `</select>
            <p id="pPonuda" class="vv-white14 d-none">Morate izabrati neki od proizvoda.</p>
          </div>`;
kontaktForma.innerHTML += ispisIzbor;

var preuzimanjaId = ["licno","dostava"];
var preuzimanjaValue = ["L","D"];
var preuzimanjaLabelTekst = ["Lično preuzimanje","Dostava"];
var ispisPreuzimanje = `<div id="nacinPreuzimanja" class="form-group row px-0 mt-4 mb-0">
                          <div class="offset-1"></div>`;
for(let i=0; i<preuzimanjaId.length; i++){
  ispisPreuzimanje +=`<div class="form-check col-5">
                        <input class="form-check-input" id="${preuzimanjaId[i]}" type="radio" name="nacinPreuzimanja" value="${preuzimanjaValue[i]}">
                        <label class="form-check-label" for="${preuzimanjaId[i]}">${preuzimanjaLabelTekst[i]}</label>
                      </div>`;
}
ispisPreuzimanje += `<div class="col-12 row ml-3">
                  <p id="pPreuzimanje" class="col-12 vv-white14 d-none">Morate izabrati neku od opcija preuzimanja.</p>
                </div>
              </div>`;
kontaktForma.innerHTML += ispisPreuzimanje;

var ispisNovaPonuda = `<div class="form-group row px-0">
                        <div class="offset-1"></div>
                        <div class="form-check col-11">
                          <input class="form-check-input" id="novaPonuda" type="checkbox" name="novaPonuda" value="novaPonuda">
                          <label class="form-check-label" for="novaPonuda">Želim da budem obavešten o novim proizvodima i akcijama.</label>
                        </div>
                      </div>
                      <div class="form-group d-flex justify-content-center">
                        <input id="btnPosalji" class="btn vv-br-025 vv-btn-grey" type="button" value="Pošalji"/>
                      </div>`;
kontaktForma.innerHTML += ispisNovaPonuda;
document.querySelector("#btnPosalji").addEventListener("click",provera);
//#endregion

//#region O autoru
var oAutoruDescSvojstva = document.getElementById("oAutoruDescSvojstva");

var oAutoruTekst = [
  "Zovem se Viktor Vidaković. Nedavno sam završio tehničku školu „Mileta Nikolić“ u Aranđelovcu. Počeo sam da studiram informacione tehnologije i veb programiranje na Visokoj školi ICT.",
  "Programiranje mi je od početka bilo veoma zanimljivo zato što imamo mogućnost da kreiramo solucije i programe koji će nekome olakšati život. Moram mnogo da naučim da bih bio spreman za veće izazove, ali se nadam da ću u budućnosti biti spreman."
];
var ispisOAutoru = "";

for(let i=0;i<oAutoruTekst.length;i++)
{
  ispisOAutoru += `<p class="vv-fs-22 mb-3">${oAutoruTekst[i]}</p>`;
}
oAutoruDescSvojstva.innerHTML = ispisOAutoru;
//#endregion

//#region Kreiranje footer-a u HTML-u
var linksFooterAHref = ["#","#o-nama","#u-ponudi","#kontakt","#o-autoru"];
var linksFooterAText = ["Početna","O nama","U ponudi","Kontakt","O autoru"];
var linksFooterUl = document.querySelector("#linksFooterUl");
var ispisLinksFooter = "";
for(let i=0;i<linksFooterAHref.length;i++){
  ispisLinksFooter += `<li class="nav-item">
                        <a class="nav-link d-flex align-items-center" href="${linksFooterAHref[i]}">
                          <i class="fas fa-angle-right pr-1" aria-hidden="true"></i>
                          <p>${linksFooterAText[i]}</p>
                        </a>
                      </li>`;
}
linksFooterUl.innerHTML = ispisLinksFooter;

var filesFooterAHref = ["assets/js/main.js","assets/css/style.css","assets/css/responsive.css","sitemap.xml","robots.txt","dokumentacija.pdf"];
var filesFooterATekstovi = ["JavaScript","CSS","Responsive","Sitemap","Robots.txt","Dokumentacija"];
var filesFooterUl = document.querySelector("#filesFooterUl");
var ispisFilesFooter = "";

for(let i=0;i<filesFooterAHref.length;i++){
  ispisFilesFooter +=`<li class="nav-item">
                        <a class="nav-link d-flex align-items-center" href="${filesFooterAHref[i]}" target="_blank">
                          <i class="fas fa-angle-right pr-1" aria-hidden="true"></i>
                          <p>${filesFooterATekstovi[i]}</p>
                        </a>
                      </li>`;
}
filesFooterUl.innerHTML = ispisFilesFooter;

var footerInfoUl = document.querySelector("#footerInfoUl");
var footerInfoPTekstovi = ["+381 62 232 32 32","Zdravka Čelara 16","viktor&#46;vidakovic&#46;15&#46;20&#64;ict&#46;edu&#46;rs"];
var footerInfoAHref = ["tel:+381622323232",
                      "https://www.google.com/maps/place/Zdravka+%C4%8Celara+16,+Beograd+11000/@44.8147698,20.4825022,17z/data=!3m1!4b1!4m5!3m4!1s0x475a7a95dfdba1fb:0x7dd3ed9b437a11d6!8m2!3d44.8147698!4d20.4846909",
                      "mailto:viktor.vidakovic.15.20@ict.edu.rs"];
var ispisInfoFooter = "";
for(let i=0;i<footerInfoPTekstovi.length;i++){
  ispisInfoFooter += `<li class="nav-item">
                        <a href="${footerInfoAHref[i]}" id="info-${i+1}" target="_blank">${footerInfoPTekstovi[i]}</a>
                      </li>`;
}
footerInfoUl.innerHTML = ispisInfoFooter;

var footerSocialUl = document.querySelector("#footerSocialUl");
var footerSocialIKlase = ["instagram","facebook-square","youtube"];
var footerSocialPTekstovi = ["pekara_vidak","Pekar Vidak","Pekara Vidak"];
var footerSocialAHref = ["instagram.com/pekara_vidak/","facebook.com/channel/PekaraVidak/","youtube.com/c/pekara_vidak/"];
var ispisSocialFooter = "";
for(let i=0;i<footerSocialPTekstovi.length;i++){
  ispisSocialFooter += `<li class="nav-item mt-2 h-47">
                          <a class="nav-link d-flex align-items-center" target="_blank" href="https:/www.${footerSocialAHref[i]}">
                          <i class="fab fa-${footerSocialIKlase[i]} pr-2" aria-hidden="true"></i>${footerSocialPTekstovi[i]}</a>
                        </li>`;
}
footerSocialUl.innerHTML = ispisSocialFooter;
//#endregion

//#region Dropdown - Poruci dugme
var kr = document.getElementById("kr");
var mi = document.getElementById("mi");
var ki = document.getElementById("ki");
var hl = document.getElementById("hl");
var ma = document.getElementById("ma");
var ca = document.getElementById("ca");
var qu = document.getElementById("qu");
var ve = document.getElementById("ve");
var nizPonuda = ["kr","mi","ki","hl","ma","ca","qu","ve"];
function poruci(string){
  for(let i = 0; i<nizPonuda.length;i++){
    let poruciProizvod = document.getElementById(`${nizPonuda[i]}`);
    poruciProizvod.removeAttribute("selected");
  }
  for(let i = 0; i<nizPonuda.length;i++)
  {
    let poruciProizvod = document.getElementById(string);
    if(poruciProizvod == kr)return poruciProizvod.setAttribute("selected", "");
    else if(poruciProizvod == mi)return poruciProizvod.setAttribute("selected", "");
    else if(poruciProizvod == ki)return poruciProizvod.setAttribute("selected", "");
    else if(poruciProizvod == hl)return poruciProizvod.setAttribute("selected", "");
    else if(poruciProizvod == ma)return poruciProizvod.setAttribute("selected", "");
    else if(poruciProizvod == ca)return poruciProizvod.setAttribute("selected", "");
    else if(poruciProizvod == qu)return poruciProizvod.setAttribute("selected", "");
    else if(poruciProizvod == ve)return poruciProizvod.setAttribute("selected", "");
  }
}
//#endregion