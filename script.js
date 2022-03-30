document.querySelector('#push').onclick = function(){
    var counter=document.getElementById('counter').value;
    if(document.querySelector('#newtask1 input').value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
        	<div class="task0">
        	<input type=checkbox id="taskstrike">
           <div class="task1" onclick="showme()">
			${document.querySelector('#newtask1 input').value}
			</div>
             <div class="task2" >
			${document.querySelector('#newtask2 input').value}
            </div>
            <div class="task3">
		${document.querySelector('input[type="date"]').value}

	    </div>

		<button class="delete">
			<i class="far fa-trash-alt"></i>
		</button>
            </div>
        `;

	    var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
				counter--;
                this.parentNode.remove();
				document.getElementById('counter').value=parseInt(document.getElementById('counter').value)-1;
            }

        }

        var tasks = document.querySelectorAll(".task0");
         for(var i=0; i<tasks.length; i++){
            tasks[0].onclick = function(){
                this.classList.toggle('completed');
                document.getElementById('counter').value=parseInt(document.getElementById('counter').value)-1;
            }
        }



        document.querySelector("#newtask1 input").value = "";
		document.querySelector("#newtask2 input").value = "";
		document.querySelector("#newtask3 input").value = "";
		document.getElementById('counter').value=parseInt(document.getElementById('counter').value)+1;
	}


}


document.querySelector('#clearall').onclick = function(){
    var current_tasks = document.getElementById("clearall");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
				counter--;
                this.parentNode.remove();
				document.getElementById('counter').value=parseInt(document.getElementById('counter').value)-1;
            }

        }

}

function showme() {
	alert("S");
	document.querySelector(".task2").style.display="block";
	document.querySelector(".task2").style.visibility="visible";

	document.querySelector(".task3").style.display="block";
	document.querySelector(".task3").style.visibility="visible";

}