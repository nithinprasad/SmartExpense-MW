function login() {var inputJson = {
		Ver : "MessageEnvelope_1.0.0",
		Resource : "resrc",
		AppVer : "1.0.0",
		EnvVer : "MessageEnvelope_1.0.0",
		APIVer : "apiVer",
		MsgId : "1",
		SessionId : "sessionId",
		ProxyApp : {
			Ver:"ProxyApp_1.0.0",
			UserAgent:"useragent"
		},
		Locale: {CDE:'EN_US'},
		SecToken:{
			Ver:"SecurityToken_1.0.0",isArchetype:true,
			Token:[]
				},
		Payload : {
			"Ver" : "MessagePayload_1.0.0",
			"Operation" : "VLD",
			"DataEntity":[{"Ver":"LoginUserCredentials_1.0.0",
				"VerId":{"Ver":"StringVerificationIdentifier_1.0.0",
					"UserId":{"Ver":"UserIdentifier_1.0.0",
						"ObjId":"10000313"},
						"NAME" : "30000389"},
						"PrimaryVerData":{
							"Ver":"TraditionalPasswordVerificationData_1.0.0",
							"Pass":{"Ver":"Secret_1.0.0",
								"Text":"welcome",
								"DigestType":{"CDE":"MD_1"},
								"EncryptionType":{"CDE":"ET_1"}}},
								
								"AddVerData":[{
									"Ver":"MothersMaidenNameVerificationData_1.0.0",
									"VerType":{"CDE":"QNACHALLENGE"},
									"MthrsMaidnNam":{
										"Ver":"Secret_1.0.0",
										"Text":"welcome"
										}
									}],
												"CredScope":{"CDE":"LOGIN"}
						
		}]
		}
};

inputJson = JSON.stringify(inputJson);

alert("login stringify js ==>"+inputJson);
$('#inputJSON').html(inputJson);
//document.getElementById("inputBox").innerHTML="<table border='2' style='color:red;'><tr><td>"+inputJson+"</td></tr></table>";

alert(inputJson);
$.ajax({
	url : "http://localhost:8080/smart.expense.war/module",
	//url : "http://172.19.98.57:8080/BancsDigital-Middleware-1.4.0-mbl-1.0.0/module",
	type : "POST",
	dataType : "text",
	contentType : "application/json",
	data : inputJson,
	success : function(data, textStatus, jqXHR) {
		// data - response from server
		// alert("Success :::
		// \nData:"+data+"\nresponseText:"+jqXHR.responseText+"\ntextStatus:"+textStatus);
		$('#outputJSON').html(data);
		/*$('#top').html('');
		eval("var json=" + data);
		$('#top').json2html(convert('json', json, 'open'),
				transforms.object);
		regEvents();*/
		var envelope = JSON.parse(data);
		//document.getElementById("outputBox").innerHTML="<table border='2' style='color:green;'><tr><td>"+JSON.stringify(data)+"</td></tr></table>";
		/*signature = envelope["SecToken"]["Token"][0]["Signature"];
		token=envelope["SecToken"]["Token"][0]["UserCred"]["VerId"]["NAME"];*/
		secToken = envelope["SecToken"];
		//device = envelope["Device"];
		$('#outputJSON').html(data);
		$('#top').html('');
		eval("var json=" + data);
		$('#top').json2html(convert('json', json, 'open'),
				transforms.object);
		regEvents();
	},
	error : function(jqXHR, textStatus, errorThrown) {
		// alert("Error :::
		// "+jqXHR.responseText+"\n1:"+textStatus+"\n2:"+errorThrown);
		alert("Error ::: " + jqXHR.responseText + "\n1:" + textStatus
				+ "\n2:" + errorThrown);
		$('#outputJSON').html(jqXHR);
		$('#top').html('');
		eval("var json=" + jqXHR);
		$('#top').json2html(convert('json', json, 'open'),
				transforms.object);
		regEvents();
	}
});}

