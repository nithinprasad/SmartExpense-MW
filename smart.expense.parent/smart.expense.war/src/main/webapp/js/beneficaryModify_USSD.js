function beneficaryModifyUSSD() {
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
						"Operation": "UPD",
						"DataEntity": [{
							"Ver": "AccountPayee_1.0.0",
							"PayeeId": {
								"Ver": "PayeeIdentifier_1.0.0",
								"NickName": "Amit Internal"
							},
							"PersonData": {
								"Ver": "PersonData_1.0.0",
								"ContactList": [{
									"Ver": "EmailContact_1.0.0",
									"ContactId": {
										"Ver": "Identifier_1.0.0"
									},
									"Email": {
										"Ver": "Email_1.0.0",
										"Address": "ghj@gmail.com"
									}
									}, {
									"Ver": "PhoneContact_1.0.0",
									"ContactId": {
										"Ver": "Identifier_1.0.0"
									},
									"Phone": {
										"Ver": "Phone_1.0.0",
										"PhoneNum": {
											"Ver": "PhoneNumber_1.0.0",
											"CtryCode": 234,
											"Extn": 123,
											"FormatedPhNum": "6543219870"
										},
										"PhoneType": {
											"CDE": "MSG"
										}
									}
									}],
								"NameList": [{
									"Ver": "PersonName_1.0.0",
									"PreferredName": "Amit"
									}]
							},
							"ToAccount": [{
								"Ver": "DemandDepositAccount_1.0.0",
								"AccountId": {
									"Ver": "AccountIdentifier_1.0.0",
									"AcctIds": {
										"BANKACCOUNTID": "1000003213"
									},
									"Id": {
										"Ver": "Identifier_1.0.0"
									}
								},
								"Branch": {
									"Ver": "FILocation_1.0.0",
									"FiLocatnId": {
										"Ver": "FILocationIdentifier_1.0.0",
										"FiLocationId": {
											"BSB": "420037"
										}
									},
									"Address": {
										"Ver": "Address_1.0.0"
									},
									"FiIdent": {
										"Ver": "FIIdentifier_1.0.0",
										"Id": {
											"Ver": "Identifier_1.0.0",
											"Id": "ABSA BANK"
										}
									},
									"Name": " ATTIE LOUW ST. VANDERBIJLPARK"
								}
								}]
							}]
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
