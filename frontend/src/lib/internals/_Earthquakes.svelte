<script>
	import { getContext, onDestroy } from 'svelte';
	import { contextKey } from '@beyonk/svelte-mapbox';

	const { getMap, getMapbox } = getContext(contextKey);
	const map = getMap();
	const mapbox = getMapbox();
	// // Add a new source from our GeoJSON data and set the
	// // 'cluster' option to true. GL-JS will add the point_count property to your source data.
	// map.addSource('earthquakes', {
	//     type: 'geojson',
	//     // Point to GeoJSON data. This example visualizes all M1.0+ earthquakes
	//     // from 12/22/15 to 1/21/16 as logged by USGS' Earthquake hazards program.
	//     data: 'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson',
	//     cluster: true,
	//     clusterMaxZoom: 14, // Max zoom to cluster points on
	//     clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
	// })
	//
	// map.addLayer({
	//     id: 'clusters',
	//     type: 'circle',
	//     source: 'earthquakes',
	//     filter: ['has', 'point_count'],
	//     paint: {
	//         // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
	//         // with three steps to implement three types of circles:
	//         //   * Blue, 20px circles when point count is less than 100
	//         //   * Yellow, 30px circles when point count is between 100 and 750
	//         //   * Pink, 40px circles when point count is greater than or equal to 750
	//         'circle-color': [
	//             'step',
	//             ['get', 'point_count'],
	//             '#51bbd6',
	//             100,
	//             '#f1f075',
	//             750,
	//             '#f28cb1'
	//         ],
	//         'circle-radius': [
	//             'step',
	//             ['get', 'point_count'],
	//             20,
	//             100,
	//             30,
	//             750,
	//             40
	//         ]
	//     }
	// })
	//
	// map.addLayer({
	//     id: 'cluster-count',
	//     type: 'symbol',
	//     source: 'earthquakes',
	//     filter: ['has', 'point_count'],
	//     layout: {
	//         'text-field': '{point_count_abbreviated}',
	//         'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
	//         'text-size': 12
	//     }
	// })
	//
	// map.addLayer({
	//     id: 'unclustered-point',
	//     type: 'circle',
	//     source: 'earthquakes',
	//     filter: ['!', ['has', 'point_count']],
	//     paint: {
	//         'circle-color': '#11b4da',
	//         'circle-radius': 4,
	//         'circle-stroke-width': 1,
	//         'circle-stroke-color': '#fff'
	//     }
	// })
	//
	// map.on('click', 'clusters', function (e) {
	//     const features = map.queryRenderedFeatures(e.point, {
	//         layers: ['clusters']
	//     })
	//     const clusterId = features[0].properties.cluster_id
	//     map.getSource('earthquakes').getClusterExpansionZoom(clusterId, function (err, zoom) {
	//         if (err) {
	//             return
	//         }
	//
	//         map.easeTo({
	//             center: features[0].geometry.coordinates,
	//             zoom: zoom
	//         })
	//     })
	// })
	//
	// map.on('mouseenter', 'clusters', function () {
	//     map.getCanvas().style.cursor = 'pointer'
	// })
	// map.on('mouseleave', 'clusters', function () {
	//     map.getCanvas().style.cursor = ''
	// })
	//
	// map.on('click', 'unclustered-point', function (e) {
	//     const coordinates = e.features[0].geometry.coordinates.slice()
	//
	//     // Ensure that if the map is zoomed out such that multiple
	//     // copies of the feature are visible, the popup appears
	//     // over the copy being pointed to.
	//     while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
	//         coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
	//     }
	//
	//     map.setCenter(coordinates)
	//
	//     new mapbox.Popup({})
	//         .setLngLat(coordinates)
	//         .setHTML('<div id="mini-scroller"></div>')
	//         .addTo(map)
	//
	//     new MiniScroller({target: document.getElementById('mini-scroller'), props: {}}) // eslint-disable-line no-new
	// })
	//
	// map.on('mouseenter', 'unclustered-point', function () {
	//     map.getCanvas().style.cursor = 'pointer'
	// })
	//
	// map.on('mouseleave', 'unclustered-point', function () {
	//     map.getCanvas().style.cursor = ''
	// })
	//
	map.loadImage('https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png', (error, image) => {
		if (error) throw error;
		map.addImage('custom-marker', image);
		// Add a GeoJSON source with 2 points
		map.addSource('points', {
			type: 'geojson',
			data: {
				type: 'FeatureCollection',
				features: [
					{
						// feature for Mapbox DC
						type: 'Feature',
						geometry: {
							type: 'Point',
							coordinates: [-77.03238901390978, 38.913188059745586]
						},
						properties: {
							title: 'Mapbox DC'
						}
					},
					{
						// feature for Mapbox SF
						type: 'Feature',
						geometry: {
							type: 'Point',
							coordinates: [-122.414, 37.776]
						},
						properties: {
							title: 'Mapbox SF'
						}
					}
				]
			}
		});

		// Add a symbol layer
		map.addLayer({
			id: 'points',
			type: 'symbol',
			source: 'points',
			layout: {
				'icon-image': 'custom-marker',
				// get the title name from the source's "title" property
				'text-field': ['get', 'title'],
				'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
				'text-offset': [0, 1.25],
				'text-anchor': 'top'
			}
		});
	});
	setTimeout(swapSource, 4000);

	function swapSource() {
		let sourceQuakes = map.getSource('points');
		sourceQuakes.setData({
			type: 'FeatureCollection',
			features: [
				{
					// feature for Mapbox DC
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [-54.03238901390978, 38.913188059745586]
					},
					properties: {
						title: 'Mapbox DC'
					}
				},
				{
					// feature for Mapbox SF
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [-54.414, 37.776]
					},
					properties: {
						title: 'Mapbox SF'
					}
				}
			]
		});
	}

	onDestroy(() => {
		map.removeLayer('clusters');
		map.removeLayer('cluster-count');
		map.removeLayer('unclustered-point');
		map.removeSource('earthquakes');
	});
</script>
