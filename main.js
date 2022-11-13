student_array=[];
function submit()
{
    var name1=document.getElementById("nos_1").value;
    var name2=document.getElementById("nos_2").value;
    var name3=document.getElementById("nos_3").value;
    var name4=document.getElementById("nos_4").value;

    student_array.push(name1);
    student_array.push(name2);
    student_array.push(name3);
    student_array.push(name4);

    document.getElementById("display_name").innerHTML = student_array;
    document.getElementById("submit_button").style.display = "none"; 
    document.getElementById("sort_button").style.display = "inline-block";
    
}

function sort()
{
student_array.sort();
document.getElementById("display_name").innerHTML = student_array;

}

