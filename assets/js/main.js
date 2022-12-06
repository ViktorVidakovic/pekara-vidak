console.log("Provera");
//#region Forma - provera
function provera(){
  var brojGresaka = 0;

  var imePrezime;
  var vrImePrezime;
  imePrezime = document.querySelector("#imePrezime");
  vrImePrezime = imePrezime.value;

  var adresa;
  var vrAdresa;
  adresa = document.querySelector("#adresa");
  vrAdresa = adresa.value;

  var grad;
  var grad2;
  var vrGrad;
  var vrGrad2;
  grad = document.querySelector("#grad");
  grad2 = document.querySelector("#grad2");
  vrGrad = grad.value;
  vrGrad2 = grad2.value;

  var posBroj;
  var posBroj2;
  var vrPosBroj;
  var vrPosBroj2;
  posBroj = document.querySelector("#posBroj");
  posBroj2 = document.querySelector("#posBroj2");
  vrPosBroj = posBroj.value;
  vrPosBroj2 = posBroj2.value;

  var ponuda;
  ponuda = document.querySelector("#ponuda");

  var nacinPreuzimanja;
  nacinPreuzimanja=document.getElementsByName("nacinPreuzimanja");

  //Provera imena i prezimena
  let regImePrezime=/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}\s[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}$/;
  if(!(regImePrezime.test(vrImePrezime))){
    document.querySelector("#poljeImePrezime > p").innerHTML = "Pogrešno uneto ime i prezime";
    document.querySelector("#poljeImePrezime > p").style.color = "white";
    document.querySelector("#poljeImePrezime > p").style.fontSize = "14px";
    brojGresaka++;
  }
  else{
    document.querySelector("#poljeImePrezime > p").innerHTML=" ";
  }

  //Provera adrese
  let regAdresa=/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}\s[0-9]{1,4}$/;
  let regAdresa2=/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}\s[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}\s[0-9]{1,4}$/;
  if((regAdresa.test(vrAdresa)) || (regAdresa2.test(vrAdresa))){
    document.querySelector("#poljeAdresa > p").innerHTML=" ";
  }
  else{
    document.querySelector("#poljeAdresa > p").innerHTML = "Pogrešno uneta adresa";
    document.querySelector("#poljeAdresa > p").style.color = "white";
    document.querySelector("#poljeAdresa > p").style.fontSize = "14px";
    brojGresaka++;
  }


  //Provera grada
  let regGrad=/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}$/;
  let regGrad2=/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}\s[A-ZČĆŠĐŽ]{0,1}[a-zčćšđž]{2,15}$/;
  if((regGrad.test(vrGrad)) || (regGrad2.test(vrGrad)) || (regGrad.test(vrGrad2)) || (regGrad2.test(vrGrad2))){
    document.querySelector("#poljeGrad > p").innerHTML=" ";
    document.querySelector("#poljeGrad2 > p").innerHTML=" ";
  }
  else{
    document.querySelector("#poljeGrad > p").innerHTML = "Pogrešno unet grad";
    document.querySelector("#poljeGrad > p").style.color = "white";
    document.querySelector("#poljeGrad > p").style.fontSize = "14px";
    brojGresaka++;
    document.querySelector("#poljeGrad2 > p").innerHTML = "Pogrešno unet grad";
    document.querySelector("#poljeGrad2 > p").style.color = "white";
    document.querySelector("#poljeGrad2 > p").style.fontSize = "14px";
    brojGresaka++;
  }


  //Provera postanskog broja
  let regPosBroj=/^[0-9]{5}$/;
  if((regPosBroj.test(vrPosBroj)) || (regPosBroj.test(vrPosBroj2))){
    document.querySelector("#poljePosBroj > p").innerHTML = "";
    document.querySelector("#poljePosBroj2 > p").innerHTML = "";
  }
  else{
    document.querySelector("#poljePosBroj > p").innerHTML = "Pogrešno unet poš. broj";
    document.querySelector("#poljePosBroj > p").style.color = "white";
    document.querySelector("#poljePosBroj > p").style.fontSize = "14px";
    brojGresaka++;
    document.querySelector("#poljePosBroj2 > p").innerHTML = "Pogrešno unet poš. broj";
    document.querySelector("#poljePosBroj2 > p").style.color = "white";
    document.querySelector("#poljePosBroj2 > p").style.fontSize = "14px";
    brojGresaka++;
  }

  
  //Provera padajuce liste
  if(ponuda.options[ponuda.options.selectedIndex].value=="0"){
    document.querySelector("#izbor > p").innerHTML="Morate izabrati proizvod";
    document.querySelector("#izbor > p").style.color="white";
    document.querySelector("#izbor > p").style.fontSize = "14px";
    brojGresaka++;
  }
  else{
    document.querySelector("#izbor > p").innerHTML = "";
  }

  //Provera radio button-a
  var vrNacinPreuzimanja=" ";
  for(let i=0;i<nacinPreuzimanja.length;i++){
    if(nacinPreuzimanja[i].checked){
      vrNacinPreuzimanja=nacinPreuzimanja[i].value;
      break;
    }
  }
  if(vrNacinPreuzimanja==" "){
    document.querySelector("#nacinPreuzimanja > div > p").innerHTML="Morate izabrati nacin isporuke";
    document.querySelector("#nacinPreuzimanja > div > p").style.color="white";
    document.querySelector("#nacinPreuzimanja > div > p").style.fontSize = "14px";
    brojGresaka++;
  }
  else{
    document.querySelector("#nacinPreuzimanja > div > p").innerHTML="";
  }
  
  var alertIspis = "";
  if(novaPonudaInput.checked){
    alertIspis = "Hvala Vam što ste se prijavili na naš newsletter!";
  }

  $(document).ready(function(){
    if(brojGresaka==0){
      alert("Uspešno ste izvršili porudžbinu.\n" + `${alertIspis}`);
    }
  });
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
var poljeFormaIdIA = ["poljeImePrezime","poljeAdresa"];
var formaIdIA = ["imePrezime","adresa"];
var labelTekstIA = ["Ime i prezime:","Adresa:"];
var placeholderiIA = ["Marko Marković","Zdravka Čelara 16"];
var ispisPoljeFormIA = "";