function login2() {var inputJson = {
		Ver : "MessageEnvelope_1.0.0",
		Resource : "resrc",
		AppVer : "1.0.0",
		EnvVer : "MessageEnvelope_1.0.0",
		APIVer : "apiVer",
		MsgId : "1",
		SessionId : "sessionId",
		ProxyApp : {
			Ver:"ProxyApp_1.0.0",
			UserAgent:"useragent"
		},
		Locale: {CDE:'EN_US'},
		SecToken:{
			Ver:"SecurityToken_1.0.0",isArchetype:true,
			Token:[]
				},
		Payload : {
			"Ver" : "MessagePayload_1.0.0",
			"Operation" : "VLD",
			"DataEntity":[{"Ver":"LoginUserCredentials_1.0.0",
				"VerId":{"Ver":"StringVerificationIdentifier_1.0.0",
					"UserId":{"Ver":"UserIdentifier_1.0.0",
						"ObjId":"10000313"},
						"NAME" : "30000390"},
						"PrimaryVerData":{
							"Ver":"TraditionalPasswordVerificationData_1.0.0",
							"Pass":{"Ver":"Secret_1.0.0",
								"Text":"welcome",
								"DigestType":{"CDE":"MD_1"},
								"EncryptionType":{"CDE":"ET_1"}}},
								
								"AddVerData":[{
									"Ver":"MothersMaidenNameVerificationData_1.0.0",
									"VerType":{"CDE":"QNACHALLENGE"},
									"MthrsMaidnNam":{
										"Ver":"Secret_1.0.0",
										"Text":"welcome"
										}
									}],
												"CredScope":{"CDE":"LOGIN"}
						
		}]
		}
};

inputJson = JSON.stringify(inputJson);

alert("login stringify js ==>"+inputJson);
$('#inputJSON').html(inputJson);
//document.getElementById("inputBox").innerHTML="<table border='2' style='color:red;'><tr><td>"+inputJson+"</td></tr></table>";

alert(inputJson);
$.ajax({
	url : "http://localhost:8080/Wargenerator/",
	//url : "http://172.19.98.57:8080/BancsDigital-Middleware-1.4.0-mbl-1.0.0/module",
	type : "POST",
	dataType : "text",
	contentType : "application/json",
	data : inputJson,
	success : function(data, textStatus, jqXHR) {
		// data - response from server
		// alert("Success :::
		// \nData:"+data+"\nresponseText:"+jqXHR.responseText+"\ntextStatus:"+textStatus);
		$('#outputJSON').html(data);
		/*$('#top').html('');
		eval("var json=" + data);
		$('#top').json2html(convert('json', json, 'open'),
				transforms.object);
		regEvents();*/
		var envelope = JSON.parse(data);
		//document.getElementById("outputBox").innerHTML="<table border='2' style='color:green;'><tr><td>"+JSON.stringify(data)+"</td></tr></table>";
		/*signature = envelope["SecToken"]["Token"][0]["Signature"];
		token=envelope["SecToken"]["Token"][0]["UserCred"]["VerId"]["NAME"];*/
		secToken = envelope["SecToken"];
		//device = envelope["Device"];
		$('#outputJSON').html(data);
		$('#top').html('');
		eval("var json=" + data);
		$('#top').json2html(convert('json', json, 'open'),
				transforms.object);
		regEvents();
	},
	error : function(jqXHR, textStatus, errorThrown) {
		// alert("Error :::
		// "+jqXHR.responseText+"\n1:"+textStatus+"\n2:"+errorThrown);
		alert("Error ::: " + jqXHR.responseText + "\n1:" + textStatus
				+ "\n2:" + errorThrown);
		$('#outputJSON').html(jqXHR);
		$('#top').html('');
		eval("var json=" + jqXHR);
		$('#top').json2html(convert('json', json, 'open'),
				transforms.object);
		regEvents();
	}
});}
function acctSUmm() {var inputJson = {
		Ver : "MessageEnvelope_1.0.0",
		Resource : "resrc",
		AppVer : "1.0.0",
		EnvVer : "MessageEnvelope_1.0.0",
		APIVer : "apiVer",
		MsgId : "1",
		SessionId : "sessionId",
		ProxyApp : {
			Ver:"ProxyApp_1.0.0",
			UserAgent:"useragent"
		},
		Locale: {CDE:'EN_US'},
		SecToken:{
			Ver:"SecurityToken_1.0.0",isArchetype:true,
			Token:[]
				},
		Payload : {
			"Ver": "MessagePayload_1.0.0",
			"Operation": "INQ",
			"EmptyMsg": false,
			"DataEntity": [
				{
					"Ver": "CustomerAccountRelationship_1.0.0",
					"CustAcctRelId": {
						"Ver": "Identifier_1.0.0"
					},
					"Customer": {
						"Ver": "PersonCustomer_1.0.0",
						"Name": {
							"Ver": "PersonName_1.0.0"
						},
						"CustId": {
							"Ver": "CustomerIdentifier_1.0.0",
							"Id": {
								"Ver": "Identifier_1.0.0",
								"Id": "1"
							},
							"CustId": {
								"CUSTID": "8503362580371225688"
							}
						}
					}
				}]
		}
};

inputJson = JSON.stringify(inputJson);

alert("login stringify js ==>"+inputJson);
$('#inputJSON').html(inputJson);
//document.getElementById("inputBox").innerHTML="<table border='2' style='color:red;'><tr><td>"+inputJson+"</td></tr></table>";

alert(inputJson);
$.ajax({
	url : "http://localhost:8080/Wargenerator/",
	//url : "http://172.19.98.57:8080/BancsDigital-Middleware-1.4.0-mbl-1.0.0/module",
	type : "POST",
	dataType : "text",
	contentType : "application/json",
	data : inputJson,
	success : function(data, textStatus, jqXHR) {
		// data - response from server
		// alert("Success :::
		// \nData:"+data+"\nresponseText:"+jqXHR.responseText+"\ntextStatus:"+textStatus);
		$('#outputJSON').html(data);
		/*$('#top').html('');
		eval("var json=" + data);
		$('#top').json2html(convert('json', json, 'open'),
				transforms.object);
		regEvents();*/
		var envelope = JSON.parse(data);
		//document.getElementById("outputBox").innerHTML="<table border='2' style='color:green;'><tr><td>"+JSON.stringify(data)+"</td></tr></table>";
		/*signature = envelope["SecToken"]["Token"][0]["Signature"];
		token=envelope["SecToken"]["Token"][0]["UserCred"]["VerId"]["NAME"];*/
		secToken = envelope["SecToken"];
		alert("secToken="+secToken);
		//device = envelope["Device"];
		$('#outputJSON').html(data);
		$('#top').html('');
		eval("var json=" + data);
		$('#top').json2html(convert('json', json, 'open'),
				transforms.object);
		regEvents();
	},
	error : function(jqXHR, textStatus, errorThrown) {
		// alert("Error :::
		// "+jqXHR.responseText+"\n1:"+textStatus+"\n2:"+errorThrown);
		alert("Error ::: " + jqXHR.responseText + "\n1:" + textStatus
				+ "\n2:" + errorThrown);
		$('#outputJSON').html(jqXHR);
		$('#top').html('');
		eval("var json=" + jqXHR);
		$('#top').json2html(convert('json', json, 'open'),
				transforms.object);
		regEvents();
	}
});}


