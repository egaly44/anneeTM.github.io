var wms_layers = [];

var format_Bassin_Charente_0 = new ol.format.GeoJSON();
var features_Bassin_Charente_0 = format_Bassin_Charente_0.readFeatures(json_Bassin_Charente_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bassin_Charente_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bassin_Charente_0.addFeatures(features_Bassin_Charente_0);
var lyr_Bassin_Charente_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bassin_Charente_0, 
                style: style_Bassin_Charente_0,
                popuplayertitle: "Bassin_Charente",
                interactive: false,
                title: '<img src="styles/legend/Bassin_Charente_0.png" /> Bassin_Charente'
            });
var format_Annee_TM_1 = new ol.format.GeoJSON();
var features_Annee_TM_1 = format_Annee_TM_1.readFeatures(json_Annee_TM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Annee_TM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Annee_TM_1.addFeatures(features_Annee_TM_1);
var lyr_Annee_TM_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Annee_TM_1, 
                style: style_Annee_TM_1,
                popuplayertitle: "Annee_TM",
                interactive: false,
    title: 'Annee_TM<br />\
    <img src="styles/legend/Annee_TM_1_0.png" /> -0,1 - 0<br />\
    <img src="styles/legend/Annee_TM_1_1.png" /> 0 - 0,1<br />\
    <img src="styles/legend/Annee_TM_1_2.png" /> 0,1 - 0,2<br />\
    <img src="styles/legend/Annee_TM_1_3.png" /> 0,2 - 0,3<br />\
    <img src="styles/legend/Annee_TM_1_4.png" /> 0,3 - 0,4<br />\
    <img src="styles/legend/Annee_TM_1_5.png" /> 0,4 - 0,5<br />\
    <img src="styles/legend/Annee_TM_1_6.png" /> 0.5 - 0.6<br />\
    <img src="styles/legend/Annee_TM_1_7.png" /> 0.6 - 0.7<br />\
    <img src="styles/legend/Annee_TM_1_8.png" /> 0.7 - 0.8<br />\
    <img src="styles/legend/Annee_TM_1_9.png" /> 0.8 - 0.9<br />'
        });
var format_Tendances_TM_2 = new ol.format.GeoJSON();
var features_Tendances_TM_2 = format_Tendances_TM_2.readFeatures(json_Tendances_TM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tendances_TM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tendances_TM_2.addFeatures(features_Tendances_TM_2);
var lyr_Tendances_TM_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tendances_TM_2, 
                style: style_Tendances_TM_2,
                popuplayertitle: "Tendances_TM",
                interactive: true,
                title: '<img src="styles/legend/Tendances_TM_2.png" /> Tendances_TM'
            });
var format_Coursdeau_3 = new ol.format.GeoJSON();
var features_Coursdeau_3 = format_Coursdeau_3.readFeatures(json_Coursdeau_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coursdeau_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coursdeau_3.addFeatures(features_Coursdeau_3);
var lyr_Coursdeau_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coursdeau_3, 
                style: style_Coursdeau_3,
                popuplayertitle: "Cours d eau",
                interactive: false,
                title: '<img src="styles/legend/Coursdeau_3.png" /> Cours d eau'
            });
var format_BassinversantCharente_4 = new ol.format.GeoJSON();
var features_BassinversantCharente_4 = format_BassinversantCharente_4.readFeatures(json_BassinversantCharente_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BassinversantCharente_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BassinversantCharente_4.addFeatures(features_BassinversantCharente_4);
var lyr_BassinversantCharente_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BassinversantCharente_4, 
                style: style_BassinversantCharente_4,
                popuplayertitle: "Bassin versant Charente",
                interactive: false,
                title: '<img src="styles/legend/BassinversantCharente_4.png" /> Bassin versant Charente'
            });
var format_Villes_5 = new ol.format.GeoJSON();
var features_Villes_5 = format_Villes_5.readFeatures(json_Villes_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Villes_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Villes_5.addFeatures(features_Villes_5);
var lyr_Villes_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Villes_5, 
                style: style_Villes_5,
                popuplayertitle: "Villes",
                interactive: false,
                title: '<img src="styles/legend/Villes_5.png" /> Villes'
            });

