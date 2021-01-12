import React, { useState, useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import { AboutPageView } from '../containers/';

export default () => {

    const [animated, setAnimated] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(animated, {
            toValue: 1,
            duration: 1000
        }).start()
    })

    return (
        <Animated.View style={{flex: 1, opacity: animated}} >
            <AboutPageView />
        </Animated.View >
    )
}; 
