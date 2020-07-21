import React from 'react';
import { ResponsiveBar } from '@nivo/bar'


const NewCaseDataBar = ({ countryData }) => {
    var cleanData = [];
    for (let d of countryData) {
        cleanData.push({
            'Country': d.Country,
            'New Cases': d.NewConfirmed,
            'New Deaths': d.NewDeaths,
            'New Recoveries': d.NewRecovered,
        })
    };
    cleanData.sort((a, b) => (a['New Cases'] > b['New Cases']) ? -1 : 1);
    return (
        <div style={{height: '400px'}}>
            <ResponsiveBar
            data={cleanData.slice(0,8)}
            keys={[ 'New Cases', 'New Deaths', 'New Recoveries' ]}
            indexBy="Country"
            margin={{ top: 50, right: 130, bottom: 50, left: 80 }}
            padding={0.3}
            innerPadding={1}
            colors={{ scheme: 'nivo' }}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Country',
                legendPosition: 'middle',
                legendOffset: 37
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'People',
                legendPosition: 'middle',
                legendOffset: -60
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [ [ 'darker', '1.8' ] ] }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 80,
                    itemHeight: 15,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 15,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            animate={true}
            motionStiffness={60}
            motionDamping={15}
        />
    </div>
    )
}

export default NewCaseDataBar;