function submitOTP() {
	
		var inputJson = {
			Ver : "MessageEnvelope_1.0.0",
			Resource : "resrc",
			AppVer : "1.0.0",
			EnvVer : "MessageEnvelope_1.0.0",
			APIVer : "apiVer",
			MsgId : "1",
			SessionId : "sessionId",
			ProxyApp : {
				Ver:"ProxyApp_1.0.0",
				UserAgent:"useragent"
			},
			Locale: {CDE:'EN_US'},
			SecToken:{
				Ver:"SecurityToken_1.0.0",isArchetype:true,
				Token:[]
					},
			Payload : {
				Ver : "MessagePayload_1.0.0",
				Category : [ "min" ],
				Operation : "VLD",
				EmptyMsg : false,
				DataEntity : [ {
					Ver : "LoginUserCredentials_1.0.0",
					
					VerId : {
						Ver : "StringVerificationIdentifier_1.0.0",
						UserId : {
							Ver : "UserIdentifier_1.0.0",
							ObjId : "RetailUser",
							UserStatus : {
								CDE : "ACTIVE"
							}
						},
						//NAME : "3170630565905872108"
						//NAME : "8503362580371225688"
						NAME : "10000615"
					},
					PrimaryVerData : {
						Ver : "OTPVerificationData_1.0.0",
						VerType : {
							CDE : "OTP"
						},
						OTP : {
							Ver : "Secret_1.0.0",
							Text :"",
							Salt :{
								Ver  : "Binary_1.0.0",
								Len :26542675432,
								Data : "33.0"
							},
							DigestType : {
								CDE : "MD_1"
							},
							EncryptionType : {
								CDE : "ET_1"
							}
						},
						NumAttempts : 0,
						FailedAttemps : 0,
						VerDataStatus : {
							CDE : "ACTIVE"
						}
					},
					CredScope : {
						CDE : "LOGIN"
					},
					DomainAddr :[ {
						Ver : "DomainAddress_1.0.0",
						Type : {
							CDE : "DomainType1"
						},
						
						PlatformId : "Retail",
						AppId : "Bancs"
						
					}]
				} ]
			}
	};

	inputJson = JSON.stringify(inputJson);
	
	alert("login stringify js ==>"+inputJson);
	$('#inputJSON').html(inputJson);
	//document.getElementById("inputBox").innerHTML="<table border='2' style='color:red;'><tr><td>"+inputJson+"</td></tr></table>";

	alert(inputJson);
	$.ajax({
		url : "http://localhost:8080/Wargenerator/",
		//url : "http://172.19.98.57:8080/BancsDigital-Middleware-1.4.0-mbl-1.0.0/module",
		type : "POST",
		dataType : "text",
		contentType : "application/json",
		data : inputJson,
		success : function(data, textStatus, jqXHR) {
			// data - response from server
			// alert("Success :::
			// \nData:"+data+"\nresponseText:"+jqXHR.responseText+"\ntextStatus:"+textStatus);
			$('#outputJSON').html(data);
			/*$('#top').html('');
			eval("var json=" + data);
			$('#top').json2html(convert('json', json, 'open'),
					transforms.object);
			regEvents();*/
			var envelope = JSON.parse(data);
			//document.getElementById("outputBox").innerHTML="<table border='2' style='color:green;'><tr><td>"+JSON.stringify(data)+"</td></tr></table>";
			/*signature = envelope["SecToken"]["Token"][0]["Signature"];
			token=envelope["SecToken"]["Token"][0]["UserCred"]["VerId"]["NAME"];*/
			secToken = envelope["SecToken"];
			//device = envelope["Device"];
			$('#outputJSON').html(data);
			$('#top').html('');
			eval("var json=" + data);
			$('#top').json2html(convert('json', json, 'open'),
					transforms.object);
			regEvents();
		},
		error : function(jqXHR, textStatus, errorThrown) {
			// alert("Error :::
			// "+jqXHR.responseText+"\n1:"+textStatus+"\n2:"+errorThrown);
			alert("Error ::: " + jqXHR.responseText + "\n1:" + textStatus
					+ "\n2:" + errorThrown);
			$('#outputJSON').html(jqXHR);
			$('#top').html('');
			eval("var json=" + jqXHR);
			$('#top').json2html(convert('json', json, 'open'),
					transforms.object);
			regEvents();
		}
	});
}


