
import { getPartitions, Partition } from '../../api/DiskApi';
import React, { Component } from 'react'
import { Text, View } from 'react-native'

interface IProps {
    partition: Partition
}

interface IState {
    
}

export default class PartitionData extends Component<IProps, IState> {

    constructor(prop: IProps) {
        super(prop);
    }

    render() {
        return (
            <View>
                <Text>{this.props.partition.FileSystem} : {this.props.partition.MountPoint} : {this.props.partition.Percentage}</Text>
            </View>
        )
    }
}
