function externalBeneficiaryImmediateUSSD() {
	var inputJson = {
		Ver: "MessageEnvelope_1.0.0",
		Resource: "resrc",
		AppVer: "1.0.0",
		EnvVer: "MessageEnvelope_1.0.0",
		APIVer: "apiVer",
		MsgId: "1",
		SessionId: "sessionId",
		ProxyApp: {
			Ver: "ProxyApp_1.0.0",
			UserAgent: "useragent"
		},
		Locale: {
			CDE: 'EN_US'
		},
		SecToken: {
			Ver: "SecurityToken_1.0.0",
			isArchetype: true,
			Token: []
		},
		Payload: {
			Ver: "MessagePayload_1.0.0",
			Category: ["min"],
			Operation: "VLD",
			EmptyMsg: false,
			DataEntity: [{
				Ver: "TransactionUserCredentials_1.0.0",
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

				TrnctnPayld: {
					"Ver": "MessagePayload_1.0.0",
					"Operation": "CRT",
					"EmptyMsg": false,
					"DataEntity": [{
						"Ver": "AccountPayeeTransfer_1.0.0",
						"Amount": {
							"Ver": "CurrencyAmount_1.0.0",
							"Amt": {
								"Ver": "Amount_1.0.0",
								"Value": "745.00"
							},
							"CurrCode": {
								"CDE": "ZAR",
								"DESC": "ZAR"
							}
						},
						"FromAcct": {
							"Ver": "DemandDepositAccount_1.0.0",
							"Type": {
								"CDE": "DEP"
							},
							"AccountId": {
								"Ver": "AccountIdentifier_1.0.0",
								"Id": {
									"Ver": "Identifier_1.0.0",
									"Id": "1"
								},
								"AcctIds": {
									"BANKACCOUNTID": "1000000990"
								}
							}
						},
						"Remarks": "This is an external Transfer",
						"Payee": {
							"Ver": "AccountPayee_1.0.0",
							"PersonData": {
								"Ver": "PersonData_1.0.0",
								"NameList": [{
									"Ver": "PersonName_1.0.0",
									"PreferredName": "pri"
				                        }]
							},
							"PayeeId": {
								"Ver": "PayeeIdentifier_1.0.0",
								"Id": "",
								"NickName": "prii12"
							},
							"ToAccount": [{
								"Ver": "DemandDepositAccount_1.0.0",
								"Branch": {
									"Ver": "FILocation_1.0.0",
									"FiLocatnId": {
										"Ver": "FILocationIdentifier_1.0.0",
										"FiLocationId": {
											"BSB": "630237"
										}
									},
									"FiIdent": {
										"Ver": "FIIdentifier_1.0.0",
										"Id": {
											"Ver": "Identifier_1.0.0",
											"Id": "ABSA BANK"
										}
									},
									"Name": "ATTIE LOUW ST. VANDERBIJLPARK",
									"Address": {
										"Ver": "Address_1.0.0",
										"AddrLine1": "PRESIDENT KRUGER STREET",
										"AddrLine2": "VANDERBIJLPARK",
										"PostalCode": "748"
									}
								},
								"AccountId": {
									"Ver": "AccountIdentifier_1.0.0",
									"Id": {
										"Ver": "Identifier_1.0.0",
										"Id": "381237"
									},
									"AcctIds": {
										"BANKACCOUNTID": "1000008488"
									}
								}
				                    }]

						},
						"notificationModelList": [{
							"Ver": "NotificationModel_1.0.0",
							"notificationEvent": {
								"Ver": "NotificationEvent_1.0.0",
								"state": {
									"CDE": "DEFAULT"
								}
							},
							"notificationModeList": [{
								"Ver": "NotificationModeData_1.0.0",
								"mode": {
									"CDE": "1"
								},
								"sequenceNo": 1,
								"contactId": {
									"Ver": "Identifier_1.0.0",
									"Id": "1234"
								}
				                }],
							"notificationRecipient": {
								"Ver": "NotificationRecipient_1.0.0",
								"contactList": [{
									"Ver": "EmailContact_1.0.0",
									"ContactId": {
										"Ver": "Identifier_1.0.0",
										"Id": "1234"
									},
									"Email": {
										"Ver": "Email_1.0.0",
										"Address": "priyamani@wei.com"
									}
				                    }]
							}
				            }, {
							"Ver": "NotificationModel_1.0.0",
							"notificationEvent": {
								"Ver": "NotificationEvent_1.0.0",
								"state": {
									"CDE": "DEFAULT"
								}
							},
							"notificationModeList": [{
								"Ver": "NotificationModeData_1.0.0",
								"mode": {
									"CDE": "1"
								},
								"sequenceNo": 1,
								"contactId": {
									"Ver": "Identifier_1.0.0",
									"Id": "1235"
								}
				                }],
							"notificationRecipient": {
								"Ver": "NotificationRecipient_1.0.0",
								"contactList": [{
									"Ver": "EmailContact_1.0.0",
									"ContactId": {
										"Ver": "Identifier_1.0.0",
										"Id": "1235"
									},
									"Email": {
										"Ver": "Email_1.0.0",
										"Address": "abcd@sdf.com"
									}
				                    }]
							}
				            }]



				        }]
				},
				PrimaryVerData: {
					Ver: "USSDVerificationData_1.0.0",
				},
				CredScope: {
					CDE: "TRANSACTION"
				},
				DomainAddr: [{
					Ver: "DomainAddress_1.0.0",
					Type: {
						CDE: "DomainType1"
					},

					PlatformId: "Retail",
					AppId: "Bancs"

					}]
				}]
		}
	};

	inputJson = JSON.stringify(inputJson);

	alert("login stringify js ==>" + inputJson);
	$('#inputJSON').html(inputJson);
	alert(inputJson);
	$.ajax({
		url: "http://01hw577052:8080/BancsDigital-Middleware-1.4.0-mbl-1.0.0/module",
		type: "POST",
		dataType: "text",
		contentType: "application/json",
		data: inputJson,
		success: function (data, textStatus, jqXHR) {
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
		error: function (jqXHR, textStatus, errorThrown) {
			alert("Error ::: " + jqXHR.responseText + "\n1:" + textStatus + "\n2:" + errorThrown);
			$('#outputJSON').html(jqXHR);
			$('#top').html('');
			eval("var json=" + jqXHR);
			$('#top').json2html(convert('json', json, 'open'),
				transforms.object);
			regEvents();
		}
	});
}



function internalBeneficiaryImmediateUSSD() {
	var inputJson = {
		Ver: "MessageEnvelope_1.0.0",
		Resource: "resrc",
		AppVer: "1.0.0",
		EnvVer: "MessageEnvelope_1.0.0",
		APIVer: "apiVer",
		MsgId: "1",
		SessionId: "sessionId",
		ProxyApp: {
			Ver: "ProxyApp_1.0.0",
			UserAgent: "useragent"
		},
		Locale: {
			CDE: 'EN_US'
		},
		SecToken: {
			Ver: "SecurityToken_1.0.0",
			isArchetype: true,
			Token: []
		},
		Payload: {
			Ver: "MessagePayload_1.0.0",
			Category: ["min"],
			Operation: "VLD",
			EmptyMsg: false,
			DataEntity: [{
				Ver: "TransactionUserCredentials_1.0.0",
				VerId: {
					Ver: "StringVerificationIdentifier_1.0.0",
					UserId: {
						Ver: "UserIdentifier_1.0.0",
						ObjId: "RetailUser",
						UserStatus: {
							CDE: "ACTIVE"
						}
					},
					//NAME : "3170630565905872108"
					//NAME : "8503362580371225688"
					NAME: "10000615"
				},

				TrnctnPayld: {
					"Ver": "MessagePayload_1.0.0",
					"Operation": "CRT",
					"EmptyMsg": false,
					"DataEntity": [{
						"Ver": "AccountPayeeTransfer_1.0.0",
						"Amount": {
							"Ver": "CurrencyAmount_1.0.0",
							"Amt": {
								"Ver": "Amount_1.0.0",
								"Value": "183.00"
							},
							"CurrCode": {
								"CDE": "ZAR",
								"DESC": "ZAR"
							}
						},
						"FromAcct": {
							"Ver": "DemandDepositAccount_1.0.0",
							"Type": {
								"CDE": "DEP"
							},
							"AccountId": {
								"Ver": "AccountIdentifier_1.0.0",
								"Id": {
									"Ver": "Identifier_1.0.0",
									"Id": "1"
								},
								"AcctIds": {
									"BANKACCOUNTID": "1000000990"
								}
							}
						},
						"Remarks": "onceoffPayment",
						"Payee": {
							"Ver": "AccountPayee_1.0.0",
							"PersonData": {
								"Ver": "PersonData_1.0.0",
								"NameList": [{
									"Ver": "PersonName_1.0.0",
									"PreferredName": "prajna"
			                        }]
							},
							"PayeeId": {
								"Ver": "PayeeIdentifier_1.0.0",
								"Id": "",
								"NickName": "prajna23"
							},
							"ToAccount": [{
								"Ver": "DemandDepositAccount_1.0.0",
								"Branch": {
									"Ver": "FILocation_1.0.0",
									"FiLocatnId": {
										"Ver": "FILocationIdentifier_1.0.0",
										"FiLocationId": {
											"BSB": "420037"
										}
									},
									"FiIdent": {
										"Ver": "FIIdentifier_1.0.0",
										"Id": {
											"Ver": "Identifier_1.0.0",
											"Id": "ABSA BANK"
										}
									},
									"Name": "ATTIE LOUW ST. VANDERBIJLPARK",
									"Address": {
										"Ver": "Address_1.0.0",
										"AddrLine1": "PRESIDENT KRUGER STREET",
										"AddrLine2": "VANDERBIJLPARK",
										"PostalCode": "748"
									}
								},
								"AccountId": {
									"Ver": "AccountIdentifier_1.0.0",
									"Id": {
										"Ver": "Identifier_1.0.0",
										"Id": "381237"
									},
									"AcctIds": {
										"BANKACCOUNTID": "10007898989"
									}
								}
			                    }]

						},
						"notificationModelList": [{
							"Ver": "NotificationModel_1.0.0",
							"notificationEvent": {
								"Ver": "NotificationEvent_1.0.0",
								"state": {
									"CDE": "DEFAULT"
								}
							},
							"notificationModeList": [{
								"Ver": "NotificationModeData_1.0.0",
								"mode": {
									"CDE": "1"
								},
								"sequenceNo": 1,
								"contactId": {
									"Ver": "Identifier_1.0.0",
									"Id": "1234"
								}
			                }],
							"notificationRecipient": {
								"Ver": "NotificationRecipient_1.0.0",
								"contactList": [{
									"Ver": "EmailContact_1.0.0",
									"ContactId": {
										"Ver": "Identifier_1.0.0",
										"Id": "1234"
									},
									"Email": {
										"Ver": "Email_1.0.0",
										"Address": "prajna@wei.com"
									}
			                    }]
							}
			            }, {
							"Ver": "NotificationModel_1.0.0",
							"notificationEvent": {
								"Ver": "NotificationEvent_1.0.0",
								"state": {
									"CDE": "DEFAULT"
								}
							},
							"notificationModeList": [{
								"Ver": "NotificationModeData_1.0.0",
								"mode": {
									"CDE": "1"
								},
								"sequenceNo": 1,
								"contactId": {
									"Ver": "Identifier_1.0.0",
									"Id": "1235"
								}
			                }],
							"notificationRecipient": {
								"Ver": "NotificationRecipient_1.0.0",
								"contactList": [{
									"Ver": "EmailContact_1.0.0",
									"ContactId": {
										"Ver": "Identifier_1.0.0",
										"Id": "1235"
									},
									"Email": {
										"Ver": "Email_1.0.0",
										"Address": "prajna@sdf.com"
									}
			                    }]
							}
			            }]



			        }]
				},
				PrimaryVerData: {
					Ver: "USSDVerificationData_1.0.0",
				},
				CredScope: {
					CDE: "TRANSACTION"
				},
				DomainAddr: [{
					Ver: "DomainAddress_1.0.0",
					Type: {
						CDE: "DomainType1"
					},

					PlatformId: "Retail",
					AppId: "Bancs"

				}]
			}]
		}
	};

	inputJson = JSON.stringify(inputJson);

	alert("login stringify js ==>" + inputJson);
	$('#inputJSON').html(inputJson);
	alert(inputJson);
	$.ajax({
		url: "http://01hw577052:8080/BancsDigital-Middleware-1.4.0-mbl-1.0.0/module",
		type: "POST",
		dataType: "text",
		contentType: "application/json",
		data: inputJson,
		success: function (data, textStatus, jqXHR) {
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
		error: function (jqXHR, textStatus, errorThrown) {
			alert("Error ::: " + jqXHR.responseText + "\n1:" + textStatus + "\n2:" + errorThrown);
			$('#outputJSON').html(jqXHR);
			$('#top').html('');
			eval("var json=" + jqXHR);
			$('#top').json2html(convert('json', json, 'open'),
				transforms.object);
			regEvents();
		}
	});
}



function normalSTPUSSD() {
	var inputJson = {
		Ver: "MessageEnvelope_1.0.0",
		Resource: "resrc",
		AppVer: "1.0.0",
		EnvVer: "MessageEnvelope_1.0.0",
		APIVer: "apiVer",
		MsgId: "1",
		SessionId: "sessionId",
		ProxyApp: {
			Ver: "ProxyApp_1.0.0",
			UserAgent: "useragent"
		},
		Locale: {
			CDE: 'EN_US'
		},
		SecToken: {
			Ver: "SecurityToken_1.0.0",
			isArchetype: true,
			Token: []
		},
		Payload: {
			Ver: "MessagePayload_1.0.0",
			Category: ["min"],
			Operation: "VLD",
			EmptyMsg: false,
			DataEntity: [{
				Ver: "TransactionUserCredentials_1.0.0",
				VerId: {
					Ver: "StringVerificationIdentifier_1.0.0",
					UserId: {
						Ver: "UserIdentifier_1.0.0",
						ObjId: "RetailUser",
						UserStatus: {
							CDE: "ACTIVE"
						}
					},
					//NAME : "3170630565905872108"
					//NAME : "8503362580371225688"
					NAME: "10000615"
				},

				TrnctnPayld: {
					"Ver": "MessagePayload_1.0.0",
					"Operation": "CRT",
					"DataEntity": [{
						"Ver": "AccountPayment_1.0.0",
						"Amt": {
							"Ver": "CurrencyAmount_1.0.0",
							"Amt": {
								"Ver": "Amount_1.0.0",
								"Value": "1100.00"
							},
							"CurrCode": {
								"CDE": "ZAR"
							}
						},
						"DebtorData": {
							"Ver": "DebtorData_1.0.0",
							"PersonData": {
								"Ver": "PersonData_1.0.0",
								"ContactList": [{
									"Ver": "PostalContact_1.0.0",
									"Address": {
										"Ver": "Address_1.0.0",
										"City": {
											"Ver": "City_1.0.0",
											"StateProv": {
												"Ver": "StateProvince_1.0.0",
												"Country": {
													"Ver": "Country_1.0.0",
													"Name": "South Africa",
													"CountryCode": {
														"CDE": "au"
													}
												}
											}
										},
										"AddrLine1": "gdsrgerg",
										"AddrLine2": "sdfd",
										"AddrLine3": "gdsfgdfgdfsdfg",
										"AddrLine4": "sdfsdf",
										"PostalCode": "23423"
									}
									}],
								"NameList": [{
									"Ver": "PersonName_1.0.0",
									"FamilyName": [""],
									"GivenName": [""]
									}]
							}
						},
						"PymntInstrn": {
							"Ver": "PaymentInstruction_1.0.0",
							"FromAcc": {
								"Ver": "DemandDepositAccount_1.0.0",
								"AccountId": {
									"Ver": "AccountIdentifier_1.0.0",
									"AcctIds": {
										"BANKACCOUNTID": "1000000990"
									}
								}
							}
						},
						"ProcessDt": {
							"Ver": "Date_1.0.0",
							"Year": 2015,
							"Month": 10,
							"Day": 2
						},
						"CreditDetail": [{
							"Ver": "PaymentCreditDetail_1.0.0",
							"CreditorData": {
								"Ver": "CreditorData_1.0.0",
								"PersonData": {
									"Ver": "PersonData_1.0.0",
									"ContactList": [{
										"Ver": "PostalContact_1.0.0",
										"Address": {
											"Ver": "Address_1.0.0",
											"City": {
												"Ver": "City_1.0.0",
												"StateProv": {
													"Ver": "StateProvince_1.0.0",
													"Country": {
														"Ver": "Country_1.0.0",
														"Name": "South Africa",
														"CountryCode": {
															"CDE": "au"
														}
													}
												}
											},
											"AddrLine1": "rger",
											"AddrLine2": "ter",
											"AddrLine3": "ter",
											"AddrLine4": "ter",
											"PostalCode": "6456456"
										}
										}, {
										"Ver": "PhoneContact_1.0.0",
										"Phone": {
											"Ver": "Phone_1.0.0",
											"PhoneType": {
												"CDE": "HOME"
											},
											"PhoneNum": {
												"Ver": "PhoneNumber_1.0.0",
												"CtryCode": 910,
												"CityCode": 234,
												"LocalPhNum": 123,
												"FormatedPhNum": "South Africa"
											}
										}
										}],
									"NameList": [{
										"Ver": "PersonName_1.0.0",
										"FamilyName": ["benSTP"],
										"GivenName": [""],
										"PreferredName": "benSTP"
										}]
								},
								"Reference": {
									"Ver": "PayeeIdentifier_1.0.0",
									"Id": "1321",
									"NickName": "stp001"
								}
							},
							"ToAcc": {
								"Ver": "DemandDepositAccount_1.0.0",
								"AccountId": {
									"Ver": "AccountIdentifier_1.0.0",
									"AcctIds": {
										"BANKACCOUNTID": "1300001236"
									}
								},
								"Branch": {
									"Ver": "FILocation_1.0.0",
									"FiLocatnId": {
										"Ver": "FILocationIdentifier_1.0.0",
										"FiLocationId": {
											"BSB": "450410"
										}
									},
									"FiIdent": {
										"Ver": "FIIdentifier_1.0.0",
										"FiIdent": {
											"BANK_CODE": "AMRO - ABNAZAJJ"
										}
									}
								}
							}
							}]
						}]
				},
				PrimaryVerData: {
					Ver: "USSDVerificationData_1.0.0",
				},
				CredScope: {
					CDE: "TRANSACTION"
				},
				DomainAddr: [{
					Ver: "DomainAddress_1.0.0",
					Type: {
						CDE: "DomainType1"
					},

					PlatformId: "Retail",
					AppId: "Bancs"

				}]
			}]
		}
	};

	inputJson = JSON.stringify(inputJson);

	alert("login stringify js ==>" + inputJson);
	$('#inputJSON').html(inputJson);
	alert(inputJson);
	$.ajax({
		url: "http://01hw577052:8080/BancsDigital-Middleware-1.4.0-mbl-1.0.0/module",
		type: "POST",
		dataType: "text",
		contentType: "application/json",
		data: inputJson,
		success: function (data, textStatus, jqXHR) {
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
		error: function (jqXHR, textStatus, errorThrown) {
			alert("Error ::: " + jqXHR.responseText + "\n1:" + textStatus + "\n2:" + errorThrown);
			$('#outputJSON').html(jqXHR);
			$('#top').html('');
			eval("var json=" + jqXHR);
			$('#top').json2html(convert('json', json, 'open'),
				transforms.object);
			regEvents();
		}
	});
}

function onceOffPaymentBusinessNameUSSD() {
	var inputJson = {
		Ver: "MessageEnvelope_1.0.0",
		Resource: "resrc",
		AppVer: "1.0.0",
		EnvVer: "MessageEnvelope_1.0.0",
		APIVer: "apiVer",
		MsgId: "1",
		SessionId: "sessionId",
		ProxyApp: {
			Ver: "ProxyApp_1.0.0",
			UserAgent: "useragent"
		},
		Locale: {
			CDE: 'EN_US'
		},
		SecToken: {
			Ver: "SecurityToken_1.0.0",
			isArchetype: true,
			Token: []
		},
		Payload: {
			Ver: "MessagePayload_1.0.0",
			Category: ["min"],
			Operation: "VLD",
			EmptyMsg: false,
			DataEntity: [{
				Ver: "TransactionUserCredentials_1.0.0",
				VerId: {
					Ver: "StringVerificationIdentifier_1.0.0",
					UserId: {
						Ver: "UserIdentifier_1.0.0",
						ObjId: "RetailUser",
						UserStatus: {
							CDE: "ACTIVE"
						}
					},
					//NAME : "3170630565905872108"
					//NAME : "8503362580371225688"
					NAME: "10000615"
				},

				TrnctnPayld: {
					"Ver": "MessagePayload_1.0.0",
					"Operation": "CRT",
					"Category": [""],
					"isArcheType": true,
					"DataEntity": [{
						"Ver": "AccountPayment_1.0.0",
						"Amt": {
							"Ver": "CurrencyAmount_1.0.0",
							"Amt": {
								"Ver": "Amount_1.0.0",
								"Value": "123"
							},
							"CurrCode": {
								"CDE": "ZAR",
								"DSC": ""
							}
						},
						"DebtorData": {
							"Ver": "DebtorData_1.0.0",
							"OrgData": {
								"Ver": "OrganizationData_1.0.0",
								"NameList": [{
									"Ver": "OrganizationName_1.0.0",
									"Name": "Mercentile Bank"
								}],
								"ContactList": [{
									"Ver": "PostalContact_1.0.0",
									"Address": {
										"Ver": "Address_1.0.0",
										"AddrLine1": "AddrLine11",
										"AddrLine2": "AddrLine12",
										"AddrLine3": "AddrLine13",
										"AddrLine4": "AddrLine14",
										"PostalCode": "32555",
										"City": {
											"Ver": "City_1.0.0",
											"StateProv": {
												"Ver": "StateProvince_1.0.0",
												"Country": {
													"Ver": "Country_1.0.0",
													"CountryCode": {
														"CDE": "au",
														"DSC": ""
													}
												}
											}
										}
									}
								}]
							}
						},
						"ProcessDt": {
							"Ver": "Date_1.0.0",
							"Year": 2015,
							"Month": 6,
							"Day": 28
						},
						"PymntInstrn": {
							"Ver": "PaymentInstruction_1.0.0",
							"FromAcc": {
								"Ver": "DemandDepositAccount_1.0.0",
								"AccountId": {
									"Ver": "AccountIdentifier_1.0.0",

									"AcctIds": {
										"BANKACCOUNTID": "1000000990"
									}
								}
							}
						},
						"CreditDetail": [{
							"Ver": "PaymentCreditDetail_1.0.0",
							"ToAcc": {
								"Ver": "DemandDepositAccount_1.0.0",
								"Branch": {
									"Ver": "FILocation_1.0.0",
									"FiIdent": {
										"Ver": "FIIdentifier_1.0.0",
										"FiIdent": {
											"BANK_CODE": "AMRO - ABNAZAJJ"
										}
									},
									"FiLocatnId": {
										"Ver": "FILocationIdentifier_1.0.0",
										"FiLocationId": {
											"BSB": "450410"
										}
									}
								},

								"AccountId": {
									"Ver": "AccountIdentifier_1.0.0",
									"AcctIds": {
										"BANKACCOUNTID": "1300001546"
									}
								}
							},
							"CreditorData": {
								"Ver": "CreditorData_1.0.0",
								"Reference": {
									"Ver": "PayeeIdentifier_1.0.0",
									"Id": "",
									"NickName": "sindu32"
								},
								"PersonData": {
									"Ver": "PersonData_1.0.0",
									"NameList": [{
										"Ver": "PersonName_1.0.0",
										"PreferredName": "sindu"

									}],
									"ContactList": [{
										"Ver": "PostalContact_1.0.0",
										"Address": {
											"Ver": "Address_1.0.0",
											"AddrLine1": "AddrLine11",
											"AddrLine2": "AddrLine12",
											"AddrLine3": "AddrLine13",
											"AddrLine4": "AddrLine14",
											"PostalCode": "32555",
											"City": {
												"Ver": "City_1.0.0",
												"StateProv": {
													"Ver": "StateProvince_1.0.0",
													"Country": {
														"Ver": "Country_1.0.0",
														"CountryCode": {
															"CDE": "au",
															"DSC": ""
														}
													}
												}
											}
										}
									}, {
										"Ver": "PhoneContact_1.0.0",
										"Phone": {
											"Ver": "Phone_1.0.0",
											"PhoneType": {
												"CDE": "HOME"
											},
											"PhoneNum": {
												"Ver": "PhoneNumber_1.0.0",
												"CtryCode": 910,
												"CityCode": 234,
												"LocalPhNum": 123,
												"FormatedPhNum": "9102345831"
											}
										}
									}]
								}
							}
						}]
					}]
				},
				PrimaryVerData: {
					Ver: "USSDVerificationData_1.0.0",
				},
				CredScope: {
					CDE: "TRANSACTION"
				},
				DomainAddr: [{
					Ver: "DomainAddress_1.0.0",
					Type: {
						CDE: "DomainType1"
					},

					PlatformId: "Retail",
					AppId: "Bancs"

				}]
			}]
		}
	};

	inputJson = JSON.stringify(inputJson);

	alert("login stringify js ==>" + inputJson);
	$('#inputJSON').html(inputJson);
	alert(inputJson);
	$.ajax({
		url: "http://01hw577052:8080/BancsDigital-Middleware-1.4.0-mbl-1.0.0/module",
		type: "POST",
		dataType: "text",
		contentType: "application/json",
		data: inputJson,
		success: function (data, textStatus, jqXHR) {
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
		error: function (jqXHR, textStatus, errorThrown) {
			alert("Error ::: " + jqXHR.responseText + "\n1:" + textStatus + "\n2:" + errorThrown);
			$('#outputJSON').html(jqXHR);
			$('#top').html('');
			eval("var json=" + jqXHR);
			$('#top').json2html(convert('json', json, 'open'),
				transforms.object);
			regEvents();
		}
	});
}


function oNceOffPaymentSTPPaymentUSSD() {
	var inputJson = {
		Ver: "MessageEnvelope_1.0.0",
		Resource: "resrc",
		AppVer: "1.0.0",
		EnvVer: "MessageEnvelope_1.0.0",
		APIVer: "apiVer",
		MsgId: "1",
		SessionId: "sessionId",
		ProxyApp: {
			Ver: "ProxyApp_1.0.0",
			UserAgent: "useragent"
		},
		Locale: {
			CDE: 'EN_US'
		},
		SecToken: {
			Ver: "SecurityToken_1.0.0",
			isArchetype: true,
			Token: []
		},
		Payload: {
			Ver: "MessagePayload_1.0.0",
			Category: ["min"],
			Operation: "VLD",
			EmptyMsg: false,
			DataEntity: [{
				Ver: "TransactionUserCredentials_1.0.0",
				VerId: {
					Ver: "StringVerificationIdentifier_1.0.0",
					UserId: {
						Ver: "UserIdentifier_1.0.0",
						ObjId: "RetailUser",
						UserStatus: {
							CDE: "ACTIVE"
						}
					},
					//NAME : "3170630565905872108"
					//NAME : "8503362580371225688"
					NAME: "10000615"
				},

				TrnctnPayld: {
					"Ver": "MessagePayload_1.0.0",
					"Operation": "CRT",
					"Category": [""],
					"isArcheType": true,
					"DataEntity": [{
						"Ver": "AccountPayment_1.0.0",
						"Amt": {
							"Ver": "CurrencyAmount_1.0.0",
							"Amt": {
								"Ver": "Amount_1.0.0",
								"Value": "156.34"
							},
							"CurrCode": {
								"CDE": "ZAR",
								"DSC": ""
							}
						},
						"notificationModelList": [{
							"Ver": "NotificationModel_1.0.0",
							"notificationEvent": {
								"Ver": "NotificationEvent_1.0.0",
								"state": {
									"CDE": "DEFAULT"
								}
							},
							"notificationModeList": [{
								"Ver": "NotificationModeData_1.0.0",
								"mode": {
									"CDE": "1"
								},
								"sequenceNo": 1,
								"contactId": {
									"Ver": "Identifier_1.0.0",
									"Id": "1234"
								}
		                }],
							"notificationRecipient": {
								"Ver": "NotificationRecipient_1.0.0",
								"contactList": [{
									"Ver": "EmailContact_1.0.0",
									"ContactId": {
										"Ver": "Identifier_1.0.0",
										"Id": "1234"
									},
									"Email": {
										"Ver": "Email_1.0.0",
										"Address": "kruti@wei.com"
									}
		                    }]
							}
		            }, {
							"Ver": "NotificationModel_1.0.0",
							"notificationEvent": {
								"Ver": "NotificationEvent_1.0.0",
								"state": {
									"CDE": "DEFAULT"
								}
							},
							"notificationModeList": [{
								"Ver": "NotificationModeData_1.0.0",
								"mode": {
									"CDE": "1"
								},
								"sequenceNo": 1,
								"contactId": {
									"Ver": "Identifier_1.0.0",
									"Id": "1235"
								}
		                }],
							"notificationRecipient": {
								"Ver": "NotificationRecipient_1.0.0",
								"contactList": [{
									"Ver": "EmailContact_1.0.0",
									"ContactId": {
										"Ver": "Identifier_1.0.0",
										"Id": "1235"
									},
									"Email": {
										"Ver": "Email_1.0.0",
										"Address": "kranti@sdf.com"
									}
		                    }]
							}
		            }],
						"DebtorData": {
							"Ver": "DebtorData_1.0.0",
							"PersonData": {
								"Ver": "PersonData_1.0.0",
								"NameList": [{
									"Ver": "PersonName_1.0.0",
									"GivenName": ["Nikh"],
									"FamilyName": ["Sahoo"]
								}],
								"ContactList": [{
									"Ver": "PostalContact_1.0.0",
									"Address": {
										"Ver": "Address_1.0.0",
										"AddrLine1": "AddrLine11",
										"AddrLine2": "AddrLine12",
										"AddrLine3": "AddrLine13",
										"AddrLine4": "AddrLine14",
										"PostalCode": "32555",
										"City": {
											"Ver": "City_1.0.0",
											"StateProv": {
												"Ver": "StateProvince_1.0.0",
												"Country": {
													"Ver": "Country_1.0.0",
													"CountryCode": {
														"CDE": "au",
														"DSC": ""
													}
												}
											}
										}
									}
								}]
							}
						},
						"ProcessDt": {
							"Ver": "Date_1.0.0",
							"Year": 2015,
							"Month": 6,
							"Day": 28
						},
						"PymntInstrn": {
							"Ver": "PaymentInstruction_1.0.0",
							"FromAcc": {
								"Ver": "DemandDepositAccount_1.0.0",
								"AccountId": {
									"Ver": "AccountIdentifier_1.0.0",

									"AcctIds": {
										"BANKACCOUNTID": "1000000990"
									}
								}
							}
						},
						"CreditDetail": [{
							"Ver": "PaymentCreditDetail_1.0.0",
							"ToAcc": {
								"Ver": "DemandDepositAccount_1.0.0",
								"Branch": {
									"Ver": "FILocation_1.0.0",
									"FiIdent": {
										"Ver": "FIIdentifier_1.0.0",
										"FiIdent": {
											"BANK_CODE": "AMRO - ABNAZAJJ"
										}
									},
									"FiLocatnId": {
										"Ver": "FILocationIdentifier_1.0.0",
										"FiLocationId": {
											"BSB": "630237"
										}
									}
								},

								"AccountId": {
									"Ver": "AccountIdentifier_1.0.0",
									"AcctIds": {
										"BANKACCOUNTID": "1557999999"
									}
								}
							},
							"CreditorData": {
								"Ver": "CreditorData_1.0.0",
								"Reference": {
									"Ver": "PayeeIdentifier_1.0.0",
									"Id": "",
									"NickName": "kruti23"
								},
								"PersonData": {
									"Ver": "PersonData_1.0.0",
									"NameList": [{
										"Ver": "PersonName_1.0.0",
										"PreferredName": "kruti"

									}],
									"ContactList": [{
										"Ver": "PostalContact_1.0.0",
										"Address": {
											"Ver": "Address_1.0.0",
											"AddrLine1": "AddrLine11",
											"AddrLine2": "AddrLine12",
											"AddrLine3": "AddrLine13",
											"AddrLine4": "AddrLine14",
											"PostalCode": "32555",
											"City": {
												"Ver": "City_1.0.0",
												"StateProv": {
													"Ver": "StateProvince_1.0.0",
													"Country": {
														"Ver": "Country_1.0.0",
														"CountryCode": {
															"CDE": "au",
															"DSC": ""
														}
													}
												}
											}
										}
									}, {
										"Ver": "PhoneContact_1.0.0",
										"Phone": {
											"Ver": "Phone_1.0.0",
											"PhoneType": {
												"CDE": "HOME"
											},
											"PhoneNum": {
												"Ver": "PhoneNumber_1.0.0",
												"CtryCode": 910,
												"CityCode": 234,
												"LocalPhNum": 123,
												"FormatedPhNum": "9102345444"
											}
										}
									}]
								}
							}
						}]
					}]
				},
				PrimaryVerData: {
					Ver: "USSDVerificationData_1.0.0",
				},
				CredScope: {
					CDE: "TRANSACTION"
				},
				DomainAddr: [{
					Ver: "DomainAddress_1.0.0",
					Type: {
						CDE: "DomainType1"
					},

					PlatformId: "Retail",
					AppId: "Bancs"

				}]
			}]
		}
	};

	inputJson = JSON.stringify(inputJson);

	alert("login stringify js ==>" + inputJson);
	$('#inputJSON').html(inputJson);
	alert(inputJson);
	$.ajax({
		url: "http://01hw577052:8080/BancsDigital-Middleware-1.4.0-mbl-1.0.0/module",
		type: "POST",
		dataType: "text",
		contentType: "application/json",
		data: inputJson,
		success: function (data, textStatus, jqXHR) {
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
		error: function (jqXHR, textStatus, errorThrown) {
			alert("Error ::: " + jqXHR.responseText + "\n1:" + textStatus + "\n2:" + errorThrown);
			$('#outputJSON').html(jqXHR);
			$('#top').html('');
			eval("var json=" + jqXHR);
			$('#top').json2html(convert('json', json, 'open'),
				transforms.object);
			regEvents();
		}
	});
}


function oNceOffBillerImmediateUSSD() {
	var inputJson = {
		Ver: "MessageEnvelope_1.0.0",
		Resource: "resrc",
		AppVer: "1.0.0",
		EnvVer: "MessageEnvelope_1.0.0",
		APIVer: "apiVer",
		MsgId: "1",
		SessionId: "sessionId",
		ProxyApp: {
			Ver: "ProxyApp_1.0.0",
			UserAgent: "useragent"
		},
		Locale: {
			CDE: 'EN_US'
		},
		SecToken: {
			Ver: "SecurityToken_1.0.0",
			isArchetype: true,
			Token: []
		},
		Payload: {
			Ver: "MessagePayload_1.0.0",
			Category: ["min"],
			Operation: "VLD",
			EmptyMsg: false,
			DataEntity: [{
				Ver: "TransactionUserCredentials_1.0.0",
				VerId: {
					Ver: "StringVerificationIdentifier_1.0.0",
					UserId: {
						Ver: "UserIdentifier_1.0.0",
						ObjId: "RetailUser",
						UserStatus: {
							CDE: "ACTIVE"
						}
					},
					//NAME : "3170630565905872108"
					//NAME : "8503362580371225688"
					NAME: "10000615"
				},

				TrnctnPayld: {
					"Ver": "MessagePayload_1.0.0",
					"Operation": "CRT",
					"EmptyMsg": "false",
					"DataEntity": [
						{
							"Ver": "QuickBillPayment_1.0.0",
							"PymntInstrn": {
								"Ver": "PaymentInstruction_1.0.0",
								"FromAcc": {
									"Ver": "DemandDepositAccount_1.0.0",
									"Type": {
										"CDE": "DEP"
									},
									"AccountId": {
										"Ver": "AccountIdentifier_1.0.0",
										"AcctIds": {
											"BANKACCOUNTID": "1000001865"
										}
									}
								},
								"Memo": "Immediate payment"
							},
							"ProcessDt": {
								"Ver": "Date_1.0.0",
								"Year": 2015,
								"Month": 10,
								"Day": 2
							},
							"Amt": {
								"Ver": "CurrencyAmount_1.0.0",
								"Amt": {
									"Ver": "Amount_1.0.0",
									"Value": "100"
								},
								"CurrCode": {
									"CDE": "ZAR",
									"DESC": "ZAR"
								}
							},
							"CreditDetail": [
								{
									"Ver": "PaymentCreditDetail_1.0.0",
									"CreditorData": {
										"Ver": "CreditorData_1.0.0",
										"OrgData": {
											"Ver": "OrganizationData_1.0.0",
											"NameList": [
												{
													"Ver": "OrganizationName_1.0.0",
													"Name": "BILLER NEW FOR DIGITAL"
				                }
				              ]
										},
										"CreditorAcctNumWithDebtor": "1000037",
										"Reference": {
											"Ver": "Identifier_1.0.0",
											"Id": ""
										}
									}
				        }
				      ],
							"DebtorData": {
								"Ver": "DebtorData_1.0.0",
								"DebtorAcctNumWithCreditor": "TestSamar"
							}
				    }
				  ]
				},
				PrimaryVerData: {
					Ver: "USSDVerificationData_1.0.0",
				},
				CredScope: {
					CDE: "TRANSACTION"
				},
				DomainAddr: [{
					Ver: "DomainAddress_1.0.0",
					Type: {
						CDE: "DomainType1"
					},

					PlatformId: "Retail",
					AppId: "Bancs"

				}]
			}]
		}
	};

	inputJson = JSON.stringify(inputJson);

	alert("login stringify js ==>" + inputJson);
	$('#inputJSON').html(inputJson);
	alert(inputJson);
	$.ajax({
		url: "http://01hw577052:8080/BancsDigital-Middleware-1.4.0-mbl-1.0.0/module",
		type: "POST",
		dataType: "text",
		contentType: "application/json",
		data: inputJson,
		success: function (data, textStatus, jqXHR) {
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
		error: function (jqXHR, textStatus, errorThrown) {
			alert("Error ::: " + jqXHR.responseText + "\n1:" + textStatus + "\n2:" + errorThrown);
			$('#outputJSON').html(jqXHR);
			$('#top').html('');
			eval("var json=" + jqXHR);
			$('#top').json2html(convert('json', json, 'open'),
				transforms.object);
			regEvents();
		}
	});
}

function oNceOffBillerScheduledUSSD() {
	var inputJson = {
		Ver: "MessageEnvelope_1.0.0",
		Resource: "resrc",
		AppVer: "1.0.0",
		EnvVer: "MessageEnvelope_1.0.0",
		APIVer: "apiVer",
		MsgId: "1",
		SessionId: "sessionId",
		ProxyApp: {
			Ver: "ProxyApp_1.0.0",
			UserAgent: "useragent"
		},
		Locale: {
			CDE: 'EN_US'
		},
		SecToken: {
			Ver: "SecurityToken_1.0.0",
			isArchetype: true,
			Token: []
		},
		Payload: {
			Ver: "MessagePayload_1.0.0",
			Category: ["min"],
			Operation: "VLD",
			EmptyMsg: false,
			DataEntity: [{
				Ver: "TransactionUserCredentials_1.0.0",
				VerId: {
					Ver: "StringVerificationIdentifier_1.0.0",
					UserId: {
						Ver: "UserIdentifier_1.0.0",
						ObjId: "RetailUser",
						UserStatus: {
							CDE: "ACTIVE"
						}
					},
					//NAME : "3170630565905872108"
					//NAME : "8503362580371225688"
					NAME: "10000615"
				},

				TrnctnPayld:{
					"Ver": "MessagePayload_1.0.0",
					"Operation": "CRT",
					"EmptyMsg": "false",
					"DataEntity": [
						{
							"Ver": "RecurQuickBillPayment_1.0.0",
							"PymntInstrn": {
								"Ver": "PaymentInstruction_1.0.0",
								"FromAcc": {
									"Ver": "DemandDepositAccount_1.0.0",
									"Type": {
										"CDE": "DEP"
									},
									"AccountId": {
										"Ver": "AccountIdentifier_1.0.0",
										"AcctIds": {
											"BANKACCOUNTID": "1000001865"
										}
									}
								},
								"Memo": "Scheduled payment"
							},
							"Amt": {
								"Ver": "CurrencyAmount_1.0.0",
								"Amt": {
									"Ver": "Amount_1.0.0",
									"Value": "100"
								},
								"CurrCode": {
									"CDE": "ZAR",
									"DESC": "ZAR"
								}
							},
							"CreditDetail": [
								{
									"Ver": "PaymentCreditDetail_1.0.0",
									"CreditorData": {
										"Ver": "CreditorData_1.0.0",
										"OrgData": {
											"Ver": "OrganizationData_1.0.0",
											"NameList": [
												{
													"Ver": "OrganizationName_1.0.0",
													"Name": "AFRICAN BANK CREDIT CARD"
				                }
				              ]
										},
										"CreditorAcctNumWithDebtor": "1000040",
										"Reference": {
											"Ver": "Identifier_1.0.0",
											"Id": "abc123"
										}
									}
				        }
				      ],
							"DebtorData": {
								"Ver": "DebtorData_1.0.0",
								"DebtorAcctNumWithCreditor": "TestSamar"
							},
							"RecModel": {
								"Ver": "RecurModel_1.0.0",
								"RecRuleList": [
									{
										"Ver": "CountLimitedRecurRule_1.0.0",
										"Occur": 1,
										"StartDay": {
											"Ver": "Date_1.0.0",
											"Year": 2015,
											"Month": 11,
											"Day": 15
										}
				          },
									{
										"Ver": "DateLimitedRecurRule_1.0.0",
										"StartDay": {
											"Ver": "Date_1.0.0",
											"Year": 2015,
											"Month": 11,
											"Day": 15
										},
										"EndCondtn": {
											"CDE": "TILLSELECTEDDATE",
											"DESC": ""
										},
										"EndDt": {
											"Ver": "Date_1.0.0",
											"Year": 2015,
											"Month": 11,
											"Day": 16
										}
				          }
				        ]
							}
				    }
				  ]
				} ,
				PrimaryVerData: {
					Ver: "USSDVerificationData_1.0.0",
				},
				CredScope: {
					CDE: "TRANSACTION"
				},
				DomainAddr: [{
					Ver: "DomainAddress_1.0.0",
					Type: {
						CDE: "DomainType1"
					},

					PlatformId: "Retail",
					AppId: "Bancs"

				}]
			}]
		}
	};

	inputJson = JSON.stringify(inputJson);

	alert("login stringify js ==>" + inputJson);
	$('#inputJSON').html(inputJson);
	alert(inputJson);
	$.ajax({
		url: "http://01hw577052:8080/BancsDigital-Middleware-1.4.0-mbl-1.0.0/module",
		type: "POST",
		dataType: "text",
		contentType: "application/json",
		data: inputJson,
		success: function (data, textStatus, jqXHR) {
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
		error: function (jqXHR, textStatus, errorThrown) {
			alert("Error ::: " + jqXHR.responseText + "\n1:" + textStatus + "\n2:" + errorThrown);
			$('#outputJSON').html(jqXHR);
			$('#top').html('');
			eval("var json=" + jqXHR);
			$('#top').json2html(convert('json', json, 'open'),
				transforms.object);
			regEvents();
		}
	});
}

function oNceOffBeneficaryScheduledUSSD() {
	var inputJson = {
		Ver: "MessageEnvelope_1.0.0",
		Resource: "resrc",
		AppVer: "1.0.0",
		EnvVer: "MessageEnvelope_1.0.0",
		APIVer: "apiVer",
		MsgId: "1",
		SessionId: "sessionId",
		ProxyApp: {
			Ver: "ProxyApp_1.0.0",
			UserAgent: "useragent"
		},
		Locale: {
			CDE: 'EN_US'
		},
		SecToken: {
			Ver: "SecurityToken_1.0.0",
			isArchetype: true,
			Token: []
		},
		Payload: {
			Ver: "MessagePayload_1.0.0",
			Category: ["min"],
			Operation: "VLD",
			EmptyMsg: false,
			DataEntity: [{
				Ver: "TransactionUserCredentials_1.0.0",
				VerId: {
					Ver: "StringVerificationIdentifier_1.0.0",
					UserId: {
						Ver: "UserIdentifier_1.0.0",
						ObjId: "RetailUser",
						UserStatus: {
							CDE: "ACTIVE"
						}
					},
					//NAME : "3170630565905872108"
					//NAME : "8503362580371225688"
					NAME: "10000615"
				},

				TrnctnPayld:{
					"Ver": "MessagePayload_1.0.0",
					"Operation": "CRT",
					"EmptyMsg": false,
					"DataEntity": [
						{
							"Ver": "AccountPayeeRecurTransfer_1.0.0",
							"Remarks": "NotifTestf Test",
							"Amount": {
								"Ver": "CurrencyAmount_1.0.0",
								"Amt": {
									"Ver": "Amount_1.0.0",
									"Value": "1500.00"
								},
								"CurrCode": {
									"CDE": "ZAR",
									"DESC": "ZAR"
								}
							},
							"FromAcct": {
								"Ver": "DemandDepositAccount_1.0.0",
								"Type": {
									"CDE": "DEP"
								},
								"AccountId": {
									"Ver": "AccountIdentifier_1.0.0",
									"Id": {
										"Ver": "Identifier_1.0.0",
										"Id": "1"
									},
									"AcctIds": {
										"BANKACCOUNTID": "1000000990"
									}
								}
							},
							"notificationModelList": [
								{
									"Ver": "NotificationModel_1.0.0",
									"notificationEvent": {
										"Ver": "NotificationEvent_1.0.0",
										"state": {
											"CDE": "DEFAULT"
										}
									},
									"notificationModeList": [
										{
											"Ver": "NotificationModeData_1.0.0",
											"mode": {
												"CDE": "1"
											},
											"sequenceNo": 1,
											"contactId": {
												"Ver": "Identifier_1.0.0",
												"Id": "1234"
											}
				            }
				          ],
									"notificationRecipient": {
										"Ver": "NotificationRecipient_1.0.0",
										"contactList": [
											{
												"Ver": "EmailContact_1.0.0",
												"ContactId": {
													"Ver": "Identifier_1.0.0",
													"Id": "1234"
												},
												"Email": {
													"Ver": "Email_1.0.0",
													"Address": "wieru@wei.com"
												}
				              }
				            ]
									}
				        },
								{
									"Ver": "NotificationModel_1.0.0",
									"notificationEvent": {
										"Ver": "NotificationEvent_1.0.0",
										"state": {
											"CDE": "DEFAULT"
										}
									},
									"notificationModeList": [
										{
											"Ver": "NotificationModeData_1.0.0",
											"mode": {
												"CDE": "1"
											},
											"sequenceNo": 1,
											"contactId": {
												"Ver": "Identifier_1.0.0",
												"Id": "1235"
											}
				            }
				          ],
									"notificationRecipient": {
										"Ver": "NotificationRecipient_1.0.0",
										"contactList": [
											{
												"Ver": "EmailContact_1.0.0",
												"ContactId": {
													"Ver": "Identifier_1.0.0",
													"Id": "1235"
												},
												"Email": {
													"Ver": "Email_1.0.0",
													"Address": "abc@sdf.com"
												}
				              }
				            ]
									}
				        }
				      ],
							"RecurModel": {
								"Ver": "RecurModel_1.0.0",
								"RecRuleList": [
									{
										"Ver": "CountLimitedRecurRule_1.0.0",
										"Occur": 1,
										"StartDay": {
											"Ver": "Date_1.0.0",
											"Year": 2015,
											"Month": 12,
											"Day": 5
										}
				          },
									{
										"Ver": "DateLimitedRecurRule_1.0.0",
										"StartDay": {
											"Ver": "Date_1.0.0",
											"Year": 2015,
											"Month": 12,
											"Day": 5
										},
										"EndCondtn": {
											"CDE": "TILLSELECTEDDATE",
											"DESC": ""
										},
										"EndDt": {
											"Ver": "Date_1.0.0",
											"Year": 2015,
											"Month": 12,
											"Day": 6
										}
				          }
				        ]
							},
							"Payee": {
								"Ver": "AccountPayee_1.0.0",
								"PersonData": {
									"Ver": "PersonData_1.0.0",
									"NameList": [
										{
											"Ver": "PersonName_1.0.0",
											"PreferredName": "deeksha"
				            }
				          ]
								},
								"PayeeId": {
									"Ver": "PayeeIdentifier_1.0.0",
									"Id": "",
									"NickName": "deekshaREF123"
								},
								"ToAccount": [
									{
										"Ver": "DemandDepositAccount_1.0.0",
										"Branch": {
											"Ver": "FILocation_1.0.0",
											"FiLocatnId": {
												"Ver": "FILocationIdentifier_1.0.0",
												"FiLocationId": {
													"BSB": "420037"
												}
											},
											"FiIdent": {
												"Ver": "FIIdentifier_1.0.0",
												"Id": {
													"Ver": "Identifier_1.0.0",
													"Id": "ABSA BANK"
												}
											},
											"Name": "ATTIE LOUW ST. VANDERBIJLPARK",
											"Address": {
												"Ver": "Address_1.0.0",
												"AddrLine1": "PRESIDENT KRUGER STREET",
												"AddrLine2": "VANDERBIJLPARK",
												"PostalCode": "748"
											}
										},
										"AccountId": {
											"Ver": "AccountIdentifier_1.0.0",
											"Id": {
												"Ver": "Identifier_1.0.0",
												"Id": "381237"
											},
											"AcctIds": {
												"BANKACCOUNTID": "1000001016"
											}
										}
				          }
				        ]
							}
				    }
				  ]
				} ,
				PrimaryVerData: {
					Ver: "USSDVerificationData_1.0.0",
				},
				CredScope: {
					CDE: "TRANSACTION"
				},
				DomainAddr: [{
					Ver: "DomainAddress_1.0.0",
					Type: {
						CDE: "DomainType1"
					},

					PlatformId: "Retail",
					AppId: "Bancs"

				}]
			}]
		}
	};

	inputJson = JSON.stringify(inputJson);

	alert("login stringify js ==>" + inputJson);
	$('#inputJSON').html(inputJson);
	alert(inputJson);
	$.ajax({
		url: "http://01hw577052:8080/BancsDigital-Middleware-1.4.0-mbl-1.0.0/module",
		type: "POST",
		dataType: "text",
		contentType: "application/json",
		data: inputJson,
		success: function (data, textStatus, jqXHR) {
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
		error: function (jqXHR, textStatus, errorThrown) {
			alert("Error ::: " + jqXHR.responseText + "\n1:" + textStatus + "\n2:" + errorThrown);
			$('#outputJSON').html(jqXHR);
			$('#top').html('');
			eval("var json=" + jqXHR);
			$('#top').json2html(convert('json', json, 'open'),
				transforms.object);
			regEvents();
		}
	});
}