for(let i=0;i<poljeFormaIdIA.length;i++)
{
  ispisPoljeFormIA += `<div id="${poljeFormaIdIA[i]}" class="form-group row px-4">
                          <label class="col-12 px-0" for="${formaIdIA[i]}">${labelTekstIA[i]}</label>
                          <input id="${formaIdIA[i]}" class="col-12 py-1 vv-br-025" type="text" name="${formaIdIA[i]}" placeholder="${placeholderiIA[i]}">
                          <p></p>
                        </div>`;
}
kontaktForma.innerHTML = ispisPoljeFormIA;

var poljeFormaIdGP = ["poljeGrad","poljePosBroj"];
var formaIdGP = ["grad","posBroj"];
var labelTekstGP = ["Grad","Poš. broj"];
var placeholderiGP = ["Beograd","11060"];
var ispisGrupaForme = `<div class="form-group row px-2 d-sm-flex d-none">`;
for(let i=0;i<poljeFormaIdGP.length;i++){
  ispisGrupaForme += `<div id="${poljeFormaIdGP[i]}" class="col-6">
                        <label class="px-0 py-0 my-0 mb-1" for="${formaIdGP[i]}">${labelTekstGP[i]}:</label>
                        <br>
                        <input id="${formaIdGP[i]}" class="py-1 px-2 vv-br-025" type="text" name="${formaIdGP[i]}" placeholder="${placeholderiGP[i]}">
                        <p></p>
                      </div>`;
}
kontaktForma.innerHTML += ispisGrupaForme;


