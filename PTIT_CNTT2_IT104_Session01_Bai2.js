const a = 5;
const array = [1,2,3];
a = 10;
array.push(4);
// vì biến a là hằng số kiểu number nên không thể gán lại giá trị
// còn array là object const chỉ ngăn thay đổi tham chiếu chứ không ngăn thay đổi nội dung bên trong