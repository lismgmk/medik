import React, {Component} from "react";
import {getAllEmployes} from "./employesReducer";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {actionsForWorkLog} from "../Worklog/worklogReducer";

class Employes extends Component {

    state = {
        filter: 'lastName'
    }

    componentDidMount() {
        this.props.getAllEmployes()
    }

    dateCurrent(date) {
        return date.slice(0, 10).split('-').reverse().join('-')
    }

    sendDoctorsName(name, id){
        this.props.doctorsName(name)
        this.props.doctorsId(id)
    }

    render() {

        const {loading} = this.props;

        if (loading) {
            return "Loading...";
        }

        let filterValue = this.props.employes

        if (filterValue && this.state.filter === 'name') {
            filterValue = this.props.employes.sort((a, b) => {
                return a.firstName > b.firstName ? 1 : -1
            })
        }
        if (filterValue && this.state.filter === 'lastName') {
            filterValue = this.props.employes.sort((a, b) => {
                return a.lastName > b.lastName ? 1 : -1
            })
        }

        return <div>
            <button onClick={() => {
                this.setState({
                    filter: 'name'
                })
            }}>lastName
            </button>
            {filterValue && filterValue.map(i => {
                return <div>
                    <NavLink
                        to={"/worklog"}
                        onClick={
                            ()=> this.sendDoctorsName(`${i.firstName} ${i.lastName} ${i.middleName}`, i.id)
                        }
                    >
                        {`${i.firstName} ${i.lastName} ${i.middleName}`}
                    </NavLink>
                    {this.dateCurrent(i.birthDate)}
                </div>
            })}
        </div>;
    }
}

function mapStateToProps (state){
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
