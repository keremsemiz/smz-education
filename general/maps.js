// Shared project map rendering for the home and About pages.
        // Wait for Leaflet to load before initializing maps
        function initializeMaps() {
                    if (typeof L === 'undefined') return;
                    if (document.querySelector('.leaflet-container')) return;

                    var schools = [
                {
                    "name": "SMZ Education Headquarters",
                    "imageUrl": "/images/favicon.webp",
                    "address": "Saargemünder Straße 28, Berlin, Germany",
                    "description": "smzedu.com",
                    "contact": "Phone: +49 152 24407028",
                    "region": "europe",
                    "location": [
                    52.450822,
                    13.273018
                    ],
                    "plusCode": null,
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "Original SMZ project data",
                    "locationSourceUrl": null,
                    "mapQuery": "SMZ Education Headquarters, Saargemünder Straße 28, Berlin, Germany",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=SMZ%20Education%20Headquarters%2C%20Saargem%C3%BCnder%20Stra%C3%9Fe%2028%2C%20Berlin%2C%20Germany",
                    "locationStatus": "provided_unverified",
                    "fullPlusCode": null,
                    "isApproximate": true,
                    "locationArea": "Berlin (owner-provided site point)",
                    "locationNote": "Unchanged from original SMZ data; not independently checked.",
                    "mapDisplayLabel": "Berlin (owner-provided site point)",
                    "pinPurpose": "school_reference"
                },
                {
                    "name": "École Bilingue Shiloh Académie",
                    "imageUrl": "/images/favicon.webp",
                    "address": "F2C2+GCH, Gandigal-Est, Senegal",
                    "description": "shilohacademie.com",
                    "contact": "Phone: +221 33 935 5619",
                    "region": "west-africa",
                    "location": [
                    14.4713125,
                    -16.9988906
                    ],
                    "plusCode": "F2C2+GCH",
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "SMZ Shiloh Académie website / project entry",
                    "locationSourceUrl": "https://shilohacademie.smzedu.com/home/",
                    "mapQuery": "École Bilingue Shiloh Académie, F2C2+GCH, Gandigal-Est, Senegal",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=%C3%89cole%20Bilingue%20Shiloh%20Acad%C3%A9mie%2C%20F2C2%2BGCH%2C%20Gandigal-Est%2C%20Senegal",
                    "fullPlusCode": "7C65F2C2+GCH",
                    "locationStatus": "plus_code_center",
                    "isApproximate": true,
                    "locationArea": "F2C2+GCH, Gandigal-Est, Senegal",
                    "locationNote": "Published school-specific Plus Code; marker is cell centre, not guaranteed school gate.",
                    "mapDisplayLabel": "F2C2+GCH, Gandigal-Est, Senegal",
                    "pinPurpose": "school_reference"
                },
                {
                    "name": "École EVA Dakar",
                    "imageUrl": "/images/favicon.webp",
                    "address": "93 Rue Amadou Assane Ndoye, Dakar, Senegal (school confirmation needed)",
                    "description": "evaschooldakar.smzedu.com",
                    "contact": "Phone: +221 17 265 8892",
                    "region": "west-africa",
                    "location": [
                    14.669508,
                    -17.431205
                    ],
                    "plusCode": null,
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "Original SMZ dataset only | approximate display pin based on best available locality",
                    "locationSourceUrl": null,
                    "mapQuery": "École EVA Dakar, 93 Rue Amadou Assane Ndoye, Dakar, Senegal (school confirmation needed)",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=%C3%89cole%20EVA%20Dakar%2C%2093%20Rue%20Amadou%20Assane%20Ndoye%2C%20Dakar%2C%20Senegal",
                    "locationStatus": "street_or_city_proxy",
                    "fullPlusCode": null,
                    "isApproximate": true,
                    "locationArea": "Rue Amadou Assane Ndoye / central Dakar",
                    "locationNote": "Dakar street vicinity; original owner-supplied coordinate used as a visual proxy. The school premises at that address have not been checked.",
                    "mapDisplayLabel": "Approximate area · Rue Amadou Assane Ndoye / central Dakar",
                    "pinPurpose": "network_visualization_only"
                },
                {
                    "name": "St. K Michael's School",
                    "imageUrl": "/images/favicon.webp",
                    "address": "220–221 Nii Okaiman Avenue, JP7X+75, Accra, Ghana",
                    "description": "st-k-michaels-school.smzedu.com",
                    "contact": "Phone: +233 53 741 2573",
                    "region": "ghana",
                    "location": [
                    5.6131875,
                    -0.2520625
                    ],
                    "plusCode": "JP7X+75",
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "School-published contact / business listing",
                    "locationSourceUrl": "https://www.google.com/maps/search/?api=1&query=St+K+Michaels+School+Nii+Okaiman+Accra",
                    "mapQuery": "St. K Michael's School, 220–221 Nii Okaiman Avenue, JP7X+75, Accra, Ghana",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=St.%20K%20Michael%27s%20School%2C%20220%E2%80%93221%20Nii%20Okaiman%20Avenue%2C%20JP7X%2B75%2C%20Accra%2C%20Ghana",
                    "fullPlusCode": "6CQXJP7X+75",
                    "locationStatus": "plus_code_center",
                    "isApproximate": true,
                    "locationArea": "220–221 Nii Okaiman Avenue, JP7X+75, Accra, Ghana",
                    "locationNote": "Published school-specific Plus Code; marker is cell centre, not guaranteed school gate.",
                    "mapDisplayLabel": "220–221 Nii Okaiman Avenue, JP7X+75, Accra, Ghana",
                    "pinPurpose": "school_reference"
                },
                {
                    "name": "Rosda School",
                    "imageUrl": "/images/favicon.webp",
                    "address": "Kaashimi Street, Dansoman, GPJR+XG, Accra, Ghana",
                    "description": "rosdaschool.smzedu.com",
                    "contact": "Phone: +233 24 853 0578",
                    "region": "ghana",
                    "location": [
                    5.53235,
                    -0.25868
                    ],
                    "plusCode": "GPJR+XG",
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "School contact page and OpenStreetMap mapped location",
                    "locationSourceUrl": "https://rosdaschool.smzedu.com/contact/",
                    "mapQuery": "Rosda School, Kaashimi Street, Dansoman, GPJR+XG, Accra, Ghana",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Rosda%20School%2C%20Kaashimi%20Street%2C%20Dansoman%2C%20GPJR%2BXG%2C%20Accra%2C%20Ghana",
                    "locationStatus": "osm_mapped_point",
                    "fullPlusCode": "6CQXGPJR+XG",
                    "isApproximate": false,
                    "locationArea": "Kaashimi Street, Dansoman, GPJR+XG, Accra, Ghana",
                    "locationNote": "School-specific mapped position from prior audit; see source.",
                    "mapDisplayLabel": "Kaashimi Street, Dansoman, GPJR+XG, Accra, Ghana",
                    "pinPurpose": "school_reference"
                },
                {
                    "name": "Winterville Rangers Montessori School",
                    "imageUrl": "/images/favicon.webp",
                    "address": "House No. 773/3, 38 Appiah Street, Mamprobi, Accra, Ghana",
                    "description": "winterville-rangers-montessori.smzedu.com",
                    "contact": "Phone: +233 54 218 5093",
                    "region": "ghana",
                    "location": [
                    5.531508,
                    -0.24604
                    ],
                    "plusCode": null,
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "School website and school-specific business listing | approximate display pin based on best available locality",
                    "locationSourceUrl": "https://winterville-rangers-montessori.smzedu.com/home/",
                    "mapQuery": "Winterville Rangers Montessori School, House No. 773/3, 38 Appiah Street, Mamprobi, Accra, Ghana",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Winterville%20Rangers%20Montessori%20School%2C%20House%20No.%20773%2F3%2C%2038%20Appiah%20Street%2C%20Mamprobi%2C%20Accra%2C%20Ghana",
                    "locationStatus": "neighborhood_proxy",
                    "fullPlusCode": null,
                    "isApproximate": true,
                    "locationArea": "Mamprobi, Accra",
                    "locationNote": "School address cites Appiah Street, Mamprobi; approximate point in Mamprobi, not the school gate.",
                    "mapDisplayLabel": "Approximate area · Mamprobi, Accra",
                    "pinPurpose": "network_visualization_only"
                },
                {
                    "name": "Greater Accra Regional Daycare Centres Association (GARDCCA)",
                    "imageUrl": "/images/favicon.webp",
                    "address": "P.O. Box 3133, Mamprobi, Greater Accra, Ghana (postal address only)",
                    "description": "gardcca.smzedu.com",
                    "contact": "Phone: +233 30 232 1768",
                    "region": "ghana",
                    "location": [
                    5.5396,
                    -0.2504
                    ],
                    "plusCode": null,
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "Association website | approximate display pin based on best available locality",
                    "locationSourceUrl": "https://gardcca.smzedu.com/",
                    "mapQuery": "Greater Accra Regional Daycare Centres Association (GARDCCA), P.O. Box 3133, Mamprobi, Greater Accra, Ghana (postal address only)",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Greater%20Accra%20Regional%20Daycare%20Centres%20Association%20%28GARDCCA%29%2C%20P.O.%20Box%203133%2C%20Mamprobi%2C%20Greater%20Accra%2C%20Ghana%20%28postal%20address%20only%29",
                    "locationStatus": "postal_area_proxy",
                    "fullPlusCode": null,
                    "isApproximate": true,
                    "locationArea": "Mamprobi, Accra",
                    "locationNote": "Association publishes a Mamprobi P.O. Box, not an office street address; location represents its postal area only.",
                    "mapDisplayLabel": "Approximate area · Mamprobi, Accra",
                    "pinPurpose": "network_visualization_only"
                },
                {
                    "name": "Decent Learning Academy",
                    "imageUrl": "/images/favicon.webp",
                    "address": "35 Djanie Ashie Road, Accra, Ghana (unconfirmed)",
                    "description": "School website under development",
                    "contact": "Phone: not independently confirmed",
                    "region": "ghana",
                    "location": [
                    5.639,
                    -0.147
                    ],
                    "plusCode": null,
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "Original SMZ dataset | approximate display pin based on best available locality",
                    "locationSourceUrl": null,
                    "mapQuery": "Decent Learning Academy, 35 Djanie Ashie Road, Accra, Ghana (unconfirmed)",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Decent%20Learning%20Academy%2C%2035%20Djanie%20Ashie%20Road%2C%20Accra%2C%20Ghana%20%28unconfirmed%29",
                    "locationStatus": "street_or_city_proxy",
                    "fullPlusCode": null,
                    "isApproximate": true,
                    "locationArea": "Djanie Ashie Road / East Legon, Accra",
                    "locationNote": "Original SMZ address cites Djanie Ashie Road; third-party records put that street in East Legon. School address has not been independently established.",
                    "mapDisplayLabel": "Approximate area · Djanie Ashie Road / East Legon, Accra",
                    "pinPurpose": "network_visualization_only"
                },
                {
                    "name": "Legacyfield Montessori School",
                    "imageUrl": "/images/favicon.webp",
                    "address": "JPWP+G53, Taifa / South Ofankor, Greater Accra, Ghana",
                    "description": "School website under development",
                    "contact": "Phone: +233 20 926 6680",
                    "region": "ghana",
                    "location": [
                    5.6462625,
                    -0.2645781
                    ],
                    "plusCode": "JPWP+G53",
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "School-specific business map listing and SMZ/GARDCCA contact",
                    "locationSourceUrl": null,
                    "mapQuery": "Legacyfield Montessori School, JPWP+G53, Taifa / South Ofankor, Greater Accra, Ghana",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Legacyfield%20Montessori%20School%2C%20JPWP%2BG53%2C%20Taifa%20%2F%20South%20Ofankor%2C%20Greater%20Accra%2C%20Ghana",
                    "fullPlusCode": "6CQXJPWP+G53",
                    "locationStatus": "plus_code_center",
                    "isApproximate": true,
                    "locationArea": "JPWP+G53, Taifa / South Ofankor, Greater Accra, Ghana",
                    "locationNote": "Published school-specific Plus Code; marker is cell centre, not guaranteed school gate.",
                    "mapDisplayLabel": "JPWP+G53, Taifa / South Ofankor, Greater Accra, Ghana",
                    "pinPurpose": "school_reference"
                },
                {
                    "name": "Greenland International School",
                    "imageUrl": "/images/favicon.webp",
                    "address": "Adentan Municipal, Greater Accra, Ghana (campus address pending)",
                    "description": "School website under development",
                    "contact": "Phone: not independently confirmed",
                    "region": "ghana",
                    "location": [
                    5.7025,
                    -0.1688
                    ],
                    "plusCode": null,
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "Greater Accra school-register and municipal listings | approximate display pin based on best available locality",
                    "locationSourceUrl": null,
                    "mapQuery": "Greenland International School, Adentan Municipal, Greater Accra, Ghana (campus address pending)",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Greenland%20International%20School%2C%20Adentan%20Municipal%2C%20Greater%20Accra%2C%20Ghana%20%28campus%20address%20pending%29",
                    "locationStatus": "municipality_proxy",
                    "fullPlusCode": null,
                    "isApproximate": true,
                    "locationArea": "Adentan Municipal, Greater Accra",
                    "locationNote": "The academy has an Adentan Municipal association in the location audit, without a published school gate coordinate.",
                    "mapDisplayLabel": "Approximate area · Adentan Municipal, Greater Accra",
                    "pinPurpose": "network_visualization_only"
                },
                {
                    "name": "God's Field Montessori School",
                    "imageUrl": "/images/favicon.webp",
                    "address": "PRFJ+4FC, Adenta Municipality, Greater Accra, Ghana",
                    "description": "School website under development",
                    "contact": "Phone: not independently confirmed",
                    "region": "ghana",
                    "location": [
                    5.7228125,
                    -0.1688594
                    ],
                    "plusCode": "PRFJ+4FC",
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "Exact-name Montessori school business map listing",
                    "locationSourceUrl": null,
                    "mapQuery": "God's Field Montessori School, PRFJ+4FC, Adenta Municipality, Greater Accra, Ghana",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=God%27s%20Field%20Montessori%20School%2C%20PRFJ%2B4FC%2C%20Adenta%20Municipality%2C%20Greater%20Accra%2C%20Ghana",
                    "fullPlusCode": "6CQXPRFJ+4FC",
                    "locationStatus": "plus_code_center",
                    "isApproximate": true,
                    "locationArea": "PRFJ+4FC, Adenta Municipality, Greater Accra, Ghana",
                    "locationNote": "Published school-specific Plus Code; marker is cell centre, not guaranteed school gate.",
                    "mapDisplayLabel": "PRFJ+4FC, Adenta Municipality, Greater Accra, Ghana",
                    "pinPurpose": "school_reference"
                },
                {
                    "name": "Zamsa Academy",
                    "imageUrl": "/images/favicon.webp",
                    "address": "MRRH+92F, Madina / Adenta West, Greater Accra, Ghana",
                    "description": "School website under development",
                    "contact": "Phone: +233 24 460 8418",
                    "region": "ghana",
                    "location": [
                    5.6909375,
                    -0.1724531
                    ],
                    "plusCode": "MRRH+92F",
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "Exact-name school map listing / Ministry-linked register",
                    "locationSourceUrl": null,
                    "mapQuery": "Zamsa Academy, MRRH+92F, Madina / Adenta West, Greater Accra, Ghana",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Zamsa%20Academy%2C%20MRRH%2B92F%2C%20Madina%20%2F%20Adenta%20West%2C%20Greater%20Accra%2C%20Ghana",
                    "fullPlusCode": "6CQXMRRH+92F",
                    "locationStatus": "plus_code_center",
                    "isApproximate": true,
                    "locationArea": "MRRH+92F, Madina / Adenta West, Greater Accra, Ghana",
                    "locationNote": "Published school-specific Plus Code; marker is cell centre, not guaranteed school gate.",
                    "mapDisplayLabel": "MRRH+92F, Madina / Adenta West, Greater Accra, Ghana",
                    "pinPurpose": "school_reference"
                },
                {
                    "name": "Divine Overcomers Academy",
                    "imageUrl": "/images/favicon.webp",
                    "address": "GP9F+HG, Accra, Ghana (Ablekuma West area)",
                    "description": "School website under development",
                    "contact": "Phone: +233 57 594 1117",
                    "region": "ghana",
                    "location": [
                    5.5189375,
                    -0.2761875
                    ],
                    "plusCode": "GP9F+HG",
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "Exact school business map listing / school register",
                    "locationSourceUrl": null,
                    "mapQuery": "Divine Overcomers Academy, GP9F+HG, Accra, Ghana (Ablekuma West area)",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Divine%20Overcomers%20Academy%2C%20GP9F%2BHG%2C%20Accra%2C%20Ghana%20%28Ablekuma%20West%20area%29",
                    "fullPlusCode": "6CQXGP9F+HG",
                    "locationStatus": "plus_code_center",
                    "isApproximate": true,
                    "locationArea": "GP9F+HG, Accra, Ghana (Ablekuma West area)",
                    "locationNote": "Published school-specific Plus Code; marker is cell centre, not guaranteed school gate.",
                    "mapDisplayLabel": "GP9F+HG, Accra, Ghana (Ablekuma West area)",
                    "pinPurpose": "school_reference"
                },
                {
                    "name": "Jokese Montessori School",
                    "imageUrl": "/images/favicon.webp",
                    "address": "Greater Accra, Ghana (exact address not verified)",
                    "description": "School website under development",
                    "contact": "Phone: not independently confirmed",
                    "region": "ghana",
                    "location": [
                    5.565,
                    -0.221
                    ],
                    "plusCode": null,
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "SMZ partner listing | approximate display pin based on best available locality",
                    "locationSourceUrl": null,
                    "mapQuery": "Jokese Montessori School, Greater Accra, Ghana (exact address not verified)",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Jokese%20Montessori%20School%2C%20Greater%20Accra%2C%20Ghana%20%28exact%20address%20not%20verified%29",
                    "locationStatus": "city_proxy",
                    "fullPlusCode": null,
                    "isApproximate": true,
                    "locationArea": "Accra, Greater Accra",
                    "locationNote": "Only Accra/Greater Accra established; a central city marker for network visualization, not a neighborhood claim.",
                    "mapDisplayLabel": "Approximate area · Accra, Greater Accra",
                    "pinPurpose": "network_visualization_only"
                },
                {
                    "name": "Vision Redeemers Academy",
                    "imageUrl": "/images/favicon.webp",
                    "address": "Mpoase / Dansoman and Wiaboman, Greater Accra, Ghana (reported school locations)",
                    "description": "School website under development",
                    "contact": "Phone: not independently confirmed",
                    "region": "ghana",
                    "location": [
                    5.5188,
                    -0.2833
                    ],
                    "plusCode": null,
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "Ghanaian news coverage and Ministry-linked register | approximate display pin based on best available locality",
                    "locationSourceUrl": "https://www.graphic.com.gh/",
                    "mapQuery": "Vision Redeemers Academy, Mpoase / Dansoman and Wiaboman, Greater Accra, Ghana (reported school locations)",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Vision%20Redeemers%20Academy%2C%20Mpoase%20%2F%20Dansoman%20and%20Wiaboman%2C%20Greater%20Accra%2C%20Ghana%20%28reported%20school%20locations%29",
                    "locationStatus": "neighborhood_proxy",
                    "fullPlusCode": null,
                    "isApproximate": true,
                    "locationArea": "Mpoase / Glefe, Accra",
                    "locationNote": "Mpoase is one of the reported school communities; Wiaboman is also associated. Pin represents Mpoase only, not a verified campus.",
                    "mapDisplayLabel": "Approximate area · Mpoase / Glefe, Accra",
                    "pinPurpose": "network_visualization_only"
                },
                {
                    "name": "Golden Spring School",
                    "imageUrl": "/images/favicon.webp",
                    "address": "GMPR+8V, Tetegu, Accra, Ghana",
                    "description": "School website under development",
                    "contact": "Phone: +233 59 375 2265",
                    "region": "ghana",
                    "location": [
                    5.5358125,
                    -0.3078125
                    ],
                    "plusCode": "GMPR+8V",
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "Exact school business map listing and Rotary/CitiNews reporting",
                    "locationSourceUrl": null,
                    "mapQuery": "Golden Spring School, GMPR+8V, Tetegu, Accra, Ghana",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Golden%20Spring%20School%2C%20GMPR%2B8V%2C%20Tetegu%2C%20Accra%2C%20Ghana",
                    "fullPlusCode": "6CQXGMPR+8V",
                    "locationStatus": "plus_code_center",
                    "isApproximate": true,
                    "locationArea": "GMPR+8V, Tetegu, Accra, Ghana",
                    "locationNote": "Published school-specific Plus Code; marker is cell centre, not guaranteed school gate.",
                    "mapDisplayLabel": "GMPR+8V, Tetegu, Accra, Ghana",
                    "pinPurpose": "school_reference"
                },
                {
                    "name": "Peace Home Education Centre",
                    "imageUrl": "/images/favicon.webp",
                    "address": "8th, Omane Mensah Street, Dansoman, Accra, Ghana",
                    "description": "School website under development",
                    "contact": "Phone: +233 24 387 1514",
                    "region": "ghana",
                    "location": [
                    5.5412,
                    -0.263
                    ],
                    "plusCode": null,
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "Exact school map listing / Ministry-linked register | approximate display pin based on best available locality",
                    "locationSourceUrl": null,
                    "mapQuery": "Peace Home Education Centre, 8th, Omane Mensah Street, Dansoman, Accra, Ghana",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Peace%20Home%20Education%20Centre%2C%208th%2C%20Omane%20Mensah%20Street%2C%20Dansoman%2C%20Accra%2C%20Ghana",
                    "locationStatus": "neighborhood_proxy",
                    "fullPlusCode": null,
                    "isApproximate": true,
                    "locationArea": "Dansoman / Omane Mensah Street area",
                    "locationNote": "Published map address mentions Omane Mensah Street in the Dansoman area; representative neighborhood point.",
                    "mapDisplayLabel": "Approximate area · Dansoman / Omane Mensah Street area",
                    "pinPurpose": "network_visualization_only"
                },
                {
                    "name": "Golden Grace Mercedes School",
                    "imageUrl": "/images/favicon.webp",
                    "address": "Mpetemiaku Street, Accra, Ghana",
                    "description": "School website under development",
                    "contact": "Phone: +233 20 845 9033",
                    "region": "ghana",
                    "location": [
                    5.5615,
                    -0.218
                    ],
                    "plusCode": null,
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "Exact school business listing | approximate display pin based on best available locality",
                    "locationSourceUrl": null,
                    "mapQuery": "Golden Grace Mercedes School, Mpetemiaku Street, Accra, Ghana",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Golden%20Grace%20Mercedes%20School%2C%20Mpetemiaku%20Street%2C%20Accra%2C%20Ghana",
                    "locationStatus": "city_proxy",
                    "fullPlusCode": null,
                    "isApproximate": true,
                    "locationArea": "Accra, Ghana — Mpetemiaku Street unlocated",
                    "locationNote": "Mpetemiaku Street is published, but the exact street could not be reliably geocoded. Accra central visualization proxy.",
                    "mapDisplayLabel": "Approximate area · Accra, Ghana — Mpetemiaku Street unlocated",
                    "pinPurpose": "network_visualization_only"
                },
                {
                    "name": "Shalom Revival Mission School",
                    "imageUrl": "/images/favicon.webp",
                    "address": "16 Ablan Mamon Street, Accra, Ghana",
                    "description": "School website under development",
                    "contact": "Phone: not independently confirmed",
                    "region": "ghana",
                    "location": [
                    5.559,
                    -0.2295
                    ],
                    "plusCode": null,
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "Exact school Google Business profile (school-owned description) | approximate display pin based on best available locality",
                    "locationSourceUrl": "https://www.google.com/maps/search/?api=1&query=Shalom+Revival+Mission+School+16+Ablan+Mamon+Street",
                    "mapQuery": "Shalom Revival Mission School, 16 Ablan Mamon Street, Accra, Ghana",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Shalom%20Revival%20Mission%20School%2C%2016%20Ablan%20Mamon%20Street%2C%20Accra%2C%20Ghana",
                    "locationStatus": "city_proxy",
                    "fullPlusCode": null,
                    "isApproximate": true,
                    "locationArea": "Accra, Ghana — Ablan Mamon Street unlocated",
                    "locationNote": "School business listing cites 16 Ablan Mamon Street without a proven coordinate; this is an Accra city marker only.",
                    "mapDisplayLabel": "Approximate area · Accra, Ghana — Ablan Mamon Street unlocated",
                    "pinPurpose": "network_visualization_only"
                },
                {
                    "name": "Divine Extra Tuition Academy",
                    "imageUrl": "/images/favicon.webp",
                    "address": "Ama Badua Link, Korle Gonno / Mamprobi, Accra, Ghana; GhanaPost GPS GA-322-0846",
                    "description": "divine-extra-tuition-academy.smzedu.com",
                    "contact": "Phone: +233 24 412 4102 / +233 24 252 1068 / +233 50 209 3247",
                    "region": "ghana",
                    "location": [
                    5.5383,
                    -0.235
                    ],
                    "plusCode": null,
                    "ghanaPostGPS": "GA-322-0846",
                    "email": null,
                    "locationSource": "School official website | approximate display pin based on best available locality",
                    "locationSourceUrl": "https://divine-extra-tuition-academy.smzedu.com/",
                    "mapQuery": "Divine Extra Tuition Academy, Ama Badua Link, Korle Gonno / Mamprobi, Accra, Ghana; GhanaPost GPS GA-322-0846",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Divine%20Extra%20Tuition%20Academy%2C%20Ama%20Badua%20Link%2C%20Korle%20Gonno%20%2F%20Mamprobi%2C%20Accra%2C%20Ghana%3B%20GhanaPost%20GPS%20GA-322-0846",
                    "locationStatus": "neighborhood_proxy",
                    "fullPlusCode": null,
                    "isApproximate": true,
                    "locationArea": "Korle Gonno / Ama Badua Link, Accra",
                    "locationNote": "School-published location Korle Gonno, Ama Badua Link; proxy within that community.",
                    "mapDisplayLabel": "Approximate area · Korle Gonno / Ama Badua Link, Accra",
                    "pinPurpose": "network_visualization_only"
                },
                {
                    "name": "Marina Nursery School & Kindergarten",
                    "imageUrl": "/images/favicon.webp",
                    "address": "GQQH+286, Ring Road West, Accra, Ghana (other listing: 202 Glover Addo Road)",
                    "description": "School website under development",
                    "contact": "Phone: +233 24 430 4599",
                    "region": "ghana",
                    "location": [
                    5.5375375,
                    -0.2217344
                    ],
                    "plusCode": "GQQH+286",
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "Exact school map/directory listings and SMZ/GARDCCA phone",
                    "locationSourceUrl": null,
                    "mapQuery": "Marina Nursery School & Kindergarten, GQQH+286, Ring Road West, Accra, Ghana (other listing: 202 Glover Addo Road)",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Marina%20Nursery%20School%20%26%20Kindergarten%2C%20GQQH%2B286%2C%20Ring%20Road%20West%2C%20Accra%2C%20Ghana%20%28other%20listing%3A%20202%20Glover%20Addo%20Road%29",
                    "fullPlusCode": "6CQXGQQH+286",
                    "locationStatus": "plus_code_center",
                    "isApproximate": true,
                    "locationArea": "GQQH+286, Ring Road West, Accra, Ghana (other listing: 202 Glover Addo Road)",
                    "locationNote": "Published school-specific Plus Code; marker is cell centre, not guaranteed school gate.",
                    "mapDisplayLabel": "GQQH+286, Ring Road West, Accra, Ghana (other listing: 202 Glover Addo Road)",
                    "pinPurpose": "school_reference"
                },
                {
                    "name": "Great Stars Montessori School",
                    "imageUrl": "/images/favicon.webp",
                    "address": "GPQM+MW2, Guggisberg Road, Accra, Ghana",
                    "description": "School website under development",
                    "contact": "Phone: +233 24 225 0493",
                    "region": "ghana",
                    "location": [
                    5.5391375,
                    -0.2652344
                    ],
                    "plusCode": "GPQM+MW2",
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "Accra Street Journal exact-school listing and school business map",
                    "locationSourceUrl": "https://accrastreetjournal.com/business-directory-engine/great-stars-montessori-school/",
                    "mapQuery": "Great Stars Montessori School, GPQM+MW2, Guggisberg Road, Accra, Ghana",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Great%20Stars%20Montessori%20School%2C%20GPQM%2BMW2%2C%20Guggisberg%20Road%2C%20Accra%2C%20Ghana",
                    "fullPlusCode": "6CQXGPQM+MW2",
                    "locationStatus": "plus_code_center",
                    "isApproximate": true,
                    "locationArea": "GPQM+MW2, Guggisberg Road, Accra, Ghana",
                    "locationNote": "Published school-specific Plus Code; marker is cell centre, not guaranteed school gate.",
                    "mapDisplayLabel": "GPQM+MW2, Guggisberg Road, Accra, Ghana",
                    "pinPurpose": "school_reference"
                },
                {
                    "name": "Young Christian International School",
                    "imageUrl": "/images/favicon.webp",
                    "address": "Ablekuma West Municipal, Greater Accra, Ghana (street address pending)",
                    "description": "School website under development",
                    "contact": "Phone: not independently confirmed",
                    "region": "ghana",
                    "location": [
                    5.5327,
                    -0.2752
                    ],
                    "plusCode": null,
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "Ministry-linked school register | approximate display pin based on best available locality",
                    "locationSourceUrl": "https://schoolregistryghana.com/schools/young-christian-international-school-ablekuma-west-municipal",
                    "mapQuery": "Young Christian International School, Ablekuma West Municipal, Greater Accra, Ghana (street address pending)",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Young%20Christian%20International%20School%2C%20Ablekuma%20West%20Municipal%2C%20Greater%20Accra%2C%20Ghana%20%28street%20address%20pending%29",
                    "locationStatus": "municipality_proxy",
                    "fullPlusCode": null,
                    "isApproximate": true,
                    "locationArea": "Ablekuma West Municipal, Greater Accra",
                    "locationNote": "Ministry-linked record confirms municipality but withholds an unreliable pin. Representative point in Ablekuma West.",
                    "mapDisplayLabel": "Approximate area · Ablekuma West Municipal, Greater Accra",
                    "pinPurpose": "network_visualization_only"
                },
                {
                    "name": "Glorious Prince Academy",
                    "imageUrl": "/images/favicon.webp",
                    "address": "GQG3+XJ4, Kojo Armah Road, Jamestown area, Accra, Ghana",
                    "description": "School website under development",
                    "contact": "Phone: +233 54 709 5116",
                    "region": "ghana",
                    "location": [
                    5.5273875,
                    -0.2459219
                    ],
                    "plusCode": "GQG3+XJ4",
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "Exact school business map listing; community literacy reporting",
                    "locationSourceUrl": null,
                    "mapQuery": "Glorious Prince Academy, GQG3+XJ4, Kojo Armah Road, Jamestown area, Accra, Ghana",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Glorious%20Prince%20Academy%2C%20GQG3%2BXJ4%2C%20Kojo%20Armah%20Road%2C%20Jamestown%20area%2C%20Accra%2C%20Ghana",
                    "fullPlusCode": "6CQXGQG3+XJ4",
                    "locationStatus": "plus_code_center",
                    "isApproximate": true,
                    "locationArea": "GQG3+XJ4, Kojo Armah Road, Jamestown area, Accra, Ghana",
                    "locationNote": "Published school-specific Plus Code; marker is cell centre, not guaranteed school gate.",
                    "mapDisplayLabel": "GQG3+XJ4, Kojo Armah Road, Jamestown area, Accra, Ghana",
                    "pinPurpose": "school_reference"
                },
                {
                    "name": "Theobeth Grandee School",
                    "imageUrl": "/images/favicon.webp",
                    "address": "GQP2+VR3, Accra, Ghana",
                    "description": "School website under development",
                    "contact": "Phone: +233 26 618 6327",
                    "region": "ghana",
                    "location": [
                    5.5371375,
                    -0.2479531
                    ],
                    "plusCode": "GQP2+VR3",
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "Exact-name school map listing and 2023 National Teaching Council placement record",
                    "locationSourceUrl": "https://ntc.gov.gh/wp-content/uploads/2023/npttraining/ODOGONO.pdf",
                    "mapQuery": "Theobeth Grandee School, GQP2+VR3, Accra, Ghana",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Theobeth%20Grandee%20School%2C%20GQP2%2BVR3%2C%20Accra%2C%20Ghana",
                    "fullPlusCode": "6CQXGQP2+VR3",
                    "locationStatus": "plus_code_center",
                    "isApproximate": true,
                    "locationArea": "GQP2+VR3, Accra, Ghana",
                    "locationNote": "Published school-specific Plus Code; marker is cell centre, not guaranteed school gate.",
                    "mapDisplayLabel": "GQP2+VR3, Accra, Ghana",
                    "pinPurpose": "school_reference"
                },
                {
                    "name": "Natbek School",
                    "imageUrl": "/images/favicon.webp",
                    "address": "GPPR+PG3, Titus Glover Street, Dansoman, Accra, Ghana",
                    "description": "natbekschool.smzedu.com",
                    "contact": "Phone: +233 24 272 2254 / +233 24 789 7454",
                    "region": "ghana",
                    "location": [
                    5.5367625,
                    -0.2587031
                    ],
                    "plusCode": "GPPR+PG3",
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "School official website and exact school map listing",
                    "locationSourceUrl": "https://natbekschool.smzedu.com/",
                    "mapQuery": "Natbek School, GPPR+PG3, Titus Glover Street, Dansoman, Accra, Ghana",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Natbek%20School%2C%20GPPR%2BPG3%2C%20Titus%20Glover%20Street%2C%20Dansoman%2C%20Accra%2C%20Ghana",
                    "fullPlusCode": "6CQXGPPR+PG3",
                    "locationStatus": "plus_code_center",
                    "isApproximate": true,
                    "locationArea": "GPPR+PG3, Titus Glover Street, Dansoman, Accra, Ghana",
                    "locationNote": "Published school-specific Plus Code; marker is cell centre, not guaranteed school gate.",
                    "mapDisplayLabel": "GPPR+PG3, Titus Glover Street, Dansoman, Accra, Ghana",
                    "pinPurpose": "school_reference"
                },
                {
                    "name": "Virgins Preparatory School",
                    "imageUrl": "/images/favicon.webp",
                    "address": "Ashiedu Keteke / Adotey Street vicinity, Accra, Ghana",
                    "description": "School website under development",
                    "contact": "Phone: +233 20 911 6827",
                    "region": "ghana",
                    "location": [
                    5.5371027,
                    -0.2371002
                    ],
                    "plusCode": null,
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "School-specific mapping directory coordinates plus separate business address",
                    "locationSourceUrl": null,
                    "mapQuery": "Virgins Preparatory School, Ashiedu Keteke / Adotey Street vicinity, Accra, Ghana",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Virgins%20Preparatory%20School%2C%20Ashiedu%20Keteke%20%2F%20Adotey%20Street%20vicinity%2C%20Accra%2C%20Ghana",
                    "locationStatus": "directory_mapped_point",
                    "fullPlusCode": null,
                    "isApproximate": false,
                    "locationArea": "Ashiedu Keteke / Adotey Street vicinity, Accra, Ghana",
                    "locationNote": "School-specific mapped position from prior audit; see source.",
                    "mapDisplayLabel": "Ashiedu Keteke / Adotey Street vicinity, Accra, Ghana",
                    "pinPurpose": "school_reference"
                },
                {
                    "name": "Zion Academy",
                    "imageUrl": "/images/favicon.webp",
                    "address": "GQM2+G5J, Accra, Ghana",
                    "description": "School website under development",
                    "contact": "Phone: +233 24 350 3941",
                    "region": "ghana",
                    "location": [
                    5.5338375,
                    -0.2496094
                    ],
                    "plusCode": "GQM2+G5J",
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "Ministry-linked register and exact school business map",
                    "locationSourceUrl": null,
                    "mapQuery": "Zion Academy, GQM2+G5J, Accra, Ghana",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Zion%20Academy%2C%20GQM2%2BG5J%2C%20Accra%2C%20Ghana",
                    "fullPlusCode": "6CQXGQM2+G5J",
                    "locationStatus": "plus_code_center",
                    "isApproximate": true,
                    "locationArea": "GQM2+G5J, Accra, Ghana",
                    "locationNote": "Published school-specific Plus Code; marker is cell centre, not guaranteed school gate.",
                    "mapDisplayLabel": "GQM2+G5J, Accra, Ghana",
                    "pinPurpose": "school_reference"
                },
                {
                    "name": "Arose Academy",
                    "imageUrl": "/images/favicon.webp",
                    "address": "Accra, Greater Accra, Ghana (exact school location not confirmed)",
                    "description": "School website under development",
                    "contact": "Phone: not independently confirmed",
                    "region": "ghana",
                    "location": [
                    5.5637,
                    -0.2135
                    ],
                    "plusCode": null,
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "SMZ partnership listing only | approximate display pin based on best available locality",
                    "locationSourceUrl": null,
                    "mapQuery": "Arose Academy, Accra, Greater Accra, Ghana (exact school location not confirmed)",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Arose%20Academy%2C%20Accra%2C%20Greater%20Accra%2C%20Ghana%20%28exact%20school%20location%20not%20confirmed%29",
                    "locationStatus": "city_proxy",
                    "fullPlusCode": null,
                    "isApproximate": true,
                    "locationArea": "Accra, Greater Accra",
                    "locationNote": "No exact locality independently established; Accra-only visualization marker.",
                    "mapDisplayLabel": "Approximate area · Accra, Greater Accra",
                    "pinPurpose": "network_visualization_only"
                },
                {
                    "name": "Prime Will Academy",
                    "imageUrl": "/images/favicon.webp",
                    "address": "Greater Accra, Ghana (exact school location not confirmed)",
                    "description": "School website under development",
                    "contact": "Phone: +233 24 612 1981",
                    "region": "ghana",
                    "location": [
                    5.5674,
                    -0.209
                    ],
                    "plusCode": null,
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "SMZ partner name and WhatsApp/GARDCCA telephone | approximate display pin based on best available locality",
                    "locationSourceUrl": null,
                    "mapQuery": "Prime Will Academy, Greater Accra, Ghana (exact school location not confirmed)",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Prime%20Will%20Academy%2C%20Greater%20Accra%2C%20Ghana%20%28exact%20school%20location%20not%20confirmed%29",
                    "locationStatus": "city_proxy",
                    "fullPlusCode": null,
                    "isApproximate": true,
                    "locationArea": "Accra, Greater Accra",
                    "locationNote": "No exact locality independently established; Accra-only visualization marker.",
                    "mapDisplayLabel": "Approximate area · Accra, Greater Accra",
                    "pinPurpose": "network_visualization_only"
                },
                {
                    "name": "Victory Kids Complex",
                    "imageUrl": "/images/favicon.webp",
                    "address": "Greater Accra, Ghana (exact school location not confirmed)",
                    "description": "School website under development",
                    "contact": "Phone: +233 24 631 2146",
                    "region": "ghana",
                    "location": [
                    5.5606,
                    -0.2079
                    ],
                    "plusCode": null,
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "SMZ partner name and WhatsApp/GARDCCA telephone | approximate display pin based on best available locality",
                    "locationSourceUrl": null,
                    "mapQuery": "Victory Kids Complex, Greater Accra, Ghana (exact school location not confirmed)",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Victory%20Kids%20Complex%2C%20Greater%20Accra%2C%20Ghana%20%28exact%20school%20location%20not%20confirmed%29",
                    "locationStatus": "city_proxy",
                    "fullPlusCode": null,
                    "isApproximate": true,
                    "locationArea": "Accra, Greater Accra",
                    "locationNote": "No exact locality independently established; Accra-only visualization marker.",
                    "mapDisplayLabel": "Approximate area · Accra, Greater Accra",
                    "pinPurpose": "network_visualization_only"
                },
                {
                    "name": "Nole Royals International School",
                    "imageUrl": "/images/favicon.webp",
                    "address": "Greater Accra, Ghana (exact school location not confirmed)",
                    "description": "School website under development",
                    "contact": "Phone: +233 26 488 0287",
                    "region": "ghana",
                    "location": [
                    5.5695,
                    -0.2148
                    ],
                    "plusCode": null,
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "SMZ partner listing and WhatsApp/GARDCCA contact | approximate display pin based on best available locality",
                    "locationSourceUrl": null,
                    "mapQuery": "Nole Royals International School, Greater Accra, Ghana (exact school location not confirmed)",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Nole%20Royals%20International%20School%2C%20Greater%20Accra%2C%20Ghana%20%28exact%20school%20location%20not%20confirmed%29",
                    "locationStatus": "city_proxy",
                    "fullPlusCode": null,
                    "isApproximate": true,
                    "locationArea": "Accra, Greater Accra",
                    "locationNote": "No exact locality independently established; Accra-only visualization marker.",
                    "mapDisplayLabel": "Approximate area · Accra, Greater Accra",
                    "pinPurpose": "network_visualization_only"
                },
                {
                    "name": "Apostolic Church Academy",
                    "imageUrl": "/images/favicon.webp",
                    "address": "Korle Wonko, Accra Metropolitan, Ghana",
                    "description": "School website under development",
                    "contact": "Phone: +233 24 606 5467",
                    "region": "ghana",
                    "location": [
                    5.5487,
                    -0.2168
                    ],
                    "plusCode": null,
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "Ministry-linked school register, school Facebook and WhatsApp/GARDCCA | approximate display pin based on best available locality",
                    "locationSourceUrl": "https://schoolregistryghana.com/schools/apostolic-church-academy-ama",
                    "mapQuery": "Apostolic Church Academy, Korle Wonko, Accra Metropolitan, Ghana",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Apostolic%20Church%20Academy%2C%20Korle%20Wonko%2C%20Accra%20Metropolitan%2C%20Ghana",
                    "locationStatus": "neighborhood_proxy",
                    "fullPlusCode": null,
                    "isApproximate": true,
                    "locationArea": "Korle Wonko / central Accra",
                    "locationNote": "SchoolRegistry places the school in Korle Wonko. This is a representative neighborhood position.",
                    "mapDisplayLabel": "Approximate area · Korle Wonko / central Accra",
                    "pinPurpose": "network_visualization_only"
                },
                {
                    "name": "Joeracle Preparatory School",
                    "imageUrl": "/images/favicon.webp",
                    "address": "Ablekuma West Municipal, Greater Accra, Ghana (precise location pending)",
                    "description": "School website under development",
                    "contact": "Phone: not independently confirmed",
                    "region": "ghana",
                    "location": [
                    5.5256,
                    -0.2737
                    ],
                    "plusCode": null,
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "Ghana National Teaching Council 2023 placement document | approximate display pin based on best available locality",
                    "locationSourceUrl": "https://ntc.gov.gh/wp-content/uploads/2023/npttraining/ODOGONO.pdf",
                    "mapQuery": "Joeracle Preparatory School, Ablekuma West Municipal, Greater Accra, Ghana (precise location pending)",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Joeracle%20Preparatory%20School%2C%20Ablekuma%20West%20Municipal%2C%20Greater%20Accra%2C%20Ghana%20%28precise%20location%20pending%29",
                    "locationStatus": "municipality_proxy",
                    "fullPlusCode": null,
                    "isApproximate": true,
                    "locationArea": "Ablekuma West Municipal, Greater Accra",
                    "locationNote": "2023 National Teaching Council lists the school in Ablekuma West; district-level visual proxy, not a campus pin.",
                    "mapDisplayLabel": "Approximate area · Ablekuma West Municipal, Greater Accra",
                    "pinPurpose": "network_visualization_only"
                },
                {
                    "name": "St Thomas G4 International School",
                    "imageUrl": "/images/favicon.webp",
                    "address": "146 Nii Ayi Bonte Street, GPCF+XF9, Glefe, Accra, Ghana",
                    "description": "School website under development",
                    "contact": "Phone: +233 54 056 9945",
                    "region": "ghana",
                    "location": [
                    5.5224125,
                    -0.2762656
                    ],
                    "plusCode": "GPCF+XF9",
                    "ghanaPostGPS": "GS-0516-4727",
                    "email": null,
                    "locationSource": "Exact school business map listing",
                    "locationSourceUrl": null,
                    "mapQuery": "St Thomas G4 International School, 146 Nii Ayi Bonte Street, GPCF+XF9, Glefe, Accra, Ghana",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=St%20Thomas%20G4%20International%20School%2C%20146%20Nii%20Ayi%20Bonte%20Street%2C%20GPCF%2BXF9%2C%20Glefe%2C%20Accra%2C%20Ghana",
                    "fullPlusCode": "6CQXGPCF+XF9",
                    "locationStatus": "plus_code_center",
                    "isApproximate": true,
                    "locationArea": "146 Nii Ayi Bonte Street, GPCF+XF9, Glefe, Accra, Ghana",
                    "locationNote": "Published school-specific Plus Code; marker is cell centre, not guaranteed school gate.",
                    "mapDisplayLabel": "146 Nii Ayi Bonte Street, GPCF+XF9, Glefe, Accra, Ghana",
                    "pinPurpose": "school_reference"
                },
                {
                    "name": "Lizzy Montessori",
                    "imageUrl": "/images/favicon.webp",
                    "address": "Accra, Greater Accra, Ghana (precise location not verified)",
                    "description": "School website under development",
                    "contact": "Phone: not independently confirmed",
                    "region": "ghana",
                    "location": [
                    5.5717,
                    -0.2119
                    ],
                    "plusCode": null,
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "SMZ project listing | approximate display pin based on best available locality",
                    "locationSourceUrl": null,
                    "mapQuery": "Lizzy Montessori, Accra, Greater Accra, Ghana (precise location not verified)",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Lizzy%20Montessori%2C%20Accra%2C%20Greater%20Accra%2C%20Ghana%20%28precise%20location%20not%20verified%29",
                    "locationStatus": "city_proxy",
                    "fullPlusCode": null,
                    "isApproximate": true,
                    "locationArea": "Accra, Greater Accra",
                    "locationNote": "No exact locality independently established; Accra-only visualization marker.",
                    "mapDisplayLabel": "Approximate area · Accra, Greater Accra",
                    "pinPurpose": "network_visualization_only"
                },
                {
                    "name": "Daniel Vision School",
                    "imageUrl": "/images/favicon.webp",
                    "address": "Accra Metropolitan, Greater Accra, Ghana (precise location pending)",
                    "description": "School website under development",
                    "contact": "Phone: not independently confirmed",
                    "region": "ghana",
                    "location": [
                    5.5555,
                    -0.2124
                    ],
                    "plusCode": null,
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "Ministry-linked Greater Accra school-register listing | approximate display pin based on best available locality",
                    "locationSourceUrl": null,
                    "mapQuery": "Daniel Vision School, Accra Metropolitan, Greater Accra, Ghana (precise location pending)",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Daniel%20Vision%20School%2C%20Accra%20Metropolitan%2C%20Greater%20Accra%2C%20Ghana%20%28precise%20location%20pending%29",
                    "locationStatus": "municipality_proxy",
                    "fullPlusCode": null,
                    "isApproximate": true,
                    "locationArea": "Accra Metropolitan, Greater Accra",
                    "locationNote": "Ministry-linked municipal association supports Accra Metropolitan, not a street location.",
                    "mapDisplayLabel": "Approximate area · Accra Metropolitan, Greater Accra",
                    "pinPurpose": "network_visualization_only"
                },
                {
                    "name": "SamJay Kiddie College",
                    "imageUrl": "/images/favicon.webp",
                    "address": "JPP3+P9J, Ablekuma Fan-Milk, Greater Accra, Ghana",
                    "description": "School website under development",
                    "contact": "Phone: +233 24 485 7093",
                    "region": "ghana",
                    "location": [
                    5.6368375,
                    -0.2966094
                    ],
                    "plusCode": "JPP3+P9J",
                    "ghanaPostGPS": "GC-064-9366",
                    "email": null,
                    "locationSource": "Exact school/business map listing and school social listing",
                    "locationSourceUrl": null,
                    "mapQuery": "SamJay Kiddie College, JPP3+P9J, Ablekuma Fan-Milk, Greater Accra, Ghana",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=SamJay%20Kiddie%20College%2C%20JPP3%2BP9J%2C%20Ablekuma%20Fan-Milk%2C%20Greater%20Accra%2C%20Ghana",
                    "fullPlusCode": "6CQXJPP3+P9J",
                    "locationStatus": "plus_code_center",
                    "isApproximate": true,
                    "locationArea": "JPP3+P9J, Ablekuma Fan-Milk, Greater Accra, Ghana",
                    "locationNote": "Published school-specific Plus Code; marker is cell centre, not guaranteed school gate.",
                    "mapDisplayLabel": "JPP3+P9J, Ablekuma Fan-Milk, Greater Accra, Ghana",
                    "pinPurpose": "school_reference"
                },
                {
                    "name": "Echoes of Royal Daisy School",
                    "imageUrl": "/images/favicon.webp",
                    "address": "Ofankor / Ga North Municipal, Greater Accra, Ghana (campus location uncertain)",
                    "description": "School website under development",
                    "contact": "Phone: +233 24 486 5118",
                    "region": "ghana",
                    "location": [
                    5.6545,
                    -0.2717
                    ],
                    "plusCode": null,
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "Greater Accra private school-register listing and WhatsApp/GARDCCA | approximate display pin based on best available locality",
                    "locationSourceUrl": null,
                    "mapQuery": "Echoes of Royal Daisy School, Ofankor / Ga North Municipal, Greater Accra, Ghana (campus location uncertain)",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Echoes%20of%20Royal%20Daisy%20School%2C%20Ofankor%20%2F%20Ga%20North%20Municipal%2C%20Greater%20Accra%2C%20Ghana%20%28campus%20location%20uncertain%29",
                    "locationStatus": "neighborhood_proxy",
                    "fullPlusCode": null,
                    "isApproximate": true,
                    "locationArea": "Ofankor / Achimota area, Greater Accra",
                    "locationNote": "SchoolRegistry lists Ofankor. Marker represents that general area; not an entrance.",
                    "mapDisplayLabel": "Approximate area · Ofankor / Achimota area, Greater Accra",
                    "pinPurpose": "network_visualization_only"
                },
                {
                    "name": "Ahobrase Academy",
                    "imageUrl": "/images/favicon.webp",
                    "address": "GPCP+VF3, Dansoman Beach Road area, Accra, Ghana (Facebook: Nii-Tettey Lane 13)",
                    "description": "School website under development",
                    "contact": "Phone: +233 59 690 4244 / +233 20 840 0782 / +233 27 763 5807",
                    "region": "ghana",
                    "location": [
                    5.5221375,
                    -0.2638281
                    ],
                    "plusCode": "GPCP+VF3",
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "Exact academy business map listing and school Facebook details",
                    "locationSourceUrl": null,
                    "mapQuery": "Ahobrase Academy, GPCP+VF3, Dansoman Beach Road area, Accra, Ghana (Facebook: Nii-Tettey Lane 13)",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Ahobrase%20Academy%2C%20GPCP%2BVF3%2C%20Dansoman%20Beach%20Road%20area%2C%20Accra%2C%20Ghana%20%28Facebook%3A%20Nii-Tettey%20Lane%2013%29",
                    "fullPlusCode": "6CQXGPCP+VF3",
                    "locationStatus": "plus_code_center",
                    "isApproximate": true,
                    "locationArea": "GPCP+VF3, Dansoman Beach Road area, Accra, Ghana (Facebook: Nii-Tettey Lane 13)",
                    "locationNote": "Published school-specific Plus Code; marker is cell centre, not guaranteed school gate.",
                    "mapDisplayLabel": "GPCP+VF3, Dansoman Beach Road area, Accra, Ghana (Facebook: Nii-Tettey Lane 13)",
                    "pinPurpose": "school_reference"
                },
                {
                    "name": "Royal Cribs Community School",
                    "imageUrl": "/images/favicon.webp",
                    "address": "Kakatsofa Street, Accra, Ghana",
                    "description": "School website under development",
                    "contact": "Phone: +233 55 442 6105 / +233 55 080 2471",
                    "region": "ghana",
                    "location": [
                    5.5835,
                    -0.25
                    ],
                    "plusCode": null,
                    "ghanaPostGPS": null,
                    "email": null,
                    "locationSource": "Royal Cribs & Community School business listing and SMZ/GARDCCA phone | approximate display pin based on best available locality",
                    "locationSourceUrl": null,
                    "mapQuery": "Royal Cribs Community School, Kakatsofa Street, Accra, Ghana",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Royal%20Cribs%20Community%20School%2C%20Kakatsofa%20Street%2C%20Accra%2C%20Ghana",
                    "locationStatus": "street_or_city_proxy",
                    "fullPlusCode": null,
                    "isApproximate": true,
                    "locationArea": "Kakatsofa Street / Kaneshie North Industrial Area, Accra",
                    "locationNote": "School listing cites Kakatsofa Street; independent street references place Kakatsofa Street in North Industrial Area, Kaneshie. School building not pinned.",
                    "mapDisplayLabel": "Approximate area · Kakatsofa Street / Kaneshie North Industrial Area, Accra",
                    "pinPurpose": "network_visualization_only"
                },
                {
                    "name": "Liddle Lyceum Early Childhood Development Center",
                    "imageUrl": "/images/favicon.webp",
                    "address": "C4, Elmina Street, 12A Lakeside Estates, Greater Accra, Ghana",
                    "description": "School website under development",
                    "contact": "Phone: +233 54 477 0719 / +233 57 888 9966",
                    "region": "ghana",
                    "location": [
                    5.704,
                    -0.103
                    ],
                    "plusCode": null,
                    "ghanaPostGPS": null,
                    "email": "liddlelyceum@gmail.com",
                    "locationSource": "Liddle Lyceum & Riders business listing and WhatsApp/GARDCCA | approximate display pin based on best available locality",
                    "locationSourceUrl": null,
                    "mapQuery": "Liddle Lyceum Early Childhood Development Center, C4, Elmina Street, 12A Lakeside Estates, Greater Accra, Ghana",
                    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Liddle%20Lyceum%20Early%20Childhood%20Development%20Center%2C%20C4%2C%20Elmina%20Street%2C%2012A%20Lakeside%20Estates%2C%20Greater%20Accra%2C%20Ghana",
                    "locationStatus": "neighborhood_proxy",
                    "fullPlusCode": null,
                    "isApproximate": true,
                    "locationArea": "Lakeside Estates, Greater Accra",
                    "locationNote": "School listing cites Elmina Street, Lakeside Estate 12A; approximate Lakeside-area marker, not the school entrance.",
                    "mapDisplayLabel": "Approximate area · Lakeside Estates, Greater Accra",
                    "pinPurpose": "network_visualization_only"
                }
                ];


            // Filter schools by region
            var westAfricaSchools = schools.filter(school => school.region === "west-africa");
            var ghanaSchools = schools.filter(school => school.region === "ghana");

            // Update counts
            document.getElementById('west-africa-count').textContent = westAfricaSchools.length;
            document.getElementById('ghana-count').textContent = ghanaSchools.length;
            var totalSchoolsCount = document.getElementById('total-schools-count');
            if (totalSchoolsCount) {
                totalSchoolsCount.textContent = westAfricaSchools.length + ghanaSchools.length;
            }

            // Create custom icon function
            function createCustomIcon() {
                return L.divIcon({
                    className: 'custom-icon',
                    html: '<img src="/images/favicon.webp" alt="School Logo">',
                    iconSize: [38, 38],
                    iconAnchor: [19, 19],
                    popupAnchor: [0, -19]
                });
            }

            // Create popup content function
            function createPopupContent(school) {
                return `
                <div class="popup-content">
                    <h3>${school.name}</h3>
                    <p><strong>Address:</strong> ${school.address}</p>
                </div>
            `;
            }

            // Initialize West Africa Map
            var mapWestAfrica = L.map('map-west-africa', {
                center: [14.0, -16.5],
                zoom: 7,
                attributionControl: false
            });

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'Map data &copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(mapWestAfrica);

            // Add West Africa markers
            westAfricaSchools.forEach(function (school) {
                L.marker(school.location, { icon: createCustomIcon() })
                    .bindPopup(createPopupContent(school), {
                        autoPan: true,
                        autoPanPadding: [50, 50]
                    })
                    .addTo(mapWestAfrica);
            });

            // Initialize Ghana Map
            var mapGhana = L.map('map-ghana', {
                center: [5.60, -0.21],
                zoom: 11,
                attributionControl: false
            });

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'Map data &copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(mapGhana);

            // Add Ghana markers
            ghanaSchools.forEach(function (school) {
                L.marker(school.location, { icon: createCustomIcon() })
                    .bindPopup(createPopupContent(school), {
                        autoPan: true,
                        autoPanPadding: [50, 50]
                    })
                    .addTo(mapGhana);
            });

            // Delay invalidateSize to fix map rendering issues
            setTimeout(function () {
                mapWestAfrica.invalidateSize();
                mapGhana.invalidateSize();
            }, 500);

            // Ensure proper map rendering on window resize
            window.addEventListener('resize', function () {
                mapWestAfrica.invalidateSize();
                mapGhana.invalidateSize();
            });
        }

        // Initialize after Leaflet, the map containers, and page styles are ready.
        window.addEventListener('load', initializeMaps, { once: true });
