function NhanVien (){
    this.maNhanVien = "";
    this.tenNhanVien = "";
    this.chucVu = "";
    this.heSoChucVu = "";
    this.salary = "";
    this.hours = "";
    this.totalSalary = function (){
        return this.heSoChucVu * this.salary;
    };
    this.xepLoaiNhanVien = function (){
        var html = "";
        if(this.hours >= 120){
            html = `Nhân viên xuất xắc`;
        }else
        if(this.hours >= 100){
            html = `Nhân viên giỏi`;
        }else
        if(this.hours >= 80){
            html = `Nhân viên khá`;
        }else
        if(this.hours >= 50){
            html = `Nhân viên trung bình`;
        }
        return html;
    };
};