import { ResponsiveLine } from '@nivo/line'
import { linearGradientDef } from '@nivo/core'
import { lcData } from '../../data/linechart'

import { Fragment } from 'react'

const LineChart = ({ data }) => {
    const CircleComponent = ({ series, xScale, yScale, markers }) => {
    
    let lastCoord = series[0].data[series[0].data.length-1]
    return (
        <Fragment>
            
            <circle
                key="Circle0012"
                cx={lastCoord.position.x}
                cy={lastCoord.position.y}
                r={6}
                fill="#FF5B24"
                stroke={'#F1EFE5'}
                strokeWidth={3}
                style={{ pointerEvents: "none" }}
            />
        </Fragment>
    );
    }
    
    return(
    <ResponsiveLine
        data={data}
        margin={{ top: 0, right: 0, bottom: 50, left: 0 }}
        xScale={{ type: 'time', format: "%Y-%m-%d", precision: "day" }}
        xFormat="time:%Y-%m-%d"
        yScale={{ type: 'linear', min: -1000, max: 200000, stacked: false, reverse: false }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            format: "%b %d",
            tickValues: [new Date(2021, 8, 1), new Date(2021, 8, 28), new Date(2021, 8, 17)],
            orient: 'bottom',
            tickSize: 20,
            tickPadding: 5,
            tickRotation: 0,
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={false}
        enableArea
        enablePoints={false}
        enableGridX={false}
        enableGridY={false}
        lineWidth={3}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        markers={[
            {
                axis: 'y',
                value: 200000,
                legend: '',
                legendPosition: 'top-left',
                textStyle: {fontSize: '12px', color: '#B4B4B4'},
                legendOrientation: 'horizontal',
                lineStyle: {stroke: '#B4B4B4', strokeWidth: 1, strokeDasharray: 2}
            },
            {
                axis: 'y',
                value: 150000,
                legend: '',
                legendPosition: 'top-left',
                textStyle: {fontSize: '12px', color: '#B4B4B4'},
                legendOrientation: 'horizontal',
                lineStyle: {stroke: '#B4B4B4', strokeWidth: 1, strokeDasharray: 2}
            },
            {
                axis: 'y',
                value: 15000,
                legend: '',
                legendPosition: 'top-left',
                textStyle: {fontSize: '12px', color: '#B4B4B4'},
                legendOrientation: 'horizontal',
                lineStyle: {stroke: '#B4B4B4', strokeWidth: 1, strokeDasharray: 2}
            },
            {
                axis: 'y',
                value: 0,
                legend: '',
                legendPosition: 'top-left',
                textStyle: {fontSize: '12px', color: '#B4B4B4'},
                legendOrientation: 'horizontal',
                lineStyle: {stroke: '#B4B4B4', strokeWidth: 1, strokeDasharray: 2}
            },
            {
                axis: 'x',
                value: new Date(2021, 8, 1),
                legend: '',
                legendOrientation: 'horizontal',
                lineStyle: {stroke: '#6B6A66', strokeWidth: 2}
            },
            {
                axis: 'x',
                value: new Date(2021, 8, 28),
                legend: '',
                legendOrientation: 'horizontal',
                lineStyle: {stroke: '#6B6A66', strokeWidth: 2}
            },
            {
                axis: 'x',
                value: new Date(2021, 8, 17),
                legend: '',
                legendOrientation: 'horizontal',
                lineStyle: {stroke: '#CCCCC8', strokeWidth: 2}
            }
        ]}
        colorBy={d => d.color}
        colors={['#FF5B24', 'grey']}
        layers={['grid', 'markers', 'axes', 'areas', 'crosshair', 'lines', 'points', 'slices', 'mesh', 'legends', CircleComponent]}
        legends={[]}
    />
)}

export default LineChart