
import { getPartitions, Partition } from '../../api/DiskApi';
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PartitionData from './PartitionData';

interface IProps {
}

interface IState {
    Partitions: Partition[]
}

export default class DiskDataList extends Component<IProps, IState> {

    constructor(prop: IProps) {
        super(prop);
        this.state = {
            Partitions: []
        }
        getPartitions().then((partitions) => {
            this.setState({
                Partitions: partitions
            })
        })
    }

    render() {
        return (
            <View>
                {this.state.Partitions.map(p => <PartitionData partition={p}></PartitionData>)}
            </View>
        )
    }
}
