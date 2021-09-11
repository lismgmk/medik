import React, {Component} from "react";
import {getAllEmployes} from "./employesReducer";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {actionsForWorkLog} from "../Worklog/worklogReducer";
import {CircularProgress, Container, Grid} from "@material-ui/core";
import s from "./employe.module.css"

class Employes extends Component {

    state = {
        filter: 'upName'
    }

    componentDidMount() {
        this.props.getAllEmployes()
    }

    dateCurrent(date) {
        let getDate = new Date(date)
        return getDate.toLocaleDateString()
    }

    sendDoctorsName(name, id) {
        this.props.doctorsName(name)
        this.props.doctorsId(id)
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


        let filterValue = this.props.employes

        if (filterValue && this.state.filter === 'upId') {
            filterValue = this.props.employes.sort((a, b) => {
                return a.id > b.id ? 1 : -1
            })
        }
        if (filterValue && this.state.filter === 'downId') {
            filterValue = this.props.employes.sort((a, b) => {
                return a.id < b.id ? 1 : -1
            })
        }
        if (filterValue && this.state.filter === 'upName') {
            filterValue = this.props.employes.sort((a, b) => {
                return a.firstName > b.firstName ? 1 : -1
            })
        }
        if (filterValue && this.state.filter === 'downName') {
            filterValue = this.props.employes.sort((a, b) => {
                return a.firstName < b.firstName ? 1 : -1
            })
        }
        if (filterValue && this.state.filter === 'upLastName') {
            filterValue = this.props.employes.sort((a, b) => {
                return a.lastName > b.lastName ? 1 : -1
            })
        }
        if (filterValue && this.state.filter === 'downLastName') {
            filterValue = this.props.employes.sort((a, b) => {
                return a.lastName < b.lastName ? 1 : -1
            })
        }
        if (filterValue && this.state.filter === 'upMiddleName') {
            filterValue = this.props.employes.sort((a, b) => {
                return a.middleName > b.middleName ? 1 : -1
            })
        }
        if (filterValue && this.state.filter === 'downMiddleName') {
            filterValue = this.props.employes.sort((a, b) => {
                return a.middleName < b.middleName ? 1 : -1
            })
        }
        if (filterValue && this.state.filter === 'upDate') {
            filterValue = this.props.employes.sort((a, b) => {
                return new Date(Date.parse(a.birthDate)) > new Date(Date.parse(b.birthDate)) ? 1 : -1
            })
        }
        if (filterValue && this.state.filter === 'downDate') {
            filterValue = this.props.employes.sort((a, b) => {
                return new Date(Date.parse(a.birthDate)) < new Date(Date.parse(b.birthDate)) ? 1 : -1
            })
        }


        return <Container>

            <Grid container
                  spacing={1}
            >


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
                          xs={3}

                    >

                        <h3>Номер(id)</h3>

                        <div className={s.containerArrows}>
                            <div
                                className={`${s.arrows} ${s.arrowsUp}`}
                                onClick={() => {
                                    this.setState({
                                        filter: 'upId'
                                    })
                                }}/>
                            <div
                                className={`${s.arrows} ${s.arrowsDown}`}
                                onClick={() => {
                                    this.setState({
                                        filter: 'downId'
                                    })
                                }}/>
                        </div>

                    </Grid>

                    <Grid item
                          container
                          justifyContent="flex-start"

                          xs={2}
                    >
                        <h3>Имя</h3>
                        <div className={s.containerArrows}>
                            <div
                                className={`${s.arrows} ${s.arrowsUp}`}
                                onClick={() => {
                                    this.setState({
                                        filter: 'upName'
                                    })
                                }}/>
                            <div
                                className={`${s.arrows} ${s.arrowsDown}`}
                                onClick={() => {
                                    this.setState({
                                        filter: 'downName'
                                    })
                                }}/>
                        </div>
                    </Grid>
                    <Grid item
                          container
                          justifyContent="flex-start"

                          xs={2}
                    >
                        <h3>Фамилия</h3>
                        <div className={s.containerArrows}>
                            <div
                                className={`${s.arrows} ${s.arrowsUp}`}
                                onClick={() => {
                                    this.setState({
                                        filter: 'upLastName'
                                    })
                                }}/>
                            <div
                                className={`${s.arrows} ${s.arrowsDown}`}
                                onClick={() => {
                                    this.setState({
                                        filter: 'downLastName'
                                    })
                                }}/>
                        </div>
                    </Grid>
                    <Grid item
                          container
                          justifyContent="flex-start"

                          xs={2}
                    >
                        <h3>Отчество</h3>
                        <div className={s.containerArrows}>
                            <div
                                className={`${s.arrows} ${s.arrowsUp}`}
                                onClick={() => {
                                    this.setState({
                                        filter: 'upMiddleName'
                                    })
                                }}/>
                            <div
                                className={`${s.arrows} ${s.arrowsDown}`}
                                onClick={() => {
                                    this.setState({
                                        filter: 'downMiddleName'
                                    })
                                }}/>
                        </div>
                    </Grid>
                    <Grid item
                          container
                          justifyContent="center"
                          xs={3}
                    >
                        <h3>Дата рождения</h3>
                        <div className={s.containerArrows}>
                            <div
                                className={`${s.arrows} ${s.arrowsUp}`}
                                onClick={() => {
                                    this.setState({
                                        filter: 'upDate'
                                    })
                                }}/>
                            <div
                                className={`${s.arrows} ${s.arrowsDown}`}
                                onClick={() => {
                                    this.setState({
                                        filter: 'downDate'
                                    })
                                }}/>
                        </div>
                    </Grid>
                </Grid>


                {filterValue && filterValue.map(i => {
                    return <Grid container

                                 style={
                                     {
                                         fontSize: "18px",
                                         padding: "10px 0",
                                         margin: "10px 0",
                                         backgroundColor: 'rgb(207, 232, 252)',
                                     }}
                    >
                        <Grid item
                              container
                              justifyContent="center"
                              xs={3}
                        >
                            {i.id}
                        </Grid>
                        <Grid item
                              container
                              justifyContent="flex-start"
                              xs={2}
                        >
                            <NavLink
                                style={
                                    {
                                        textDecoration: "none", color: "black", fontSize: "18px"
                                    }}
                                to={"/worklog"}
                                onClick={
                                    () => this.sendDoctorsName(`${i.firstName} ${i.lastName} ${i.middleName}`, i.id)
                                }
                            >

                                {i.firstName}
                            </NavLink>
                        </Grid>


                        <Grid item
                              container
                              justifyContent="flex-start"
                              xs={2}
                        >
                            <NavLink
                                to={"/worklog"}
                                style={
                                    {
                                        textDecoration: "none", color: "black", fontSize: "18px"
                                    }}
                                onClick={
                                    () => this.sendDoctorsName(`${i.firstName} ${i.lastName} ${i.middleName}`, i.id)
                                }
                            >
                                {i.lastName}
                            </NavLink>
                        </Grid>

                        <Grid item
                              container
                              justifyContent="flex-start"
                              xs={2}
                        >
                            <NavLink
                                to={"/worklog"}
                                style={
                                    {
                                        textDecoration: "none", color: "black", fontSize: "18px"
                                    }}
                                onClick={
                                    () => this.sendDoctorsName(`${i.firstName} ${i.lastName} ${i.middleName}`, i.id)
                                }
                            >
                                {i.middleName}
                            </NavLink>
                        </Grid>

                        <Grid item
                              container
                              justifyContent="center"
                              xs={3}
                        >
                            {this.dateCurrent(i.birthDate)}
                        </Grid>
                    </Grid>
                })}
            </Grid>
        </Container>
    }
}

function mapStateToProps(state) {
    return {
        employes: state.employes.employes,
        loading: state.employes.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllEmployes: () => dispatch(getAllEmployes()),
        doctorsName: (name) => dispatch(actionsForWorkLog.doctorsName(name)),
        doctorsId: (id) => dispatch(actionsForWorkLog.doctorsId(id)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Employes)
