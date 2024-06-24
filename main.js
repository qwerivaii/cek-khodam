function getKhodam(event) {
    event.preventDefault()
    let nama = $('#name').val()
    if ( nama == '') {
        alert('Nama harus di isi!')
    } else {
        let status = [
            "isi",
            "kosong"
        ]
        const randomStatus = Math.floor(Math.random() * status.length)
        if ( randomStatus == 0 ) {
            let khodam = [
                "Beat karbu",
                "Mio mirza",
                "Kuyang batok supra",
                "Iblis bekantan",
                "Psk ngesot",
                "Kuntilanak perjaka",
                "Tuyul sarden",
                "Banaspati introvert",
                "Wibu suka loli",
                "Pocong Mytichal glory",
                "Miniatur genderuwo",
                "Chukky versi boti",
                "Fans BTS"
            ]
            const random = Math.floor(Math.random() * khodam.length)
            $('#alert').html(`Hi,  ${nama.toUpperCase()} Khodam kamu adalah ${khodam[random]}`)
            $('#name').val('')
// DESK KHODAM
            if ( random == 0 ) {
                $('#desk').html("Beat karbu adalah khodam yang sangat di idamkan oleh kebanyakan orang apalagi orang tersebut sangat suka night ride (NR). Selain bisa menjaga diri kita, khodam Beat karbu ini juga bisa menghindari ada nya razia malam karena bisa mempercepat laju kendaraan.")
            } else if ( random == 1 ) {
                $('#desk').html("Mio mirza adalah khodam yang sangat bagus untuk kebanyakan orang karena selain bisa mencegah kecelakaan berrmotor, khodam Mio mirza ini juga dapat memuaskan hawa nafsu dari godaan iblis.")
            } else if ( random == 2 ) {
                $('#desk').html("Kuyang batok supra ini sangat elegan. Selain banyak bisa nya khodam inipun di idam-idamkan oleh masyarakat luar negeri, apalagi yang bunyinya stututu.")
            } else if ( random == 3 ) {
                $('#desk').html("Iblis bekantan, khodam yang satu ini suka usil terhadap tuannya, terkadang maling korek sembarangan, kalau diajak main gapernah bawa rokok maunya minta terus dan yang paling parah khodam ini sangat suka sok kaya didepan lawan jenis.")
            } else if ( random == 4 ) {
                $('#desk').html("Psk ngesot adalah khodam varian terbaru yang di update pada patch database khodam se indonesia pada tahun 2023 dan khodam ini sangat suka ngesot-ngesot, apalagi kalau ngesotnya di atas tubuh.")
            } else if ( random == 5 ) {
                $('#desk').html("Kuntilanak perjaka adalah khodam yang sangat tidak boleh diremehkan, karena khodam ini terkadang bisa melawan tuannya sendiri apalagi kalau soal percintaan semalam.")
            } else if ( random == 6 ) {
                $('#desk').html("Tuyul sarden adalah khodam tipe hemat yang bisa dikemas kemanapun kamu pergi, dan khodam ini tidak seperti khodam tuyul yang lainnya, khodam ini punya misi tersendiri yaitu maling sarden rumah tetangga pada bulan puasa.")
            } else if ( random == 7 ) {
                $('#desk').html("Banaspati introvert adalah khodam yang sangat overpower hanya saja terdapat kelemahan dengan khodam ini, yaitu tidak ingin keluar rumah. Khodam ini sangat cenderung lebih memilih didalam kamar dibandingkan dengan omelan tuannya dan khodam ini sangat suka nonton animek.")
            } else if ( random === 8 ) {
                $('#desk').html("Wibu suka loli adalah jenis khodam yang aneh tapi sangat berpengaruh untuk lingkungan jepang, hanya saja tidak di anjurkan untuk menahan khodam ini jika kalian punya adik wanita umur 15 kebawah, karena sudah pasti hidupnya tidak akan tenang.")
            } else if ( random === 9 ) {
                $('#desk').html("Pocong mytichal glory, ini adalah jenis khodam terbaik bagi kalian yan sering lose streak bermain game Mobile Legends, karena khodam ini bisa memecahkan sistem pencarian match kamu agar mendapat lawan yang full dark system.")
            } else if ( random === 10 ) {
                $('#desk').html("Miniatur genderuwo adalah jenis khodam yang sangat tidak berguna, selain ukurannya yang sangat kecil khodam ini pun biasanya hanya dijadikan bahan tertawaan anak-anak, oleh karena itu jika kamu punya khodam ini segera lapor dukun terdekat untuk segera dibersihkan.")
            } else if ( random === 11 ) {
                $('#desk').html("Chukky versi boti adalah khodam yang cukup menarik untuk dipelihara, karena kamu bisa berkamuflase diantara wanita hanya untuk melihat hal-hal yang biasanya sangat di impikan oleh seorang pria.")
            } else if ( random === 12 ) {
                $('#desk').html("Fans BTS adalah khodam yang cukup merepotkan selain kamu harus mencetak foto Taehyung seukuran 2meter kamu juga harus siap membela BTS apapun masalahnya, bahkan walaupun BTS musuh dunia kamu pun harus melawan seluruh dunia untuk BTS.")
            }

        } else {
            $('#alert').html(`Hi,  ${nama.toUpperCase()} Kamu tidak punya Khodam`)
            $('#name').val('')
        }
    }

}

$(document).ready(function() {
    $('#button').click(getKhodam)
})