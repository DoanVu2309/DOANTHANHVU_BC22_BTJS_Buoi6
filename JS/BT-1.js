
document.getElementById("btnInSoNguyen").addEventListener("click", function () {
    /**
     * Vòng lặp For
     * B1: Khai báo biến tong = 0, n = 0
     * B2: Gán điều kiện để tạo bước nhảy
     * - i là giá trị khỏi tạo, n là giá trị truyền vào, tổng là biến hứng giá trị
     * B3: Chạy xong điều kiện sẽ bước nhảy đến thoải điều kiện sẽ dừng lại
     */
    var tong = 0;
    var n = 0;
    for (var i = 0; i <= n; i++) {
        tong = tong + i;
        if (tong > 10000) {
            break;
        }
        n++;
    }
    console.log(n, tong);
    var ketQua = ("Số nguyên dương là: " + n)
    document.getElementById("ftThongBao_1").innerHTML = ketQua;
});