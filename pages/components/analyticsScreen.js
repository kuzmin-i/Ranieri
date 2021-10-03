import LineChart from "./lineChart"
import { lcData } from "../../data/linechart"

const AnalyticsScreen = () => {
    return (
        <div className="chart">
            <div className="chart__line">
                <LineChart data={ lcData }/>
            </div>
        </div>
    )
}

export default AnalyticsScreen