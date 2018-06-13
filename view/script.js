
function storing(){

name=document.getElementById('name').value;
password=document.getElementById('password').value;
//alert(name);
localStorage.setItem('name',name)
localStorage.setItem('password',password)

}


function checking(){
//localStorage.setItem('name',12)
user=localStorage.getItem('name');
pass=localStorage.getItem('password');

u_id=document.getElementById('user_id').value;
p_id=document.getElementById('pass_id').value;
if((u_id==user)&&(p_id==pass))
	alert("hello"+user);
else
	alert("retry"+user);
}