function v(obj)
{
    obj.methodes();
       
}
var v1 = new v({
    data: {
        dj: {
            num: 1,
            num2: 2
        }
    },
    methodes: function () {
        console.log(this);
    }
})
// console.log(x());
// var a= new good();
// console.log(a());