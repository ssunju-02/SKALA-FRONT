function showMyBag() {
  var myBag = [
    { name: "지갑", count: 1 },
    { name: "휴대폰", count: 1 },
    { name: "이어폰", count: 1 },
    { name: "손수건", count: 2 },
    { name: "볼펜", count: 3 }
  ];

  var result = "";
  for (var i = 0; i < myBag.length; i++) {
    result += myBag[i].name + ": " + myBag[i].count + "개\n";
  }

  alert(result);
}
