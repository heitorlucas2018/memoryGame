import React from 'react'
import { Text, View, ViewPropTypes } from 'react-native';
import ProgressCircle from 'react-native-progress-circle'
import PropTypes from 'prop-types';

import { Colors } from '../../helpers/utils'

class CircleTime extends React.Component {

    static propTypes = {
        children: PropTypes.object,
        afterEvent: PropTypes.func,
        interval: PropTypes.number,
        style: ViewPropTypes.style,
        size: PropTypes.number.isRequired
    }

    state = {
        time: 1000,
        clockTime: null,
        interval: 5000, 
        percent: 0,
    }

    componentDidMount() {
        this.state.clockTime = setInterval(() => {
            const { percent } = this.state
            if (percent < 100) {
                this.setState({ percent: (percent + 1) })
            } else {
                this.stop()
                if (this.props.afterEvent) {
                    this.props.afterEvent()
                }
            }
        }, this.getInterval())
    }

    componentWillUnmount() {
        this.stop();
    }

    stop() {
        clearInterval(this.state.clockTime)
    }

    getInterval() {
        return this.state.interval / 100
    }

    render() {
        const { percent } = this.state
        const { size } = this.props

        return (
            <ProgressCircle
                percent={(percent || 0)}
                radius={(size || 50)}
                borderWidth={7}
                color={Colors.progress}
                shadowColor={Colors.with}
                bgColor={Colors.with}
            >
                {this.props.children}
            </ProgressCircle>
        )
    }
}


export default CircleTime;