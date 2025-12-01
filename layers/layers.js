var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_thesumofsoiltemperatures_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'the sum of soil temperatures<br />\
    <img src="styles/legend/thesumofsoiltemperatures_1_0.png" /> <1600<br />\
    <img src="styles/legend/thesumofsoiltemperatures_1_1.png" /> 1600 - 1800<br />\
    <img src="styles/legend/thesumofsoiltemperatures_1_2.png" /> 1800 - 2000<br />\
    <img src="styles/legend/thesumofsoiltemperatures_1_3.png" /> 2000 - 2200<br />\
    <img src="styles/legend/thesumofsoiltemperatures_1_4.png" /> 2200 - 2400<br />\
    <img src="styles/legend/thesumofsoiltemperatures_1_5.png" /> > 2400<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/thesumofsoiltemperatures_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [5746288.299159, 7563682.738619, 6644734.517880, 8783582.262429]
        })
    });
var format_TM_2 = new ol.format.GeoJSON();
var features_TM_2 = format_TM_2.readFeatures(json_TM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TM_2.addFeatures(features_TM_2);
var lyr_TM_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TM_2, 
                style: style_TM_2,
                popuplayertitle: 'TM',
                interactive: true,
    title: 'TM<br />\
    <img src="styles/legend/TM_2_0.png" /> areas where soil surveys have not been conducted<br />\
    <img src="styles/legend/TM_2_1.png" /> areas where soil surveys have been conducted<br />' });
var format_Tillageofsoils_3 = new ol.format.GeoJSON();
var features_Tillageofsoils_3 = format_Tillageofsoils_3.readFeatures(json_Tillageofsoils_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tillageofsoils_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tillageofsoils_3.addFeatures(features_Tillageofsoils_3);
var lyr_Tillageofsoils_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tillageofsoils_3, 
                style: style_Tillageofsoils_3,
                popuplayertitle: 'Tillage of soils',
                interactive: true,
    title: 'Tillage of soils<br />\
    <img src="styles/legend/Tillageofsoils_3_0.png" /> 0 - 5 <br />\
    <img src="styles/legend/Tillageofsoils_3_1.png" /> 5 - 10 <br />\
    <img src="styles/legend/Tillageofsoils_3_2.png" /> 10 - 15 <br />\
    <img src="styles/legend/Tillageofsoils_3_3.png" /> 15 - 20 <br />\
    <img src="styles/legend/Tillageofsoils_3_4.png" /> 20 - 24 <br />' });

lyr_ESRIGraylight_0.setVisible(true);lyr_thesumofsoiltemperatures_1.setVisible(true);lyr_TM_2.setVisible(false);lyr_Tillageofsoils_3.setVisible(false);
var layersList = [lyr_ESRIGraylight_0,lyr_thesumofsoiltemperatures_1,lyr_TM_2,lyr_Tillageofsoils_3];
lyr_TM_2.set('fieldAliases', {'name': 'name', 'Co': 'Co', 'Cu': 'Cu', 'Zn': 'Zn', });
lyr_Tillageofsoils_3.set('fieldAliases', {'name': 'name', 'area': 'area', 'plow': 'plow', });
lyr_TM_2.set('fieldImages', {'name': 'TextEdit', 'Co': 'TextEdit', 'Cu': 'TextEdit', 'Zn': 'TextEdit', });
lyr_Tillageofsoils_3.set('fieldImages', {'name': 'TextEdit', 'area': 'TextEdit', 'plow': 'TextEdit', });
lyr_TM_2.set('fieldLabels', {'name': 'no label', 'Co': 'no label', 'Cu': 'no label', 'Zn': 'no label', });
lyr_Tillageofsoils_3.set('fieldLabels', {'name': 'inline label - always visible', 'area': 'inline label - always visible', 'plow': 'inline label - always visible', });
lyr_Tillageofsoils_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});