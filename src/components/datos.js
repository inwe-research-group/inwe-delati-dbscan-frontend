import React, { Component } from "react";

export class Datos extends Component {

    render() {
        const tablescroll = {
            position: 'relative',
            height: '600px',
            overflow: 'auto',
            display: 'block',
            fontSize: '12px'
        }
        const theadfix = {
            position: 'sticky',
            top: '0',
            left: '0',
        }
        return (
            <div className="table-responsive">
                <table className="table table-striped table-bordered table-sm" style={tablescroll}>
                    <thead style={theadfix} className="table-dark">
                        <tr>
                            {this.props.numColumn.map((columna) => {
                                return  (  <th>{Object.values(columna)}</th>)      
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map((element) => (
                            <tr>
                                {Object.values(element).map((objeto)=>{
                                    //console.log(objeto)
                                   return ( <td>{objeto}</td> )
                            })}  
                            </tr>
                        ))
                        }
                    </tbody>
                </table>

            </div>
        )

    }
}