function submitUSSD() {
	
		var inputJson = {
			Ver : "MessageEnvelope_1.0.0",
			Resource : "resrc",
			AppVer : "1.0.0",
			EnvVer : "MessageEnvelope_1.0.0",
			APIVer : "apiVer",
			MsgId : "1",
			SessionId : "sessionId",
			ProxyApp : {
				Ver:"ProxyApp_1.0.0",
				UserAgent:"useragent"
			},
			Locale: {CDE:'EN_US'},
			SecToken:{
				Ver:"SecurityToken_1.0.0",isArchetype:true,
				Token:[]
					},
			Payload : {
				Ver : "MessagePayload_1.0.0",
				Category : [ "min" ],
				Operation : "VLD",
				EmptyMsg : false,
				DataEntity : [ {
					Ver : "LoginUserCredentials_1.0.0",
					
					VerId : {
						Ver : "StringVerificationIdentifier_1.0.0",
						UserId : {
							Ver : "UserIdentifier_1.0.0",
							ObjId : "RetailUser",
							UserStatus : {
								CDE : "ACTIVE"
							}
						},
						//NAME : "3170630565905872108"
						//NAME : "8503362580371225688"
						NAME : "10000615"
					},
					PrimaryVerData : {
						Ver : "USSDVerificationData_1.0.0",
					
					},
					CredScope : {
						CDE : "LOGIN"
					},
					DomainAddr :[ {
						Ver : "DomainAddress_1.0.0",
						Type : {
							CDE : "DomainType1"
						},
						
						PlatformId : "Retail",
						AppId : "Bancs"
						
					}]
				} ]
			}
	};

	inputJson = JSON.stringify(inputJson);
	
	alert("login stringify js ==>"+inputJson);
	$('#inputJSON').html(inputJson);
	//document.getElementById("inputBox").innerHTML="<table border='2' style='color:red;'><tr><td>"+inputJson+"</td></tr></table>";

	alert(inputJson);
	$.ajax({
		url : "http://01hw577052:8080/BancsDigital-Middleware-1.4.0-mbl-1.0.0/module",
		//url : "http://172.19.98.57:8080/BancsDigital-Middleware-1.4.0-mbl-1.0.0/module",
		type : "POST",
		dataType : "text",
		contentType : "application/json",
		data : inputJson,
		success : function(data, textStatus, jqXHR) {
			// data - response from server
			// alert("Success :::
			// \nData:"+data+"\nresponseText:"+jqXHR.responseText+"\ntextStatus:"+textStatus);
			$('#outputJSON').html(data);
			/*$('#top').html('');
			eval("var json=" + data);
			$('#top').json2html(convert('json', json, 'open'),
					transforms.object);
			regEvents();*/
			var envelope = JSON.parse(data);
			//document.getElementById("outputBox").innerHTML="<table border='2' style='color:green;'><tr><td>"+JSON.stringify(data)+"</td></tr></table>";
			/*signature = envelope["SecToken"]["Token"][0]["Signature"];
			token=envelope["SecToken"]["Token"][0]["UserCred"]["VerId"]["NAME"];*/
			secToken = envelope["SecToken"];
			//device = envelope["Device"];
			$('#outputJSON').html(data);
			$('#top').html('');
			eval("var json=" + data);
			$('#top').json2html(convert('json', json, 'open'),
					transforms.object);
			regEvents();
		},
		error : function(jqXHR, textStatus, errorThrown) {
			// alert("Error :::
			// "+jqXHR.responseText+"\n1:"+textStatus+"\n2:"+errorThrown);
			alert("Error ::: " + jqXHR.responseText + "\n1:" + textStatus
					+ "\n2:" + errorThrown);
			$('#outputJSON').html(jqXHR);
			$('#top').html('');
			eval("var json=" + jqXHR);
			$('#top').json2html(convert('json', json, 'open'),
					transforms.object);
			regEvents();
		}
	});
}



