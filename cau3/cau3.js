let chuoi = prompt('Nhap chuoi ky tu kiem tra:')
    let arr1 = chuoi.split('');
    let count = 0;
    function demKyTu(arr){
        let arrKyTuAm = ['a', 'o', 'e', 'u', 'i'];
        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < arrKyTuAm.length; j++){
                if(arr[i] == arrKyTuAm[j]){
                   count++;
                }
            }
        }
        if(count == 0){
            count = false;
        }
        return count;
    }
    let result = demKyTu(arr1);
    alert(result);