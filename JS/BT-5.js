function kiemTraSNT(number) {
    /**
     * Số nguyên tố sẽ không được nhỏ hơn 2 
     * => Vì nhỏ hơn 2 thì sẽ không phải số nguyên tố
     * Số nguyên tố sẽ không chia hết cho 2
     * => Vì số nguyên tố sẽ không phải là tích của số khác
     */
    // Biến cờ hiệu
    var flag = true;
    if (number < 2) {
        flag = false;
    }
    else if (number == 2) {
        flag = true;
    }
    else if (number % 2 == 0) {
        flag = false;
    }
    else {
        /**
         * Xem n có thuộc bội số của 2 và căn bậc n => Giá trị trả về chia cho chính, 
         * vì bằng 0 nên đây không phải số nguyên tố
         */
        for (var i = 3; i <= Math.sqrt(number); i += 2) {
            if (number % i == 0) {
                flag = false;
            }
        }
    }
    return flag;
}
document.getElementById("btnInSoNguyenTo").addEventListener("click", function () {
    var number = document.getElementById("txt_soNguyenTo").value * 1;
    /**
     * B1: Sau khi kiểm tra số nguyên tố thì sẽ gọi hàm để nhận giá trị vào sự kiện
     * B2: Xét vòng lặp xem số nguyên tố đó được thực thi hay không
     * B3: In kết quả hiển thị cho người dùng
     */
    var html = "";
    for (var i = 1; i < number; i++) {
        if(kiemTraSNT(i)){
          html += i + " ";  
        }
    }
    document.getElementById("ftThongBao_5").innerHTML = html;
});