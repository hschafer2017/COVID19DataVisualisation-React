import React from 'react';
import { ResponsivePie } from '@nivo/pie';



const CasePie = ({ countryData }) => {
    let recentData = countryData.slice(-1).pop()
    if (recentData) {
        var cleanData = [
            {
                'id': 'Active Cases',
                'label': 'Active Cases',
                'value': recentData['Active']
            },
            {
                'id': 'Confirmed Cases',
                'label': 'Confirmed Cases',
                'value': recentData['Confirmed']
            },
            {
                'id': 'Deaths',
                'label': 'Deaths',
                'value': recentData['Deaths']
            },
            {
                'id': 'Recoveries',
                'label': 'Recoveries',
                'value': recentData['Recovered']
            }
        ];
    } else {
        var cleanData = [];
    }
    return (
        <div style={{height: '300px'}}>
            <ResponsivePie
                data={cleanData}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.6}
                padAngle={2}
                cornerRadius={7}
                colors={{ scheme: 'nivo' }}
                borderWidth={1}
                borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
                radialLabelsSkipAngle={11}
                radialLabelsTextXOffset={8}
                radialLabelsTextColor="#333333"
                radialLabelsLinkOffset={6}
                radialLabelsLinkDiagonalLength={16}
                radialLabelsLinkHorizontalLength={24}
                radialLabelsLinkStrokeWidth={1}
                radialLabelsLinkColor={{ from: 'color' }}
                slicesLabelsSkipAngle={10}
                slicesLabelsTextColor="#333333"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        translateY: 56,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: '#999',
                        symbolSize: 18,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    )
};

export default CasePie;