/**
 * INPUT
 * - Nhập biến n
 * PROCESSING STEPS
 * B1: Xác định giá trị khởi tạo => Khỏi tạo i và gán giá trị bằng 1
 * B2: Kiểm tra điều kiện => Kiểm tra thoải điều kiện hay không
 * B3: Tạo biến bước nhảy => Xác định biến bước nhảy sẽ tăng hoặc giảm
 * OUTPUT
 * - In ra thông báo sô nguyên dương nhỏ nhất
 */
function tinhGiaiThua(n) {
  var gt = 1; // Giai thừa được gán là bằng 1, vì giai thừa = 0 thì cũng bằng 1
  for (var i = 1; i <= n; i++) {
    gt = gt * i;
  }
  return gt;
}

document.getElementById("btnTinhGT").addEventListener("click", function () {
  var n = document.getElementById("nhapN").value * 1;
  if (n <= 0) {
    alert("Thêm số dùm cái!");
    return;
  } else {
    var gt = tinhGiaiThua(n);
  }
  var content = "Giai thừa của: " + n + " là số " + gt;
  document.getElementById("ftThongBao_3").innerHTML = content;
});
