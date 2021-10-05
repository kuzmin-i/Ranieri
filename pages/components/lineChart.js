import { ResponsiveLine } from '@nivo/line'
import { linearGradientDef } from '@nivo/core'
import { lcData } from '../../data/linechart'

const LineChart = ({ data }) => (
    

    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: -30000, max: 200000, stacked: true, reverse: false }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Календарь',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        enablePoints={false}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        markers={[
            {
                axis: 'y',
                value: 15000,
                legend: 'Минимум',
                legendOrientation: 'horizontal',
                lineStyle: {stroke: 'grey', strokeWidth: 1}
            },
            {
                axis: 'y',
                value: 150000,
                legend: 'Необходимый минимум',
                legendOrientation: 'horizontal',
                lineStyle: {stroke: 'grey', strokeWidth: 1}
            },
            {
                axis: 'y',
                value: 0,
                legend: 'Ноль',
                legendOrientation: 'horizontal',
                lineStyle: {stroke: 'grey', strokeWidth: 1}
            }
        ]}
        enableArea = {true}
        defs={[
            linearGradientDef('gradientA', [
                { offset: 0, color: '#ff0000' },
                { offset: 100, color: '#ff0000', opacity: 0 },
            ])
        ]}
        fill={[
        { match: '*', id: 'gradientA' },
        ]}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)

export default LineChart