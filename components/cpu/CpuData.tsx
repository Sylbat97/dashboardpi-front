import React, { Component } from 'react'
import { View, Text, TimerMixin } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Cpu, getCpuData } from '../../api/CpuApi';
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

const chartConfig = {
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`, // color of text
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

interface IProps {
}

interface IState {
    Cpu: Cpu
}


export class CpuData extends Component<IProps, IState> {

    data = {
        datasets: [
            {
                data: [0,0,0,0,0,0,0,0,0,0],
                color: () => `rgba(134, 65, 244, 0.6)`, // color of data
                strokeWidth: 3 // optional
            },
            {
                data: [100,0],
                color: (opacity = 0) => `rgba(0, 0, 0, 0)`, // color of data
                strokeWidth: 0 // optional
            }
        ],
        legend: ["CPU Usage"] // optional
    };

    refreshData = () => {
        getCpuData().then((cpu) => {
            let array = this.data.datasets[0].data
            array.push(cpu.Usage);
            if(array.length > 10){
                array.splice(0, 1)
            }
            this.setState({
                Cpu: cpu
            })
        })
    }
    /**
     *
     */
    constructor(props: IProps) {
        super(props);
        this.state = {
            Cpu: {
                Temp: 0,
                Usage: 0
            }
        }
        this.refreshData();
        setInterval(() => {
            this.refreshData();
        }, 5000)
    }
    render() {
        if (!this.state.Cpu) {
            return (<View><Text>loading data</Text></View>)
        }
        return (
            <View>
                <Text>Temp : {this.state.Cpu.Temp} C°</Text>
                <LineChart
                    data={this.data}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                    fromZero={true}
                    withDots={true}
                    withInnerLines={false}
                    segments={5}
                    hidePointsAtIndex={[0,1,2,3,4,5,6,7,8,9]}
                    withShadow={false}
                />
            </View>
        )
    }
}

export default CpuData
