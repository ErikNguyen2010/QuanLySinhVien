function Validation (){
    this.kiemTraChu = function(value, selector){
        var regex = /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/;
        if(regex.test(value)){
            document.querySelector(selector).innerHTML = "";
            return true;
        }
        document.querySelector(selector).innerHTML = "Tất cả đều là chữ";
        return false;
    }
    this.kiemTraSo = function (value, selector){
        var regex =  /^[0-9]+$/;
        if (regex.test(value)){
            document.querySelector(selector).innerHTML = "";
            return true;
        }
        document.querySelector(selector).innerHTML = "Tất cả đều là số";
        return false;
    }
    this.kiemTraDoDai = function (value, selector, minLength, maxLength){
        if(value.length < minLength || value.length > maxLength){
            document.querySelector(selector).innerHTML = `Độ dài từ ${minLength} - ${maxLength} số `
            return false;
        }
        document.querySelector(selector).innerHTML = "";
        return true;
    }
    this.kiemTraGiaTri = function (value, selector, minValue , maxValue){
        if(value < minValue || value > maxValue){
            document.querySelector(selector).innerHTML = `Nhập giá trị từ ${minValue} - ${maxValue}`;
            return false;
        }
        document.querySelector(selector).innerHTML = "";
        return true;
    }
}