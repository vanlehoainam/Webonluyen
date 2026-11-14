// ==================== DATA ====================
// Mẫu câu hỏi (tự biên soạn dựa trên nội dung phổ biến, không sao chép nguyên văn ngân hàng chính thức)
const sampleQuestions = [
  // Chương 1 - Quy tắc
  { id: 1, chapter: 1, liet: false, q: "Khi điều khiển xe trên đường, người lái xe phải chấp hành hiệu lệnh nào trước tiên nếu các hiệu lệnh mâu thuẫn?", options: ["Hiệu lệnh của người điều khiển giao thông", "Đèn tín hiệu giao thông", "Biển báo hiệu đường bộ", "Theo quyết định cá nhân nhưng bảo đảm an toàn"], answer: 0, explain: "Hiệu lệnh của người điều khiển giao thông được ưu tiên cao nhất." },
  { id: 2, chapter: 1, liet: true, q: "Người điều khiển xe mô tô có được phép sử dụng xe để kéo hoặc đẩy các phương tiện khác không?", options: ["Được phép kéo xe nhỏ hơn", "Được phép trong trường hợp khẩn cấp", "Không được phép dưới mọi trường hợp", "Được phép nếu có người hỗ trợ"], answer: 2, explain: "Hành vi này bị nghiêm cấm để bảo đảm an toàn giao thông." },
  { id: 3, chapter: 1, liet: false, q: "Tốc độ tối đa cho phép đối với xe ô tô con khi chạy trong khu vực đông dân cư (trừ đường cao tốc) là bao nhiêu?", options: ["40 km/h", "50 km/h", "60 km/h", "70 km/h"], answer: 1, explain: "Theo quy định hiện hành về tốc độ trong khu vực đông dân cư." },
  { id: 4, chapter: 1, liet: true, q: "Khi gặp hiệu lệnh của cảnh sát giao thông trái với đèn tín hiệu, người tham gia giao thông phải chấp hành theo hiệu lệnh nào?", options: ["Đèn tín hiệu", "Hiệu lệnh của cảnh sát giao thông", "Biển báo", "Tự quyết định"], answer: 1, explain: "Hiệu lệnh của người điều khiển giao thông luôn được ưu tiên." },
  { id: 5, chapter: 1, liet: false, q: "Khoảng cách an toàn tối thiểu giữa hai xe khi chạy với tốc độ 60 km/h trên đường khô ráo là bao nhiêu?", options: ["30 m", "40 m", "50 m", "60 m"], answer: 0, explain: "Quy tắc khoảng cách an toàn cơ bản." },
  { id: 6, chapter: 2, liet: false, q: "Người lái xe cần có thái độ như thế nào đối với người đi bộ và người khuyết tật?", options: ["Ưu tiên và nhường đường", "Chỉ nhường khi có biển báo", "Không cần chú ý đặc biệt", "Bóp còi để họ tránh"], answer: 0, explain: "Văn hóa giao thông yêu cầu nhường đường và hỗ trợ người yếu thế." },
  { id: 7, chapter: 2, liet: true, q: "Người được chở trên xe mô tô có được sử dụng ô khi trời mưa không?", options: ["Được phép", "Không được phép", "Được phép nếu ngồi sau", "Tùy tình huống"], answer: 1, explain: "Sử dụng ô trên xe mô tô ảnh hưởng đến an toàn và bị cấm." },
  { id: 8, chapter: 3, liet: false, q: "Khi xuống dốc dài, người lái xe nên sử dụng cách nào để giảm tốc độ an toàn?", options: ["Chỉ dùng phanh chân liên tục", "Sử dụng số thấp kết hợp phanh", "Tắt máy để tiết kiệm nhiên liệu", "Đi số cao và nhả ga"], answer: 1, explain: "Sử dụng động cơ hãm (số thấp) giúp tránh cháy phanh." },
  { id: 9, chapter: 3, liet: false, q: "Khi lái xe ban đêm, khi nào nên chuyển từ đèn chiếu xa sang đèn chiếu gần?", options: ["Khi gặp xe đi ngược chiều", "Khi đi trên đường vắng", "Khi trời mưa to", "Khi đi vào khu vực đông dân cư"], answer: 0, explain: "Để không gây chói mắt cho người điều khiển xe ngược chiều." },
  { id: 10, chapter: 4, liet: false, q: "Khi động cơ ô tô bị quá nhiệt, người lái xe nên làm gì đầu tiên?", options: ["Tắt máy ngay lập tức", "Mở nắp két nước ngay", "Cho xe chạy chậm hoặc dừng ở nơi an toàn, để động cơ nguội dần", "Tăng ga để làm mát"], answer: 2, explain: "Cần để nguội từ từ, tránh mở nắp khi còn nóng." },
  { id: 11, chapter: 5, liet: false, q: "Biển báo hình tròn, viền đỏ, nền trắng, có hình xe ô tô bị gạch chéo nghĩa là gì?", options: ["Cấm ô tô", "Cấm xe mô tô", "Cấm xe đạp", "Cấm người đi bộ"], answer: 0, explain: "Đây là biển báo cấm xe ô tô." },
  { id: 12, chapter: 5, liet: false, q: "Biển báo hình tam giác vàng, viền đỏ, có hình người đi bộ nghĩa là gì?", options: ["Đường dành cho người đi bộ", "Cẩn thận có người đi bộ", "Cấm người đi bộ", "Khu vực trường học"], answer: 1, explain: "Biển cảnh báo nguy hiểm có người đi bộ." },
  { id: 13, chapter: 6, liet: false, q: "Khi đến ngã tư không có tín hiệu đèn, thứ tự ưu tiên như thế nào?", options: ["Xe bên phải được ưu tiên", "Xe bên trái được ưu tiên", "Xe nào đến trước được đi trước", "Xe lớn được ưu tiên"], answer: 0, explain: "Quy tắc nhường đường bên phải tại giao lộ không có tín hiệu." },
  { id: 14, chapter: 6, liet: false, q: "Trong hình sa hình, khi xe của bạn và xe khác cùng đến giao lộ, bạn phải làm gì?", options: ["Tăng tốc để đi trước", "Nhường đường cho xe bên phải", "Bóp còi liên tục", "Đi thẳng bất chấp"], answer: 1, explain: "Áp dụng quy tắc nhường đường bên phải." },
  { id: 15, chapter: 1, liet: true, q: "Hành vi điều khiển xe trên đường mà trong máu hoặc hơi thở có nồng độ cồn bị xử lý như thế nào?", options: ["Chỉ bị nhắc nhở", "Bị phạt hành chính và có thể bị tước GPLX", "Không bị xử lý nếu dưới mức cho phép cũ", "Chỉ phạt tiền nhẹ"], answer: 1, explain: "Quy định nghiêm cấm tuyệt đối nồng độ cồn khi lái xe." },
  { id: 16, chapter: 1, liet: true, q: "Người lái xe không được vượt xe khác trong trường hợp nào?", options: ["Trên cầu hẹp", "Khi đường rộng và thông thoáng", "Khi xe trước báo hiệu xin vượt", "Trên đường cao tốc có đủ điều kiện"], answer: 0, explain: "Cấm vượt trên cầu hẹp, đường vòng, nơi tầm nhìn hạn chế..." },
  { id: 17, chapter: 1, liet: false, q: "Khi muốn chuyển hướng, người lái xe phải báo hiệu trước bao lâu?", options: ["Ít nhất 3 giây trước khi chuyển hướng", "Ít nhất 5 giây", "Ngay khi bắt đầu đánh lái", "Không cần báo hiệu nếu không có xe khác"], answer: 0, explain: "Phải báo hiệu bằng đèn xi nhan trước khi chuyển hướng." },
  { id: 18, chapter: 3, liet: false, q: "Khi lái xe trên đường cao tốc, khoảng cách an toàn tối thiểu với xe phía trước khi chạy 100 km/h là khoảng bao nhiêu?", options: ["50 m", "70 m", "100 m", "150 m"], answer: 2, explain: "Khoảng cách an toàn tăng theo tốc độ." },
  { id: 19, chapter: 5, liet: false, q: "Biển báo có chữ P trong vòng tròn xanh nghĩa là gì?", options: ["Cấm đỗ xe", "Nơi đỗ xe", "Bến xe buýt", "Trạm xăng"], answer: 1, explain: "Biển chỉ dẫn nơi được phép đỗ xe." },
  { id: 20, chapter: 6, liet: false, q: "Khi thấy xe ưu tiên (cứu thương, chữa cháy, công an) đang phát tín hiệu ưu tiên, người lái xe phải làm gì?", options: ["Tiếp tục đi nếu đang ở làn của mình", "Giảm tốc độ, tránh đường và nhường đường ngay", "Bóp còi để cảnh báo", "Tăng tốc để tránh"], answer: 1, explain: "Phải nhường đường tuyệt đối cho xe ưu tiên." },
  { id: 21, chapter: 1, liet: true, q: "Người điều khiển phương tiện tham gia giao thông đường bộ mà không có GPLX theo quy định thì bị xử lý như thế nào?", options: ["Chỉ bị nhắc nhở", "Bị phạt tiền và có thể bị tịch thu phương tiện trong một số trường hợp", "Không bị xử lý nếu biết lái", "Chỉ phạt cảnh cáo"], answer: 1, explain: "Lái xe không có GPLX là hành vi vi phạm nghiêm trọng." },
  { id: 22, chapter: 2, liet: false, q: "Khi xảy ra tai nạn giao thông, người lái xe có trách nhiệm gì?", options: ["Rời khỏi hiện trường ngay để tránh liên lụy", "Dừng xe, sơ cứu nạn nhân, báo cáo cơ quan chức năng", "Chỉ cần gọi điện cho người nhà", "Đẩy xe vào lề đường rồi đi tiếp"], answer: 1, explain: "Có trách nhiệm cứu giúp và báo cáo theo quy định." },
  { id: 23, chapter: 3, liet: false, q: "Khi xe bị chết máy giữa đường, người lái xe nên làm gì?", options: ["Để xe ngay giữa đường và đi tìm người sửa", "Đưa xe vào vị trí an toàn, bật đèn cảnh báo nguy hiểm", "Đẩy xe tiếp tục đi", "Gọi điện thoại trong xe mà không quan sát"], answer: 1, explain: "Ưu tiên an toàn cho bản thân và người tham gia giao thông khác." },
  { id: 24, chapter: 5, liet: false, q: "Biển báo hình tròn đỏ, bên trong có mũi tên đen bị gạch chéo nghĩa là gì?", options: ["Cấm rẽ theo hướng mũi tên", "Chỉ được rẽ theo hướng mũi tên", "Đường một chiều", "Giao nhau với đường ưu tiên"], answer: 0, explain: "Biển cấm rẽ theo hướng chỉ định." },
  { id: 25, chapter: 6, liet: false, q: "Trong tình huống xe đi phía trước đột ngột phanh gấp, bạn nên làm gì?", options: ["Đánh lái sang làn bên cạnh ngay", "Giữ khoảng cách, giảm tốc từ từ và quan sát", "Bóp còi liên tục", "Tăng tốc vượt lên"], answer: 1, explain: "Giữ khoảng cách an toàn và xử lý êm là ưu tiên." },
  { id: 26, chapter: 1, liet: false, q: "Người ngồi trên xe ô tô bắt buộc phải thắt dây an toàn ở vị trí nào?", options: ["Chỉ ghế trước", "Tất cả các ghế có trang bị dây an toàn", "Chỉ khi chạy trên cao tốc", "Không bắt buộc với trẻ em"], answer: 1, explain: "Quy định bắt buộc thắt dây an toàn cho tất cả vị trí có trang bị." },
  { id: 27, chapter: 4, liet: false, q: "Dầu động cơ có vai trò chính gì?", options: ["Chỉ bôi trơn", "Bôi trơn, làm mát và làm sạch động cơ", "Chỉ làm mát", "Tăng công suất động cơ"], answer: 1, explain: "Dầu động cơ có nhiều chức năng quan trọng." },
  { id: 28, chapter: 1, liet: true, q: "Hành vi không chấp hành hiệu lệnh dừng xe của cảnh sát giao thông bị xử lý như thế nào?", options: ["Không bị xử lý", "Bị phạt hành chính, có thể bị tước GPLX", "Chỉ bị nhắc nhở miệng", "Phạt tiền nhẹ"], answer: 1, explain: "Không chấp hành hiệu lệnh của CSGT là vi phạm nghiêm trọng." },
  { id: 29, chapter: 5, liet: false, q: "Biển báo hình vuông xanh có chữ P và mũi tên nghĩa là gì?", options: ["Cấm đỗ xe", "Nơi đỗ xe (chỉ dẫn hướng)", "Bến xe buýt", "Trạm dừng nghỉ"], answer: 1, explain: "Biển chỉ dẫn nơi đỗ xe." },
  { id: 30, chapter: 6, liet: false, q: "Khi lái xe trong điều kiện trời mưa, tầm nhìn hạn chế, người lái xe nên làm gì?", options: ["Tăng tốc để về đích nhanh", "Giảm tốc độ, tăng khoảng cách, bật đèn", "Đi sát lề đường bên trái", "Sử dụng đèn chiếu xa liên tục"], answer: 1, explain: "An toàn là ưu tiên hàng đầu khi điều kiện thời tiết xấu." },
  // Thêm câu để đủ dùng cho các hạng cao hơn
  { id: 31, chapter: 1, liet: false, q: "Khi điều khiển xe qua đường ngang đường sắt, người lái xe phải làm gì?", options: ["Tăng tốc để qua nhanh", "Quan sát, giảm tốc độ, chỉ qua khi an toàn", "Bóp còi liên tục", "Đi theo xe phía trước"], answer: 1, explain: "Phải bảo đảm an toàn tuyệt đối khi qua đường sắt." },
  { id: 32, chapter: 1, liet: true, q: "Người lái xe sử dụng điện thoại khi đang điều khiển phương tiện bị xử lý như thế nào?", options: ["Không bị xử lý", "Bị phạt hành chính theo quy định", "Chỉ bị nhắc nhở", "Phạt nhẹ nếu không gây tai nạn"], answer: 1, explain: "Sử dụng điện thoại khi lái xe là hành vi nguy hiểm và bị cấm." },
  { id: 33, chapter: 3, liet: false, q: "Khi lùi xe, người lái xe phải làm gì?", options: ["Chỉ nhìn gương chiếu hậu", "Quan sát phía sau, bật tín hiệu, lùi chậm", "Lùi nhanh để xong việc", "Không cần quan sát nếu đường vắng"], answer: 1, explain: "Lùi xe phải hết sức cẩn thận và quan sát toàn diện." },
  { id: 34, chapter: 5, liet: false, q: "Biển báo hình tròn xanh có mũi tên trắng chỉ hướng đi được phép nghĩa là gì?", options: ["Cấm đi theo hướng đó", "Hướng đi phải theo", "Đường một chiều", "Chỉ dẫn hướng đường"], answer: 1, explain: "Biển chỉ hướng được phép đi." },
  { id: 35, chapter: 2, liet: false, q: "Người lái xe cần trang bị kiến thức gì về phòng cháy chữa cháy?", options: ["Không cần thiết", "Biết sử dụng bình chữa cháy và kỹ năng thoát hiểm cơ bản", "Chỉ cần biết số điện thoại cứu hỏa", "Để nhân viên chuyên trách lo"], answer: 1, explain: "Kiến thức PCCC là nội dung bắt buộc trong đào tạo lái xe." },
  { id: 36, chapter: 6, liet: false, q: "Khi xe phía trước báo hiệu xin vượt, bạn phải làm gì nếu đủ điều kiện an toàn?", options: ["Tăng tốc không cho vượt", "Giữ nguyên hoặc giảm nhẹ tốc độ, không cản trở", "Đánh lái sang trái", "Bóp còi cảnh báo"], answer: 1, explain: "Phải tạo điều kiện cho xe sau vượt khi an toàn." },
  { id: 37, chapter: 1, liet: false, q: "Trên đường có dải phân cách cứng, người lái xe được phép quay đầu xe ở đâu?", options: ["Bất kỳ vị trí nào", "Chỉ tại nơi có khoảng trống hoặc được phép", "Ở đầu dải phân cách", "Không được quay đầu"], answer: 1, explain: "Chỉ được quay đầu ở vị trí an toàn, đúng quy định." },
  { id: 38, chapter: 4, liet: false, q: "Hệ thống phanh bị mất tác dụng đột ngột, người lái xe nên làm gì?", options: ["Tăng ga để thoát", "Sử dụng phanh tay từ từ, tìm chỗ dừng an toàn", "Tắt máy ngay lập tức", "Nhảy khỏi xe"], answer: 1, explain: "Phải giữ bình tĩnh và sử dụng các biện pháp hãm phụ." },
  { id: 39, chapter: 5, liet: false, q: "Biển báo hình tam giác vàng có hình xe lửa nghĩa là gì?", options: ["Cấm đường sắt", "Giao nhau với đường sắt không có rào chắn", "Ga đường sắt", "Cấm đi qua đường sắt"], answer: 1, explain: "Biển cảnh báo giao cắt với đường sắt không rào chắn." },
  { id: 40, chapter: 1, liet: true, q: "Người lái xe đi vào đường cao tốc theo chiều ngược lại bị xử lý như thế nào?", options: ["Nhắc nhở", "Phạt hành chính nặng và có thể bị tước GPLX", "Không bị xử lý nếu sửa sai kịp", "Phạt nhẹ"], answer: 1, explain: "Đi ngược chiều trên cao tốc là vi phạm đặc biệt nghiêm trọng." },
  { id: 41, chapter: 3, liet: false, q: "Khi trời mưa to, đường trơn, người lái xe nên điều chỉnh tốc độ như thế nào?", options: ["Giữ nguyên tốc độ", "Giảm tốc độ phù hợp với điều kiện mặt đường", "Tăng tốc để về nhanh", "Chỉ giảm khi thấy nguy hiểm"], answer: 1, explain: "Phải chủ động giảm tốc khi điều kiện mặt đường xấu." },
  { id: 42, chapter: 6, liet: false, q: "Thứ tự ưu tiên của các loại xe khi cùng đến giao lộ không có tín hiệu?", options: ["Xe con → xe tải → xe buýt", "Xe bên phải được ưu tiên (trừ xe ưu tiên)", "Xe lớn được đi trước", "Ai đến trước đi trước"], answer: 1, explain: "Quy tắc nhường đường bên phải là cơ bản." },
  { id: 43, chapter: 2, liet: false, q: "Văn hóa giao thông bao gồm những yếu tố nào?", options: ["Chỉ tuân thủ luật", "Tuân thủ pháp luật, tôn trọng người khác, ứng xử văn minh", "Chỉ cần không gây tai nạn", "Đi nhanh nhưng an toàn"], answer: 1, explain: "Văn hóa giao thông là tổng hòa nhiều yếu tố ứng xử." },
  { id: 44, chapter: 5, liet: false, q: "Biển báo cấm dừng và đỗ xe có hình dạng như thế nào?", options: ["Hình tròn đỏ, có chữ S hoặc P bị gạch", "Hình vuông xanh", "Hình tam giác vàng", "Hình chữ nhật trắng"], answer: 0, explain: "Biển cấm dừng/đỗ thường là hình tròn viền đỏ." },
  { id: 45, chapter: 1, liet: false, q: "Khi tham gia giao thông, người lái xe phải mang theo giấy tờ gì?", options: ["Chỉ GPLX", "GPLX, đăng ký xe, bảo hiểm bắt buộc (và các giấy tờ liên quan)", "Chỉ CCCD", "Không cần mang gì nếu đã thuộc"], answer: 1, explain: "Phải mang đủ giấy tờ theo quy định khi tham gia giao thông." }
];

