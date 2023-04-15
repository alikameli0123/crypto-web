import ChartistGraph from "react-chartist";
import {
    Card,
    Col,
} from "react-bootstrap";


const CircleChart = () => {
    return (

        <Col md="4">
            <Card>
                <Card.Header>
                    <Card.Title as="h4">Email Statistics</Card.Title>
                    <p className="card-category">Last Campaign Performance</p>
                </Card.Header>
                <Card.Body>
                    <div
                        className="ct-chart ct-perfect-fourth"
                        id="chartPreferences"
                    >
                     
                    </div>
                    <ChartistGraph
                            data={{
                                labels: ["40%", "20%", "40%"],
                                series: [40, 20, 40],
                            }}
                            type="Pie"
                        />
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CircleChart;
