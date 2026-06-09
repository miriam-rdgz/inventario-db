var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Combinado_1 = new ol.format.GeoJSON();
var features_Combinado_1 = format_Combinado_1.readFeatures(json_Combinado_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Combinado_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Combinado_1.addFeatures(features_Combinado_1);
var lyr_Combinado_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Combinado_1, 
                style: style_Combinado_1,
                popuplayertitle: 'Combinado',
                interactive: true,
    title: 'Combinado<br />\
    <img src="styles/legend/Combinado_1_0.png" /> casuarinas<br />\
    <img src="styles/legend/Combinado_1_1.png" /> Ciprés<br />\
    <img src="styles/legend/Combinado_1_2.png" /> Fresno<br />\
    <img src="styles/legend/Combinado_1_3.png" /> Jacaranda<br />\
    <img src="styles/legend/Combinado_1_4.png" /> Pinos<br />' });
var format_COMBINADOFORESTALcombinado_2 = new ol.format.GeoJSON();
var features_COMBINADOFORESTALcombinado_2 = format_COMBINADOFORESTALcombinado_2.readFeatures(json_COMBINADOFORESTALcombinado_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMBINADOFORESTALcombinado_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMBINADOFORESTALcombinado_2.addFeatures(features_COMBINADOFORESTALcombinado_2);
var lyr_COMBINADOFORESTALcombinado_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMBINADOFORESTALcombinado_2, 
                style: style_COMBINADOFORESTALcombinado_2,
                popuplayertitle: 'COMBINADO FORESTAL — combinado',
                interactive: true,
                title: '<img src="styles/legend/COMBINADOFORESTALcombinado_2.png" /> COMBINADO FORESTAL — combinado'
            });
var format_Mapadealturasm_3 = new ol.format.GeoJSON();
var features_Mapadealturasm_3 = format_Mapadealturasm_3.readFeatures(json_Mapadealturasm_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mapadealturasm_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mapadealturasm_3.addFeatures(features_Mapadealturasm_3);
var lyr_Mapadealturasm_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mapadealturasm_3, 
                style: style_Mapadealturasm_3,
                popuplayertitle: 'Mapa de alturas m',
                interactive: true,
    title: 'Mapa de alturas m<br />\
    <img src="styles/legend/Mapadealturasm_3_0.png" /> 3.5 - 9<br />\
    <img src="styles/legend/Mapadealturasm_3_1.png" /> 9 - 13<br />\
    <img src="styles/legend/Mapadealturasm_3_2.png" /> 13 - 15<br />\
    <img src="styles/legend/Mapadealturasm_3_3.png" /> 15 - 18<br />\
    <img src="styles/legend/Mapadealturasm_3_4.png" /> 18 - 30.7<br />' });
