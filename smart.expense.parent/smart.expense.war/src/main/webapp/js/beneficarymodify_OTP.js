function beneficaryModifyOtp() {
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



function beneficaryModifyxxxxxOtp() {
	var inputJson = {
		    "Ver": "MessageEnvelope_1.0.0",
		    "Device": {
		        "Ver": "Device_1.0.0",
		        "DeviceId": {
		            "Ver": "DeviceIdentifier_1.0.0",
		            "DeviceId": {
		                "Ver": "Identifier_1.0.0",
		                "Id": "12121"
		            }
		        },
		        "Type": {
		            "CDE": "SMARTPHONE"
		        }
		    },
		    "Resource": "resrc",
		    "SecToken": {
		        "Ver": "SecurityToken_1.0.0",
		        "Token": [{
		            "Ver": "TraditionalPasswordValidatedToken_1.0.0",
		            "TokenId": "2f14c4cd-432a-4eed-92c7-5a5abc128667",
		            "Type": {
		                "CDE": "AUTHENTICATION"
		            },
		            "Issuer": "AuthenticationTokenIssuer_1.0.0",
		            "Audience": [{
		                "Ver": "DomainAddress_1.0.0",
		                "PlatformId": "apiVer"
		            }],
		            "IssuedOn": {
		                "Ver": "DateTime_1.0.0",
		                "Year": 2016,
		                "Month": 1,
		                "Day": 4,
		                "Hour": 15,
		                "Minute": 44,
		                "Second": 20
		            },
		            "Expiry": {
		                "Ver": "DateTime_1.0.0",
		                "Year": 2016,
		                "Month": 1,
		                "Day": 4,
		                "Hour": 16,
		                "Minute": 14,
		                "Second": 20
		            },
		            "Signature": "cBz4LfS0BbEwQncZG8a0jrmjvx5QSStPcjIY3NoPz2lBki3S1Eka4XpL1fcJyxcVwOHJ2c56Ziwe\n20ROJ0IIeRFiHOANv5u/e3ck4HlmhnnNP01P+jcm7rJMDWN8nc8dcklT8aw27D9teNCaWvLpssr7\na3t2+bCotbHQLK/3bfc=",
		            "UserCred": {
		                "Ver": "LoginUserCredentials_1.0.0",
		                "VerId": {
		                    "Ver": "StringVerificationIdentifier_1.0.0",
		                    "NAME": "30000390"
		                },
		                "PrimaryVerData": {
		                    "Ver": "TraditionalPasswordVerificationData_1.0.0",
		                    "Pass": {
		                        "Ver": "Secret_1.0.0",
		                        "Text": "welcome"
		                    }
		                },
		                "AddVerData": [{
		                    "Ver": "MothersMaidenNameVerificationData_1.0.0",
		                    "VerType": {
		                        "CDE": "QNACHALLENGE"
		                    },
		                    "MthrsMaidnNam": {
		                        "Ver": "Secret_1.0.0",
		                        "Text": "welcome"
		                    }
		                }],
		                "CredScope": {
		                    "CDE": "LOGIN"
		                },
		                "DomainAddr": [{
		                    "Ver": "DomainAddress_1.0.0",
		                    "PlatformId": "apiVer"
		                }]
		            }
		        }, {
		            "Ver": "MothersMaidenNameValidatedToken_1.0.0",
		            "TokenId": "0c85c471-a7c5-47bb-8ce2-8ce5425ca396",
		            "Type": {
		                "CDE": "AUTHENTICATION"
		            },
		            "Issuer": "AuthenticationTokenIssuer_1.0.0",
		            "Audience": [{
		                "Ver": "DomainAddress_1.0.0",
		                "PlatformId": "apiVer"
		            }],
		            "IssuedOn": {
		                "Ver": "DateTime_1.0.0",
		                "Year": 2016,
		                "Month": 1,
		                "Day": 4,
		                "Hour": 15,
		                "Minute": 44,
		                "Second": 20
		            },
		            "Expiry": {
		                "Ver": "DateTime_1.0.0",
		                "Year": 2016,
		                "Month": 1,
		                "Day": 4,
		                "Hour": 16,
		                "Minute": 14,
		                "Second": 20
		            },
		            "Signature": "dum5FMwTc9LHmDzt2rMeRLN9RIhBZkU/Lc5RdR33b9Z0m/R+L1JCEoxuaJ1fpHD4xFLgTTr99rdd\nOhgK5hp1pNI0W7nDIO3F1soQO1s9Sd/cm4wKRUtRvv9MPWanbupZx+mhqAFdg8h46QZy7VO6Gbrq\n5XCblvPQegJ1PVBdGgc=",
		            "UserCred": {
		                "Ver": "LoginUserCredentials_1.0.0",
		                "VerId": {
		                    "Ver": "StringVerificationIdentifier_1.0.0",
		                    "NAME": "30000390"
		                },
		                "PrimaryVerData": {
		                    "Ver": "TraditionalPasswordVerificationData_1.0.0",
		                    "Pass": {
		                        "Ver": "Secret_1.0.0",
		                        "Text": "welcome"
		                    }
		                },
		                "AddVerData": [{
		                    "Ver": "MothersMaidenNameVerificationData_1.0.0",
		                    "VerType": {
		                        "CDE": "QNACHALLENGE"
		                    },
		                    "MthrsMaidnNam": {
		                        "Ver": "Secret_1.0.0",
		                        "Text": "welcome"
		                    }
		                }],
		                "CredScope": {
		                    "CDE": "LOGIN"
		                },
		                "DomainAddr": [{
		                    "Ver": "DomainAddress_1.0.0",
		                    "PlatformId": "apiVer"
		                }]
		            }
		        }, {
		            "Ver": "OTPValidatedToken_1.0.0",
		            "TokenId": "7e4dda9f-bf6a-4406-a27d-578e027a4f5a",
		            "Type": {
		                "CDE": "AUTHENTICATION"
		            },
		            "Issuer": "AuthenticationTokenIssuer_1.0.0",
		            "Audience": [{
		                "Ver": "DomainAddress_1.0.0",
		                "PlatformId": "apiVer"
		            }],
		            "IssuedOn": {
		                "Ver": "DateTime_1.0.0",
		                "Year": 2016,
		                "Month": 1,
		                "Day": 4,
		                "Hour": 15,
		                "Minute": 44,
		                "Second": 22
		            },
		            "Expiry": {
		                "Ver": "DateTime_1.0.0",
		                "Year": 2016,
		                "Month": 1,
		                "Day": 4,
		                "Hour": 16,
		                "Minute": 14,
		                "Second": 22
		            },
		            "Signature": "DocjgFG4cGpLQMepK23xPed92yU1/LxRz0O5baBJtZV1ZXbDvwDZm7xT2bP8alPA4RpAlnrbNWEq\nuZtr4AoPF/jjl7kdIv+NuyP0VvcqMsh5/MH2RZwh5lR9uLhj0xIEufi5XrUraQZg7JM68ugiJoxX\nopsWC0/nfLeLnMyTIgE=",
		            "UserCred": {
		                "Ver": "LoginUserCredentials_1.0.0",
		                "VerId": {
		                    "Ver": "StringVerificationIdentifier_1.0.0",
		                    "NAME": "30000390"
		                },
		                "PrimaryVerData": {
		                    "Ver": "OTPVerificationData_1.0.0",
		                    "NumAttempts": 0,
		                    "OTP": {
		                        "Ver": "Secret_1.0.0",
		                        "Text": "1234"
		                    }
		                },
		                "CredScope": {
		                    "CDE": "LOGIN"
		                },
		                "DomainAddr": [{
		                    "Ver": "DomainAddress_1.0.0",
		                    "PlatformId": "apiVer"
		                }]
		            }
		        }, {
		            "Ver": "OTPValidatedToken_1.0.0",
		            "TokenId": "aa50fe27-598d-4aa1-9c5c-378be5f1ce0b",
		            "Type": {
		                "CDE": "AUTHORIZATION"
		            },
		            "Issuer": "AuthenticationTokenIssuer_1.0.0",
		            "Audience": [{
		                "Ver": "DomainAddress_1.0.0",
		                "PlatformId": "apiVer"
		            }],
		            "IssuedOn": {
		                "Ver": "DateTime_1.0.0",
		                "Year": 2016,
		                "Month": 1,
		                "Day": 4,
		                "Hour": 15,
		                "Minute": 45,
		                "Second": 24
		            },
		            "Expiry": {
		                "Ver": "DateTime_1.0.0",
		                "Year": 2016,
		                "Month": 1,
		                "Day": 4,
		                "Hour": 16,
		                "Minute": 15,
		                "Second": 24
		            },
		            "Signature": "jX5cSSvWjQWpv2gy2TnToXbr3qcKlVqZ9RT3Pk7S4hnKfWPqM+TXUVBnGXyoPJWWcnfFExmQMAHY\nAja1d1F8YW8EehYUu7LDUKmAJ2M9qiGsbyDKjcpnegwXK0tvaQO+5hG2yeUJW8dJnN5whT5W+4y4\nMEgXrueudq6ewgjHJ/k=",
		            "UserCred": {
		                "Ver": "TransactionUserCredentials_1.0.0",
		                "VerId": {
		                    "Ver": "StringVerificationIdentifier_1.0.0",
		                    "NAME": "30000390"
		                },
		                "PrimaryVerData": {
		                    "Ver": "OTPVerificationData_1.0.0",
		                    "NumAttempts": 0,
		                    "OTP": {
		                        "Ver": "Secret_1.0.0",
		                        "Text": "232"
		                    }
		                },
		                "CredScope": {
		                    "CDE": "TRANSACTION"
		                },
		                "DomainAddr": [{
		                    "Ver": "DomainAddress_1.0.0",
		                    "PlatformId": "apiVer"
		                }],
		                "TrnctnPayld": {
		                    "Ver": "MessagePayload_1.0.0",
		                    "Operation": "UPDATE",
		                    "DataEntity": [{
		                        "Ver": "AccountPayee_1.0.0",
		                        "PayeeId": {
		                            "Ver": "PayeeIdentifier_1.0.0",
		                            "NickName": "U"
		                        },
		                        "DefaultPmtData": {
		                            "Ver": "DefaultPaymentData_1.0.0",
		                            "FromAccount": {
		                                "Ver": "AccountIdentifier_1.0.0",
		                                "AcctIds": {}
		                            }
		                        },
		                        "PersonData": {
		                            "Ver": "PersonData_1.0.0",
		                            "NameList": [{
		                                "Ver": "PersonName_1.0.0",
		                                "PreferredName": "Ashok"
		                            }]
		                        },
		                        "ToAccount": [{
		                            "Ver": "DemandDepositAccount_1.0.0",
		                            "AccountId": {
		                                "Ver": "AccountIdentifier_1.0.0",
		                                "AcctIds": {
		                                    "BANKACCOUNTID": "122222"
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
		                                "Name": " ATTIE LOUW ST. VANDERBIJLPARK",
		                                "FiIdent": {
		                                    "Ver": "FIIdentifier_1.0.0",
		                                    "Id": {
		                                        "Ver": "Identifier_1.0.0",
		                                        "Id": "ABSA BANK"
		                                    }
		                                }
		                            },
		                            "ClosreData": {
		                                "Ver": "ClosureData_1.0.0",
		                                "UserAllowed": false
		                            }
		                        }]
		                    }],
		                    "EntityCounts": [{
		                        "Ver": "EntityCount_1.0.0",
		                        "EntityTypeId": "AccountPayee",
		                        "Count": 1
		                    }]
		                }
		            }
		        }]
		    },
		    "EnvVer": "MessageEnvelope_1.0.0",
		    "APIVer": "apiVer",
		    "MsgId": "304",
		    "SessionId": "sessionId",
		    "Payload": {
		        "Ver": "MessagePayload_1.0.0",
		        "Operation": "UPD",
		        "DataEntity": [{
		            "Ver": "AccountPayee_1.0.0",
		            "PayeeId": {
		                "Ver": "PayeeIdentifier_1.0.0",
		                "NickName": "U"
		            },
		            "PersonData": {
		                "Ver": "PersonData_1.0.0",
		                "ContactList": [],
		                "NameList": [{
		                    "Ver": "PersonName_1.0.0",
		                    "PreferredName": "Ashok"
		                }]
		            },
		            "ToAccount": [{
		                "Ver": "DemandDepositAccount_1.0.0",
		                "AccountId": {
		                    "Ver": "AccountIdentifier_1.0.0",
		                    "AcctIds": {
		                        "BANKACCOUNTID": "122222"
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
		    },
		    "Locale": {
		        "CDE": "EN_US"
		    }
		};

inputJson = JSON.stringify(inputJson);

alert("login stringify js ==>"+inputJson);
$('#inputJSON').html(inputJson);
alert(inputJson);
$.ajax({
	url : "http://01hw577052:8080/BancsDigital-Middleware-1.4.0-mbl-1.0.0/xxxxx",
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


