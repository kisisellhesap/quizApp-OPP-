/*

OOP Nedir ?

Bir obje içerisinde o objenin bilgilerini tutan veriler ve fonksiyonlar
vardır.


Quiz App Constructor Kullanımı *





*/



/* Obje ile basit bir soru uygulaması */

// let soru = {

//     soruMetni : "İstanbulun fethi kaç yılında olmuştur ?",
//     cevapSeçenekleri  : {
//         a: "1500",
//         b: "1453",
//         c: " 2023"
//     },
//     dogruCevap : "b",
//     cevapKontrolü : function (cevap){
//         return  cevap === this.dogruCevap;
//     }

// }


// console.log(soru);
// console.log(soru.cevapSeçenekleri);
// console.log(soru.cevapKontrolü("b"));

/*

Hal böyle olunca bir quiz App yaptığımızı düşünürsek birden fazla
soru türetmemiz gerekir.
Her soruyu da böyle türetmek tekrardan kopyala yapıştır yapmak anlamsız olur.
Bu noktada bir constructor aracılığıyla birden fazla nesne yani
soru türetmek mümkündür.

*/


/* ------------ */



/* Nesne oluşturma ( Constructor) */

/*
Eğer ki aynı değerler üzerinden birden fazla soru türeteceksek object Literals yerine
constructor kullanmak daha mantıklı olacaktır.
*/


/*

Constructor oluşumu fonksiyon oluşturmaya benzer. Fakat constructor oluştururken
dikkat etmemiz gereken şey fonksiyon ismini büyük yazmaktır.

Daha sonrasında dışarıdan gelen değerleri bir parametre içerisine atarak onları
içeride bu constructorun değerleriyle aynı olması için eşit yapıyoruz.

Sebebiyse bu constructor üzerinden oluşturacağımız nesnenin ya da nesnelerin
sadece özelliklerinin aynı olduğu ama değerlerin aynı olmadığını bir anlamda
vurgulamaktır.

Yani  Soru constructor'ı üzerinden 2 nesne oluşturup onları aynı özellikleri
atamış oluyorum fakat verdiğim değerler her türettiğim nesne için farklı olmuş oluyor
*/

// function Soru(soruMetni,cevapSeçenekleri,dogruCevap){
// this.soruMetni=soruMetni;
// this.cevapSeçenekleri=cevapSeçenekleri;
// this.dogruCevap=dogruCevap;
// this.cevapKontrolü=function(cevap) {
//     return cevap ===this.dogruCevap;
// }

// console.log(this);
// }


// let soru1 = new Soru("İstanbulun fethi kaç yılında olmuştur ?",  {
//     a: "1500",
//     b: "1453",
//     c: " 2023"
// },"b");

// let soru2 = new Soru("Sakaryanın kurtuluşu kaç yılında olmuştur ?",  {
//     a: "1996",
//     b: "1250",
//     c: " 2028"
// },"a");


// console.log(soru1.soruMetni);
// console.log(soru1.cevapSeçenekleri);
// console.log(soru1.dogruCevap);
// console.log(soru1.cevapKontrolü("c"));

// console.log(soru2.soruMetni);
// console.log(soru2.cevapSeçenekleri);
// console.log(soru2.dogruCevap);
// console.log(soru2.cevapKontrolü("a"));


/* -------------------- */


/* Prototype */


/*  Boş */



function Soru(soruMetni,cevapSeçenekleri,dogruCevap){
    this.soruMetni=soruMetni;
    this.cevapSeçenekleri=cevapSeçenekleri;
    this.dogruCevap=dogruCevap;
    /* fonksiyonları burada yazmak yerine prototype aracılığıyla yazıyoruz */

    console.log(this);
    }


    Soru.prototype.cevapKontrolü=function(cevap) {
        return cevap ===this.dogruCevap;
    }



let soru1 = new Soru("İstanbulun fethi kaç yılında olmuştur ?",  {
    a: "1500",
    b: "1453",
    c: " 2023"
},"b");

let soru2 = new Soru("Sakaryanın kurtuluşu kaç yılında olmuştur ?",  {
    a: "1996",
    b: "1250",
    c: " 2028"
},"a");



// console.log(soru1.soruMetni);
// console.log(soru1.cevapSeçenekleri);
// console.log(soru1.dogruCevap);
// console.log(soru1.cevapKontrolü("c"));

// console.log(soru2.soruMetni);
// console.log(soru2.cevapSeçenekleri);
// console.log(soru2.dogruCevap);
// console.log(soru2.cevapKontrolü("a"));




// function Person(name, surname) {
//     this.name = name;
//     this.surname = surname;
  
//     this.fullname = function() {
//       return `${this.name} ${this.surname}`
//     };

//   }
  
//   const a = new Person();
//   const b = new Person();
//   console.log(a.fullname === b.fullname); // false

  
  //////// prototype



  function Person(name, surname) {
    this.name = name;
    this.surname = surname;
console.log(this);
  }
   // prototype
  Person.prototype.fullname = function() {
    return `${this.name} ${this.surname}`;
  };
  
  const a = new Person("a");
  const b = new Person("b");
  console.log(a.fullname());
  console.log(b.fullname());
  console.log(a.fullname === b.fullname); // true


  // Quiz Constructor


  