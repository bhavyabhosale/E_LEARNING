// Define a region of interest
var roi = ee.Geometry.Rectangle([longitude1, latitude1, longitude2, latitude2]);

// Load a Landsat 8 image collection
var landsat = ee.ImageCollection('LANDSAT/LC08/C01/T1_TOA')
                .filterBounds(roi)
                .filterDate('2020-01-01', '2020-12-31');

// Select the median pixel value for each band
var median = landsat.median();

// Center the map on the region of interest
Map.centerObject(roi, 8);

// Add the median image to the map
Map.addLayer(median, {bands: ['B4', 'B3', 'B2'], max: 0.3}, 'Landsat 8 Median');
