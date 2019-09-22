import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.jsx";



class PickUpPoints extends React.Component {
  state = {
    activeNav: 1,
    chartExample1Data: "data1"
  };
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
    let wow = () => {
      console.log(this.state);
    };
    wow.bind(this);
    setTimeout(() => wow(), 1000);
    // this.chartReference.update();
  };
  componentWillMount() {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  render() {
    return (
      <>

        <Container className="mt-2" fluid>
        <h3 className="" style={{textAlign:'center', color:'#001996', letterSpacing:'1px',}}>Select a pickup point</h3>
          <Row className="mt-3">
            <Col className="mb-5 mb-xl-0" >
              <Card className="shadow">
                {/* <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Current Insurance Covers</h3>
                    </div>
                    <div className="col text-right">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        See all
                      </Button>
                    </div> *
                  </Row>
                </CardHeader> */}
                <CardBody>
                  <ul className="list-group list-group-flush list my--3">
                    <li className="list-group-item px-0">
                      <Row className="align-items-center">
                        <div className="col-auto">
                          <a href="#" className="avatar rounded-circle">
                            
                          </a>
                        </div>
                        <div className="col ml--2">
                          <h4 className="mb-0">
                            <a href="#!" style={{color:'#115894cc', marginBottom:'10px',}}>APA INSURANCE</a>
                           </h4>
                            <h5>
                            <a href="#!" style={{color:'#e16470'}}>Lenana Road
                            <br></br>
                            <small>9am to 5pm</small>
                            </a>
                            <br></br>
                          </h5>
                      
                        </div>

                      </Row>

                    </li>
                    <li className="list-group-item px-0">
                      <Row className="align-items-center">
                        <div className="col-auto">
                          <a href="#" className="avatar rounded-circle">
                            
                          </a>
                        </div>
                        <div className="col ml--2">
                          <h4 className="mb-0">
                            <a href="#!" style={{color:'#115894cc', marginBottom:'10px',}}>APA INSURANCE</a>
                           </h4>
                            <h5>
                            <a href="#!" style={{color:'#e16470'}}>Kenyatta Road
                            <br></br>
                            <small>9am to 5pm</small>
                            </a>
                            <br></br>
                          </h5>
                      
                        </div>

                      </Row>

                    </li>
                    <li className="list-group-item px-0">
                      <Row className="align-items-center">
                        <div className="col-auto">
                          <a href="#" className="avatar rounded-circle">
                            
                          </a>
                        </div>
                        <div className="col ml--2">
                          <h4 className="mb-0">
                            <a href="#!" style={{color:'#115894cc', marginBottom:'10px',}}>APA INSURANCE</a>
                           </h4>
                            <h5>
                            <a href="#!" style={{color:'#e16470'}}>Chiromo Road
                            <br></br>
                            <small>9am to 5pm</small>
                            </a>
                            <br></br>
                          </h5>
                      
                        </div>

                      </Row>

                    </li>


                  
                  </ul>
                </CardBody>
              </Card>
            </Col>
           
         
          </Row>
        </Container>
      </>
    );
  }
}

export default PickUpPoints;
