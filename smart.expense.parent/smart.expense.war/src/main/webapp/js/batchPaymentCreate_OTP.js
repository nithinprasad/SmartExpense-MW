function batchPaymentCreateOTP() {
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
						"Operation": "CRT",
						"AuditDataList": [],
						"DataEntity": [{
							"Ver": "BatchPayment_1.0.0",
							"Id": {
								"Ver": "Identifier_1.0.0"
							},
							"Amt": {
								"Ver": "CurrencyAmount_1.0.0",
								"Amt": {
									"Ver": "Amount_1.0.0",
									"Value": "1000"
								},
								"CurrCode": {
									"CDE": "ZAR"
								}
							},
							"PymntInstrn": {
								"Ver": "PaymentInstruction_1.0.0",
								"FromAcc": {
									"Ver": "DemandDepositAccount_1.0.0",
									"AccountId": {
										"Ver": "AccountIdentifier_1.0.0",
										"AcctIds": {
											"BANKACCOUNTID": "1000004260"
										}
									}
								},
								"Memo": "nithin"
							},
							"DueDt": {
								"Ver": "Date_1.0.0",
								"Year": 2015,
								"Month": 11,
								"Day": 30
							},
							"ConsolidatedDebt": false
						}]
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
		//url : "http://01hw577052:8080/BancsDigital-Middleware-1.4.0-mbl-1.0.0/module",
		url : "http://172.19.98.57:8080/BancsDigital-Middleware-1.4.0-mbl-1.0.0/module",
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

function batchTrasnferCreateOTP() {
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
					"Operation": "CRT",
					"AuditDataList": [],
					"DataEntity": [{
						"Ver": "BatchTransfer_1.0.0",
						"TransferId": {
							"Ver": "Identifier_1.0.0"
						},
						"FromAcct": {
							"Ver": "DemandDepositAccount_1.0.0",
							"AccountId": {
								"Ver": "AccountIdentifier_1.0.0",
								"AcctIds": {
									"BANKACCOUNTID": "1000002772"
								}
							}
						},
						"Amount": {
							"Ver": "CurrencyAmount_1.0.0",
							"Amt": {
								"Ver": "Amount_1.0.0",
								"Value": "100"
							},
							"CurrCode": {
								"CDE": "ZAR"
							}
						},
						"DueDate": {
							"Ver": "Date_1.0.0",
							"Year": 2015,
							"Month": 10,
							"Day": 10
						},
						"ConsolidatedDebit": true,
						"Remarks": "nithinUSSD"
						}]
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
	//url : "http://01hw577052:8080/BancsDigital-Middleware-1.4.0-mbl-1.0.0/module",
	url : "http://172.19.98.57:8080/BancsDigital-Middleware-1.4.0-mbl-1.0.0/module",
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


