function showvalues(){
    var strText = document.getElementById("namevoter").value;
    var strText1 = document.getElementById("voterid").value;
    var strText2 = document.getElementById("email").value;
    document.getElementById("pname").innerHTML = strText;
    document.getElementById("pid").innerHTML = strText1;
    document.getElementById("pmail").innerHTML = strText2;
}
