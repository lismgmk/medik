import React, {Component} from "react";
import {getAllWorklogs} from "./worklogReducer";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {CircularProgress, Container, Grid} from "@material-ui/core";

class WorkLog extends Component {

    componentDidMount() {
        this.props.getAllWorklogs()
    }


    getListLogs(doctor, dataAll) {

        for (let i = 0; i < doctor.length; i++) {
            for (let j = 0; j < dataAll.length - 1; j++) {
                if (doctor[i].to > dataAll[j].to && doctor[i].to < dataAll[j + 1].from) {
                    doctor[i].counter++
                }
            }
        }
        return doctor
    }

    getTime(date) {
        let hour = new Date(date)
        return hour.toLocaleTimeString()
    }

    getDate(date) {
        let getDate = new Date(date)
        return getDate.toLocaleDateString()
    }

    render() {
        const {loading} = this.props;

        if (loading) {
            return <Grid
                container
                xs={12}
                justifyContent="center"
            >
                <CircularProgress color="secondary"
                                  size={100}
                />
            </Grid>
        }


        let doctor
        let dataAllDoctorsWithout = []

        if (this.props.worklogs) {
            doctor = this.props.worklogs.filter(i => {
                return i.employee_id === this.props.doctorsId
            })
            dataAllDoctorsWithout = this.props.worklogs.filter(i => {
                return i.employee_id !== this.props.doctorsId
            })
        }

        this.getListLogs(doctor, dataAllDoctorsWithout);

        return <Container>

            <Grid container
                  direction="column"
                  style={
                      {
                         fontSize: "20px"
                      }}
            >
                <Grid item
                      container
                      justifyContent="center"
                      xs

                >
                    <NavLink
                        style={
                            {
                                color: "black"
                            }}
                        to={"/employes"}><h3>К списку врачей</h3></NavLink>

                </Grid>

                <Grid item
                      container
                      justifyContent="center"


                >
                   <h3>{this.props.doctorsName}</h3>
                </Grid>

                <Grid
                    container
                    spacing={1}
                    style={
                        {
                            backgroundColor: 'gray',
                            margin: "10px 0",
                        }}
                >
                    <Grid item
                          container
                          justifyContent="center"
                          xs={4}

                    >
                        <h3>Дата смены</h3>
                    </Grid>
                    <Grid item
                          container
                          justifyContent="center"
                          xs={4}

                    >
                        <h3>Время ухода</h3>
                    </Grid>
                    <Grid item
                          container
                          justifyContent="center"
                          xs={4}

                    >
                        <h3>Время прихода</h3>
                    </Grid>

                </Grid>
                {doctor && doctor.map(item => {
                    return <Grid
                        container
                        spacing={1}
                        style={{
                            backgroundColor: item.counter > 2 ? 'red' : 'rgb(207, 232, 252)',
                            fontSize: "18px",
                            padding: "10px 0",
                            margin: "10px 0",
                        }}>

                        <Grid item
                              container
                              justifyContent="center"
                              xs={4}
                        >
                            {this.getDate(item.from)}
                            {this.getDate(item.to) !== this.getDate(item.from) ? ` - ${this.getDate(item.to)}` : ''}
                        </Grid>

                        <Grid item
                              container
                              justifyContent="center"
                              xs={4}
                        >
                            {this.getTime(item.from)}
                        </Grid>

                        <Grid item
                              container
                              justifyContent="center"
                              xs={4}
                        >
                            {this.getTime(item.to)}
                        </Grid>


                    </Grid>
                })
                }
            </Grid>
        </Container>
    }

}


function mapStateToProps(state) {
    return {
        worklogs: state.worklog.worklogs,
        loading: state.worklog.loading,
        doctorsName: state.worklog.doctorsName,
        doctorsId: state.worklog.doctorsId,

    }
}


function mapDispatchToProps(dispatch) {
    return {
        getAllWorklogs: () => dispatch(getAllWorklogs()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(WorkLog)
