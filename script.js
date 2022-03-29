document.querySelector('#push').onclick = function(){
    var counter=document.querySelector('#ctr input').value
    if(document.querySelector('#newtask1 input').value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#tasks').innerHTML += `

            <div class="task1">
                    ${document.querySelector('#newtask1 input').value}

             <div class="task2">
			${document.querySelector('#newtask2 input').value}
            </div>
            <div class="task3">
		${document.querySelector('input[type="date"]').value}
		counter++;
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

            }
        }

        var tasks = document.querySelectorAll(".task1");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }



        document.querySelector("#newtask1 input").value = "";
		document.querySelector("#newtask2 input").value = "";
		document.querySelector("#newtask3 input").value = "";

    }
	document.querySelector('#ctr input').value=counter;

}
