import React from 'react';
import { ResponsiveChoropleth } from '@nivo/geo';
import countries from "./world_countries.json";

const Countries = ({countryData}) => {
    var cleanData = [];
    for (let d of countryData) {
        cleanData.push({'id': d.CountryCode,
        'value': d.TotalConfirmed})
    };
    return (
        <div style={{height: '450px'}}>
            <ResponsiveChoropleth
            data={cleanData}
            features={countries.features}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            colors="YlOrRd"
            domain={[ 0, 500000 ]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            projectionType="naturalEarth1"
            projectionScale={160}
            projectionTranslation={[ 0.5, 0.5 ]}
            projectionRotation={[ 0, 0, 0 ]}
            enableGraticule={true}
            graticuleLineWidth={1}
            graticuleLineColor="#dddddd"
            borderWidth={0.5}
            borderColor="#152538"
            legends={[
                {
                    anchor: 'bottom-left',
                    direction: 'column',
                    justify: true,
                    translateX: 20,
                    translateY: -100,
                    itemsSpacing: 0,
                    itemWidth: 94,
                    itemHeight: 18,
                    itemDirection: 'left-to-right',
                    itemTextColor: '#444444',
                    itemOpacity: 0.85,
                    symbolSize: 18,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000000',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    </div>
    )
};

export default Countries;