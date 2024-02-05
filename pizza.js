//ini adalah cara lu, gw menghargainya Yansen
//tag html untuk kartu
// const card = document.querySelector('.allmenu');
// const kartuKartu = [];
// const kartu = `
// <div class="col-md-4 kolom">

// </div>
// `;

// const kartuDalam = [];

// for(let i = 0; i < 5; i++){
//     kartuDalam.push(`
//     <div class="card mt-4 mb-4">
//         <img src="" class="card-img-top gambar" alt="American Favourite">
//         <div class="card-body">
//             <h5 class="card-title nama"></h5>
//             <p class="card-text deskripsi"></p>
//             <h5 class="card-title harga"></h5>
//             <a href="#" class="btn btn-primary">Order now!</a>
//         </div>
//     </div>
//     `)
// };

// card.innerHTML = kartu;
// const kolom = document.querySelector('.kolom');
// kolom.innerHTML = kartuDalam.join('');
// for(let i = 0; i < 3; i++){
//     kartuKartu.push(card.innerHTML);
// }

// card.innerHTML = kartuKartu.join('');

//untuk ambil data dari JSON
// const menu = {
//     gambar: document.querySelectorAll('.gambar'), 
//     nama: document.querySelectorAll('.nama'),
//     deskripsi: document.querySelectorAll('.deskripsi'),
//     harga: document.querySelectorAll('.harga')
// };

// $.getJSON('data/pizza.json', data => {
//     data.menu.map((isi, index) => {
//         menu.gambar[index].src = `img/menu/${isi.gambar}`;
//         menu.nama[index].innerHTML = isi.nama;
//         menu.deskripsi[index].innerHTML = isi.deskripsi;
//         menu.harga[index].innerHTML = `Rp${isi.harga}`;
//     });
// });


//kalau pakai jQuery
//jadi disini kita pakai methodnya jQuery, yaitu $.each(looping object) dan $.append(tambahkan di akhir)
function tampilkanAllMenu () {
    $.getJSON('data/pizza.json', function(data) {
        let menu = data.menu;
        $.each(menu, function(index, data) {
            $('#daftar-menu').append(`
            <div class="col-md-4">
                <div class="card mt-4 mb-4">
                    <img src="img/menu/${data.gambar}" class="card-img-top" alt="American Favourite">
                    <div class="card-body">
                        <h5 class="card-title">${data.nama}</h5>
                        <p class="card-text">${data.deskripsi}</p>
                        <h5 class="card-title">Rp${data.harga}</h5>
                        <a href="#" class="btn btn-primary">Order now!</a>
                    </div>
                </div>
            </div>
            `);
        });
    });
};

tampilkanAllMenu();

$('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');             //lu jgn pakai arrow function ya kalau ada pakai this :)

    let kategori = this.innerHTML; //atau 
    //let kategori = $(this).html();
    $('h1').html(kategori);

    $.getJSON('data/pizza.json', function(data){
        let menu = data.menu;
        let content = '';

        $.each(menu, function(index, data){
            if(data.kategori == kategori.toLowerCase()){
                content += `
                <div class="col-md-4">
                    <div class="card mt-4 mb-4">
                        <img src="img/menu/${data.gambar}" class="card-img-top" alt="American Favourite">
                        <div class="card-body">
                            <h5 class="card-title">${data.nama}</h5>
                            <p class="card-text">${data.deskripsi}</p>
                            <h5 class="card-title">Rp${data.harga}</h5>
                            <a href="#" class="btn btn-primary">Order now!</a>
                        </div>
                    </div>
                </div>
                `};
        });

        $('#daftar-menu').html(content);

        if(kategori == 'All Menu'){
            tampilkanAllMenu();
        };
    });
});