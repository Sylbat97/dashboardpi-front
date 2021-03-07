
import { getPartitions, Partition } from '../../api/DiskApi';
import React, { Component } from 'react'
import { Text, View, Dimensions } from 'react-native'
import { PieChart } from 'react-native-chart-kit';
import { Card } from 'react-native-elements'
import * as Progress from 'react-native-progress';

interface IData {
    name: string,
    value: number,
    color: string
}

interface IProps {
    partition: Partition
}

interface IState {

}

interface IConversion {
    value: number, 
    unit: string
}

export default class PartitionData extends Component<IProps, IState> {

    constructor(prop: IProps) {
        super(prop);
    }

    convert = (size: number): IConversion => {
        //Convert KB
        size = size / 1024
        let unit = 'MB'
        if(size > 1024){
            size = size / 1024
            unit = 'GB'
        }
        let result: IConversion = {
            value: size,
            unit: unit
        }
        return result
    }

    render() {
        let size = this.convert(this.props.partition.Size)
        let used = this.convert(this.props.partition.Used)
        let available = this.convert(this.props.partition.Avail)
        return (
            <View>
                <Card>
                    <Card.Title>{this.props.partition.MountPoint}</Card.Title>
                    <Card.Divider />
                    <View>    
                        <Text>Filesystem : {this.props.partition.FileSystem}</Text>
                        <Text>Type : {this.props.partition.Type}</Text>
                        <Text>Size : {(size.value).toFixed(2)} {size.unit}</Text>
                        <Text>Used : {(used.value).toFixed(2)} {used.unit}</Text>
                        <Text>Available : {(available.value).toFixed(2)} {available.unit}</Text>
                    <Progress.Bar 
                    progress={this.props.partition.Percentage / 100} 
                    width={Dimensions.get("window").width - 50}
                    color='rgba(191,63,63,1)' />  
                    </View>
                </Card>
                
            </View>
        )
    }
}
