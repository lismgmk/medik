import React, {Component} from "react";
import {getAllWorklogs} from "./worklogReducer";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

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

        return console.log(doctor)
    }

    render() {
        const {loading} = this.props;

        if (loading) {
            return "Loading...";
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

        console.log(this.props.worklogs)
        console.log(doctor)
        console.log(dataAllDoctorsWithout)
        return <div>
            <NavLink to={"/employes"}>К списку врачей</NavLink>
            <div>
                {this.props.doctorsName}
            </div>

            {doctor && doctor.map(item => {
                return <div style={{color: item.counter > 2 ? 'red' : ''}}>
                    <div>
                        Ушел в {item.from}
                    </div>
                    <div>
                        Пришел в {item.to}
                    </div>
                </div>
            })
            }

        </div>
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