function submitOTPCRT() {
	
	var inputJson = {
		Ver : "MessageEnvelope_1.0.0",
		Resource : "resrc",
		AppVer : "1.0.0",
		EnvVer : "MessageEnvelope_1.0.0",
		APIVer : "apiVer",
		MsgId : "1",
		SessionId : "sessionId",
		ProxyApp : {
			Ver:"ProxyApp_1.0.0",
			UserAgent:"useragent"
		},
		Locale: {CDE:'EN_US'},
		SecToken:{
			Ver:"SecurityToken_1.0.0",isArchetype:true,
			Token:[]
				},
		Payload : {
			Ver : "MessagePayload_1.0.0",
			Category : [ "min" ],
			Operation : "VLD",
			EmptyMsg : false,
			DataEntity : [ {
				Ver : "LoginUserCredentials_1.0.0",
				VerId : {
					Ver : "StringVerificationIdentifier_1.0.0",
					UserId : {
						Ver : "UserIdentifier_1.0.0",
						ObjId : "RetailUser",
						UserStatus : {
							CDE : "ACTIVE"
						}
					},
					//NAME : "3170630565905872108"
					//NAME : "8503362580371225688"
					NAME : "10000615"
				},
				PrimaryVerData : {
					Ver : "OTPVerificationData_1.0.0",
					VerType : {
						CDE : "OTP"
					},
					Pass : {
						Ver : "Secret_1.0.0",
						Text :"",
						Salt :{
							Ver  : "Binary_1.0.0",
							Len :26542675432,
							Data : "33.0"
						},
						DigestType : {
							CDE : "MD_1"
						},
						EncryptionType : {
							CDE : "ET_1"
						}
					},
					NumAttempts : 0,
					FailedAttemps : 0,
					VerDataStatus : {
						CDE : "ACTIVE"
					}
				},
				CredScope : {
					CDE : "LOGIN"
				},
				DomainAddr :[ {
					Ver : "DomainAddress_1.0.0",
					Type : {
						CDE : "DomainType1"
					},
					
					PlatformId : "Retail",
					AppId : "Bancs"
					
				}]
			} ]
		}
};

inputJson = JSON.stringify(inputJson);

alert("login stringify js ==>"+inputJson);
$('#inputJSON').html(inputJson);
//document.getElementById("inputBox").innerHTML="<table border='2' style='color:red;'><tr><td>"+inputJson+"</td></tr></table>";

alert(inputJson);
$.ajax({
	url : "http://01hw577052:8080/BancsDigital-Middleware-1.4.0-mbl-1.0.0/module",
	//url : "http://172.19.98.57:8080/BancsDigital-Middleware-1.4.0-mbl-1.0.0/module",
	type : "POST",
	dataType : "text",
	contentType : "application/json",
	data : inputJson,
	success : function(data, textStatus, jqXHR) {
		// data - response from server
		// alert("Success :::
		// \nData:"+data+"\nresponseText:"+jqXHR.responseText+"\ntextStatus:"+textStatus);
		$('#outputJSON').html(data);
		/*$('#top').html('');
		eval("var json=" + data);
		$('#top').json2html(convert('json', json, 'open'),
				transforms.object);
		regEvents();*/
		var envelope = JSON.parse(data);
		//document.getElementById("outputBox").innerHTML="<table border='2' style='color:green;'><tr><td>"+JSON.stringify(data)+"</td></tr></table>";
		/*signature = envelope["SecToken"]["Token"][0]["Signature"];
		token=envelope["SecToken"]["Token"][0]["UserCred"]["VerId"]["NAME"];*/
		secToken = envelope["SecToken"];
		//device = envelope["Device"];
		$('#outputJSON').html(data);
		$('#top').html('');
		eval("var json=" + data);
		$('#top').json2html(convert('json', json, 'open'),
				transforms.object);
		regEvents();
	},
	error : function(jqXHR, textStatus, errorThrown) {
		// alert("Error :::
		// "+jqXHR.responseText+"\n1:"+textStatus+"\n2:"+errorThrown);
		alert("Error ::: " + jqXHR.responseText + "\n1:" + textStatus
				+ "\n2:" + errorThrown);
		$('#outputJSON').html(jqXHR);
		$('#top').html('');
		eval("var json=" + jqXHR);
		$('#top').json2html(convert('json', json, 'open'),
				transforms.object);
		regEvents();
	}
});
}