lyr_Bassin_Charente_0.setVisible(true);lyr_Annee_TM_1.setVisible(true);lyr_Tendances_TM_2.setVisible(true);lyr_Coursdeau_3.setVisible(true);lyr_BassinversantCharente_4.setVisible(true);lyr_Villes_5.setVisible(true);
var layersList = [lyr_Bassin_Charente_0,lyr_Annee_TM_1,lyr_Tendances_TM_2,lyr_Coursdeau_3,lyr_BassinversantCharente_4,lyr_Villes_5];
lyr_Bassin_Charente_0.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'NomComGeog': 'NomComGeog', 'Surface': 'Surface', });
lyr_Annee_TM_1.set('fieldAliases', {'VALUE': 'VALUE', 'Decennie': 'Decennie', });
lyr_Tendances_TM_2.set('fieldAliases', {'NUM_POSTE': 'NUM_POSTE', 'NOM_USUEL': 'NOM_USUEL', 'LAT': 'LAT', 'LON': 'LON', 'ALTI': 'ALTI', 'Station': 'Station', 'Annee Pent': 'Annee Pent', 'Annee Ordo': 'Annee Ordo', 'Hiver Pent': 'Hiver Pent', 'Hiver Ordo': 'Hiver Ordo', 'Printemps': 'Printemps', 'Printemp_1': 'Printemp_1', '�t� Pe': '�t� Pe', '�t� Or': '�t� Or', 'Automne Pe': 'Automne Pe', 'Automne Or': 'Automne Or', 'Annee': 'Annee', });
lyr_Coursdeau_3.set('fieldAliases', {'fid': 'fid', 'CODE_HYDRO': 'CODE_HYDRO', 'CLASSE': 'CLASSE', 'TOPONYME': 'TOPONYME', 'X_etiquet': 'X_etiquet', 'Y_etiquet': 'Y_etiquet', });
lyr_BassinversantCharente_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'NomComGeog': 'NomComGeog', 'Surface': 'Surface', });
lyr_Villes_5.set('fieldAliases', {'fid': 'fid', 'DEPT': 'DEPT', 'NOM': 'NOM', 'x': 'x', 'y': 'y', 'Population': 'Population', });
lyr_Bassin_Charente_0.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'NomComGeog': 'TextEdit', 'Surface': 'Range', });
lyr_Annee_TM_1.set('fieldImages', {'VALUE': 'TextEdit', 'Decennie': 'TextEdit', });
lyr_Tendances_TM_2.set('fieldImages', {'NUM_POSTE': 'TextEdit', 'NOM_USUEL': 'TextEdit', 'LAT': 'TextEdit', 'LON': 'TextEdit', 'ALTI': 'TextEdit', 'Station': 'TextEdit', 'Annee Pent': 'TextEdit', 'Annee Ordo': 'TextEdit', 'Hiver Pent': 'TextEdit', 'Hiver Ordo': 'TextEdit', 'Printemps': 'TextEdit', 'Printemp_1': 'TextEdit', '�t� Pe': 'TextEdit', '�t� Or': 'TextEdit', 'Automne Pe': 'TextEdit', 'Automne Or': 'TextEdit', 'Annee': 'TextEdit', });
lyr_Coursdeau_3.set('fieldImages', {'fid': 'TextEdit', 'CODE_HYDRO': 'TextEdit', 'CLASSE': 'TextEdit', 'TOPONYME': 'TextEdit', 'X_etiquet': 'TextEdit', 'Y_etiquet': 'TextEdit', });
lyr_BassinversantCharente_4.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'NomComGeog': 'TextEdit', 'Surface': 'Range', });
lyr_Villes_5.set('fieldImages', {'fid': 'TextEdit', 'DEPT': 'TextEdit', 'NOM': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Population': 'TextEdit', });
lyr_Bassin_Charente_0.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'NomComGeog': 'no label', 'Surface': 'no label', });
lyr_Annee_TM_1.set('fieldLabels', {'VALUE': 'no label', 'Decennie': 'no label', });
lyr_Tendances_TM_2.set('fieldLabels', {'NUM_POSTE': 'no label', 'NOM_USUEL': 'no label', 'LAT': 'no label', 'LON': 'no label', 'ALTI': 'no label', 'Station': 'no label', 'Annee Pent': 'no label', 'Annee Ordo': 'no label', 'Hiver Pent': 'no label', 'Hiver Ordo': 'no label', 'Printemps': 'no label', 'Printemp_1': 'no label', '�t� Pe': 'no label', '�t� Or': 'no label', 'Automne Pe': 'no label', 'Automne Or': 'no label', 'Annee': 'no label', });
lyr_Coursdeau_3.set('fieldLabels', {'fid': 'no label', 'CODE_HYDRO': 'no label', 'CLASSE': 'no label', 'TOPONYME': 'no label', 'X_etiquet': 'no label', 'Y_etiquet': 'no label', });
lyr_BassinversantCharente_4.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'NomComGeog': 'no label', 'Surface': 'no label', });
lyr_Villes_5.set('fieldLabels', {'fid': 'no label', 'DEPT': 'no label', 'NOM': 'no label', 'x': 'no label', 'y': 'no label', 'Population': 'no label', });
lyr_Villes_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});