var format_mapaDB_cm_4 = new ol.format.GeoJSON();
var features_mapaDB_cm_4 = format_mapaDB_cm_4.readFeatures(json_mapaDB_cm_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mapaDB_cm_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mapaDB_cm_4.addFeatures(features_mapaDB_cm_4);
var lyr_mapaDB_cm_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mapaDB_cm_4, 
                style: style_mapaDB_cm_4,
                popuplayertitle: 'mapa DB_cm',
                interactive: true,
    title: 'mapa DB_cm<br />\
    <img src="styles/legend/mapaDB_cm_4_0.png" /> 10<br />\
    <img src="styles/legend/mapaDB_cm_4_1.png" /> 10.05<br />\
    <img src="styles/legend/mapaDB_cm_4_2.png" /> 10.5<br />\
    <img src="styles/legend/mapaDB_cm_4_3.png" /> 100.5312<br />\
    <img src="styles/legend/mapaDB_cm_4_4.png" /> 103.6728<br />\
    <img src="styles/legend/mapaDB_cm_4_5.png" /> 106.81439999999999<br />\
    <img src="styles/legend/mapaDB_cm_4_6.png" /> 109.956<br />\
    <img src="styles/legend/mapaDB_cm_4_7.png" /> 11<br />\
    <img src="styles/legend/mapaDB_cm_4_8.png" /> 12<br />\
    <img src="styles/legend/mapaDB_cm_4_9.png" /> 122.5224<br />\
    <img src="styles/legend/mapaDB_cm_4_10.png" /> 13<br />\
    <img src="styles/legend/mapaDB_cm_4_11.png" /> 138.2304<br />\
    <img src="styles/legend/mapaDB_cm_4_12.png" /> 14<br />\
    <img src="styles/legend/mapaDB_cm_4_13.png" /> 14.006<br />\
    <img src="styles/legend/mapaDB_cm_4_14.png" /> 141.37199999999999<br />\
    <img src="styles/legend/mapaDB_cm_4_15.png" /> 144.5136<br />\
    <img src="styles/legend/mapaDB_cm_4_16.png" /> 144.82776<br />\
    <img src="styles/legend/mapaDB_cm_4_17.png" /> 147.6552<br />\
    <img src="styles/legend/mapaDB_cm_4_18.png" /> 15<br />\
    <img src="styles/legend/mapaDB_cm_4_19.png" /> 157.07999999999998<br />\
    <img src="styles/legend/mapaDB_cm_4_20.png" /> 16<br />\
    <img src="styles/legend/mapaDB_cm_4_21.png" /> 16.5<br />\
    <img src="styles/legend/mapaDB_cm_4_22.png" /> 160.2216<br />\
    <img src="styles/legend/mapaDB_cm_4_23.png" /> 163.3632<br />\
    <img src="styles/legend/mapaDB_cm_4_24.png" /> 166.5048<br />\
    <img src="styles/legend/mapaDB_cm_4_25.png" /> 168.0756<br />\
    <img src="styles/legend/mapaDB_cm_4_26.png" /> 17<br />\
    <img src="styles/legend/mapaDB_cm_4_27.png" /> 17.5<br />\
    <img src="styles/legend/mapaDB_cm_4_28.png" /> 171.84552<br />\
    <img src="styles/legend/mapaDB_cm_4_29.png" /> 175.9296<br />\
    <img src="styles/legend/mapaDB_cm_4_30.png" /> 18<br />\
    <img src="styles/legend/mapaDB_cm_4_31.png" /> 185.3544<br />\
    <img src="styles/legend/mapaDB_cm_4_32.png" /> 19<br />\
    <img src="styles/legend/mapaDB_cm_4_33.png" /> 191.6376<br />\
    <img src="styles/legend/mapaDB_cm_4_34.png" /> 194.7792<br />\
    <img src="styles/legend/mapaDB_cm_4_35.png" /> 20<br />\
    <img src="styles/legend/mapaDB_cm_4_36.png" /> 20.2<br />\
    <img src="styles/legend/mapaDB_cm_4_37.png" /> 201.0624<br />\
    <img src="styles/legend/mapaDB_cm_4_38.png" /> 204.204<br />\
    <img src="styles/legend/mapaDB_cm_4_39.png" /> 207.3456<br />\
    <img src="styles/legend/mapaDB_cm_4_40.png" /> 21<br />\
    <img src="styles/legend/mapaDB_cm_4_41.png" /> 210.4872<br />\
    <img src="styles/legend/mapaDB_cm_4_42.png" /> 213.62879999999998<br />\
    <img src="styles/legend/mapaDB_cm_4_43.png" /> 216.7704<br />\
    <img src="styles/legend/mapaDB_cm_4_44.png" /> 219.912<br />\
    <img src="styles/legend/mapaDB_cm_4_45.png" /> 22<br />\
    <img src="styles/legend/mapaDB_cm_4_46.png" /> 22.5<br />\
    <img src="styles/legend/mapaDB_cm_4_47.png" /> 226.1952<br />\
    <img src="styles/legend/mapaDB_cm_4_48.png" /> 23<br />\
    <img src="styles/legend/mapaDB_cm_4_49.png" /> 23.5<br />\
    <img src="styles/legend/mapaDB_cm_4_50.png" /> 235.62<br />\
    <img src="styles/legend/mapaDB_cm_4_51.png" /> 238.7616<br />\
    <img src="styles/legend/mapaDB_cm_4_52.png" /> 24<br />\
    <img src="styles/legend/mapaDB_cm_4_53.png" /> 24.5<br />\
    <img src="styles/legend/mapaDB_cm_4_54.png" /> 24.8<br />\
    <img src="styles/legend/mapaDB_cm_4_55.png" /> 241.9032<br />\
    <img src="styles/legend/mapaDB_cm_4_56.png" /> 243.474<br />\
    <img src="styles/legend/mapaDB_cm_4_57.png" /> 245.0448<br />\
    <img src="styles/legend/mapaDB_cm_4_58.png" /> 25<br />\
    <img src="styles/legend/mapaDB_cm_4_59.png" /> 25.5<br />\
    <img src="styles/legend/mapaDB_cm_4_60.png" /> 26<br />\
    <img src="styles/legend/mapaDB_cm_4_61.png" /> 26.8<br />\
    <img src="styles/legend/mapaDB_cm_4_62.png" /> 260.7528<br />\
    <img src="styles/legend/mapaDB_cm_4_63.png" /> 263.8944<br />\
    <img src="styles/legend/mapaDB_cm_4_64.png" /> 27<br />\
    <img src="styles/legend/mapaDB_cm_4_65.png" /> 27.7<br />\
    <img src="styles/legend/mapaDB_cm_4_66.png" /> 273.3192<br />\
    <img src="styles/legend/mapaDB_cm_4_67.png" /> 28<br />\
    <img src="styles/legend/mapaDB_cm_4_68.png" /> 285.8856<br />\
    <img src="styles/legend/mapaDB_cm_4_69.png" /> 29<br />\
    <img src="styles/legend/mapaDB_cm_4_70.png" /> 30<br />\
    <img src="styles/legend/mapaDB_cm_4_71.png" /> 30.87<br />\
    <img src="styles/legend/mapaDB_cm_4_72.png" /> 301.5936<br />\
    <img src="styles/legend/mapaDB_cm_4_73.png" /> 31<br />\
    <img src="styles/legend/mapaDB_cm_4_74.png" /> 317.3016<br />\
    <img src="styles/legend/mapaDB_cm_4_75.png" /> 32<br />\
    <img src="styles/legend/mapaDB_cm_4_76.png" /> 320.4432<br />\
    <img src="styles/legend/mapaDB_cm_4_77.png" /> 33<br />\
    <img src="styles/legend/mapaDB_cm_4_78.png" /> 339.2928<br />\
    <img src="styles/legend/mapaDB_cm_4_79.png" /> 348.7176<br />\
    <img src="styles/legend/mapaDB_cm_4_80.png" /> 35<br />\
    <img src="styles/legend/mapaDB_cm_4_81.png" /> 36<br />\
    <img src="styles/legend/mapaDB_cm_4_82.png" /> 36.5<br />\
    <img src="styles/legend/mapaDB_cm_4_83.png" /> 361.284<br />\
    <img src="styles/legend/mapaDB_cm_4_84.png" /> 37<br />\
    <img src="styles/legend/mapaDB_cm_4_85.png" /> 37.5<br />\
    <img src="styles/legend/mapaDB_cm_4_86.png" /> 38<br />\
    <img src="styles/legend/mapaDB_cm_4_87.png" /> 389.5584<br />\
    <img src="styles/legend/mapaDB_cm_4_88.png" /> 39<br />\
    <img src="styles/legend/mapaDB_cm_4_89.png" /> 39.47<br />\
    <img src="styles/legend/mapaDB_cm_4_90.png" /> 4.5<br />\
    <img src="styles/legend/mapaDB_cm_4_91.png" /> 40<br />\
    <img src="styles/legend/mapaDB_cm_4_92.png" /> 408.408<br />\
    <img src="styles/legend/mapaDB_cm_4_93.png" /> 41<br />\
    <img src="styles/legend/mapaDB_cm_4_94.png" /> 42<br />\
    <img src="styles/legend/mapaDB_cm_4_95.png" /> 42.63<br />\
    <img src="styles/legend/mapaDB_cm_4_96.png" /> 42.65<br />\
    <img src="styles/legend/mapaDB_cm_4_97.png" /> 43<br />\
    <img src="styles/legend/mapaDB_cm_4_98.png" /> 43.9824<br />\
    <img src="styles/legend/mapaDB_cm_4_99.png" /> 44<br />\
    <img src="styles/legend/mapaDB_cm_4_100.png" /> 45<br />\
    <img src="styles/legend/mapaDB_cm_4_101.png" /> 46<br />\
    <img src="styles/legend/mapaDB_cm_4_102.png" /> 47<br />\
    <img src="styles/legend/mapaDB_cm_4_103.png" /> 47.124<br />\
    <img src="styles/legend/mapaDB_cm_4_104.png" /> 47.74<br />\
    <img src="styles/legend/mapaDB_cm_4_105.png" /> 48<br />\
    <img src="styles/legend/mapaDB_cm_4_106.png" /> 5<br />\
    <img src="styles/legend/mapaDB_cm_4_107.png" /> 50<br />\
    <img src="styles/legend/mapaDB_cm_4_108.png" /> 52<br />\
    <img src="styles/legend/mapaDB_cm_4_109.png" /> 53<br />\
    <img src="styles/legend/mapaDB_cm_4_110.png" /> 54<br />\
    <img src="styles/legend/mapaDB_cm_4_111.png" /> 543.4968<br />\
    <img src="styles/legend/mapaDB_cm_4_112.png" /> 55<br />\
    <img src="styles/legend/mapaDB_cm_4_113.png" /> 59<br />\
    <img src="styles/legend/mapaDB_cm_4_114.png" /> 59.52<br />\
    <img src="styles/legend/mapaDB_cm_4_115.png" /> 6<br />\
    <img src="styles/legend/mapaDB_cm_4_116.png" /> 60<br />\
    <img src="styles/legend/mapaDB_cm_4_117.png" /> 63.02<br />\
    <img src="styles/legend/mapaDB_cm_4_118.png" /> 65<br />\
    <img src="styles/legend/mapaDB_cm_4_119.png" /> 65.9736<br />\
    <img src="styles/legend/mapaDB_cm_4_120.png" /> 68.11<br />\
    <img src="styles/legend/mapaDB_cm_4_121.png" /> 69.1152<br />\
    <img src="styles/legend/mapaDB_cm_4_122.png" /> 7<br />\
    <img src="styles/legend/mapaDB_cm_4_123.png" /> 7.5<br />\
    <img src="styles/legend/mapaDB_cm_4_124.png" /> 70<br />\
    <img src="styles/legend/mapaDB_cm_4_125.png" /> 71<br />\
    <img src="styles/legend/mapaDB_cm_4_126.png" /> 72.2568<br />\
    <img src="styles/legend/mapaDB_cm_4_127.png" /> 75.429816<br />\
    <img src="styles/legend/mapaDB_cm_4_128.png" /> 77<br />\
    <img src="styles/legend/mapaDB_cm_4_129.png" /> 78.53999999999999<br />\
    <img src="styles/legend/mapaDB_cm_4_130.png" /> 8<br />\
    <img src="styles/legend/mapaDB_cm_4_131.png" /> 81.6816<br />\
    <img src="styles/legend/mapaDB_cm_4_132.png" /> 84.8232<br />\
    <img src="styles/legend/mapaDB_cm_4_133.png" /> 87.9648<br />\
    <img src="styles/legend/mapaDB_cm_4_134.png" /> 9<br />\
    <img src="styles/legend/mapaDB_cm_4_135.png" /> 91.1064<br />\
    <img src="styles/legend/mapaDB_cm_4_136.png" /> <br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Combinado_1.setVisible(true);lyr_COMBINADOFORESTALcombinado_2.setVisible(true);lyr_Mapadealturasm_3.setVisible(true);lyr_mapaDB_cm_4.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Combinado_1,lyr_COMBINADOFORESTALcombinado_2,lyr_Mapadealturasm_3,lyr_mapaDB_cm_4];
lyr_Combinado_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ESPECIE': 'ESPECIE', 'DN_cm': 'DN_cm', 'DB_cm': 'DB_cm', 'H': 'H', 'SF': 'SF', 'DN_m': 'DN_m', 'AB': 'AB', 'V': 'V', 'ESPECIE ': 'ESPECIE ', 'layer': 'layer', 'path': 'path', });
lyr_COMBINADOFORESTALcombinado_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ESPECIE': 'ESPECIE', 'DN_cm': 'DN_cm', 'DB_cm': 'DB_cm', 'H': 'H', 'SF': 'SF', 'DN_m': 'DN_m', 'AB': 'AB', 'V': 'V', 'ESPECIE ': 'ESPECIE ', 'layer': 'layer', 'path': 'path', });
lyr_Mapadealturasm_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ESPECIE': 'ESPECIE', 'DN_cm': 'DN_cm', 'DB_cm': 'DB_cm', 'H': 'H', 'SF': 'SF', 'DN_m': 'DN_m', 'AB': 'AB', 'V': 'V', 'ESPECIE ': 'ESPECIE ', 'layer': 'layer', 'path': 'path', });
lyr_mapaDB_cm_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ESPECIE': 'ESPECIE', 'DN_cm': 'DN_cm', 'DB_cm': 'DB_cm', 'H': 'H', 'SF': 'SF', 'DN_m': 'DN_m', 'AB': 'AB', 'V': 'V', 'ESPECIE ': 'ESPECIE ', 'layer': 'layer', 'path': 'path', });
lyr_Combinado_1.set('fieldImages', {'fid': '', 'ID': '', 'ESPECIE': '', 'DN_cm': '', 'DB_cm': '', 'H': '', 'SF': '', 'DN_m': '', 'AB': '', 'V': '', 'ESPECIE ': '', 'layer': '', 'path': '', });
lyr_COMBINADOFORESTALcombinado_2.set('fieldImages', {'fid': '', 'ID': '', 'ESPECIE': '', 'DN_cm': '', 'DB_cm': '', 'H': '', 'SF': '', 'DN_m': '', 'AB': '', 'V': '', 'ESPECIE ': '', 'layer': '', 'path': '', });
lyr_Mapadealturasm_3.set('fieldImages', {'fid': '', 'ID': '', 'ESPECIE': '', 'DN_cm': '', 'DB_cm': '', 'H': '', 'SF': '', 'DN_m': '', 'AB': '', 'V': '', 'ESPECIE ': '', 'layer': '', 'path': '', });
lyr_mapaDB_cm_4.set('fieldImages', {'fid': '', 'ID': '', 'ESPECIE': '', 'DN_cm': '', 'DB_cm': '', 'H': '', 'SF': '', 'DN_m': '', 'AB': '', 'V': '', 'ESPECIE ': '', 'layer': '', 'path': '', });
lyr_Combinado_1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ESPECIE': 'no label', 'DN_cm': 'no label', 'DB_cm': 'no label', 'H': 'no label', 'SF': 'no label', 'DN_m': 'no label', 'AB': 'no label', 'V': 'no label', 'ESPECIE ': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_COMBINADOFORESTALcombinado_2.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ESPECIE': 'no label', 'DN_cm': 'no label', 'DB_cm': 'no label', 'H': 'no label', 'SF': 'no label', 'DN_m': 'no label', 'AB': 'no label', 'V': 'no label', 'ESPECIE ': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Mapadealturasm_3.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ESPECIE': 'no label', 'DN_cm': 'no label', 'DB_cm': 'no label', 'H': 'no label', 'SF': 'no label', 'DN_m': 'no label', 'AB': 'no label', 'V': 'no label', 'ESPECIE ': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_mapaDB_cm_4.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ESPECIE': 'no label', 'DN_cm': 'no label', 'DB_cm': 'no label', 'H': 'no label', 'SF': 'no label', 'DN_m': 'no label', 'AB': 'no label', 'V': 'no label', 'ESPECIE ': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_mapaDB_cm_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});