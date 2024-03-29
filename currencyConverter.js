const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
  };
  const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
  let selects=document.querySelectorAll(".dropdownselect");
  let images = document.querySelectorAll("img");
  let form=document.querySelector("form");
  let count=1;
  let formCurrency=document.querySelector(".FROM select")
  let toCurrency=document.querySelector(".To select")
  for(let select of selects){
    for(let con in countryList){
        const option=document.createElement("option");
        option.setAttribute("value",con);
        option.append(con);
        if(con=="INR" && count==1){
            option.selected=true;
            images[count-1].src = "https://flagsapi.com/" + con.substring(0, 2) + "/flat/64.png";
        }
        else if(con=="USD" && count==2){
            option.selected=true;
            images[count-1].src = "https://flagsapi.com/" + con.substring(0, 2) + "/flat/64.png";
        }
        select.append(option);
    }
    count++;
    select.addEventListener("change",(event)=>{
        flagChange(event.target)
    })
}
let flagChange=(element)=>{
    let con=element.value;
    element.parentElement.querySelector("img").src="https://flagsapi.com/" + con.substring(0, 2) + "/flat/64.png";
}
form.addEventListener("submit",async (event)=>{
    event.preventDefault();
    let inp=document.querySelector("input");
    let currency=inp.value;
    console.log(formCurrency.value,toCurrency.value);
    const URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${formCurrency.value.toLowerCase()}.json`
    try{
        let response=await fetch(URL);
        let INR=await response.json();
        let toCur=toCurrency.value.toLowerCase();
        let formCur=formCurrency.value.toLowerCase();
        let convRate=INR[formCur][toCur];
        let inpVal=document.querySelector("input").value;
        let res=inpVal*convRate;
        let p1 = document.querySelector(".para")

        if (p1) {
            p1.remove();
        }
        let p=document.createElement("p");
        let textnode=document.createTextNode(`${inpVal} is ${res}`);
        p.append(textnode)
        p.className="para"
        document.querySelector("button").parentNode.insertBefore(p,document.querySelector("button"));

    }
    catch(error){
        console.log(error)
    }
    
})