// ==================== CẤU HÌNH CÁC HẠNG ====================
// Theo cấu trúc hiện hành (đến hết 28/02/2027) - Thông tư 108/2026/TT-BCA
const hangConfigs = {
  A1:  { name: "A1",  label: "A1 – Xe máy ≤ 125cc",     questions: 25, minutes: 19, pass: 21, desc: "Mô tô 2 bánh đến 125 cm³" },
  A:   { name: "A",   label: "A – Xe máy > 125cc",      questions: 25, minutes: 19, pass: 23, desc: "Mô tô 2 bánh trên 125 cm³" },
  B:   { name: "B",   label: "B – Ô tô con",            questions: 30, minutes: 20, pass: 27, desc: "Ô tô đến 9 chỗ, tải ≤ 3.500kg" },
  C1:  { name: "C1",  label: "C1 – Xe tải nhẹ",         questions: 35, minutes: 22, pass: 32, desc: "Xe tải có khối lượng đến 7.500kg" },
  C:   { name: "C",   label: "C – Xe tải",              questions: 40, minutes: 24, pass: 36, desc: "Xe tải trên 7.500kg" },
  D1:  { name: "D1",  label: "D1 – Xe khách nhỏ",       questions: 45, minutes: 26, pass: 41, desc: "Xe chở người đến 16 chỗ" },
  D2:  { name: "D2",  label: "D2 – Xe khách trung",     questions: 45, minutes: 26, pass: 41, desc: "Xe chở người từ 16–30 chỗ" },
  D:   { name: "D",   label: "D – Xe khách lớn",        questions: 45, minutes: 26, pass: 41, desc: "Xe chở người trên 30 chỗ" },
  CE:  { name: "CE",  label: "CE – Xe tải + rơ-moóc",   questions: 45, minutes: 26, pass: 41, desc: "Hạng C kéo rơ-moóc" }
};

let selectedHang = null;
let examQuestions = [];
let currentIndex = 0;
let userAnswers = {};
let visitedQuestions = {}; // Track câu đã xem
let timerInterval = null;
let timeLeft = 0;
let currentConfig = null;

// ==================== NAVIGATION ====================
document.querySelectorAll('#mainNav button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#mainNav button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(btn.dataset.section).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Khi mở tab thi thử → render nút chọn hạng
    if (btn.dataset.section === 'thithu') {
      renderHangSelector();
    }
  });
});

