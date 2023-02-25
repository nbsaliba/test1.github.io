var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Chalcholithic_UTM_1 = new ol.format.GeoJSON();
var features_Chalcholithic_UTM_1 = format_Chalcholithic_UTM_1.readFeatures(json_Chalcholithic_UTM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chalcholithic_UTM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chalcholithic_UTM_1.addFeatures(features_Chalcholithic_UTM_1);
var lyr_Chalcholithic_UTM_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Chalcholithic_UTM_1, 
                style: style_Chalcholithic_UTM_1,
                interactive: true,
                title: '<img src="styles/legend/Chalcholithic_UTM_1.png" /> Chalcholithic_UTM'
            });
var format_DB_Tous_Les_Sites_UTM_2 = new ol.format.GeoJSON();
var features_DB_Tous_Les_Sites_UTM_2 = format_DB_Tous_Les_Sites_UTM_2.readFeatures(json_DB_Tous_Les_Sites_UTM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DB_Tous_Les_Sites_UTM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DB_Tous_Les_Sites_UTM_2.addFeatures(features_DB_Tous_Les_Sites_UTM_2);
var lyr_DB_Tous_Les_Sites_UTM_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DB_Tous_Les_Sites_UTM_2, 
                style: style_DB_Tous_Les_Sites_UTM_2,
                interactive: true,
                title: '<img src="styles/legend/DB_Tous_Les_Sites_UTM_2.png" /> DB_Tous_Les_Sites_UTM'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Chalcholithic_UTM_1.setVisible(true);lyr_DB_Tous_Les_Sites_UTM_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Chalcholithic_UTM_1,lyr_DB_Tous_Les_Sites_UTM_2];
lyr_Chalcholithic_UTM_1.set('fieldAliases', {'Numero': 'Numero', 'Nom': 'Nom', 'Mohafazat': 'Mohafazat', 'Caza': 'Caza', 'CF': 'CF', 'Altitude': 'Altitude', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Period': 'Period', });
lyr_DB_Tous_Les_Sites_UTM_2.set('fieldAliases', {'Numero': 'Numero', 'Nom': 'Nom', 'Mohafazat': 'Mohafazat', 'Caza': 'Caza', 'CF': 'CF', 'Altitude': 'Altitude', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Period': 'Period', });
lyr_Chalcholithic_UTM_1.set('fieldImages', {'Numero': '', 'Nom': '', 'Mohafazat': '', 'Caza': '', 'CF': '', 'Altitude': '', 'Latitude': '', 'Longitude': '', 'Period': '', });
lyr_DB_Tous_Les_Sites_UTM_2.set('fieldImages', {'Numero': '', 'Nom': '', 'Mohafazat': '', 'Caza': '', 'CF': '', 'Altitude': '', 'Latitude': '', 'Longitude': '', 'Period': '', });
lyr_Chalcholithic_UTM_1.set('fieldLabels', {'Numero': 'no label', 'Nom': 'no label', 'Mohafazat': 'no label', 'Caza': 'no label', 'CF': 'no label', 'Altitude': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Period': 'no label', });
lyr_DB_Tous_Les_Sites_UTM_2.set('fieldLabels', {'Numero': 'no label', 'Nom': 'inline label', 'Mohafazat': 'header label', 'Caza': 'no label', 'CF': 'no label', 'Altitude': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Period': 'no label', });
lyr_DB_Tous_Les_Sites_UTM_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});