import React, { Component } from 'react';
import logo from './logo.svg';
import Popup from 'reactjs-popup';
import './App.css';

const InnerContent = (props) => {
    return <div style={{paddingTop:15}}>

        <a href={props.href ? props.href : null} target="_blank">
            <img
                style={{
                    width: props.panalyt? '78%' : '60%',
                    color: props.color,
                    display:'block',
                    margin: '0 auto',
                    paddingTop: props.panalyt? '20%' : 0
                }}

                src={props.image}
            />
        </a>

        <p style={{marginTop:20,fontSize: '1rem', color:"black",fontFamily:"ObjectiveMK1-Xbd",textAlign:'center'}}>
            {props.headingLabel}</p>

    </div>
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }

    componentWillMount() {

    }

    componentDidMount() {
        window.document.title = "Black Mountain";
        document.body.style.backgroundColor = "#80b4ec";
    }

    componentWillUnmount() {
        document.body.style.backgroundColor = "white";
    }

    render () {

        return (

            <div>
                <div className="container-fluid black-mountain">
                    <div className="row">
                        <div className='col-md-6'>
                            <div className='row' style={{paddingTop:30,paddingBottom:20}}>
                                <div className="col-md-12">
                                    <div style={{fontWeight:700, display:'inline-block', fontSize: 17, fontFamily:"ObjectiveMK1-Xbd"}}>
                                        Notices
                                    </div>
                                    <div style={{float:'right',display:'inline-block'}}>
                                        <i style={{fontSize:23}} className="fa fa-angle-left" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;
                                        <i style={{fontSize:23}} className="fa fa-angle-right" aria-hidden="true"></i>
                                        {/*<span style={{fontSize:17}}>{'<'}&nbsp;&nbsp;</span>*/}
                                        {/*<span style={{fontSize:17}}>&nbsp;{'>'}</span>*/}
                                    </div>
                                </div>
                            </div>

                            <div className='row bm-notes'>
                                <div className='col-md-4'>
                                    <div style={{padding:'10px 10px', backgroundColor:'#7aafe9'}}>
                                        <span style={{fontWeight:700}}>Title</span>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Donec hendrerit vehicula sem, id sodales enim blandit ut.
                                        </p>
                                        <p style={{textAlign:'right'}}>
                                            11/10/18
                                        </p>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div style={{padding:'10px 10px', backgroundColor:'#7aafe9'}}>
                                        <span style={{fontWeight:700}}>Title</span>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Donec hendrerit vehicula sem, id sodales enim blandit ut.
                                        </p>
                                        <p style={{textAlign:'right'}}>
                                            11/10/18
                                        </p>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div style={{padding:'10px 10px', backgroundColor:'#7aafe9'}}>
                                        <span style={{fontWeight:700}}>Title</span>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Donec hendrerit vehicula sem, id sodales enim blandit ut.
                                        </p>
                                        <p style={{textAlign:'right'}}>
                                            11/10/18
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className='row bm-notes' style={{paddingTop:10}}>
                                <div className='col-md-4'>
                                    <div style={{padding:'10px 10px', backgroundColor:'#7aafe9'}}>
                                        <span style={{fontWeight:700}}>Title</span>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Donec hendrerit vehicula sem, id sodales enim blandit ut.
                                        </p>
                                        <p style={{textAlign:'right'}}>
                                            11/10/18
                                        </p>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div style={{padding:'10px 10px', backgroundColor:'#7aafe9'}}>
                                        <span style={{fontWeight:700}}>Title</span>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Donec hendrerit vehicula sem, id sodales enim blandit ut.
                                        </p>
                                        <p style={{textAlign:'right'}}>
                                            11/10/18
                                        </p>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div style={{padding:'10px 10px', backgroundColor:'#7aafe9'}}>
                                        <span style={{fontWeight:700}}>Title</span>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Donec hendrerit vehicula sem, id sodales enim blandit ut.
                                        </p>
                                        <p style={{textAlign:'right'}}>
                                            11/10/18
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='col-md-6'>
                            <div className="row">
                                <div className="col-md-12" style={{paddingRight:0}}>
                                    <div style={{padding:'0px 0 0px',backgroundColor:'#89bcf1'}}>
                                        <img
                                            src="../static/group.png"
                                            style={{margin:'0 auto',display:'block', width:'75%'}}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12" style={{paddingRight:0}}>
                                    <div style={{padding:'64px'}}>
                                        <p style={{textAlign:'center',fontWeight:700, fontFamily:"ObjectiveMK1-Xbd",paddingBottom:'10'}}>
                                            Provided for
                                        </p>
                                        <img
                                            src="../static/haymarket.png"
                                            style={{margin:'0 auto',display:'block', width:'70%'}}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className='col-md-3'>
                            <InnerContent
                                href={'https://accounts.zoho.com/signin?servicename=zohopeople&signupurl=https://www.zoho.com/people/signup.html'}
                                image={"../static/service.png"}
                                headingLabel="HR Self-Service"
                            />
                        </div>
                        <div className="col-md-6">
                            <Popup
                            trigger={
                            <div className="row">
                                <div className='col-md-6' style={{backgroundColor:'#89bcf1'}}>
                                    <InnerContent
                                        href={'https://www.zoho.eu/expense/'}
                                        image={"../static/travel.png"}
                                        headingLabel="Travel & Expenses"
                                    />
                                </div>
                                <div className='col-md-6'>
                                    <InnerContent
                                        href={'https://ehr.bmv.com.hk/blackmountain/fbs_hmsg_admin.asp'}
                                        image={"../static/payslip.png"}
                                        headingLabel="Payslips"
                                    />
                                </div>
                            </div>
                            }
                            position="top center"
                            on="hover"
                            contentStyle={{width:'500px',borderRadius:'5px'}}
                            >
                                <div className="row">
                                    <div className="col-md-6" >
                                        <img src="../static/zoho_login.png"
                                           width={'100%'}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <p>You will be redirected to the Zoho Login page.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Donec hendrerit vehicula sem, id sodales enim blandit ut.
                                        </p>
                                    </div>
                                </div>
                            </Popup>
                        </div>
                        <div className='col-md-3' style={{backgroundColor:'#89bcf1'}}>
                            <InnerContent
                                href={"https://www.panalyt.com/"}
                                panalyt={true}
                                image={"../static/new_panalyt_logo_white.png"}
                                headingLabel="People Analytics"
                            />
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
