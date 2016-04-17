var signature = "";
var token = "";
var secToken = "";
var device = "";
function getHeaderto() {

	var header = {
		Ver : "MessageEnvelope_1.0.0",
		Signature : "signature",
		Resource : "resrc",
		AppVer : "1.0.0",
		EnvVer : "MessageEnvelope_1.0.0",
		APIVer : "apiVer",
		SecToken : {
			Ver : "SecurityToken_1.0.0",
			Token : [ {
				Ver : "ServiceRegistrationToken_1.0.0",
				TokenId : "RetailUser",
				Type : {
					CDE : "AUTHENTICATION",
					DSC : "AUTHENTICATION"
				},
				Issuer : "236564",
				IssuedOn : {
					Ver : "DateTime_1.0.0",
					Year : 2015,
					Month : 5,
					Day : 10,
					Hour : 10,
					Minute : 15,
					Second : 35
				},
				Expiry : {
					Ver : "DateTime_1.0.0",
					Year : 2015,
					Month : 10,
					Day : 10,
					Hour : 10,
					Minute : 35,
					Second : 35
				},
				Audience : [ {
					Ver : "DomainAddress_1.0.0",
					PlatformId : "Retail",
					AppId : "Bancs",
					Type : {
						CDE : "DomainType1"
					},
				} ],
				Signature : "mr4OL+oVP5kRItd4+We5xW0/6gtWqwd4KMWF5pIgQ4yoQlYVatncPA==",
				UserCred : {
					Ver : "UserCredentials_1.0.0",
					VerId : {
						Ver : "StringVerificationIdentifier_1.0.0",
						NAME : "8503362580371225688",
						UserId : {
							Ver : "UserIdentifier_1.0.0",
							ObjId : "114209",
							UserStatus : {
								CDE : "ACTIVE",
								DSC : "ACTIVE"
							}
						},
						VerIdType : {
							CDE : "STRING"
					
						},
					},
					PrimaryVerData : {
						Ver : "OTPVerificationData_1.0.0",
						OTP : {
							Ver : "Secret_1.0.0",
							Text : "5042365"
						},
						VerType : {
							CDE : "OTP",
							DSC : "OTP"
						},
						VerDataStatus : {
							CDE : "ACTIVE",
							DSC : "ACTIVE"
						}
					},
					AddVerData : [],
					CredScope : {
						CDE : "LOGIN",
						DSC : ""
					},
					DomainAddr : {
						isArchetype : true,
						Ver : "DomainAddress_1.0.0",
						PlatformId : "Retail",
						AppId : "Bancs",
						Type : {
							CDE : "DomainType1"
						},
					}
				}
			} ]
		},
		Device : {
			Ver : "Device_1.0.0",
			DeviceId : {
				Ver : "DeviceIdentifier_1.0.0",
				DeviceId : {
					Ver : "Identifier_1.0.0",
					isArchetype : true/* Id : "12121" */,
					IMEI : "IMEI"
				}
			},
			Type : {
				CDE : "SMARTPHONE"
			}
		},
		MsgId : "1",
		Locale : {
			CDE : 'EN_US'
		},
		SessionId : "sessionId",
		Payload : {}
	};
	// alert("signature===>"+signature);
	// header["SecToken"]["Token"][0]["Signature"]=signature;
	// header["SecToken"]["Token"][0]["UserCred"]["VerId"]["NAME"]=token;
	alert(JSON.stringify(header["SecToken"]));
	header["SecToken"] = secToken;
	// header["Device"]=device;
	return header;
}

function getJsonFromPayload(payload) {
	var header = getHeaderto();
	header.Payload = payload;
	var inputJson = JSON.stringify(header);
	return inputJson;
}

function callServer(inputJson) {
	alert(inputJson);
	$('#inputJSON').html(inputJson);
	$.ajax({
		url : "./module",
		type : "POST",
		dataType : "text",
		contentType : "application/json",
		data : inputJson,
		success : function(data, textStatus, jqXHR) {
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