// ==================== CHAPTER PRACTICE ====================
function loadChapter(ch) {
  const container = document.getElementById('chapterContent');
  let qs = sampleQuestions.filter(q => ch === 0 ? q.liet : q.chapter === ch);
  if (qs.length === 0) qs = sampleQuestions.slice(0, 8);

  let html = `<h2>${ch === 0 ? 'Nhóm câu điểm liệt (mẫu)' : 'Chương ' + ch + ' (mẫu câu hỏi)'}</h2>`;
  html += `<p style="color:var(--muted);margin-bottom:1rem">Hiển thị ${qs.length} câu mẫu. Click đáp án để xem giải thích.</p>`;

  qs.forEach((q, idx) => {
    html += `
      <div class="question-card ${q.liet ? 'liet' : ''}">
        <div class="q-num">
          Câu ${idx + 1} ${q.liet ? '<span class="tag tag-liet">ĐIỂM LIỆT</span>' : ''}
        </div>
        <p><strong>${q.q}</strong></p>
        <div class="options" data-qid="${q.id}">
          ${q.options.map((opt, i) => `
            <label onclick="checkAnswer(this, ${q.id}, ${i}, ${q.answer})">
              <input type="radio" name="q${q.id}" value="${i}"> ${String.fromCharCode(65 + i)}. ${opt}
            </label>
          `).join('')}
        </div>
        <div class="explain" id="explain-${q.id}">
          <strong>Giải thích:</strong> ${q.explain}<br>
          <strong>Đáp án đúng:</strong> ${String.fromCharCode(65 + q.answer)}. ${q.options[q.answer]}
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

function checkAnswer(label, qid, chosen, correct) {
  const parent = label.parentElement;
  parent.querySelectorAll('label').forEach(l => {
    l.classList.remove('correct', 'wrong');
    l.style.pointerEvents = 'none';
  });
  if (chosen === correct) {
    label.classList.add('correct');
  } else {
    label.classList.add('wrong');
    parent.querySelectorAll('label')[correct].classList.add('correct');
  }
  document.getElementById('explain-' + qid).classList.add('show');
}

// ==================== HẠNG SELECTOR ====================
function renderHangSelector() {
  const container = document.getElementById('hangSelector');
  if (!container) return; // form-based UI không dùng lưới nút


  let html = '';
  Object.keys(hangConfigs).forEach(key => {
    const cfg = hangConfigs[key];
    const isActive = selectedHang === key;
    html += `
      <button class="btn ${isActive ? 'btn-primary' : 'btn-outline'}" 
              style="width:100%;justify-content:center;flex-direction:column;padding:0.9rem 0.5rem;gap:0.25rem"
              onclick="selectHang('${key}')">
        <strong style="font-size:1.1rem">${cfg.name}</strong>
        <span style="font-size:0.8rem;opacity:0.85">${cfg.questions} câu · ${cfg.minutes}p</span>
      </button>
    `;
  });
  container.innerHTML = html;
}

function selectHang(key) {
  selectedHang = key;
  currentConfig = hangConfigs[key];
  renderHangSelector();

  const info = document.getElementById('selectedHangInfo');
  info.style.display = 'block';
  document.getElementById('infoHangName').textContent = currentConfig.label;
  document.getElementById('infoHangDetail').textContent = 
    `${currentConfig.questions} câu · ${currentConfig.minutes} phút · đạt ≥${currentConfig.pass} · ${currentConfig.desc}`;
}

// ==================== EXAM ====================
function onHangChange() {
  const hang = document.getElementById('fHang').value;
  selectedHang = hang;
  currentConfig = hangConfigs[hang];
  // Chỉ cập nhật loại GPLX nếu đã kiểm tra thông tin
  if (daKiemTraTT) {
    document.getElementById('tsHang').textContent = 'HẠNG ' + hang;
  }
}

let daKiemTraTT = false;

function kiemTraThongTin() {
  const sbd = (document.getElementById('fSBD').value || '').trim();
  if (!sbd) {
    alert('Vui lòng nhập Số báo danh trước khi kiểm tra!');
    document.getElementById('fSBD').focus();
    return;
  }
  // Demo data – chỉ hiện sau khi bấm Kiểm tra
  const demos = [
    { ten: 'TRẦN VĂN A', ns: '15/05/1995', cmt: '001095000123', dc: 'HỒ CHÍ MINH' },
    { ten: 'NGUYỄN THỊ B', ns: '22/08/1998', cmt: '079198001234', dc: 'HÀ NỘI' },
    { ten: 'LÊ VĂN C', ns: '03/12/1992', cmt: '031092005678', dc: 'ĐÀ NẴNG' },
    { ten: 'PHẠM THỊ D', ns: '19/03/2000', cmt: '001200009876', dc: 'CẦN THƠ' }
  ];
  const d = demos[parseInt(sbd, 10) % demos.length] || demos[0];
  const hang = document.getElementById('fHang').value;
  document.getElementById('tsHang').textContent = 'HẠNG ' + hang;
  document.getElementById('tsTen').textContent = d.ten;
  document.getElementById('tsNgaySinh').textContent = d.ns;
  document.getElementById('tsCMT').textContent = d.cmt;
  document.getElementById('tsDiaChi').textContent = d.dc;
  selectedHang = hang;
  currentConfig = hangConfigs[hang];
  daKiemTraTT = true;
}

function resetLoginForm() {
  document.getElementById('fSBD').value = '9';
  document.getElementById('fHang').value = 'B';
  document.getElementById('tsHang').textContent = '-';
  document.getElementById('tsTen').textContent = '-';
  document.getElementById('tsNgaySinh').textContent = '-';
  document.getElementById('tsCMT').textContent = '-';
  document.getElementById('tsDiaChi').textContent = '-';
  selectedHang = 'B';
  currentConfig = hangConfigs['B'];
  daKiemTraTT = false;
}

function startExam() {
  // Lấy hạng từ form
  const hang = document.getElementById('fHang') ? document.getElementById('fHang').value : selectedHang;
  if (!hang || !hangConfigs[hang]) {
    alert('Vui lòng chọn hạng GPLX!');
    return;
  }
  // Gợi ý kiểm tra thông tin (không bắt buộc cứng)
  if (!daKiemTraTT) {
    const ok = confirm('Bạn chưa bấm "Kiểm tra thông tin thí sinh".\nVẫn vào tập luyện với hạng ' + hang + '?');
    if (!ok) return;
    // Tự điền demo nếu người dùng vẫn muốn vào
    document.getElementById('tsHang').textContent = 'HẠNG ' + hang;
    if (document.getElementById('tsTen').textContent === '-') {
      document.getElementById('tsTen').textContent = 'THÍ SINH TỰ LUYỆN';
      document.getElementById('tsNgaySinh').textContent = '-';
      document.getElementById('tsCMT').textContent = '-';
      document.getElementById('tsDiaChi').textContent = '-';
    }
  }
  selectedHang = hang;
  currentConfig = hangConfigs[hang];

  const total = currentConfig.questions;
  const lietQs = sampleQuestions.filter(q => q.liet);
  const normalQs = sampleQuestions.filter(q => !q.liet);

  const selectedLiet = lietQs.sort(() => Math.random() - 0.5).slice(0, 1);
  let needNormal = total - 1;

  let pool = [...normalQs];
  while (pool.length < needNormal) {
    pool = pool.concat(normalQs);
  }
  const selectedNormal = pool.sort(() => Math.random() - 0.5).slice(0, needNormal);

  examQuestions = [...selectedLiet, ...selectedNormal].sort(() => Math.random() - 0.5);

  currentIndex = 0;
  userAnswers = {};
  visitedQuestions = {};
  timeLeft = currentConfig.minutes * 60;

  document.getElementById('examStart').classList.add('hidden');
  document.getElementById('examResult').classList.add('hidden');
  document.getElementById('examArea').classList.remove('hidden');

  document.getElementById('examHangBadge').textContent = 'Hạng ' + currentConfig.name;

  // Đánh dấu câu đầu đã xem
  visitedQuestions[0] = true;
  renderExamGrid();
  renderExamQuestion();
  startTimer();
}

function startTimer() {
  clearInterval(timerInterval);
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      submitExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const s = (timeLeft % 60).toString().padStart(2, '0');
  const el = document.getElementById('timerDisplay');
  el.textContent = `${m}:${s}`;
  if (timeLeft <= 60) el.classList.add('warning');
  else el.classList.remove('warning');
}

function renderExamGrid() {
  const grid = document.getElementById('examGrid');
  if (!grid) return;
  let html = '';
  examQuestions.forEach((q, i) => {
    const nOpts = q.options.length;
    const dots = Array.from({length: nOpts}, (_, d) =>
      `<span class="${userAnswers[i] === d ? 'filled' : ''}"></span>`
    ).join('');
    const answered = userAnswers[i] !== undefined ? 'answered' : '';
    const active = i === currentIndex ? 'active' : '';
    // Câu đã xem nhưng chưa trả lời → cảnh báo (màu cam)
    const warning = (!answered && visitedQuestions[i] && i !== currentIndex) ? 'warning' : '';
    html += `<div class="exam-grid-item ${answered} ${active} ${warning}" onclick="goToQuestion(${i})" title="${answered ? 'Đã trả lời' : (visitedQuestions[i] ? 'Chưa trả lời' : 'Chưa xem')}">
      <div class="exam-grid-num">${i + 1}</div>
      <div class="exam-grid-dots">${dots}</div>
    </div>`;
  });
  grid.innerHTML = html;
}

function goToQuestion(idx) {
  visitedQuestions[currentIndex] = true; // đánh dấu câu hiện tại trước khi rời
  currentIndex = idx;
  visitedQuestions[currentIndex] = true;
  renderExamQuestion();
}

function renderExamQuestion() {
  const q = examQuestions[currentIndex];
  const total = examQuestions.length;

  // Câu hỏi màu đỏ như phần mềm thi
  let qHtml = q.q;
  if (q.liet) qHtml += ' <span style="background:#c62828;color:#fff;font-size:0.75rem;padding:2px 6px;border-radius:3px;margin-left:6px">ĐIỂM LIỆT</span>';
  document.getElementById('examQuestionText').innerHTML = qHtml;

  // Đáp án dạng 1. 2. 3. 4.
  const optsHtml = q.options.map((opt, i) => {
    const sel = userAnswers[currentIndex] === i ? 'selected' : '';
    return `<div class="exam-opt ${sel}" onclick="selectOption(${i})">
      <span class="opt-num">${i + 1}.</span>
      <span>${opt}</span>
    </div>`;
  }).join('');
  document.getElementById('examOptions').innerHTML = optsHtml;

  document.getElementById('btnPrev').disabled = currentIndex === 0;
  document.getElementById('btnNext').textContent = currentIndex === total - 1 ? 'Hết câu / Nộp bài →' : 'Câu sau →';

  renderExamGrid();
}

function selectOption(val) {
  userAnswers[currentIndex] = val;
  renderExamQuestion();
}

function saveAnswer(val) {
  userAnswers[currentIndex] = val;
}

function nextQuestion() {
  visitedQuestions[currentIndex] = true;
  if (currentIndex < examQuestions.length - 1) {
    currentIndex++;
    visitedQuestions[currentIndex] = true;
    renderExamQuestion();
  } else {
    if (confirm('Bạn đã ở câu cuối. Nộp bài luôn?')) submitExam();
  }
}

function prevQuestion() {
  visitedQuestions[currentIndex] = true;
  if (currentIndex > 0) {
    currentIndex--;
    visitedQuestions[currentIndex] = true;
    renderExamQuestion();
  }
}

function submitExam() {
  clearInterval(timerInterval);
  let correct = 0;
  let lietWrong = false;
  let details = [];
  const total = examQuestions.length;
  const passScore = currentConfig.pass;

  examQuestions.forEach((q, i) => {
    const ans = userAnswers[i];
    const isCorrect = ans === q.answer;
    if (isCorrect) correct++;
    if (q.liet && !isCorrect) lietWrong = true;
    details.push({ q, ans, isCorrect });
  });

  const passed = correct >= passScore && !lietWrong;
  const resultEl = document.getElementById('examResult');
  resultEl.classList.remove('hidden');
  document.getElementById('examArea').classList.add('hidden');
  document.getElementById('examStart').classList.remove('hidden');

  let detailHtml = details.map((d, i) => `
    <div class="question-card ${d.q.liet ? 'liet' : ''}" style="margin-bottom:0.75rem">
      <div class="q-num">Câu ${i + 1} ${d.q.liet ? '<span class="tag tag-liet">ĐIỂM LIỆT</span>' : ''} 
        ${d.isCorrect ? '<span style="color:var(--success)">✓ Đúng</span>' : '<span style="color:var(--danger)">✗ Sai</span>'}
      </div>
      <p>${d.q.q}</p>
      <p style="font-size:0.9rem">Bạn chọn: <strong>${d.ans !== undefined ? String.fromCharCode(65 + d.ans) + '. ' + d.q.options[d.ans] : 'Chưa trả lời'}</strong></p>
      ${!d.isCorrect ? `<p style="font-size:0.9rem;color:var(--success)">Đáp án đúng: ${String.fromCharCode(65 + d.q.answer)}. ${d.q.options[d.q.answer]}</p>` : ''}
    </div>
  `).join('');

  resultEl.innerHTML = `
    <div class="result-box ${passed ? 'pass' : 'fail'}">
      <div class="score">${correct}/${total}</div>
      <h2 style="margin:0.5rem 0">${passed ? '🎉 ĐẠT' : '❌ CHƯA ĐẠT'}</h2>
      <p><strong>Hạng ${currentConfig.name}</strong> · Cần ≥${passScore} câu đúng và không sai điểm liệt</p>
      <p style="margin-top:0.5rem">${lietWrong ? 'Bạn đã sai câu điểm liệt → Trượt dù điểm số có cao.' : (passed ? 'Chúc mừng! Bạn đã đạt yêu cầu lý thuyết hạng ' + currentConfig.name + '.' : 'Cần đạt tối thiểu ' + passScore + '/' + total + ' và không sai điểm liệt.')}</p>
      <button class="btn btn-primary" style="margin-top:1rem" onclick="resetExam()">Chọn hạng khác / Làm lại</button>
    </div>
    <h3 style="margin-top:1.5rem">Chi tiết bài làm</h3>
    ${detailHtml}
  `;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetExam() {
  document.getElementById('examResult').classList.add('hidden');
  document.getElementById('examArea').classList.add('hidden');
  document.getElementById('examStart').classList.remove('hidden');
  // Giữ hạng đã chọn trên form
  const hangEl = document.getElementById('fHang');
  if (hangEl) {
    selectedHang = hangEl.value;
    currentConfig = hangConfigs[selectedHang];
  }
}


// ==================== MÔ PHỎNG QUIZ ====================
const mophongQuestions = [
{ id: 1, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/Chuong_1_giao_thong_trong_do_thi/1.mp4", chapter: 1, q: "Tình huống \"Người đi bộ sau xe tải\": Phương án xử lý đúng là gì?", options: ["Tăng tốc để nhanh chóng vượt qua tình huống", "Bóp còi liên tục và giữ nguyên tốc độ", "Chủ động rà phanh trước khi vượt qua điểm khuất, hạ tốc độ sâu, giữ khoảng cách an toàn và ưu tiên nhường đường", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp"], answer: 2, explain: "Dấu hiệu gián tiếp: Xe tải lớn phía trước che khuất hoàn toàn tầm nhìn bên phải. Dấu hiệu trực tiếp: Người đi bộ bất ngờ bước ra từ sau xe tải. Xử lý: Chủ động rà phanh trước khi vượt qua điểm khuất, hạ tốc độ sâu, giữ khoảng cách an toàn và ưu tiên nhường đường." },
{ id: 2, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/Chuong_1_giao_thong_trong_do_thi/2.mp4", chapter: 1, q: "Tình huống \"Người đi bộ qua dải phân cách\": Phương án xử lý đúng là gì?", options: ["Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Tăng tốc để nhanh chóng vượt qua tình huống", "Giảm tốc từ sớm, quan sát hướng di chuyển của người đi bộ và dừng lại nếu họ tiếp tục sang đường", "Chuyển làn ngay lập tức mà không quan sát"], answer: 2, explain: "Dấu hiệu gián tiếp: Khu vực có dải phân cách, thường có người băng qua không đúng nơi. Dấu hiệu trực tiếp: Người đi bộ bước xuống phần đường xe chạy. Xử lý: Giảm tốc từ sớm, quan sát hướng di chuyển của người đi bộ và dừng lại nếu họ tiếp tục sang đường." },
{ id: 3, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/Chuong_1_giao_thong_trong_do_thi/3.mp4", chapter: 1, q: "Tình huống \"Xe buýt dừng phía trước\": Phương án xử lý đúng là gì?", options: ["Giữ khoảng cách rộng hơn bình thường, giảm tốc và quan sát hai bên đầu xe buýt để phòng người đi bộ", "Bóp còi liên tục và giữ nguyên tốc độ", "Chuyển làn ngay lập tức mà không quan sát", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp"], answer: 0, explain: "Dấu hiệu gián tiếp: Xe buýt đang dừng tại điểm đón trả khách. Dấu hiệu trực tiếp: Xe phía trước phanh lại hoặc người có thể bước ra từ đầu xe buýt. Xử lý: Giữ khoảng cách rộng hơn bình thường, giảm tốc và quan sát hai bên đầu xe buýt để phòng người đi bộ." },
{ id: 4, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/Chuong_1_giao_thong_trong_do_thi/4.mp4", chapter: 1, q: "Tình huống \"Xe con từ đường nhánh đi ra\": Phương án xử lý đúng là gì?", options: ["Đánh lái mạnh sang bên để tránh", "Nhả ga sớm, rà phanh nhẹ và sẵn sàng dừng nếu xe kia tiếp tục tiến ra", "Bóp còi liên tục và giữ nguyên tốc độ", "Tăng tốc để nhanh chóng vượt qua tình huống"], answer: 1, explain: "Dấu hiệu gián tiếp: Xuất hiện giao lộ hoặc đường nhánh nhỏ bên phải. Dấu hiệu trực tiếp: Đầu xe con nhô ra, có xu hướng nhập vào đường chính. Xử lý: Nhả ga sớm, rà phanh nhẹ và sẵn sàng dừng nếu xe kia tiếp tục tiến ra." },
{ id: 5, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/Chuong_1_giao_thong_trong_do_thi/5.mp4", chapter: 1, q: "Tình huống \"Xe máy chuyển làn\": Phương án xử lý đúng là gì?", options: ["Đánh lái mạnh sang bên để tránh", "Chuyển làn ngay lập tức mà không quan sát", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Chủ động giảm tốc, giữ khoảng cách lệch sang phía an toàn để tránh va chạm"], answer: 3, explain: "Dấu hiệu gián tiếp: Xe máy đi sát vạch phân làn, không giữ hướng ổn định. Dấu hiệu trực tiếp: Xe máy bất ngờ đánh lái sang làn của bạn. Xử lý: Chủ động giảm tốc, giữ khoảng cách lệch sang phía an toàn để tránh va chạm." },
{ id: 6, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/Chuong_1_giao_thong_trong_do_thi/6.mp4", chapter: 1, q: "Tình huống \"Xe buýt vượt\": Phương án xử lý đúng là gì?", options: ["Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Giảm tốc nhẹ để tạo khoảng trống, giữ hướng lái ổn định và quan sát gương", "Tăng tốc để nhanh chóng vượt qua tình huống"], answer: 2, explain: "Dấu hiệu gián tiếp: Xe buýt phía sau tăng tốc, áp sát. Dấu hiệu trực tiếp: Xe buýt lấn sang làn của bạn để vượt. Xử lý: Giảm tốc nhẹ để tạo khoảng trống, giữ hướng lái ổn định và quan sát gương." },
{ id: 7, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/Chuong_1_giao_thong_trong_do_thi/7.mp4", chapter: 1, q: "Tình huống \"Người đi bộ phía trước\": Phương án xử lý đúng là gì?", options: ["Đánh lái mạnh sang bên để tránh", "Bóp còi liên tục và giữ nguyên tốc độ", "Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Hạ tốc độ, giữ khoảng cách và chuẩn bị dừng hẳn nếu người đi bộ bước ra"], answer: 3, explain: "Dấu hiệu gián tiếp: Khu vực đông dân cư, gần vạch qua đường. Dấu hiệu trực tiếp: Xe phía trước phanh lại hoặc có người chuẩn bị sang đường. Xử lý: Hạ tốc độ, giữ khoảng cách và chuẩn bị dừng hẳn nếu người đi bộ bước ra." },
{ id: 8, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/Chuong_1_giao_thong_trong_do_thi/8.mp4", chapter: 1, q: "Tình huống \"Xe đap từ đường nhánh\": Phương án xử lý đúng là gì?", options: ["Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Đánh lái mạnh sang bên để tránh", "Quan sát hai bên liên tục, giảm tốc sâu và giữ khoảng cách phòng va chạm ngang", "Bóp còi liên tục và giữ nguyên tốc độ"], answer: 2, explain: "Dấu hiệu gián tiếp: Có lối nhỏ hoặc ngõ khuất bên đường. Dấu hiệu trực tiếp: Xe đap bất ngờ lao ra từ bên hông. Xử lý: Quan sát hai bên liên tục, giảm tốc sâu và giữ khoảng cách phòng va chạm ngang." },
{ id: 9, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/Chuong_1_giao_thong_trong_do_thi/9.mp4", chapter: 1, q: "Tình huống \"Xe con vượt phía trước\": Phương án xử lý đúng là gì?", options: ["Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Đánh lái mạnh sang bên để tránh", "Không tăng tốc theo, giảm ga và giữ khoảng cách để tránh tình huống dồn xe", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp"], answer: 2, explain: "Dấu hiệu gián tiếp: Xe phía trước chạy không ổn định, có xu hướng tăng tốc. Dấu hiệu trực tiếp: Xe đó lấn sang làn đối diện để vượt. Xử lý: Không tăng tốc theo, giảm ga và giữ khoảng cách để tránh tình huống dồn xe." },
{ id: 10, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/Chuong_1_giao_thong_trong_do_thi/10.mp4", chapter: 1, q: "Tình huống \"Xe con bên trái đi ra\": Phương án xử lý đúng là gì?", options: ["Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Giảm tốc chủ động, giữ chân phanh và sẵn sàng dừng nếu xe kia không nhường", "Tăng tốc để nhanh chóng vượt qua tình huống", "Đi sát vào phương tiện phía trước để quan sát rõ hơn"], answer: 1, explain: "Dấu hiệu gián tiếp: Có giao cắt bên trái nhưng tầm nhìn hạn chế. Dấu hiệu trực tiếp: Xe con tiến ra và có thể cắt ngang đầu xe bạn. Xử lý: Giảm tốc chủ động, giữ chân phanh và sẵn sàng dừng nếu xe kia không nhường." },
{ id: 11, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/Chuong_1_giao_thong_trong_do_thi/11.mp4", chapter: 1, q: "Tình huống \"Xe bê tông lấn làn\": Phương án xử lý đúng là gì?", options: ["Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Giảm tốc và ép xe về phía an toàn (bên phải), tránh đi song song", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Chuyển làn ngay lập tức mà không quan sát"], answer: 1, explain: "Dấu hiệu gián tiếp: Xe tải lớn chiếm nhiều diện tích mặt đường. Dấu hiệu trực tiếp: Xe bê tông lấn sang phần đường của bạn. Xử lý: Giảm tốc và ép xe về phía an toàn (bên phải), tránh đi song song." },
{ id: 12, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/Chuong_1_giao_thong_trong_do_thi/12.mp4", chapter: 1, q: "Tình huống \"Xe con rẽ trái\": Phương án xử lý đúng là gì?", options: ["Đánh lái mạnh sang bên để tránh", "Giữ khoảng cách lớn hơn, giảm tốc để tránh bị cắt đầu", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Đi sát vào phương tiện phía trước để quan sát rõ hơn"], answer: 1, explain: "Dấu hiệu gián tiếp: Xe phía trước bật xi nhan trái. Dấu hiệu trực tiếp: Xe bắt đầu đánh lái qua hướng trái. Xử lý: Giữ khoảng cách lớn hơn, giảm tốc để tránh bị cắt đầu." },
{ id: 13, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/Chuong_1_giao_thong_trong_do_thi/13.mp4", chapter: 1, q: "Tình huống \"Xe đap sang đường\": Phương án xử lý đúng là gì?", options: ["Bóp còi liên tục và giữ nguyên tốc độ", "Giảm tốc sớm, không bấm còi gấp, giữ khoảng cách để họ sang hết", "Chuyển làn ngay lập tức mà không quan sát", "Đánh lái mạnh sang bên để tránh"], answer: 1, explain: "Dấu hiệu gián tiếp: Có người đi xe đap gần mép đường. Dấu hiệu trực tiếp: Xe đap bắt đầu đi xuống lòng đường. Xử lý: Giảm tốc sớm, không bấm còi gấp, giữ khoảng cách để họ sang hết." },
{ id: 14, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/Chuong_1_giao_thong_trong_do_thi/14.mp4", chapter: 1, q: "Tình huống \"Đường hẹp có xe đối diện\": Phương án xử lý đúng là gì?", options: ["Giảm tốc về mức an toàn, chủ động nhường nếu cần để tránh xung đột", "Tăng tốc để nhanh chóng vượt qua tình huống", "Bóp còi liên tục và giữ nguyên tốc độ", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp"], answer: 0, explain: "Dấu hiệu gián tiếp: Đường hẹp, không đủ cho 2 xe tránh nhau dễ dàng. Dấu hiệu trực tiếp: Xe đối diện tiến vào đoạn hẹp cùng lúc. Xử lý: Giảm tốc về mức an toàn, chủ động nhường nếu cần để tránh xung đột." },
{ id: 15, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/Chuong_1_giao_thong_trong_do_thi/15.mp4", chapter: 1, q: "Tình huống \"Xe tải phanh gấp\": Phương án xử lý đúng là gì?", options: ["Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Tăng tốc để nhanh chóng vượt qua tình huống", "Đạp phanh dứt khoát nhưng êm, giữ khoảng cách để tránh va chạm liên hoàn", "Bóp còi liên tục và giữ nguyên tốc độ"], answer: 2, explain: "Dấu hiệu gián tiếp: Xe tải phía trước ở khoảng cách gần. Dấu hiệu trực tiếp: Đèn phanh bật sáng đột ngột. Xử lý: Đạp phanh dứt khoát nhưng êm, giữ khoảng cách để tránh va chạm liên hoàn." },
{ id: 16, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/Chuong_1_giao_thong_trong_do_thi/16.mp4", chapter: 1, q: "Tình huống \"Xe từ nhánh trái đi ra\": Phương án xử lý đúng là gì?", options: ["Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Giảm tốc, quan sát sâu vào giao lộ và sẵn sàng dừng", "Đánh lái mạnh sang bên để tránh", "Đi sát vào phương tiện phía trước để quan sát rõ hơn"], answer: 1, explain: "Dấu hiệu gián tiếp: Có giao lộ bên trái, tầm nhìn bị che. Dấu hiệu trực tiếp: Xe từ bên trái tiến gần ra đường chính. Xử lý: Giảm tốc, quan sát sâu vào giao lộ và sẵn sàng dừng." },
{ id: 17, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/Chuong_1_giao_thong_trong_do_thi/17.mp4", chapter: 1, q: "Tình huống \"Xe buýt vượt sai\": Phương án xử lý đúng là gì?", options: ["Đánh lái mạnh sang bên để tránh", "Giảm tốc để tránh đối đầu, giữ hướng xe ổn định", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Đi sát vào phương tiện phía trước để quan sát rõ hơn"], answer: 1, explain: "Dấu hiệu gián tiếp: Xe buýt phía sau tăng tốc bất thường. Dấu hiệu trực tiếp: Xe buýt lấn làn vượt trong điều kiện không an toàn. Xử lý: Giảm tốc để tránh đối đầu, giữ hướng xe ổn định." },
{ id: 18, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/Chuong_1_giao_thong_trong_do_thi/18.mp4", chapter: 1, q: "Tình huống \"Xe mở cửa ven đường\": Phương án xử lý đúng là gì?", options: ["Bóp còi liên tục và giữ nguyên tốc độ", "Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Giữ khoảng cách rộng với xe đỗ, giảm tốc khi đi sát", "Tăng tốc để nhanh chóng vượt qua tình huống"], answer: 2, explain: "Dấu hiệu gián tiếp: Có xe đỗ sát lề phải. Dấu hiệu trực tiếp: Cửa xe bất ngờ mở ra. Xử lý: Giữ khoảng cách rộng với xe đỗ, giảm tốc khi đi sát." },
{ id: 19, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/Chuong_1_giao_thong_trong_do_thi/19.mp4", chapter: 1, q: "Tình huống \"Xe mở cửa phía ngược chiều\": Phương án xử lý đúng là gì?", options: ["Quan sát cả hai phía, giảm tốc để phòng cửa mở hoặc người băng qua", "Tăng tốc để nhanh chóng vượt qua tình huống", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Chuyển làn ngay lập tức mà không quan sát"], answer: 0, explain: "Dấu hiệu gián tiếp: Xe đỗ bên kia đường, có dấu hiệu hoạt động. Dấu hiệu trực tiếp: Ánh đèn hoặc chuyển động bất thường từ xe đó. Xử lý: Quan sát cả hai phía, giảm tốc để phòng cửa mở hoặc người băng qua." },
{ id: 20, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/Chuong_1_giao_thong_trong_do_thi/20.mp4", chapter: 1, q: "Tình huống \"Xe mở cửa trong khu đông\": Phương án xử lý đúng là gì?", options: ["Bóp còi liên tục và giữ nguyên tốc độ", "Đánh lái mạnh sang bên để tránh", "Chuyển làn ngay lập tức mà không quan sát", "Đi chậm đều, giữ khoảng cách hai bên và sẵn sàng phanh"], answer: 3, explain: "Dấu hiệu gián tiếp: Nhiều xe đỗ hai bên đường. Dấu hiệu trực tiếp: Một xe mở cửa đột ngột. Xử lý: Đi chậm đều, giữ khoảng cách hai bên và sẵn sàng phanh." },
{ id: 21, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/Chuong_1_giao_thong_trong_do_thi/21.mp4", chapter: 1, q: "Tình huống \"Xe phía trước lùi\": Phương án xử lý đúng là gì?", options: ["Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Dừng lại ở khoảng cách an toàn, không áp sát", "Bóp còi liên tục và giữ nguyên tốc độ", "Đi sát vào phương tiện phía trước để quan sát rõ hơn"], answer: 1, explain: "Dấu hiệu gián tiếp: Xe phía trước dừng lâu bất thường. Dấu hiệu trực tiếp: Đèn lùi bật và xe bắt đầu di chuyển ngược. Xử lý: Dừng lại ở khoảng cách an toàn, không áp sát." },
{ id: 22, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/Chuong_1_giao_thong_trong_do_thi/22.mp4", chapter: 1, q: "Tình huống \"Xe 16 chỗ từ nhánh\": Phương án xử lý đúng là gì?", options: ["Bóp còi liên tục và giữ nguyên tốc độ", "Chuyển làn ngay lập tức mà không quan sát", "Giảm tốc sớm vì xe lớn khó quan sát, sẵn sàng nhường", "Tăng tốc để nhanh chóng vượt qua tình huống"], answer: 2, explain: "Dấu hiệu gián tiếp: Có xe lớn chờ tại giao lộ. Dấu hiệu trực tiếp: Xe bắt đầu tiến ra chiếm làn. Xử lý: Giảm tốc sớm vì xe lớn khó quan sát, sẵn sàng nhường." },
{ id: 23, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/Chuong_1_giao_thong_trong_do_thi/23.mp4", chapter: 1, q: "Tình huống \"Xe tải dừng che khuất\": Phương án xử lý đúng là gì?", options: ["Không vượt ngay, giảm tốc và quan sát trước khi di chuyển tiếp", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Đánh lái mạnh sang bên để tránh", "Tăng tốc để nhanh chóng vượt qua tình huống"], answer: 0, explain: "Dấu hiệu gián tiếp: Xe tải dừng giữa đường gây khuất tầm nhìn. Dấu hiệu trực tiếp: Xe khác lấn làn để tránh. Xử lý: Không vượt ngay, giảm tốc và quan sát trước khi di chuyển tiếp." },
{ id: 24, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/Chuong_1_giao_thong_trong_do_thi/24.mp4", chapter: 1, q: "Tình huống \"Xe môi trường dừng\": Phương án xử lý đúng là gì?", options: ["Bóp còi liên tục và giữ nguyên tốc độ", "Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Giảm tốc và giữ khoảng cách để tránh va chạm bất ngờ", "Chuyển làn ngay lập tức mà không quan sát"], answer: 2, explain: "Dấu hiệu gián tiếp: Xe chuyên dụng hoạt động trên đường. Dấu hiệu trực tiếp: Xe phía sau phải chuyển làn. Xử lý: Giảm tốc và giữ khoảng cách để tránh va chạm bất ngờ." },
{ id: 25, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/Chuong_1_giao_thong_trong_do_thi/25.mp4", chapter: 1, q: "Tình huống \"Xe buýt xin đường\": Phương án xử lý đúng là gì?", options: ["Chủ động giảm tốc để tạo khoảng trống an toàn", "Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Bóp còi liên tục và giữ nguyên tốc độ", "Tăng tốc để nhanh chóng vượt qua tình huống"], answer: 0, explain: "Dấu hiệu gián tiếp: Xe buýt bật tín hiệu xin chuyển làn. Dấu hiệu trực tiếp: Xe bắt đầu di chuyển sang làn bạn. Xử lý: Chủ động giảm tốc để tạo khoảng trống an toàn." },
{ id: 26, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/Chuong_1_giao_thong_trong_do_thi/26.mp4", chapter: 1, q: "Tình huống \"Đường đang thi công\": Phương án xử lý đúng là gì?", options: ["Chuyển làn ngay lập tức mà không quan sát", "Giảm tốc sâu, đi đúng làn tạm và chú ý người điều tiết", "Bóp còi liên tục và giữ nguyên tốc độ", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp"], answer: 1, explain: "Dấu hiệu gián tiếp: Có biển báo công trường từ xa. Dấu hiệu trực tiếp: Xuất hiện vật cản hoặc công nhân làm việc. Xử lý: Giảm tốc sâu, đi đúng làn tạm và chú ý người điều tiết." },
{ id: 27, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/Chuong_1_giao_thong_trong_do_thi/27.mp4", chapter: 1, q: "Tình huống \"Đèn đỏ chuyển xanh\": Phương án xử lý đúng là gì?", options: ["Chuyển làn ngay lập tức mà không quan sát", "Đánh lái mạnh sang bên để tránh", "Không đi ngay, quan sát hai bên rồi mới tăng tốc theo đúng quy định", "Đi sát vào phương tiện phía trước để quan sát rõ hơn"], answer: 2, explain: "Dấu hiệu gián tiếp: Đang dừng tại giao lộ. Dấu hiệu trực tiếp: Đèn tín hiệu chuyển sang xanh. Xử lý: Không đi ngay, quan sát hai bên rồi mới tăng tốc theo đúng quy định." },
{ id: 28, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/Chuong_1_giao_thong_trong_do_thi/28.mp4", chapter: 1, q: "Tình huống \"Đường trơn trượt\": Phương án xử lý đúng là gì?", options: ["Bóp còi liên tục và giữ nguyên tốc độ", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Giảm ga từ sớm, tránh phanh gấp và giữ khoảng cách dài hơn", "Tăng tốc để nhanh chóng vượt qua tình huống"], answer: 2, explain: "Dấu hiệu gián tiếp: Có biển cảnh báo, mặt đường bóng. Dấu hiệu trực tiếp: Xe trước có dấu hiệu trượt hoặc phanh. Xử lý: Giảm ga từ sớm, tránh phanh gấp và giữ khoảng cách dài hơn." },
{ id: 29, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/Chuong_1_giao_thong_trong_do_thi/29.mp4", chapter: 1, q: "Tình huống \"Đường nhiều ổ gà\": Phương án xử lý đúng là gì?", options: ["Đánh lái mạnh sang bên để tránh", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Hạ tốc độ và đi thẳng ổn định, tránh đánh lái gấp", "Tăng tốc để nhanh chóng vượt qua tình huống"], answer: 2, explain: "Dấu hiệu gián tiếp: Mặt đường xấu, lồi lõm. Dấu hiệu trực tiếp: Xe phía trước giảm tốc hoặc né. Xử lý: Hạ tốc độ và đi thẳng ổn định, tránh đánh lái gấp." },
{ id: 30, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_2_giao_thong_ngoai_do_thi/30.mp4", chapter: 1, q: "Tình huống \"Bò đứng giữa đường\": Phương án xử lý đúng là gì?", options: ["Đánh lái mạnh sang bên để tránh", "Giảm tốc sâu, bấm còi nhẹ nếu cần để cảnh báo", "Tăng tốc để nhanh chóng vượt qua tình huống", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp"], answer: 1, explain: "Dấu hiệu gián tiếp: Khu vực nông thôn ít rào chắn. Dấu hiệu trực tiếp: Động vật đứng trên phần đường. Xử lý: Giảm tốc sâu, bấm còi nhẹ nếu cần để cảnh báo." },
{ id: 31, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_2_giao_thong_ngoai_do_thi/31.mp4", chapter: 1, q: "Tình huống \"Bò di chuyển qua đường\": Phương án xử lý đúng là gì?", options: ["Tăng tốc để nhanh chóng vượt qua tình huống", "Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Dừng hoặc đi rất chậm, không tăng tốc ép qua", "Chuyển làn ngay lập tức mà không quan sát"], answer: 2, explain: "Dấu hiệu gián tiếp: Có đàn vật nuôi gần đường. Dấu hiệu trực tiếp: Con vật bắt đầu băng qua. Xử lý: Dừng hoặc đi rất chậm, không tăng tốc ép qua." },
{ id: 32, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_2_giao_thong_ngoai_do_thi/32.mp4", chapter: 1, q: "Tình huống \"Trẻ em sang đường\": Phương án xử lý đúng là gì?", options: ["Tăng tốc để nhanh chóng vượt qua tình huống", "Giảm tốc sớm, luôn sẵn sàng dừng và nhường đường", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Bóp còi liên tục và giữ nguyên tốc độ"], answer: 1, explain: "Dấu hiệu gián tiếp: Gần trường học, khu dân cư. Dấu hiệu trực tiếp: Trẻ bước xuống đường không quan sát. Xử lý: Giảm tốc sớm, luôn sẵn sàng dừng và nhường đường." },
{ id: 33, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_2_giao_thong_ngoai_do_thi/33.mp4", chapter: 1, q: "Tình huống \"Trẻ em chơi gần đường\": Phương án xử lý đúng là gì?", options: ["Chuyển làn ngay lập tức mà không quan sát", "Đi rất chậm, giữ chân phanh để xử lý kịp", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Bóp còi liên tục và giữ nguyên tốc độ"], answer: 1, explain: "Dấu hiệu gián tiếp: Có trẻ chơi ở lề đường. Dấu hiệu trực tiếp: Trẻ chạy bất ngờ ra. Xử lý: Đi rất chậm, giữ chân phanh để xử lý kịp." },
{ id: 34, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_2_giao_thong_ngoai_do_thi/34.mp4", chapter: 1, q: "Tình huống \"Xe khách vượt\": Phương án xử lý đúng là gì?", options: ["Đánh lái mạnh sang bên để tránh", "Tăng tốc để nhanh chóng vượt qua tình huống", "Giảm tốc nhẹ, giữ ổn định để họ vượt an toàn", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp"], answer: 2, explain: "Dấu hiệu gián tiếp: Xe khách phía sau tăng tốc. Dấu hiệu trực tiếp: Xe khách lấn làn để vượt. Xử lý: Giảm tốc nhẹ, giữ ổn định để họ vượt an toàn." },
{ id: 35, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_2_giao_thong_ngoai_do_thi/35.mp4", chapter: 1, q: "Tình huống \"Xe khách tránh xe khác\": Phương án xử lý đúng là gì?", options: ["Bóp còi liên tục và giữ nguyên tốc độ", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Giảm tốc và tăng khoảng cách để tránh bị ép", "Đánh lái mạnh sang bên để tránh"], answer: 2, explain: "Dấu hiệu gián tiếp: Xe khách phía trước di chuyển bất thường. Dấu hiệu trực tiếp: Xe khách đánh lái sang làn khác. Xử lý: Giảm tốc và tăng khoảng cách để tránh bị ép." },
{ id: 36, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_2_giao_thong_ngoai_do_thi/36.mp4", chapter: 1, q: "Tình huống \"Xe máy từ ngõ đi ra\": Phương án xử lý đúng là gì?", options: ["Đánh lái mạnh sang bên để tránh", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Quan sát hai bên liên tục và giảm tốc từ trước", "Tăng tốc để nhanh chóng vượt qua tình huống"], answer: 2, explain: "Dấu hiệu gián tiếp: Có nhiều ngõ nhỏ. Dấu hiệu trực tiếp: Xe máy lao ra nhanh. Xử lý: Quan sát hai bên liên tục và giảm tốc từ trước." },
{ id: 37, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_2_giao_thong_ngoai_do_thi/37.mp4", chapter: 1, q: "Tình huống \"Xe đap từ ngõ đi ra\": Phương án xử lý đúng là gì?", options: ["Tăng tốc để nhanh chóng vượt qua tình huống", "Chuyển làn ngay lập tức mà không quan sát", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Giảm tốc sâu vì xe đap khó kiểm soát"], answer: 3, explain: "Dấu hiệu gián tiếp: Khu dân cư đông. Dấu hiệu trực tiếp: Xe đap đi ra thiếu quan sát. Xử lý: Giảm tốc sâu vì xe đap khó kiểm soát." },
{ id: 38, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_2_giao_thong_ngoai_do_thi/38.mp4", chapter: 1, q: "Tình huống \"Xe máy lách qua xe lớn\": Phương án xử lý đúng là gì?", options: ["Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Chuyển làn ngay lập tức mà không quan sát", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Không đi sát xe lớn, giữ khoảng cách và giảm tốc"], answer: 3, explain: "Dấu hiệu gián tiếp: Có xe tải che khuất. Dấu hiệu trực tiếp: Xe máy bất ngờ chui ra. Xử lý: Không đi sát xe lớn, giữ khoảng cách và giảm tốc." },
{ id: 39, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_2_giao_thong_ngoai_do_thi/39.mp4", chapter: 1, q: "Tình huống \"Xe tải sang đường\": Phương án xử lý đúng là gì?", options: ["Bóp còi liên tục và giữ nguyên tốc độ", "Đánh lái mạnh sang bên để tránh", "Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Giảm tốc và ưu tiên nhường vì xe lớn khó dừng"], answer: 3, explain: "Dấu hiệu gián tiếp: Giao lộ rộng. Dấu hiệu trực tiếp: Xe tải băng ngang. Xử lý: Giảm tốc và ưu tiên nhường vì xe lớn khó dừng." },
{ id: 40, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_2_giao_thong_ngoai_do_thi/40.mp4", chapter: 1, q: "Tình huống \"Xe máy xuất hiện sau xe tải\": Phương án xử lý đúng là gì?", options: ["Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Rà phanh trước khi vượt xe tải, giữ khoảng cách an toàn", "Tăng tốc để nhanh chóng vượt qua tình huống", "Đi sát vào phương tiện phía trước để quan sát rõ hơn"], answer: 1, explain: "Dấu hiệu gián tiếp: Xe tải che khuất tầm nhìn. Dấu hiệu trực tiếp: Xe máy bất ngờ đi ra phía trước. Xử lý: Rà phanh trước khi vượt xe tải, giữ khoảng cách an toàn." },
{ id: 41, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_2_giao_thong_ngoai_do_thi/41.mp4", chapter: 2, q: "Tình huống \"Xe con rẽ trái nhanh\": Phương án xử lý đúng là gì?", options: ["Giảm tốc, giữ khoảng cách an toàn và quan sát hướng di chuyển của xe", "Đánh lái mạnh sang bên để tránh", "Bóp còi liên tục và giữ nguyên tốc độ", "Đi sát vào phương tiện phía trước để quan sát rõ hơn"], answer: 0, explain: "Dấu hiệu gián tiếp: Giao lộ phía trước, xe có xu hướng tăng tốc. Dấu hiệu trực tiếp: Xe con đánh lái rẽ trái với tốc độ cao. Xử lý: Giảm tốc, giữ khoảng cách an toàn và quan sát hướng di chuyển của xe." },
{ id: 42, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_2_giao_thong_ngoai_do_thi/42.mp4", chapter: 2, q: "Tình huống \"Xe máy rẽ trái\": Phương án xử lý đúng là gì?", options: ["Chuyển làn ngay lập tức mà không quan sát", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Giảm tốc, giữ khoảng cách an toàn và theo dõi hướng rẽ", "Tăng tốc để nhanh chóng vượt qua tình huống"], answer: 2, explain: "Dấu hiệu gián tiếp: Có phương tiện phía trước bật tín hiệu rẽ. Dấu hiệu trực tiếp: Xe máy bắt đầu chuyển hướng sang trái. Xử lý: Giảm tốc, giữ khoảng cách an toàn và theo dõi hướng rẽ." },
{ id: 43, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_2_giao_thong_ngoai_do_thi/43.mp4", chapter: 2, q: "Tình huống \"Xe tải tránh thi công\": Phương án xử lý đúng là gì?", options: ["Đánh lái mạnh sang bên để tránh", "Giảm tốc, giữ khoảng cách an toàn và quan sát", "Tăng tốc để nhanh chóng vượt qua tình huống", "Bóp còi liên tục và giữ nguyên tốc độ"], answer: 1, explain: "Dấu hiệu gián tiếp: Khu vực có biển báo công trường. Dấu hiệu trực tiếp: Xe tải chuyển hướng tránh vật cản. Xử lý: Giảm tốc, giữ khoảng cách an toàn và quan sát." },
{ id: 44, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_3_giao_thong_tren_cao_toc/44.mp4", chapter: 2, q: "Tình huống \"Xe con vượt ẩu\": Phương án xử lý đúng là gì?", options: ["Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Giảm tốc, giữ khoảng cách an toàn và giữ đúng phần đường", "Tăng tốc để nhanh chóng vượt qua tình huống", "Đi sát vào phương tiện phía trước để quan sát rõ hơn"], answer: 1, explain: "Dấu hiệu gián tiếp: Đường hẹp, xe phía trước tăng tốc. Dấu hiệu trực tiếp: Xe con lấn sang làn ngược chiều để vượt. Xử lý: Giảm tốc, giữ khoảng cách an toàn và giữ đúng phần đường." },
{ id: 45, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_3_giao_thong_tren_cao_toc/45.mp4", chapter: 2, q: "Tình huống \"Xe tải vượt\": Phương án xử lý đúng là gì?", options: ["Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Đánh lái mạnh sang bên để tránh", "Giảm tốc, giữ khoảng cách an toàn và quan sát", "Đi sát vào phương tiện phía trước để quan sát rõ hơn"], answer: 2, explain: "Dấu hiệu gián tiếp: Xe tải phía sau có dấu hiệu tăng tốc. Dấu hiệu trực tiếp: Xe tải lấn làn để vượt. Xử lý: Giảm tốc, giữ khoảng cách an toàn và quan sát." },
{ id: 46, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_3_giao_thong_tren_cao_toc/46.mp4", chapter: 2, q: "Tình huống \"Xe con xin vượt\": Phương án xử lý đúng là gì?", options: ["Chuyển làn ngay lập tức mà không quan sát", "Giảm tốc, giữ khoảng cách an toàn và quan sát gương", "Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Tăng tốc để nhanh chóng vượt qua tình huống"], answer: 1, explain: "Dấu hiệu gián tiếp: Xe phía sau bật tín hiệu xin vượt. Dấu hiệu trực tiếp: Xe tiến sát phía sau. Xử lý: Giảm tốc, giữ khoảng cách an toàn và quan sát gương." },
{ id: 47, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_3_giao_thong_tren_cao_toc/47.mp4", chapter: 2, q: "Tình huống \"Xe cứu thương\": Phương án xử lý đúng là gì?", options: ["Giảm tốc, bật tín hiệu cảnh báo và nhường đường theo quy định", "Đánh lái mạnh sang bên để tránh", "Tăng tốc để nhanh chóng vượt qua tình huống", "Đi sát vào phương tiện phía trước để quan sát rõ hơn"], answer: 0, explain: "Dấu hiệu gián tiếp: Nghe thấy tín hiệu còi ưu tiên. Dấu hiệu trực tiếp: Xe cứu thương tiến đến gần. Xử lý: Giảm tốc, bật tín hiệu cảnh báo và nhường đường theo quy định." },
{ id: 48, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_3_giao_thong_tren_cao_toc/48.mp4", chapter: 2, q: "Tình huống \"Xe chuyển làn\": Phương án xử lý đúng là gì?", options: ["Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Giảm tốc, giữ khoảng cách an toàn", "Bóp còi liên tục và giữ nguyên tốc độ", "Đánh lái mạnh sang bên để tránh"], answer: 1, explain: "Dấu hiệu gián tiếp: Xe phía trước đi sát vạch kẻ đường. Dấu hiệu trực tiếp: Xe chuyển sang làn của bạn. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 49, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_3_giao_thong_tren_cao_toc/49.mp4", chapter: 2, q: "Tình huống \"Xe tải chuyển làn\": Phương án xử lý đúng là gì?", options: ["Đánh lái mạnh sang bên để tránh", "Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Tăng tốc để nhanh chóng vượt qua tình huống", "Giảm tốc, giữ khoảng cách an toàn"], answer: 3, explain: "Dấu hiệu gián tiếp: Xe lớn di chuyển gần làn. Dấu hiệu trực tiếp: Xe lấn sang làn của bạn. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 50, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_3_giao_thong_tren_cao_toc/50.mp4", chapter: 2, q: "Tình huống \"Xe tải cắt đầu\": Phương án xử lý đúng là gì?", options: ["Giảm tốc, giữ khoảng cách an toàn", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Đánh lái mạnh sang bên để tránh", "Đi sát vào phương tiện phía trước để quan sát rõ hơn"], answer: 0, explain: "Dấu hiệu gián tiếp: Xe lớn ở phía trước bên cạnh. Dấu hiệu trực tiếp: Xe đột ngột chuyển hướng cắt ngang đầu xe. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 51, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_3_giao_thong_tren_cao_toc/51.mp4", chapter: 2, q: "Tình huống \"Xe đi ngược chiều\": Phương án xử lý đúng là gì?", options: ["Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Chuyển làn ngay lập tức mà không quan sát", "Giảm tốc, giữ khoảng cách an toàn và đi sát về bên phải", "Bóp còi liên tục và giữ nguyên tốc độ"], answer: 2, explain: "Dấu hiệu gián tiếp: Đường hai chiều không có dải phân cách. Dấu hiệu trực tiếp: Xe đối diện lấn sang phần đường của bạn. Xử lý: Giảm tốc, giữ khoảng cách an toàn và đi sát về bên phải." },
{ id: 52, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_3_giao_thong_tren_cao_toc/52.mp4", chapter: 2, q: "Tình huống \"Xe lùi trên cao tốc\": Phương án xử lý đúng là gì?", options: ["Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Giảm tốc, giữ khoảng cách an toàn và chỉ dừng xe khi cần thiết", "Đánh lái mạnh sang bên để tránh", "Tăng tốc để nhanh chóng vượt qua tình huống"], answer: 1, explain: "Dấu hiệu gián tiếp: Xe phía trước di chuyển bất thường. Dấu hiệu trực tiếp: Xe bật đèn lùi và di chuyển ngược. Xử lý: Giảm tốc, giữ khoảng cách an toàn và chỉ dừng xe khi cần thiết." },
{ id: 53, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_3_giao_thong_tren_cao_toc/53.mp4", chapter: 2, q: "Tình huống \"Xe ngược chiều bị che khuất\": Phương án xử lý đúng là gì?", options: ["Giảm tốc, giữ khoảng cách an toàn và quan sát", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Bóp còi liên tục và giữ nguyên tốc độ", "Đi sát vào phương tiện phía trước để quan sát rõ hơn"], answer: 0, explain: "Dấu hiệu gián tiếp: Có xe lớn che khuất tầm nhìn phía trước. Dấu hiệu trực tiếp: Xe đối diện bất ngờ xuất hiện. Xử lý: Giảm tốc, giữ khoảng cách an toàn và quan sát." },
{ id: 54, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_3_giao_thong_tren_cao_toc/54.mp4", chapter: 2, q: "Tình huống \"Xe tải nhập làn\": Phương án xử lý đúng là gì?", options: ["Giảm tốc, giữ khoảng cách an toàn", "Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Bóp còi liên tục và giữ nguyên tốc độ", "Đánh lái mạnh sang bên để tránh"], answer: 0, explain: "Dấu hiệu gián tiếp: Có làn đường nhập. Dấu hiệu trực tiếp: Xe tải di chuyển vào làn chính. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 55, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_3_giao_thong_tren_cao_toc/55.mp4", chapter: 2, q: "Tình huống \"Xe tải tránh vật cản\": Phương án xử lý đúng là gì?", options: ["Tăng tốc để nhanh chóng vượt qua tình huống", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Giảm tốc, giữ khoảng cách an toàn", "Bóp còi liên tục và giữ nguyên tốc độ"], answer: 2, explain: "Dấu hiệu gián tiếp: Có vật cản trên đường. Dấu hiệu trực tiếp: Xe tải đánh lái tránh. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 56, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_3_giao_thong_tren_cao_toc/56.mp4", chapter: 2, q: "Tình huống \"Xe con xin đường\": Phương án xử lý đúng là gì?", options: ["Giảm tốc, giữ khoảng cách an toàn và quan sát", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Tăng tốc để nhanh chóng vượt qua tình huống"], answer: 0, explain: "Dấu hiệu gián tiếp: Xe phía sau áp sát. Dấu hiệu trực tiếp: Có tín hiệu xin đường. Xử lý: Giảm tốc, giữ khoảng cách an toàn và quan sát." },
{ id: 57, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_3_giao_thong_tren_cao_toc/57.mp4", chapter: 2, q: "Tình huống \"Đường đang thi công (2)\": Phương án xử lý đúng là gì?", options: ["Giảm tốc, giữ khoảng cách an toàn và đi đúng hướng dẫn", "Chuyển làn ngay lập tức mà không quan sát", "Đánh lái mạnh sang bên để tránh", "Tăng tốc để nhanh chóng vượt qua tình huống"], answer: 0, explain: "Dấu hiệu gián tiếp: Có biển báo công trường. Dấu hiệu trực tiếp: Xuất hiện rào chắn hoặc vật cản. Xử lý: Giảm tốc, giữ khoảng cách an toàn và đi đúng hướng dẫn." },
{ id: 58, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_3_giao_thong_tren_cao_toc/58.mp4", chapter: 2, q: "Tình huống \"Đường thi công tiếp\": Phương án xử lý đúng là gì?", options: ["Chuyển làn ngay lập tức mà không quan sát", "Bóp còi liên tục và giữ nguyên tốc độ", "Giảm tốc, giữ khoảng cách an toàn", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp"], answer: 2, explain: "Dấu hiệu gián tiếp: Công trường kéo dài. Dấu hiệu trực tiếp: Xe phía trước di chuyển chậm. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 59, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_3_giao_thong_tren_cao_toc/59.mp4", chapter: 2, q: "Tình huống \"Xe tải chuyển làn (2)\": Phương án xử lý đúng là gì?", options: ["Tăng tốc để nhanh chóng vượt qua tình huống", "Bóp còi liên tục và giữ nguyên tốc độ", "Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Giảm tốc, giữ khoảng cách an toàn"], answer: 3, explain: "Dấu hiệu gián tiếp: Xe lớn phía trước. Dấu hiệu trực tiếp: Xe chuyển sang làn khác. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 60, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_3_giao_thong_tren_cao_toc/60.mp4", chapter: 2, q: "Tình huống \"Xe 16 chỗ vào làn\": Phương án xử lý đúng là gì?", options: ["Bóp còi liên tục và giữ nguyên tốc độ", "Đánh lái mạnh sang bên để tránh", "Giảm tốc, giữ khoảng cách an toàn", "Chuyển làn ngay lập tức mà không quan sát"], answer: 2, explain: "Dấu hiệu gián tiếp: Xe lớn ở đường bên. Dấu hiệu trực tiếp: Xe chuyển vào làn của bạn. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 61, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_3_giao_thong_tren_cao_toc/61.mp4", chapter: 3, q: "Tình huống \"Xe con nhập làn\": Phương án xử lý đúng là gì?", options: ["Giảm tốc, giữ khoảng cách an toàn", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Bóp còi liên tục và giữ nguyên tốc độ"], answer: 0, explain: "Dấu hiệu gián tiếp: Đường nhập làn. Dấu hiệu trực tiếp: Xe đi vào làn chính. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 62, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_3_giao_thong_tren_cao_toc/62.mp4", chapter: 3, q: "Tình huống \"Xe đối diện nháy đèn\": Phương án xử lý đúng là gì?", options: ["Giảm tốc, giữ khoảng cách an toàn và quan sát", "Bóp còi liên tục và giữ nguyên tốc độ", "Tăng tốc để nhanh chóng vượt qua tình huống", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp"], answer: 0, explain: "Dấu hiệu gián tiếp: Xe đối diện có tín hiệu đèn. Dấu hiệu trực tiếp: Nháy đèn liên tục. Xử lý: Giảm tốc, giữ khoảng cách an toàn và quan sát." },
{ id: 63, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_3_giao_thong_tren_cao_toc/63.mp4", chapter: 3, q: "Tình huống \"Bò qua đường\": Phương án xử lý đúng là gì?", options: ["Đánh lái mạnh sang bên để tránh", "Giảm tốc, giữ khoảng cách an toàn", "Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Chuyển làn ngay lập tức mà không quan sát"], answer: 1, explain: "Dấu hiệu gián tiếp: Khu vực nông thôn. Dấu hiệu trực tiếp: Bò di chuyển qua đường. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 64, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_4_giao_thong_tren_duong_nui/64.mp4", chapter: 3, q: "Tình huống \"Đường đèo núi\": Phương án xử lý đúng là gì?", options: ["Tăng tốc để nhanh chóng vượt qua tình huống", "Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Chuyển làn ngay lập tức mà không quan sát", "Giảm tốc, giữ khoảng cách an toàn"], answer: 3, explain: "Dấu hiệu gián tiếp: Đường quanh co, dốc. Dấu hiệu trực tiếp: Xe đối diện xuất hiện. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 65, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_4_giao_thong_tren_duong_nui/65.mp4", chapter: 3, q: "Tình huống \"Đường cong ban đêm\": Phương án xử lý đúng là gì?", options: ["Giảm tốc, giữ khoảng cách an toàn và bật tín hiệu cảnh báo", "Đánh lái mạnh sang bên để tránh", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Đi sát vào phương tiện phía trước để quan sát rõ hơn"], answer: 0, explain: "Dấu hiệu gián tiếp: Tầm nhìn hạn chế. Dấu hiệu trực tiếp: Không quan sát rõ phía trước. Xử lý: Giảm tốc, giữ khoảng cách an toàn và bật tín hiệu cảnh báo." },
{ id: 66, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_4_giao_thong_tren_duong_nui/66.mp4", chapter: 3, q: "Tình huống \"Xe tải làm rơi vật\": Phương án xử lý đúng là gì?", options: ["Giảm tốc, giữ khoảng cách an toàn", "Đánh lái mạnh sang bên để tránh", "Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Tăng tốc để nhanh chóng vượt qua tình huống"], answer: 0, explain: "Dấu hiệu gián tiếp: Xe tải chở hàng. Dấu hiệu trực tiếp: Vật rơi xuống đường. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 67, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_4_giao_thong_tren_duong_nui/67.mp4", chapter: 3, q: "Tình huống \"Dê đứng ven đường\": Phương án xử lý đúng là gì?", options: ["Giảm tốc, giữ khoảng cách an toàn", "Chuyển làn ngay lập tức mà không quan sát", "Tăng tốc để nhanh chóng vượt qua tình huống", "Đi sát vào phương tiện phía trước để quan sát rõ hơn"], answer: 0, explain: "Dấu hiệu gián tiếp: Khu vực nông thôn. Dấu hiệu trực tiếp: Dê có thể lao ra. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 68, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_4_giao_thong_tren_duong_nui/68.mp4", chapter: 3, q: "Tình huống \"Sương mù dày\": Phương án xử lý đúng là gì?", options: ["Giảm tốc, giữ khoảng cách an toàn và bật tín hiệu cảnh báo", "Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Tăng tốc để nhanh chóng vượt qua tình huống", "Chuyển làn ngay lập tức mà không quan sát"], answer: 0, explain: "Dấu hiệu gián tiếp: Tầm nhìn bị hạn chế. Dấu hiệu trực tiếp: Quan sát khó khăn. Xử lý: Giảm tốc, giữ khoảng cách an toàn và bật tín hiệu cảnh báo." },
{ id: 69, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_4_giao_thong_tren_duong_nui/69.mp4", chapter: 3, q: "Tình huống \"Xe chạy nhanh trong đường cong\": Phương án xử lý đúng là gì?", options: ["Tăng tốc để nhanh chóng vượt qua tình huống", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Giảm tốc, giữ khoảng cách an toàn", "Chuyển làn ngay lập tức mà không quan sát"], answer: 2, explain: "Dấu hiệu gián tiếp: Đường cong nguy hiểm. Dấu hiệu trực tiếp: Xe đối diện lao nhanh. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 70, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_4_giao_thong_tren_duong_nui/70.mp4", chapter: 3, q: "Tình huống \"Đường cong ban ngày\": Phương án xử lý đúng là gì?", options: ["Đánh lái mạnh sang bên để tránh", "Tăng tốc để nhanh chóng vượt qua tình huống", "Giảm tốc, giữ khoảng cách an toàn", "Đi sát vào phương tiện phía trước để quan sát rõ hơn"], answer: 2, explain: "Dấu hiệu gián tiếp: Có biển cảnh báo. Dấu hiệu trực tiếp: Tầm nhìn bị khuất. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 71, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_4_giao_thong_tren_duong_nui/71.mp4", chapter: 3, q: "Tình huống \"Đường cong liên tiếp\": Phương án xử lý đúng là gì?", options: ["Đánh lái mạnh sang bên để tránh", "Tăng tốc để nhanh chóng vượt qua tình huống", "Giảm tốc, giữ khoảng cách an toàn", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp"], answer: 2, explain: "Dấu hiệu gián tiếp: Đường uốn lượn. Dấu hiệu trực tiếp: Khó quan sát xa. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 72, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_4_giao_thong_tren_duong_nui/72.mp4", chapter: 3, q: "Tình huống \"Sương mù tiếp\": Phương án xử lý đúng là gì?", options: ["Giảm tốc, giữ khoảng cách an toàn", "Tăng tốc để nhanh chóng vượt qua tình huống", "Bóp còi liên tục và giữ nguyên tốc độ", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp"], answer: 0, explain: "Dấu hiệu gián tiếp: Tầm nhìn giảm. Dấu hiệu trực tiếp: Không nhìn rõ. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 73, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_4_giao_thong_tren_duong_nui/73.mp4", chapter: 3, q: "Tình huống \"Đường cong khuất\": Phương án xử lý đúng là gì?", options: ["Giảm tốc, giữ khoảng cách an toàn", "Tăng tốc để nhanh chóng vượt qua tình huống", "Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Đánh lái mạnh sang bên để tránh"], answer: 0, explain: "Dấu hiệu gián tiếp: Có vật che tầm nhìn. Dấu hiệu trực tiếp: Không thấy phía trước. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 74, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_5_giao_thong_tren_duong_quoc_lo/74.mp4", chapter: 3, q: "Tình huống \"Xe đap sang đường (2)\": Phương án xử lý đúng là gì?", options: ["Tăng tốc để nhanh chóng vượt qua tình huống", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Giảm tốc, giữ khoảng cách an toàn", "Chuyển làn ngay lập tức mà không quan sát"], answer: 2, explain: "Dấu hiệu gián tiếp: Có xe đap gần đường. Dấu hiệu trực tiếp: Xe đap đi xuống đường. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 75, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_5_giao_thong_tren_duong_quoc_lo/75.mp4", chapter: 3, q: "Tình huống \"Trẻ em sang đường (2)\": Phương án xử lý đúng là gì?", options: ["Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Giảm tốc, giữ khoảng cách an toàn và nhường đường cho người đi bộ", "Chuyển làn ngay lập tức mà không quan sát"], answer: 2, explain: "Dấu hiệu gián tiếp: Khu dân cư. Dấu hiệu trực tiếp: Trẻ bước ra. Xử lý: Giảm tốc, giữ khoảng cách an toàn và nhường đường cho người đi bộ." },
{ id: 76, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_5_giao_thong_tren_duong_quoc_lo/76.mp4", chapter: 3, q: "Tình huống \"Trẻ chạy ra đường\": Phương án xử lý đúng là gì?", options: ["Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Giảm tốc, giữ khoảng cách an toàn", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Đánh lái mạnh sang bên để tránh"], answer: 1, explain: "Dấu hiệu gián tiếp: Có trẻ gần đường. Dấu hiệu trực tiếp: Trẻ chạy ra bất ngờ. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 77, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_5_giao_thong_tren_duong_quoc_lo/77.mp4", chapter: 3, q: "Tình huống \"Xe con sang đường\": Phương án xử lý đúng là gì?", options: ["Bóp còi liên tục và giữ nguyên tốc độ", "Chuyển làn ngay lập tức mà không quan sát", "Giảm tốc, giữ khoảng cách an toàn", "Đánh lái mạnh sang bên để tránh"], answer: 2, explain: "Dấu hiệu gián tiếp: Giao cắt. Dấu hiệu trực tiếp: Xe băng ngang. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 78, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_5_giao_thong_tren_duong_quoc_lo/78.mp4", chapter: 3, q: "Tình huống \"Xe máy vượt đèn\": Phương án xử lý đúng là gì?", options: ["Giảm tốc, giữ khoảng cách an toàn", "Bóp còi liên tục và giữ nguyên tốc độ", "Đánh lái mạnh sang bên để tránh", "Tăng tốc để nhanh chóng vượt qua tình huống"], answer: 0, explain: "Dấu hiệu gián tiếp: Giao lộ. Dấu hiệu trực tiếp: Xe vượt đèn tín hiệu. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 79, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_5_giao_thong_tren_duong_quoc_lo/79.mp4", chapter: 3, q: "Tình huống \"Xe máy từ nhánh ra\": Phương án xử lý đúng là gì?", options: ["Đánh lái mạnh sang bên để tránh", "Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Giảm tốc, giữ khoảng cách an toàn", "Bóp còi liên tục và giữ nguyên tốc độ"], answer: 2, explain: "Dấu hiệu gián tiếp: Có ngõ nhỏ. Dấu hiệu trực tiếp: Xe đi ra. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 80, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_5_giao_thong_tren_duong_quoc_lo/80.mp4", chapter: 3, q: "Tình huống \"Đường ổ gà\": Phương án xử lý đúng là gì?", options: ["Giảm tốc, giữ khoảng cách an toàn", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Đánh lái mạnh sang bên để tránh", "Đi sát vào phương tiện phía trước để quan sát rõ hơn"], answer: 0, explain: "Dấu hiệu gián tiếp: Mặt đường xấu. Dấu hiệu trực tiếp: Xe phía trước né tránh. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 81, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_5_giao_thong_tren_duong_quoc_lo/81.mp4", chapter: 4, q: "Tình huống \"Xe phía trước giảm tốc bất thường\": Phương án xử lý đúng là gì?", options: ["Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Giảm tốc, giữ khoảng cách an toàn và quan sát tình huống phía trước", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Đánh lái mạnh sang bên để tránh"], answer: 1, explain: "Dấu hiệu gián tiếp: Xe chạy không ổn định, có xu hướng chậm lại. Dấu hiệu trực tiếp: Đèn phanh bật liên tục. Xử lý: Giảm tốc, giữ khoảng cách an toàn và quan sát tình huống phía trước." },
{ id: 82, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_5_giao_thong_tren_duong_quoc_lo/82.mp4", chapter: 4, q: "Tình huống \"Xe phía trước dừng đột ngột\": Phương án xử lý đúng là gì?", options: ["Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Đánh lái mạnh sang bên để tránh", "Giảm tốc kịp thời, giữ khoảng cách an toàn để tránh va chạm", "Bóp còi liên tục và giữ nguyên tốc độ"], answer: 2, explain: "Dấu hiệu gián tiếp: Khoảng cách giữa các xe bị thu hẹp. Dấu hiệu trực tiếp: Xe phía trước dừng lại. Xử lý: Giảm tốc kịp thời, giữ khoảng cách an toàn để tránh va chạm." },
{ id: 83, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_5_giao_thong_tren_duong_quoc_lo/83.mp4", chapter: 4, q: "Tình huống \"Xe phía trước bật tín hiệu rẽ phải\": Phương án xử lý đúng là gì?", options: ["Chuyển làn ngay lập tức mà không quan sát", "Giảm tốc, giữ khoảng cách an toàn và quan sát hướng rẽ", "Tăng tốc để nhanh chóng vượt qua tình huống", "Đi sát vào phương tiện phía trước để quan sát rõ hơn"], answer: 1, explain: "Dấu hiệu gián tiếp: Xe đi sát lề phải. Dấu hiệu trực tiếp: Xe bật xi nhan phải và giảm tốc. Xử lý: Giảm tốc, giữ khoảng cách an toàn và quan sát hướng rẽ." },
{ id: 84, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_5_giao_thong_tren_duong_quoc_lo/84.mp4", chapter: 4, q: "Tình huống \"Xe phía trước bật tín hiệu rẽ trái\": Phương án xử lý đúng là gì?", options: ["Đánh lái mạnh sang bên để tránh", "Chuyển làn ngay lập tức mà không quan sát", "Giảm tốc, giữ khoảng cách an toàn", "Tăng tốc để nhanh chóng vượt qua tình huống"], answer: 2, explain: "Dấu hiệu gián tiếp: Xe có xu hướng dịch sang trái. Dấu hiệu trực tiếp: Xe bật xi nhan trái. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 85, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_5_giao_thong_tren_duong_quoc_lo/85.mp4", chapter: 4, q: "Tình huống \"Xe phía trước quay đầu\": Phương án xử lý đúng là gì?", options: ["Bóp còi liên tục và giữ nguyên tốc độ", "Tăng tốc để nhanh chóng vượt qua tình huống", "Giảm tốc, giữ khoảng cách an toàn và quan sát", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp"], answer: 2, explain: "Dấu hiệu gián tiếp: Xe giảm tốc gần điểm quay đầu. Dấu hiệu trực tiếp: Xe đánh lái quay đầu. Xử lý: Giảm tốc, giữ khoảng cách an toàn và quan sát." },
{ id: 86, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_5_giao_thong_tren_duong_quoc_lo/86.mp4", chapter: 4, q: "Tình huống \"Xe taxi dừng đón khách\": Phương án xử lý đúng là gì?", options: ["Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Tăng tốc để nhanh chóng vượt qua tình huống", "Đánh lái mạnh sang bên để tránh", "Giảm tốc, giữ khoảng cách an toàn và quan sát người lên xuống"], answer: 3, explain: "Dấu hiệu gián tiếp: Xe taxi chạy chậm gần lề đường. Dấu hiệu trực tiếp: Xe dừng lại đột ngột. Xử lý: Giảm tốc, giữ khoảng cách an toàn và quan sát người lên xuống." },
{ id: 87, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_5_giao_thong_tren_duong_quoc_lo/87.mp4", chapter: 4, q: "Tình huống \"Xe công nghệ dừng đột ngột\": Phương án xử lý đúng là gì?", options: ["Giảm tốc, giữ khoảng cách an toàn", "Tăng tốc để nhanh chóng vượt qua tình huống", "Bóp còi liên tục và giữ nguyên tốc độ", "Chuyển làn ngay lập tức mà không quan sát"], answer: 0, explain: "Dấu hiệu gián tiếp: Xe di chuyển không ổn định. Dấu hiệu trực tiếp: Xe dừng để đón trả khách. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 88, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_5_giao_thong_tren_duong_quoc_lo/88.mp4", chapter: 4, q: "Tình huống \"Xe phía trước chuyển hướng liên tục\": Phương án xử lý đúng là gì?", options: ["Đánh lái mạnh sang bên để tránh", "Giảm tốc, giữ khoảng cách an toàn và quan sát", "Bóp còi liên tục và giữ nguyên tốc độ", "Đi sát vào phương tiện phía trước để quan sát rõ hơn"], answer: 1, explain: "Dấu hiệu gián tiếp: Xe không giữ làn ổn định. Dấu hiệu trực tiếp: Xe đánh lái nhiều lần. Xử lý: Giảm tốc, giữ khoảng cách an toàn và quan sát." },
{ id: 89, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_5_giao_thong_tren_duong_quoc_lo/89.mp4", chapter: 4, q: "Tình huống \"Xe phía trước có dấu hiệu hỏng\": Phương án xử lý đúng là gì?", options: ["Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Giảm tốc, giữ khoảng cách an toàn và quan sát", "Đánh lái mạnh sang bên để tránh", "Tăng tốc để nhanh chóng vượt qua tình huống"], answer: 1, explain: "Dấu hiệu gián tiếp: Xe chạy chậm bất thường. Dấu hiệu trực tiếp: Xe bật tín hiệu cảnh báo. Xử lý: Giảm tốc, giữ khoảng cách an toàn và quan sát." },
{ id: 90, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_5_giao_thong_tren_duong_quoc_lo/90.mp4", chapter: 4, q: "Tình huống \"Xe phía trước chở hàng cồng kềnh\": Phương án xử lý đúng là gì?", options: ["Giảm tốc, giữ khoảng cách an toàn", "Bóp còi liên tục và giữ nguyên tốc độ", "Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Tăng tốc để nhanh chóng vượt qua tình huống"], answer: 0, explain: "Dấu hiệu gián tiếp: Hàng hóa vượt quá kích thước. Dấu hiệu trực tiếp: Hàng rung lắc. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 91, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_6_tai_nan_giao_thong_thuc_te/91.mp4", chapter: 4, q: "Tình huống \"Xe tải đổ dốc\": Phương án xử lý đúng là gì?", options: ["Giảm tốc, giữ khoảng cách an toàn", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Bóp còi liên tục và giữ nguyên tốc độ", "Tăng tốc để nhanh chóng vượt qua tình huống"], answer: 0, explain: "Dấu hiệu gián tiếp: Đường dốc dài. Dấu hiệu trực tiếp: Xe tăng tốc nhanh. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 92, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_6_tai_nan_giao_thong_thuc_te/92.mp4", chapter: 4, q: "Tình huống \"Xe container quay đầu\": Phương án xử lý đúng là gì?", options: ["Đánh lái mạnh sang bên để tránh", "Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Giảm tốc, giữ khoảng cách an toàn"], answer: 3, explain: "Dấu hiệu gián tiếp: Xe lớn ở khu vực quay đầu. Dấu hiệu trực tiếp: Xe bắt đầu xoay đầu xe. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 93, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_6_tai_nan_giao_thong_thuc_te/93.mp4", chapter: 4, q: "Tình huống \"Xe phía trước phanh liên tục\": Phương án xử lý đúng là gì?", options: ["Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Đánh lái mạnh sang bên để tránh", "Giảm tốc, giữ khoảng cách an toàn"], answer: 3, explain: "Dấu hiệu gián tiếp: Xe chạy không đều. Dấu hiệu trực tiếp: Đèn phanh bật nhiều lần. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 94, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_6_tai_nan_giao_thong_thuc_te/94.mp4", chapter: 4, q: "Tình huống \"Xe phía trước tránh ổ gà\": Phương án xử lý đúng là gì?", options: ["Giảm tốc, giữ khoảng cách an toàn", "Tăng tốc để nhanh chóng vượt qua tình huống", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Bóp còi liên tục và giữ nguyên tốc độ"], answer: 0, explain: "Dấu hiệu gián tiếp: Đường xấu. Dấu hiệu trực tiếp: Xe đánh lái tránh. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 95, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_6_tai_nan_giao_thong_thuc_te/95.mp4", chapter: 4, q: "Tình huống \"Xe phía trước bị che khuất\": Phương án xử lý đúng là gì?", options: ["Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Chuyển làn ngay lập tức mà không quan sát", "Giảm tốc, giữ khoảng cách an toàn và quan sát", "Bóp còi liên tục và giữ nguyên tốc độ"], answer: 2, explain: "Dấu hiệu gián tiếp: Có xe lớn chắn tầm nhìn. Dấu hiệu trực tiếp: Không thấy rõ phía trước. Xử lý: Giảm tốc, giữ khoảng cách an toàn và quan sát." },
{ id: 96, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_6_tai_nan_giao_thong_thuc_te/96.mp4", chapter: 4, q: "Tình huống \"Xe phía trước đi chậm\": Phương án xử lý đúng là gì?", options: ["Chuyển làn ngay lập tức mà không quan sát", "Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Giảm tốc phù hợp, giữ khoảng cách an toàn", "Đánh lái mạnh sang bên để tránh"], answer: 2, explain: "Dấu hiệu gián tiếp: Tốc độ thấp bất thường. Dấu hiệu trực tiếp: Xe giữ tốc độ thấp. Xử lý: Giảm tốc phù hợp, giữ khoảng cách an toàn." },
{ id: 97, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_6_tai_nan_giao_thong_thuc_te/97.mp4", chapter: 4, q: "Tình huống \"Xe phía trước dừng tại vạch\": Phương án xử lý đúng là gì?", options: ["Bóp còi liên tục và giữ nguyên tốc độ", "Đánh lái mạnh sang bên để tránh", "Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Giảm tốc và dừng xe theo đúng quy định"], answer: 3, explain: "Dấu hiệu gián tiếp: Giao lộ có đèn tín hiệu. Dấu hiệu trực tiếp: Xe dừng đúng vạch. Xử lý: Giảm tốc và dừng xe theo đúng quy định." },
{ id: 98, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_6_tai_nan_giao_thong_thuc_te/98.mp4", chapter: 4, q: "Tình huống \"Xe phía trước vượt đèn vàng\": Phương án xử lý đúng là gì?", options: ["Tăng tốc để nhanh chóng vượt qua tình huống", "Giảm tốc, giữ khoảng cách an toàn", "Đánh lái mạnh sang bên để tránh", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp"], answer: 1, explain: "Dấu hiệu gián tiếp: Gần đèn tín hiệu. Dấu hiệu trực tiếp: Xe tăng tốc vượt. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 99, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_6_tai_nan_giao_thong_thuc_te/99.mp4", chapter: 4, q: "Tình huống \"Xe phía trước chuyển làn không tín hiệu\": Phương án xử lý đúng là gì?", options: ["Bóp còi liên tục và giữ nguyên tốc độ", "Chuyển làn ngay lập tức mà không quan sát", "Giảm tốc, giữ khoảng cách an toàn", "Đi sát vào phương tiện phía trước để quan sát rõ hơn"], answer: 2, explain: "Dấu hiệu gián tiếp: Xe đi sát vạch. Dấu hiệu trực tiếp: Xe chuyển làn đột ngột. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 100, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_6_tai_nan_giao_thong_thuc_te/100.mp4", chapter: 4, q: "Tình huống \"Xe phía trước lấn làn\": Phương án xử lý đúng là gì?", options: ["Giảm tốc, giữ khoảng cách an toàn", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Bóp còi liên tục và giữ nguyên tốc độ"], answer: 0, explain: "Dấu hiệu gián tiếp: Xe không giữ đúng phần đường. Dấu hiệu trực tiếp: Xe lấn sang làn khác. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 101, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_6_tai_nan_giao_thong_thuc_te/101.mp4", chapter: 5, q: "Tình huống \"Xe phía trước chở vật liệu rơi\": Phương án xử lý đúng là gì?", options: ["Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Bóp còi liên tục và giữ nguyên tốc độ", "Giảm tốc, giữ khoảng cách an toàn", "Đánh lái mạnh sang bên để tránh"], answer: 2, explain: "Dấu hiệu gián tiếp: Xe chở hàng rời. Dấu hiệu trực tiếp: Vật liệu rơi xuống. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 102, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_6_tai_nan_giao_thong_thuc_te/102.mp4", chapter: 5, q: "Tình huống \"Xe phía trước quay đầu sai\": Phương án xử lý đúng là gì?", options: ["Đánh lái mạnh sang bên để tránh", "Giảm tốc, giữ khoảng cách an toàn", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Bóp còi liên tục và giữ nguyên tốc độ"], answer: 1, explain: "Dấu hiệu gián tiếp: Không đúng nơi quay đầu. Dấu hiệu trực tiếp: Xe quay đầu đột ngột. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 103, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_6_tai_nan_giao_thong_thuc_te/103.mp4", chapter: 5, q: "Tình huống \"Xe phía trước dừng giữa đường\": Phương án xử lý đúng là gì?", options: ["Chuyển làn ngay lập tức mà không quan sát", "Bóp còi liên tục và giữ nguyên tốc độ", "Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Giảm tốc, giữ khoảng cách an toàn"], answer: 3, explain: "Dấu hiệu gián tiếp: Không vào lề. Dấu hiệu trực tiếp: Xe dừng đột ngột. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 104, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_6_tai_nan_giao_thong_thuc_te/104.mp4", chapter: 5, q: "Tình huống \"Xe phía trước có người xuống xe\": Phương án xử lý đúng là gì?", options: ["Bóp còi liên tục và giữ nguyên tốc độ", "Giảm tốc, giữ khoảng cách an toàn", "Tăng tốc để nhanh chóng vượt qua tình huống", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp"], answer: 1, explain: "Dấu hiệu gián tiếp: Xe dừng. Dấu hiệu trực tiếp: Cửa mở, người bước xuống. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 105, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_6_tai_nan_giao_thong_thuc_te/105.mp4", chapter: 5, q: "Tình huống \"Xe phía trước có trẻ em\": Phương án xử lý đúng là gì?", options: ["Tăng tốc để nhanh chóng vượt qua tình huống", "Đánh lái mạnh sang bên để tránh", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Giảm tốc, giữ khoảng cách an toàn"], answer: 3, explain: "Dấu hiệu gián tiếp: Có ghế trẻ em hoặc hành khách. Dấu hiệu trực tiếp: Trẻ có thể xuống xe. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 106, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_6_tai_nan_giao_thong_thuc_te/106.mp4", chapter: 5, q: "Tình huống \"Xe phía trước rẽ vào ngõ\": Phương án xử lý đúng là gì?", options: ["Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Chuyển làn ngay lập tức mà không quan sát", "Giảm tốc, giữ khoảng cách an toàn", "Tăng tốc để nhanh chóng vượt qua tình huống"], answer: 2, explain: "Dấu hiệu gián tiếp: Có ngõ nhỏ. Dấu hiệu trực tiếp: Xe giảm tốc và rẽ. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 107, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_6_tai_nan_giao_thong_thuc_te/107.mp4", chapter: 5, q: "Tình huống \"Xe phía trước tránh người đi bộ\": Phương án xử lý đúng là gì?", options: ["Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Giảm tốc, giữ khoảng cách an toàn và nhường đường cho người đi bộ", "Bóp còi liên tục và giữ nguyên tốc độ", "Đi sát vào phương tiện phía trước để quan sát rõ hơn"], answer: 1, explain: "Dấu hiệu gián tiếp: Có người gần đường. Dấu hiệu trực tiếp: Xe phanh. Xử lý: Giảm tốc, giữ khoảng cách an toàn và nhường đường cho người đi bộ." },
{ id: 108, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_6_tai_nan_giao_thong_thuc_te/108.mp4", chapter: 5, q: "Tình huống \"Xe phía trước tránh xe khác\": Phương án xử lý đúng là gì?", options: ["Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Giảm tốc, giữ khoảng cách an toàn", "Bóp còi liên tục và giữ nguyên tốc độ", "Tăng tốc để nhanh chóng vượt qua tình huống"], answer: 1, explain: "Dấu hiệu gián tiếp: Giao thông đông. Dấu hiệu trực tiếp: Xe đánh lái. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 109, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_6_tai_nan_giao_thong_thuc_te/109.mp4", chapter: 5, q: "Tình huống \"Xe phía trước bị ùn tắc\": Phương án xử lý đúng là gì?", options: ["Đánh lái mạnh sang bên để tránh", "Giảm tốc, giữ khoảng cách an toàn", "Bóp còi liên tục và giữ nguyên tốc độ", "Đi sát vào phương tiện phía trước để quan sát rõ hơn"], answer: 1, explain: "Dấu hiệu gián tiếp: Xe đông dần. Dấu hiệu trực tiếp: Xe dừng hàng loạt. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 110, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_6_tai_nan_giao_thong_thuc_te/110.mp4", chapter: 5, q: "Tình huống \"Xe phía trước đi vào đường hẹp\": Phương án xử lý đúng là gì?", options: ["Giảm tốc, giữ khoảng cách an toàn", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Bóp còi liên tục và giữ nguyên tốc độ"], answer: 0, explain: "Dấu hiệu gián tiếp: Đường nhỏ lại. Dấu hiệu trực tiếp: Xe giảm tốc. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 111, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_6_tai_nan_giao_thong_thuc_te/111.mp4", chapter: 5, q: "Tình huống \"Xe phía trước qua cầu hẹp\": Phương án xử lý đúng là gì?", options: ["Giảm tốc, giữ khoảng cách an toàn", "Đánh lái mạnh sang bên để tránh", "Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Bóp còi liên tục và giữ nguyên tốc độ"], answer: 0, explain: "Dấu hiệu gián tiếp: Cầu nhỏ. Dấu hiệu trực tiếp: Xe đi chậm. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 112, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_6_tai_nan_giao_thong_thuc_te/112.mp4", chapter: 5, q: "Tình huống \"Xe phía trước qua đường trơn\": Phương án xử lý đúng là gì?", options: ["Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Giảm tốc, giữ khoảng cách an toàn", "Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Đánh lái mạnh sang bên để tránh"], answer: 1, explain: "Dấu hiệu gián tiếp: Mặt đường ướt. Dấu hiệu trực tiếp: Xe giảm tốc. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 113, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_6_tai_nan_giao_thong_thuc_te/113.mp4", chapter: 5, q: "Tình huống \"Xe phía trước vào khúc cua\": Phương án xử lý đúng là gì?", options: ["Giảm tốc, giữ khoảng cách an toàn", "Tăng tốc để nhanh chóng vượt qua tình huống", "Đánh lái mạnh sang bên để tránh", "Chuyển làn ngay lập tức mà không quan sát"], answer: 0, explain: "Dấu hiệu gián tiếp: Đường cong. Dấu hiệu trực tiếp: Xe đánh lái. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 114, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_6_tai_nan_giao_thong_thuc_te/114.mp4", chapter: 5, q: "Tình huống \"Xe phía trước bị che khuất bởi sương\": Phương án xử lý đúng là gì?", options: ["Bóp còi liên tục và giữ nguyên tốc độ", "Giảm tốc, giữ khoảng cách an toàn và bật tín hiệu cảnh báo", "Tăng tốc để nhanh chóng vượt qua tình huống", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp"], answer: 1, explain: "Dấu hiệu gián tiếp: Tầm nhìn hạn chế. Dấu hiệu trực tiếp: Không thấy rõ. Xử lý: Giảm tốc, giữ khoảng cách an toàn và bật tín hiệu cảnh báo." },
{ id: 115, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_6_tai_nan_giao_thong_thuc_te/115.mp4", chapter: 5, q: "Tình huống \"Xe phía trước đi ban đêm\": Phương án xử lý đúng là gì?", options: ["Tăng tốc để nhanh chóng vượt qua tình huống", "Bóp còi liên tục và giữ nguyên tốc độ", "Đánh lái mạnh sang bên để tránh", "Giảm tốc, giữ khoảng cách an toàn"], answer: 3, explain: "Dấu hiệu gián tiếp: Ánh sáng yếu. Dấu hiệu trực tiếp: Tầm nhìn kém. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 116, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_6_tai_nan_giao_thong_thuc_te/116.mp4", chapter: 5, q: "Tình huống \"Xe phía trước bật đèn pha\": Phương án xử lý đúng là gì?", options: ["Chuyển làn ngay lập tức mà không quan sát", "Đánh lái mạnh sang bên để tránh", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Giảm tốc, giữ khoảng cách an toàn"], answer: 3, explain: "Dấu hiệu gián tiếp: Bị chói mắt. Dấu hiệu trực tiếp: Ánh sáng mạnh. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 117, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_6_tai_nan_giao_thong_thuc_te/117.mp4", chapter: 5, q: "Tình huống \"Xe phía trước đi chậm bất thường\": Phương án xử lý đúng là gì?", options: ["Chuyển làn ngay lập tức mà không quan sát", "Giảm tốc, giữ khoảng cách an toàn", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Bóp còi liên tục và giữ nguyên tốc độ"], answer: 1, explain: "Dấu hiệu gián tiếp: Không rõ nguyên nhân. Dấu hiệu trực tiếp: Xe giảm tốc. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 118, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_6_tai_nan_giao_thong_thuc_te/118.mp4", chapter: 5, q: "Tình huống \"Xe phía trước tránh chướng ngại vật\": Phương án xử lý đúng là gì?", options: ["Đánh lái mạnh sang bên để tránh", "Chuyển làn ngay lập tức mà không quan sát", "Bóp còi liên tục và giữ nguyên tốc độ", "Giảm tốc, giữ khoảng cách an toàn"], answer: 3, explain: "Dấu hiệu gián tiếp: Có vật trên đường. Dấu hiệu trực tiếp: Xe đánh lái. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 119, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_6_tai_nan_giao_thong_thuc_te/119.mp4", chapter: 5, q: "Tình huống \"Xe phía trước vào khu dân cư\": Phương án xử lý đúng là gì?", options: ["Bóp còi liên tục và giữ nguyên tốc độ", "Đánh lái mạnh sang bên để tránh", "Đi sát vào phương tiện phía trước để quan sát rõ hơn", "Giảm tốc, giữ khoảng cách an toàn"], answer: 3, explain: "Dấu hiệu gián tiếp: Có biển báo. Dấu hiệu trực tiếp: Xe giảm tốc. Xử lý: Giảm tốc, giữ khoảng cách an toàn." },
{ id: 120, video: "https://www.gplx.website/VIDEO_MO_PHONG_THGT/chuong_6_tai_nan_giao_thong_thuc_te/120.mp4", chapter: 5, q: "Tình huống \"Xe phía trước qua trường học\": Phương án xử lý đúng là gì?", options: ["Bóp còi liên tục và giữ nguyên tốc độ", "Không cần giảm tốc nếu chưa thấy nguy hiểm trực tiếp", "Giảm tốc, giữ khoảng cách an toàn và nhường đường cho người đi bộ", "Chuyển làn ngay lập tức mà không quan sát"], answer: 2, explain: "Dấu hiệu gián tiếp: Có biển cảnh báo. Dấu hiệu trực tiếp: Có học sinh. Xử lý: Giảm tốc, giữ khoảng cách an toàn và nhường đường cho người đi bộ." }
];

function renderMophongQuiz(count = 10) {
  const container = document.getElementById('mophongQuiz');
  if (!container) return;
  const qs = [...mophongQuestions].sort(() => Math.random() - 0.5).slice(0, count);
  let html = `<p style="color:var(--muted);margin-bottom:1rem">Đang luyện <strong>${qs.length}</strong> / ${mophongQuestions.length} tình huống theo <strong>TT 17/2026/TT-BXD</strong> (kèm video chính thức)</p>`;
  qs.forEach((q, idx) => {
    const videoHtml = q.video ? `
      <div class="mophong-video-wrap" style="margin:0.75rem 0 1rem;border-radius:12px;overflow:hidden;background:#000;max-width:640px">
        <video controls playsinline preload="metadata" style="width:100%;display:block;max-height:360px"
          src="${q.video}"
          title="Tình huống ${q.id}">
          Trình duyệt không hỗ trợ video.
        </video>
        <div style="padding:0.4rem 0.75rem;background:#1a1a2e;color:#aaa;font-size:0.8rem">
          Video tình huống STT ${q.id} · Nguồn: gplx.website
        </div>
      </div>` : '';
    html += `
      <div class="question-card">
        <div class="q-num">Câu ${idx + 1} <span class="tag tag-info">STT ${q.id}</span></div>
        ${videoHtml}
        <p><strong>${q.q}</strong></p>
        <div class="options">
          ${q.options.map((opt, i) => `
            <label onclick="checkQuizAnswer(this, ${i}, ${q.answer}, 'mp-exp-${idx}')">
              <input type="radio" name="mp${idx}" value="${i}"> ${String.fromCharCode(65 + i)}. ${opt}
            </label>
          `).join('')}
        </div>
        <div class="explain" id="mp-exp-${idx}"><strong>Giải thích (theo Phụ lục I):</strong> ${q.explain}</div>
      </div>
    `;
  });
  container.innerHTML = html;
}

// ==================== SA HÌNH QUIZ ====================
const sahinhQuestions = [
  { q: "Thời gian tối đa để hoàn thành 11 bài sa hình hạng B là bao nhiêu?", options: ["15 phút", "18 phút", "20 phút", "25 phút"], answer: 1, explain: "Quy định 18 phút cho toàn bộ bài sa hình hạng B." },
  { q: "Điểm đạt tối thiểu phần sa hình là bao nhiêu?", options: ["70/100", "75/100", "80/100", "90/100"], answer: 2, explain: "Phải đạt từ 80 điểm trở lên." },
  { q: "Ở bài dừng và khởi hành ngang dốc, lỗi nào bị TRUẤT quyền thi?", options: ["Dừng chưa tới vạch", "Tụt dốc quá 50cm", "Chết máy 1 lần", "Không bật xi nhan"], answer: 1, explain: "Tụt dốc quá 50cm hoặc dừng quá vạch / quá 30 giây đều bị truất." },
  { q: "Tốc độ tối đa cho phép trong sân sa hình (trừ bài thay đổi số) là?", options: ["20 km/h", "24 km/h", "30 km/h", "40 km/h"], answer: 1, explain: "Hạng B: ≤ 24 km/h." },
  { q: "Không thắt dây an toàn khi xuất phát bị trừ bao nhiêu điểm?", options: ["3 điểm", "5 điểm", "10 điểm", "Truất quyền"], answer: 1, explain: "Không thắt dây an toàn: trừ 5 điểm." },
  { q: "Bài nào yêu cầu hai bánh bên phụ phải đi đúng vùng vệt bánh xe?", options: ["Ghép xe dọc", "Qua vệt bánh xe & đường vòng vuông góc", "Đường chữ S", "Ghép xe ngang"], answer: 1, explain: "Bài 4 – Qua vệt bánh xe." },
  { q: "Quá 30 giây chưa qua vạch xuất phát sẽ bị xử lý như thế nào?", options: ["Trừ 5 điểm", "Trừ 10 điểm", "TRUẤT quyền thi", "Không sao"], answer: 2, explain: "Quá 30 giây chưa xuất phát = truất quyền." },
  { q: "Khi kết thúc bài thi sa hình, thao tác nào bắt buộc?", options: ["Tắt máy ngay", "Bật xi nhan phải và qua vạch đích", "Mở cửa xe", "Bật đèn khẩn cấp"], answer: 1, explain: "Phải bật xi nhan phải và qua vạch kết thúc." }
];

function renderSahinhQuiz() {
  const container = document.getElementById('sahinhQuiz');
  if (!container) return;
  const qs = [...sahinhQuestions].sort(() => Math.random() - 0.5).slice(0, 5);
  let html = '';
  qs.forEach((q, idx) => {
    html += `
      <div class="question-card">
        <div class="q-num">Câu ${idx + 1}</div>
        <p><strong>${q.q}</strong></p>
        <div class="options">
          ${q.options.map((opt, i) => `
            <label onclick="checkQuizAnswer(this, ${i}, ${q.answer}, 'sh-exp-${idx}')">
              <input type="radio" name="sh${idx}" value="${i}"> ${String.fromCharCode(65 + i)}. ${opt}
            </label>
          `).join('')}
        </div>
        <div class="explain" id="sh-exp-${idx}"><strong>Giải thích:</strong> ${q.explain}</div>
      </div>
    `;
  });
  container.innerHTML = html;
}

// ==================== ĐƯỜNG TRƯỜNG QUIZ ====================
const duongtruongQuestions = [
  { q: "Điều kiện để được thi đường trường là gì?", options: ["Chỉ cần đạt lý thuyết", "Phải đạt cả lý thuyết và sa hình", "Chỉ cần đạt sa hình", "Không cần điều kiện"], answer: 1, explain: "Thi tuần tự: Lý thuyết → Sa hình → Đường trường." },
  { q: "Điểm đạt tối thiểu phần đường trường là?", options: ["70 điểm", "75 điểm", "80 điểm", "90 điểm"], answer: 2, explain: "Thang 100 điểm, đạt từ 80 trở lên." },
  { q: "Hành vi nào dễ bị ĐÌNH CHỈ sát hạch đường trường?", options: ["Quên bật xi nhan 1 lần", "Đi ngược chiều hoặc lên vỉa hè", "Giữ tốc độ hơi chậm", "Chỉnh gương khi đang chạy"], answer: 1, explain: "Đi ngược chiều, lên vỉa hè, gây tai nạn… là lỗi đình chỉ." },
  { q: "Trước khi xuất phát đường trường, thao tác nào quan trọng nhất?", options: ["Tăng ga mạnh", "Thắt dây, chỉnh ghế/gương, quan sát", "Bật nhạc", "Mở cửa kiểm tra"], answer: 1, explain: "Chuẩn bị an toàn trước khi xuất phát." },
  { q: "Khi giám khảo ra hiệu lệnh chuyển hướng, bạn phải?", options: ["Đánh lái ngay không cần báo hiệu", "Bật xi nhan, quan sát, chuyển hướng an toàn", "Dừng xe hỏi lại", "Tăng tốc rồi mới chuyển"], answer: 1, explain: "Luôn báo hiệu và quan sát trước khi chuyển hướng." },
  { q: "Giữ khoảng cách an toàn với xe phía trước nhằm mục đích gì?", options: ["Tiết kiệm nhiên liệu", "Có đủ thời gian phản ứng khi xe trước phanh gấp", "Để xe khác xen vào", "Không có mục đích đặc biệt"], answer: 1, explain: "Khoảng cách an toàn giúp tránh va chạm." },
  { q: "Không thắt dây an toàn trong suốt bài thi đường trường bị xử lý?", options: ["Nhắc nhở", "Trừ điểm hoặc có thể bị đình chỉ tùy mức độ", "Không sao", "Chỉ trừ 1 điểm"], answer: 1, explain: "Thắt dây an toàn là bắt buộc trong suốt quá trình." },
  { q: "Quãng đường thi đường trường tối thiểu khoảng bao nhiêu?", options: ["1 km", "2 km", "5 km", "10 km"], answer: 1, explain: "Thường tối thiểu khoảng 2 km trên đường công cộng." }
];

function renderDuongtruongQuiz() {
  const container = document.getElementById('duongtruongQuiz');
  if (!container) return;
  const qs = [...duongtruongQuestions].sort(() => Math.random() - 0.5).slice(0, 5);
  let html = '';
  qs.forEach((q, idx) => {
    html += `
      <div class="question-card">
        <div class="q-num">Câu ${idx + 1}</div>
        <p><strong>${q.q}</strong></p>
        <div class="options">
          ${q.options.map((opt, i) => `
            <label onclick="checkQuizAnswer(this, ${i}, ${q.answer}, 'dt-exp-${idx}')">
              <input type="radio" name="dt${idx}" value="${i}"> ${String.fromCharCode(65 + i)}. ${opt}
            </label>
          `).join('')}
        </div>
        <div class="explain" id="dt-exp-${idx}"><strong>Giải thích:</strong> ${q.explain}</div>
      </div>
    `;
  });
  container.innerHTML = html;
}

function checkQuizAnswer(label, chosen, correct, explainId) {
  const parent = label.parentElement;
  parent.querySelectorAll('label').forEach(l => {
    l.classList.remove('correct', 'wrong');
    l.style.pointerEvents = 'none';
  });
  if (chosen === correct) {
    label.classList.add('correct');
  } else {
    label.classList.add('wrong');
    parent.querySelectorAll('label')[correct].classList.add('correct');
  }
  const exp = document.getElementById(explainId);
  if (exp) exp.classList.add('show');
}

// Khi chuyển tab thì render quiz tương ứng
document.querySelectorAll('#mainNav button').forEach(btn => {
  const original = btn.onclick;
  btn.addEventListener('click', () => {
    setTimeout(() => {
      if (btn.dataset.section === 'mophong') renderMophongQuiz();
      
      
      if (btn.dataset.section === 'thithu') renderHangSelector();
    }, 80);
  });
});


// ==================== KEYBOARD SHORTCUTS ====================
document.addEventListener('keydown', function(e) {
  const examArea = document.getElementById('examArea');
  if (!examArea || examArea.classList.contains('hidden')) return;
  // Không bắt phím khi đang focus input/select
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') return;

  // Phím số 1-4 chọn đáp án
  if (e.key >= '1' && e.key <= '4') {
    const idx = parseInt(e.key, 10) - 1;
    const q = examQuestions[currentIndex];
    if (q && idx < q.options.length) {
      selectOption(idx);
      e.preventDefault();
    }
  }
  // Mũi tên trái / phải / lên / xuống
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    prevQuestion();
    e.preventDefault();
  }
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'Enter') {
    nextQuestion();
    e.preventDefault();
  }
});

// Khởi tạo hạng mặc định khi load
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('fHang')) {
    selectedHang = 'B';
    currentConfig = hangConfigs['B'];
  }
});
