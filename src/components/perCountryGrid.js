import React from 'react';
import { ResponsiveCalendar } from '@nivo/calendar';

const CountryGrid = ({eachCountryData}) => {
    return (
        <div style={{height: '450px'}}>
            <ResponsiveCalendar
            data={eachCountryData}
            from="2020-01-01"
            to="2020-07-12"
            emptyColor="#eeeeee"
            colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
            margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
            yearSpacing={40}
            monthBorderColor="#ffffff"
            dayBorderWidth={2}
            dayBorderColor="#ffffff"
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'row',
                    translateY: 36,
                    itemCount: 4,
                    itemWidth: 42,
                    itemHeight: 36,
                    itemsSpacing: 14,
                    itemDirection: 'right-to-left'
                }
            ]}
        />
        </div>
    )
};

export default CountryGrid;