function tahunKabisat(tahun) {
  if (tahun % 4 === 0) {
    console.log('Kabisat');
  } else if (tahun % 4 === 100) {
    console.log('Kabisat');
  } else if (tahun % 4 === 400) {
    console.log('Kabisat');
  } else {
    console.log('Bukan Kabisat');
  }
}

tahunKabisat(1992);
tahunKabisat(1990);
tahunKabisat(2100);
