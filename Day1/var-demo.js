var x=100; // Global
function varDemo(){
    console.log("x ben trong ham:",x);
}

//
console.log("x ben ngoai ham:",x);

// Thực thi hàm
varDemo();

// Local
function fn_demo(){
    var y=200; //local
    console.log("y ben trong ham:");
}
fn_demo();
//y ben ngoai ham
console.log("y ben ngoai ham:",y); // ==error

