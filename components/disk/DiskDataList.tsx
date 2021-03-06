
import { getPartitions, Partition } from '../../api/DiskApi';
import React, { Component } from 'react'
import { Text, View } from 'react-native'

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
        console.log('render')
        console.log(this.state.Partitions)
        return (
            <View>
                {this.state.Partitions.map(p => <Text>{p.FileSystem} : {p.Percentage}</Text>)}  
            </View>
        )
    }
}
