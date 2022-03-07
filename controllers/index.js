var arrNhanVien = [];
var kiemTra = new Validation();
document.querySelector("#btnClick").onclick = function (){
    var nhanVien = new NhanVien();
    nhanVien.maNhanVien = document.querySelector('#maNhanVien').value;
    nhanVien.tenNhanVien = document.querySelector('#tenNhanVien').value;
    nhanVien.heSoChucVu = document.querySelector('#chucVu').value;
    nhanVien.salary = document.querySelector('#salary').value;
    nhanVien.hours = document.querySelector('#hours').value;
    var selectChucVu = document.querySelector('#chucVu');
    nhanVien.chucVu = selectChucVu.options[selectChucVu.selectedIndex].innerHTML;

    var valid = true;
    valid &= kiemTra.kiemTraChu(nhanVien.tenNhanVien, "#error_tenNhanVien")
    & kiemTra.kiemTraSo(nhanVien.maNhanVien, "#error_maNhanVien")
    & kiemTra.kiemTraSo(nhanVien.salary, "#error_salary")
    & kiemTra.kiemTraSo(nhanVien.hours, "#error_hours")
    & kiemTra.kiemTraDoDai(nhanVien.maNhanVien, "#error_maNhanVien_length", 4, 6)
    & kiemTra.kiemTraGiaTri(nhanVien.salary, '#error_salary_value', 1000000, 20000000)
    & kiemTra.kiemTraGiaTri(nhanVien.hours, "#error_hours_value", 50, 150)




    if(valid != true){
        return;
    }

    arrNhanVien.push(nhanVien);
    renderTableNhanVien(arrNhanVien);
    luuNhanVienStorage();

}


function renderTableNhanVien (mangNhanVien){
    var html = "";
    for(var i = 0 ; i<mangNhanVien.length; i++){
        var newNhanVien = new NhanVien();
        var index = mangNhanVien[i];
        newNhanVien.maNhanVien = index.maNhanVien;
        newNhanVien.tenNhanVien = index.tenNhanVien;
        newNhanVien.chucVu = index.chucVu;
        newNhanVien.salary = index.salary;
        newNhanVien.totalSalary() = index.totalSalary();
        newNhanVien.hours = index.hours;
        newNhanVien.xepLoaiNhanVien() = index.xepLoaiNhanVien();
        console.log(newNhanVien);
        html += 
        `
        <tr>
            <td>${newNhanVien.maNhanVien}</td>
            <td>${newNhanVien.tenNhanVien}</td>
            <td>${newNhanVien.chucVu}</td>
            <td>${newNhanVien.salary}</td>
            <td>${newNhanVien.totalSalary()}</td>
            <td>${newNhanVien.hours}</td>
            <td>${newNhanVien.xepLoaiNhanVien()}</td>
            <td>
                <button class = "btn btn-danger" onclick = "xoaNhanVien('${newNhanVien.maNhanVien}')">Xóa</button>
                <button class = "btn btn-primary" onclick = "suaNhanVien('${newNhanVien.maNhanVien}')">Chỉnh sửa</button>
            </td>
        </tr>
        `
    }
    document.querySelector("#tblNhanVien").innerHTML = html;
}

function xoaNhanVien (maNhanVienClick){
    for (var i = arrNhanVien.length - 1; i>=0; i--){
        var index = arrNhanVien[i];
        if(index.maNhanVien === maNhanVienClick){
            arrNhanVien.splice(i,1);
        }
    }
    renderTableNhanVien(arrNhanVien);
    luuNhanVienStorage();
}

function suaNhanVien (maNhanVienClick){
    for(var i = 0 ; i<arrNhanVien.length; i++){
        var index = arrNhanVien[i];
        if(index.maNhanVien === maNhanVienClick){
            document.querySelector('#maNhanVien').value = index.maNhanVien
            document.querySelector('#tenNhanVien').value = index.tenNhanVien;
            document.querySelector('#chucVu').value = index.heSoChucVu;
            document.querySelector('#salary').value = index.salary;
            document.querySelector('#hours').value = index.hours;
        }
    }
}
document.querySelector("#btnUpdate").onclick = function (){
    var newNhanVien = new NhanVien();
    newNhanVien.maNhanVien = document.querySelector('#maNhanVien').value;
    newNhanVien.tenNhanVien = document.querySelector('#tenNhanVien').value;
    newNhanVien.heSoChucVu = document.querySelector('#chucVu').value;
    newNhanVien.salary = document.querySelector('#salary').value;
    newNhanVien.hours = document.querySelector('#hours').value;
    var selectChucVu = document.querySelector('#chucVu');
    newNhanVien.chucVu = selectChucVu.options[selectChucVu.selectedIndex].innerHTML;
    for(var i = 0; i<arrNhanVien.length; i++){
        var index = arrNhanVien[i];
        if(newNhanVien.maNhanVien === index.maNhanVien){
            index.tenNhanVien = newNhanVien.tenNhanVien;
            index.chucVu = newNhanVien.chucVu;
            index.salary = newNhanVien.salary;
            index.hours = newNhanVien.hours;
            index.heSoChucVu = newNhanVien.heSoChucVu;
        }
    }
    renderTableNhanVien(arrNhanVien);
}
document.querySelector('#timKiem').onclick = function (){
    var tuKhoa = document.querySelector('#tuKhoa').value;
    tuKhoa = tuKhoa.trim().toLowerCase();
    var newArrNhanVien = [];
    for(var i = 0; i < arrNhanVien.length ; i++){
        var index = arrNhanVien[i];
        if(index.tenNhanVien.trim().toLowerCase().search(tuKhoa) !== -1){
            newArrNhanVien.push(index);
        }
    }
    renderTableNhanVien(newArrNhanVien);
}
function luuNhanVienStorage (){
    var sMangNhanVien = JSON.stringify(arrNhanVien);
    localStorage.setItem("arrStaff", sMangNhanVien);
}
function layNhanVienStorage(){
    if(localStorage.getItem("arrStaff")){
        var sMangNhanVien = localStorage.getItem("arrStaff");
        arrNhanVien = JSON.parse(sMangNhanVien);
        renderTableNhanVien(arrNhanVien);
    }

}

layNhanVienStorage();