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

import Header from "components/Headers/Header.jsx";
import ClaimForm from "./forms/ClaimForm";

class Index extends React.Component {
  state = {
    activeNav: 1,
    chartExample1Data: "data1",
    open:false
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
  openModal(){
    this.setState({open:true})
  }
  render() {
    console.log(this.state.open);
    return (
      <>
        <Header />
        {/* Page content */}

        <Container className="mt--7" fluid>
        <h2 className="" style={{textAlign:'center', color:'#001996', letterSpacing:'3px',  textTransform:'uppercase'}}>Current Covers</h2>
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
                            <a href="#!" style={{color:'#e16470'}}>Medical Insurance</a>
                          </h5>
                          <span className="text-success" style={{marginRight:'12px'}}>●</span>
                          <span>Active</span>
                        </div>
                        <button type="button" class="btn btn-secondary">Claim</button>
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
                            <a href="#!" style={{color:'#115894cc', marginBottom:'10px',}}>HERITAGE INSURANCE</a>
                           </h4>
                            <h5>
                            <a href="#!" style={{color:'#e16470'}}>Motor Insurance</a>
                          </h5>
                          <span className="text-danger" style={{marginRight:'12px'}}>●</span>
                          <span>Expired</span>
                        </div>
                        <button type="button" class="btn btn-secondary" onCick = {this.openModal}>Claim</button>
                      </Row>

                    </li>

                  </ul>
                </CardBody>
              </Card>
            </Col>
           
         
          </Row>
        </Container>
        {this.state.open &&<ClaimForm/>}
      </>
    );
  }
}

export default Index;
