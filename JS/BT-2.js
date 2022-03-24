/**
 * Bài Tập số 2
 * - INPUT
 * + Nhập x là số nguyên dương
 * + Nhập n là số mũ
 * - PROCESSING STEPS
 * + Phần tách hàm:
 * 1. Tạo biến tổng = 0
 * 2. Tạo biến luỹ thừa = 1 => Vì luỹ thừa bằng 0 thì kết quả ra sẽ bằng 0
 * 3. Dùng vòng lặp để xác định biên độ => i = 1; i <= n; i++
 * / Nếu nhập x = 2 và n = 3
 *  n = 1; x^1 => tong = 2; i = 2
 *  n = 2; x^2 => tong = 4; i = 3
 *  n = 3; x^3 => tong = 8; stop
 * => tong = 14
 * + Phần sự kiện:
 * 1. Nhập đầu vào
 * 2. Xử lý điều kiện
 * 3. In ra kết quả
 * - OUTPUT
 * + Tính tổng của số nguyên dương và mũ của nó
 */

function tinhTong(x,n) {
    var luyThua = 1;
    var tong = 0;
    for(var i = 1; i <= n; i++){
        luyThua = luyThua * x;
        tong = tong + luyThua;
    }
    return tong;
}

document.getElementById("btn_xuat").addEventListener("click",function(){
    // INPUT
    var x = document.getElementById("x").value * 1;
    var n = document.getElementById("n").value * 1;
    // PROCESSING STEPS
    if(n <= 0){
        alert("Nhập lại đi bạn!");
        return;
    }
    else{
        var tong = tinhTong(x,n);
    }
    // OUTPUT
    var ketQua = ("Kết quả tổng của 2 số nguyên dương là: " + tong)
    document.getElementById("ftThongBao_2").innerHTML = ketQua;
})