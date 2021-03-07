
import { getPartitions, Partition } from '../../api/DiskApi';
import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import CpuData from '../cpu/CpuData';

interface IProps {
}

interface IState {
}

export default class OverviewContainer extends Component<IProps, IState> {

    constructor(prop: IProps) {
        super(prop);
        this.state = {
          
        }
    }

    render() {
        return (
            <CpuData></CpuData>
        )
    }
}
