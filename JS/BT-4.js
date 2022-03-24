/**
 * Bài Tập số 4
 * - INPUT
 * + Không có đầu vào
 * - PROCESSING STEPS
 * + Xét màu cho div:
 * => divChan = màu đỏ
 * => divLe = màu xanh
 * + Khởi tạo biến hứng content để nhận giá trị trả về
 * + Tạo biến vị trí index để biết đâu là vị trí chẵn đâu là vị trí lẻ
 * + Chạy vòng lặp để tách chẵn và lẻ
 * - OUTPUT
 * + In ra thông báo
 */
document.getElementById("btnInSoChanLe").addEventListener("click", function () {
  /**
   * B1: Khởi tạo biến hứng giá trị là content
   * B2: Tạo biến vị trí index để xác định chẵn lẻ
   * B3: Chạy vòng lặp for
   * B4: Nếu là divChan thì sẽ có màu đỏ, divLe thì sẽ có màu xanh
   * B5: In ra thông báo 10 lần
   */
  var content = "";
  var index = 0;
  for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      index = i;
      var divChan = '<div class = "mystyle_chan">Div Chẵn ' + index + "</div>";
      content += divChan;
    } else {
      index = i;
      var divLe = '<div class = "mystyle_le">Div Lẻ ' + index + " </div>";
      content += divLe;
    }
  }
  document.getElementById("ftThongBao_4").innerHTML = content;
});