function submitUCCreateAjax() {
	
	var inputJson = 
		{
			Ver : "MessagePayload_1.0.0",
			Category : [ "min" ],
			Operation : "CRT",
			EmptyMsg : false,
			DataEntity : [ {
				Ver : "LoginUserCredentials_1.0.0",
				VerId : {
					Ver : "StringVerificationIdentifier_1.0.0",
					UserId : {
						Ver : "UserIdentifier_1.0.0",
						ObjId : "RetailUser",
						UserStatus : {
							CDE : "ACTIVE"
						}
					},
					NAME : "Sujith"//will be the phone number in case of OTP over phone
					//NAME : "8503362580371225688"
				},
				PrimaryVerData : {
					Ver : "OTPVerificationData_1.0.0",
					isArchetype:true,
					VerType : {
						CDE : "SMSOTP"
					}
					
				},
				CredScope : {
					CDE : "TRANSACTION"
				},
				DomainAddr :[ {
					Ver : "DomainAddress_1.0.0",
					Type : {
						CDE : "DomainType1"
					},
					
					PlatformId : "Retail",
					AppId : "Bancs"
					
				}]
			} ]
		};

	inputJson = getJsonFromPayload(inputJson);
	alert("inputJson=="+inputJson);
	callServer(inputJson);
}

function logout() {
		
		var inputJson = 
			{
				Ver : "MessagePayload_1.0.0",
				Category : [ "min" ],
				Operation : "INVLD",
				EmptyMsg : false,
				DataEntity : [ {
					Ver : "LoginUserCredentials_1.0.0",
					VerId : {
						Ver : "StringVerificationIdentifier_1.0.0",
						UserId : {
							Ver : "UserIdentifier_1.0.0",
							ObjId : "RetailUser",
							UserStatus : {
								CDE : "ACTIVE"
							}
						},
						NAME : "subuser1"//will be the phone number in case of OTP over phone
						//NAME : "8503362580371225688"
					},
					CredScope : {
						CDE : "LOGIN"
					}
				} ]
			};

		inputJson = getJsonFromPayload(inputJson);
		callServer(inputJson);
	
}
