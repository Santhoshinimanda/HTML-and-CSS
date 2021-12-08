//1
let name = ["l","m","n","o"];
[, ,a,] = name;
console.log("a:",a);
//2
let organization ={ 
    Name:"Amazon" ,
    adress : {
        city:"Tirupathi",
        state:"AP",
        pincode:123456
        
    }
    
};
let {adress:{pincode: pincode}} = organization;
console.log("pincode : pincode" );
