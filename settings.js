/*******************************************************************************
 * Copyright (c) 2014 IBM Corp.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * and Eclipse Distribution License v1.0 which accompany this distribution.
 *
 * The Eclipse Public License is available at
 *   http://www.eclipse.org/legal/epl-v10.html
 * and the Eclipse Distribution License is available at
 *   http://www.eclipse.org/org/documents/edl-v10.php.
 *
 * Contributors:
 *   Bryan Boyd - Initial implementation 
 *******************************************************************************/

var config = {
	iot_deviceType: "vehicle",     // replace with your deviceType
	iot_deviceOrg: "kcd5jj",       // replace with your IoT Foundation organization
	iot_deviceSet: [               // replace with your registered device(s)
		{ deviceId: "CAR", token: "N-REFf_5bv8XO)q@Ke" },   
		{ deviceId: "CAR2", token: ")3oK(RQU7_sE&Ua_xz" },
		{ deviceId: "CAR3", token: "nftg&?uw0BzUMFoXb?" },
		{ deviceId: "CAR4", token: "gbDgHTgTSC3_3hCbq2" },
		{ deviceId: "CAR5", token: "T4Ba-Eu+t-dDrOosBK" },
		{ deviceId: "CAR6", token: "L+n)0TaR(76y2KY7R?" },
		{ deviceId: "CAR7", token: "hL*6()x9j)W&Di!1ai" },
		{ deviceId: "CAR8", token: "1AKftPQ6Vj!?WK5oot" },
		{ deviceId: "CAR9", token: "_CNdiv1FJp@PC1Cr@&" },
		{ deviceId: "CAR10", token: "PBsfrn91PJC4-*F@Dl" }
	],
	iot_apiKey: "a-kcd5jj-efw5gjwjgw",    // replace with the key for a generated API token
	iot_apiToken: "+mGzb99y(FhK+Ls_ab",  // replace with the generated API token

	// these topics will be used by Geospatial Analytics
	notifyTopic: "iot-2/type/api/id/geospatial/cmd/geoAlert/fmt/json",
	inputTopic: "iot-2/type/vehicle/id/+/evt/telemetry/fmt/json",
};

try {
	module.exports = config;
} catch (e) { window.config = config; }
