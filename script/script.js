function runScript(e) {
	//See notes about 'which' and 'key'
	if (e.keyCode == 13) {
		let tb = document.getElementById("scriptBox");

		if (exec(tb.value) != undefined) {
			$('#cntnt').html(exec(tb.value));
		} else {
			$('#cntnt').html('Command not found');
		}
		tb.value = '';
		return false;
	}
}


function exec(command) {

	let command_list = [{
			"commands": {
				"command": "help",
				"desc": "<p>List of Avaible Commands<p><table><tr><td>'about' :</td><td align='right'> Displays Personal Info </td></tr><tr><td>'education' :</td><td align='right'> Educational Background </td></tr><tr><td>'skills' :</td><td align='right'> Technical Skills</td></tr><tr><td>'experience' :</td><td align='right'> Work Experience </td></tr><tr><td>'social_media' :</td><td align='right'> Social Media Accounts </td></tr><td>'projects' :</td><td align='right'> Portfolio </td></tr></tabled>"
			}
		},

		{
			"commands": {
				"command": "skills",
				"desc": '<p>List of Skills<p><ul><li>PHP Laravel</li><li>PHP Codeigniter</li><li>MySQL</li><li>Vue.js</li><li>Node.js</li><li>Python (Currently Studying)</li></ul>'
			}
		},
		{
			"commands": {
				"command": "education",
				"desc": "<p>Education</p><p>ACLC College of Butuan  - <small>(BSIT ,(2012-2016))</small></p>"
			}
		},
		{
			"commands": {
				"command": "experience",
				"desc": "<p>Experience</p><p>Lead Programmer  - <small>(Interday Manrkets Management ,(2017-present))</small></p><p>Programmer  - <small>(FVL Travel and Tours ,(May 2017-August 2017))</small></p><p>Junior Web Developer (OJT)  - <small>(EngTech Global Solutions ,(Dec. 2015-Mar. 2016))</small></p>"
			}
		},
		{
			"commands": {
				"command": "social_media",
				"desc": "To be updated soon"
			}
		},
		{
			"commands": {
				"command": "projects",
				"desc": "<ul><li>immtraderscub <a style='color:green' href='https://immtradersclub.com/'>https://immtradersclub.com/</a> <address>  MultiLevel Marketing (MLM) Software built using Codeigniter + MySQL. </address></li><li>IMM COIN <a style='color:green' href='https://etherscan.io/token/0xe42ba5558b00d2e6109cc60412d5d4c9473fe998'>Click here </a> <address>An ERC20 Token built on top of Ethereum Blockchain. (Technology used : Solidity ) </address></li></ul>"
			}
		},
		{
			"commands": {
				"command": "about",
				"desc": "<p style='margin :0 !important;padding:0% 5%'>Hello there ! . I am Louise Salas . I'm just another Web Developer. I  don't fixed defective phones,laptops and computers. I simply write code. I do backend works. Sometimes I'm a developer. Sometimes a server admin. (I'm  not into server management but was forced to do so hahah . I don't know much about server management really. Good thing, Google exist heheh) </p>"
			}
		}


	];
	for (var i = 0; i < command_list.length; i++) {
		if (command_list[i].commands.command == command) {
			return command_list[i].commands.desc;
		}

	}
}