import React, {Component} from "react";
import {getAllWorklogs} from "./worklogReducer";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

class WorkLog extends Component {


    componentDidMount() {
        this.props.getAllWorklogs()
    }

//     getDoctorsLogs(){
// let doctor = this.props.worklogs.filter(i => {
//     return i.employee_id === this.props.doctorsId
// })
//
//             this.setState({
//                 doctorsLogs: doctor
//             })
//
//
//     }

    render() {
        const {loading} = this.props;

        if (loading) {
            return "Loading...";
        }
        let doctor
        if(this.props.worklogs){
            doctor = this.props.worklogs.filter(i => {
                return i.employee_id === this.props.doctorsId
            })
        }


        console.log( this.props.worklogs)
        return <div>
            <NavLink to={"/employes"}>К списку врачей</NavLink>
            <div>
                {this.props.doctorsName}
            </div>

            {doctor && doctor.map(item => {
                return <div>
                    <div>
                        Ушел в {item.from}
                    </div>
                    <div>
                        Пришел в {item.to}
                    </div>
                </div>
            })}

        </div>;
    }

}

function mapStateToProps(state) {
    return {
        worklogs: state.worklog.worklogs,
        loading: state.worklog.loading,
        doctorsName: state.worklog.doctorsName,
        doctorsId: state.worklog.doctorsId
    }
}


function mapDispatchToProps(dispatch) {
    return {
        getAllWorklogs: () => dispatch(getAllWorklogs())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(WorkLog)
