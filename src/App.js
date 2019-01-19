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
                                        <span className="bm-title" style={{fontWeight:700}}>Welcome to the Haymarket Asia HR Portal</span>
                                        <p>
                                        From this page you can access services provided by our HR Services partner, Black Mountain.
                                        </p>
                                        <p style={{textAlign:'right'}}>
                                            11/10/18
                                        </p>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div style={{padding:'10px 10px', backgroundColor:'#7aafe9'}}>
                                        <span className="bm-title" style={{fontWeight:700}}>HR Self Service Tasks</span>
                                        <p>
                                        For HR Self Service tasks, such as applying for leave, amending your address or checking your emergency contacts, use the “HR Self-Service” link below to access the new “Zoho People” system.
                                        </p>
                                        <p style={{textAlign:'right'}}>
                                            11/10/18
                                        </p>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div style={{padding:'10px 10px', backgroundColor:'#7aafe9'}}>
                                        <span className="bm-title" style={{fontWeight:700}}>Travel & Expenses</span>
                                        <p>
                                        To request approval for business travel or submit expenses, please access the “Travel & Expenses” link below, which will take you to the new “Zoho Expense” tool.
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
                                        <span className="bm-title" style={{fontWeight:700}}>Payslips</span>
                                        <p>
                                        To access your Payslips, select the “Payslips” link below, which will take you to the Black Mountain Online Resource Centre.
                                        </p>
                                        <p style={{textAlign:'right'}}>
                                            11/10/18
                                        </p>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div style={{padding:'10px 10px', backgroundColor:'#7aafe9'}}>
                                        <span className="bm-title" style={{fontWeight:700}}>Tools</span>
                                        <p>
                                        You can contact the Black Mountain team directly for help on these tools, or for any routine HR enquiries:
                                        </p>
                                        <p style={{textAlign:'right'}}>
                                            11/10/18
                                        </p>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div style={{padding:'10px 10px', backgroundColor:'#7aafe9'}}>
                                        <span className="bm-title" style={{fontWeight:700}}>Contact</span>
                                        <p>
                                        Singapore: Contact Faith Chan, faith.chan@blackmountainhr.com<br/>
                                        Hong Kong: Claire Loh, Claire.loh@blackmountainhr.com
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
                                        <a href="https://www.blackmountainhr.com/" target="__blank">
                                            <img
                                                src="../static/group.png"
                                                style={{margin:'0 auto',display:'block', width:'75%'}}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12" style={{paddingRight:0}}>
                                    <div style={{padding:'64px'}}>
                                        <p style={{textAlign:'center',fontWeight:700, fontFamily:"ObjectiveMK1-Xbd",paddingBottom:'10'}}>
                                            Provided for
                                        </p>
                                        <a href="http://www.haymarket.com/asia" target="__blank">
                                            <img
                                                src="../static/haymarket.png"
                                                style={{margin:'0 auto',display:'block', width:'70%'}}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    <div className="row">
                        <div className='col-6 col-md-3'>
                        <Popup
                            trigger={
                                <div className="row">
                                <div className='col-12 col-md-12'>
                                <InnerContent
                                    href={'https://ehr.bmv.com.hk/blackmountain/fbs_hmsg_admin.asp'}
                                    image={"../static/payslip.png"}
                                    headingLabel="Payslips"
                                />
                                </div></div>
                            }
                            position="top center"
                            on="hover"
                            contentStyle={{width:'250px',borderRadius:'5px'}}
                            >
                                <div className="row">
                                    
                                    <div className="col-md-12">
                                        <p>You will be redirected to the Blackmountain Login page.</p>
                                        <p>Access your payslips at the BMV Online Resource Centre: click the link and login with your BMV login.  This page also has an easy “forgot password” link.
                                        </p>
                                    </div>
                                </div>
                            </Popup>
                        </div>
                        <div className="col-12 col-md-6">   

                            <Popup
                            trigger={
                            <div className="row">
                                <div className='col-6 col-md-6' style={{backgroundColor:'#89bcf1'}}>
                                    <InnerContent
                                        href={'https://accounts.zoho.com/signin?servicename=zohoexpense&signupurl=https://www.zoho.com/expense/signup.html'}
                                        image={"../static/travel.png"}
                                        headingLabel="Travel & Expenses"
                                    />
                                </div>
                                <div className='col-6 col-md-6'>
                                    <InnerContent
                                        href={'https://accounts.zoho.com/signin?servicename=zohopeople&signupurl=https://www.zoho.com/people/signup.html'}
                                        image={"../static/service.png"}
                                        headingLabel="HR Self-Service"
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
                                        <p>Access both the “Travel and Expense” approval tool and the “HR Self-Service” tool via these links.  They will both take you to the Zoho “Accounts” page where you can enter the same username (your Haymarket email address) and password for both tools.
</p><p>
You will then be taken to the correct tool, based on the link you selected here.  Click either button to get started.
</p><p>
This page also has an easy “forgot password” link.
                                        </p>
                                    </div>
                                </div>
                            </Popup>
                        </div>
                        <div className='order-1 col-6 col-md-3' style={{backgroundColor:'#89bcf1'}}>
                            <Popup
                            trigger={
                                <div className="row">
                                <div className='col-12 col-md-12'>
                                <InnerContent
                                    href={"https://www.panalyt.com/"}
                                    panalyt={true}
                                    image={"../static/new_panalyt_logo_white.png"}
                                    headingLabel="People Analytics"
                                />
                                </div></div>
                            }
                            position="top center"
                            on="hover"
                            contentStyle={{width:'250px',borderRadius:'5px'}}
                            >
                                <div className="row">
                                    
                                    <div className="col-md-12">
                                        <p>You will be redirected to the Panalyt Login page.</p>
                                        <p>Some Managers have access to useful data and analytics on their team, via the Panalyt “People Analytics” tool.  If you have an account you access the tool by clicking this link.
                                        </p>
                                    </div>
                                </div>
                            </Popup>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
