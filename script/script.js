
  	function runScript(e) {
    //See notes about 'which' and 'key'
    if (e.keyCode == 13) {
        let tb = document.getElementById("scriptBox");
         

	           	   if(exec(tb.value) !=undefined ) {

	          		$('#cntnt').html(exec(tb.value));
	          	}

	          	else {
	          		 	$('#cntnt').html('Command not found');
	          	}
           
          	
          	tb.value ='';
        return false;
    }
 }


 function exec(command) {
 
  let command_list = [
  					  { "commands" : { "command": "help" , 
  					  								"desc": "<p>List of Avaible Commands<p><table><tr><td>'about' :</td><td align='right'> Displays Personal Info </td></tr><tr><td>'education' :</td><td align='right'> Educational Background </td></tr><tr><td>'skills' :</td><td align='right'> Technical Skills</td></tr><tr><td>'experience' :</td><td align='right'> Work Experience </td></tr></tabled>"
  					  							}
  					  				  }  

					  ];
		for(var i = 0; i < command_list.length; i++)
			{
			  if(command_list[i].commands.command == command)
			  {
			    return command_list[i].commands.desc;
			  }

			}
 }

