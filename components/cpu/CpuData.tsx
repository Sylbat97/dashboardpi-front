import React, { Component } from 'react'
import { View, Text } from 'react-native';
import { Cpu, getCpuData } from '../../api/CpuApi';

interface IProps {
}

interface IState {
    Cpu: Cpu
}
export class CpuData extends Component<IProps, IState> {

    /**
     *
     */
    constructor(props: IProps) {
        super(props);
        this.state = {

        }
        getCpuData().then((cpu) => {
            console.log(cpu)
            this.setState({
                Cpu: cpu
            })
        })
    }
    render() {
        console.log(this.state)
        if (!this.state.Cpu) {
            return (<View><Text>loading data</Text></View>)
        }
        return (
            <View>
                <Text>Temp : {this.state.Cpu.Temp}</Text>
                <Text>Usage : {this.state.Cpu.Usage}</Text>
            </View>
        )
    }
}

export default CpuData