var poljeFormaIdGP2 = ["poljeGrad2","poljePosBroj2"];
var formaIdGP2 = ["grad2","posBroj2"];
var ispisPoljeGP2 = "";
for(let i=0; i<poljeFormaIdGP2.length;i++){
  ispisPoljeGP2 += `<div id="${poljeFormaIdGP2[i]}" class="col-12 px-2 d-sm-none d-block mb-3 form-group row px-0 mx-0">
                      <label class="col-12 px-0" for="${formaIdGP2[i]}">${labelTekstGP[i]}:</label>
                      <input id="${formaIdGP2[i]}" class="col-12 py-1 vv-br-025" type="text" name="${formaIdGP2[i]}" placeholder="${placeholderiGP[i]}">
                      <p></p>
                    </div>`;
}
kontaktForma.innerHTML += ispisPoljeGP2;

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
            <p></p>
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
                  <p class="col-12"></p>
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
                      <div onclick="provera()" class="form-group d-flex justify-content-center">
                        <input id="btnPosalji" class="btn vv-br-025 vv-btn-grey" type="button" value="Pošalji"/>
                      </div>`;
kontaktForma.innerHTML += ispisNovaPonuda;
//#endregion

//#region O autoru
var oAutoruDescSvojstva = document.getElementById("oAutoruDescSvojstva");

var oAutoruTekst = [
  "Zovem se Viktor Vidaković. Nedavno sam završio tehničku školu „Mileta Nikolić“ u Aranđelovcu. Počeo sam da studiram informacione tehnologije i veb programiranje na Visokoj školi ICT.",
  "Programiranje mi je od početka bilo veoma fascinantno, jer imamo mogućnost da kreiramo mnogo solucija i programa kako bismo nekome olakšali život. Rekao bih da moram mnogo da istražujem da bih bio spreman za veće izazove, ali se nadam da ću u budućnosti naučiti mnogo toga."
];
var ispisOAutoru = "";

for(let i=0;i<oAutoruTekst.length;i++)
{
  ispisOAutoru += `<p class="vv-fs-22 mb-3">${oAutoruTekst[i]}</p>`;
}
oAutoruDescSvojstva.innerHTML = ispisOAutoru;
//#endregion

//#region Kreiranje footer-a u HTML-u


//STIGAO SAM DO OVDE
var linksFooterUl = document.getElementById("linksFooterUl");

var linksFooterAHref = ["#","#o-nama","#u-ponudi","#kontakt","#o-autoru"];
var linksFooterAText = ["Početna","O nama","U ponudi","Kontakt","O autoru"];
for(let i=0;i<linksFooterAHref.length;i++)
{
  var linksFooterLi = document.createElement("li");
  linksFooterLi.setAttribute("class","nav-item");
  linksFooterUl.appendChild(linksFooterLi);

  var linksFooterA = document.createElement("a");
  linksFooterA.setAttribute("class","nav-link d-flex align-items-center");
  linksFooterA.href = (`${linksFooterAHref[i]}`);
  linksFooterLi.appendChild(linksFooterA);

  var linksFooterAI = document.createElement("i");
  linksFooterAI.setAttribute("class","fas fa-angle-right pr-1");
  linksFooterA.appendChild(linksFooterAI);

  var linksFooterAP = document.createElement("p");
  linksFooterA.appendChild(linksFooterAP);

  var linksFooterAPTekst = document.createTextNode(`${linksFooterAText[i]}`);
  linksFooterAP.appendChild(linksFooterAPTekst);
}

var filesFooterUl = document.getElementById("filesFooterUl");

var filesFooterAHref = ["assets/js/main.js","assets/css/style.css","assets/css/responsive.css","sitemap.xml","robots.txt","dokumentacija.pdf"];
var filesFooterATekstovi = ["JavaScript","CSS","Responsive","Sitemap","Robots.txt","Dokumentacija"];
for(let i=0;i<filesFooterAHref.length;i++)
{
  var filesFooterLi = document.createElement("li");
  filesFooterLi.setAttribute("class","nav-item");
  filesFooterUl.appendChild(filesFooterLi);

  var filesFooterA = document.createElement("a");
  filesFooterA.setAttribute("class","nav-link d-flex align-items-center");
  filesFooterA.href = (`${filesFooterAHref[i]}`);
  filesFooterA.target = "_blank";
  filesFooterLi.appendChild(filesFooterA);

  var filesFooterAI = document.createElement("i");
  filesFooterAI.setAttribute("class","fas fa-angle-right pr-1");
  filesFooterA.appendChild(filesFooterAI);

  var filesFooterAP = document.createElement("p");
  filesFooterA.appendChild(filesFooterAP);

  var filesFooterAPTekst = document.createTextNode(`${filesFooterATekstovi[i]}`);
  filesFooterAP.appendChild(filesFooterAPTekst);
}

var footerInfoUl = document.getElementById("footerInfoUl");

var footerInfoPTekstovi = ["+381 62 232 32 32","Zdravka Čelara 16","viktor\u002evidakovic\u002e15\u002e20\u0040ict\u002eedu\u002ers"];
for(let i=0;i<footerInfoPTekstovi.length;i++)
{
  var footerInfoLi = document.createElement("li");
  footerInfoLi.setAttribute("class","nav-item");
  footerInfoUl.appendChild(footerInfoLi);
  var footerInfoLiP = document.createElement("p");
  footerInfoLiP.setAttribute("id",`info-${i+1}`);
  var footerInfoLiPTekst = document.createTextNode(`${footerInfoPTekstovi[i]}`);
  footerInfoLiP.appendChild(footerInfoLiPTekst);
  footerInfoLi.appendChild(footerInfoLiP);
}

var footerSocialUl = document.getElementById("footerSocialUl");

var footerSocialIKlase = ["instagram","facebook-square","youtube"];
var footerSocialPTekstovi = ["pekara_vidak","Pekar Vidak","Pekara Vidak"];
var footerSocialAHref = ["instagram.com/pekara_vidak/","facebook.com/channel/PekaraVidak/","youtube.com/c/pekara_vidak/"];
for(let i=0;i<footerSocialPTekstovi.length;i++)
{
  var footerSocialLi = document.createElement("li");
  footerSocialLi.setAttribute("class","nav-item mt-2 h-47");
  footerSocialUl.appendChild(footerSocialLi);

  var footerSocialA = document.createElement("a");
  footerSocialA.setAttribute("class","nav-link d-flex align-items-center");
  footerSocialA.target = ("_blank");
  footerSocialA.href = (`https://www.${footerSocialAHref[i]}`);
  footerSocialLi.appendChild(footerSocialA);

  var footerSocialAI = document.createElement("i");
  footerSocialAI.setAttribute("class",`fab fa-${footerSocialIKlase[i]} pr-2`);
  footerSocialA.appendChild(footerSocialAI);
  var footerSocialATekst = document.createTextNode(`${footerSocialPTekstovi[i]}`);
  footerSocialA.appendChild(footerSocialATekst);
}
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
    poruciProizvod.removeAttribute("selected", "");
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