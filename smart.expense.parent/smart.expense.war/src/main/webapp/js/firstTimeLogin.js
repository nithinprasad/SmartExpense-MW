function firstTimeLoginOTP() {
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
					Ver : "TransactionUserCredentials_1.0.0",
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
					
					TrnctnPayld :{
						"Ver": "MessagePayload_1.0.0",
						"DataEntity": [{
							"Ver": "UserCredentials_1.0.0",
							"VerId": {
								"Ver": "StringVerificationIdentifier_1.0.0",
								"UserId": {
									"Ver": "UserIdentifier_1.0.0",
									"ObjId": "10000267"
								},
								NAME: "arati02"
							},
							"PrimaryVerData": {
								"Ver": "TraditionalPasswordVerificationData_1.0.0",
								"Pass": {
									"Ver": "Secret_1.0.0",
									"Text": "welcome@100",
									"DigestType": {
										"CDE": "MD_1"
									},
									"EncryptionType": {
										"CDE": "ET_1"
									}
								},
								"VerType": {
									"CDE": "TRADITIONALPASSWORD"
								}
							},
							"AddVerData": [{
								"Ver": "QnAVerificationData_1.0.0",
								"VerType": {
									"CDE": "QNACHALLENGE"
								},
								"QAList": [{
									"Ver": "QuestionAnswer_1.0.0",
									"Questn": {
										"Ver": "Question_1.0.0",
										"Text": "Mother'smaidenName"
									},
									"Answer": [{
										"Ver": "Answer_1.0.0",
										"Text": "welcome"
										}]
									}],
								}],
							"CredScope": {
								"CDE": "LOGIN"
							}
							}],
						"Operation": "UPD",
						"Category": ["FIRSTTIMELOGIN"]
					} ,
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
			}
	};

	inputJson = JSON.stringify(inputJson);
	
	alert("login stringify js ==>"+inputJson);
	$('#inputJSON').html(inputJson);
	alert(inputJson);
	$.ajax({
		url : "http://01hw577052:8080/BancsDigital-Middleware-1.4.0-mbl-1.0.0/module",
		type : "POST",
		dataType : "text",
		contentType : "application/json",
		data : inputJson,
		success : function(data, textStatus, jqXHR) {
			$('#outputJSON').html(data);
			var envelope = JSON.parse(data);
			secToken = envelope["SecToken"];
			$('#outputJSON').html(data);
			$('#top').html('');
			eval("var json=" + data);
			$('#top').json2html(convert('json', json, 'open'),
					transforms.object);
			regEvents();
		},
		error : function(jqXHR, textStatus, errorThrown) {
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

function firstTimeLoginUSSD() {
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
				Ver : "TransactionUserCredentials_1.0.0",
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
				
				TrnctnPayld :{
					"Ver": "MessagePayload_1.0.0",
					"DataEntity": [{
						"Ver": "UserCredentials_1.0.0",
						"VerId": {
							"Ver": "StringVerificationIdentifier_1.0.0",
							"UserId": {
								"Ver": "UserIdentifier_1.0.0",
								"ObjId": "10000615"
							},
							NAME: "arati02"
						},
						"PrimaryVerData": {
							"Ver": "TraditionalPasswordVerificationData_1.0.0",
							"Pass": {
								"Ver": "Secret_1.0.0",
								"Text": "welcome@100",
								"DigestType": {
									"CDE": "MD_1"
								},
								"EncryptionType": {
									"CDE": "ET_1"
								}
							},
							"VerType": {
								"CDE": "TRADITIONALPASSWORD"
							}
						},
						"AddVerData": [{
							"Ver": "QnAVerificationData_1.0.0",
							"VerType": {
								"CDE": "QNACHALLENGE"
							},
							"QAList": [{
								"Ver": "QuestionAnswer_1.0.0",
								"Questn": {
									"Ver": "Question_1.0.0",
									"Text": "Mother'smaidenName"
								},
								"Answer": [{
									"Ver": "Answer_1.0.0",
									"Text": "welcome"
									}]
								}],
							}],
						"CredScope": {
							"CDE": "LOGIN"
						}
						}],
					"Operation": "UPD",
					"Category": ["FIRSTTIMELOGIN"]
				} ,
			        PrimaryVerData : {
						Ver : "USSDVerificationData_1.0.0",
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
		}
};

inputJson = JSON.stringify(inputJson);

alert("login stringify js ==>"+inputJson);
$('#inputJSON').html(inputJson);
alert(inputJson);
$.ajax({
	url : "http://01hw577052:8080/BancsDigital-Middleware-1.4.0-mbl-1.0.0/module",
	type : "POST",
	dataType : "text",
	contentType : "application/json",
	data : inputJson,
	success : function(data, textStatus, jqXHR) {
		$('#outputJSON').html(data);
		var envelope = JSON.parse(data);
		secToken = envelope["SecToken"];
		$('#outputJSON').html(data);
		$('#top').html('');
		eval("var json=" + data);
		$('#top').json2html(convert('json', json, 'open'),
				transforms.object);
		regEvents();
	},
	error : function(jqXHR, textStatus, errorThrown) {
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