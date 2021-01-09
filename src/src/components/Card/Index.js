import React, { useState } from 'react'
import { View, Text, Animated, TouchableOpacity, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import Circle from '../CircleTimeout';
import { CardStyle } from './style';

function Card({ typeContent, content, style, size, isFaceUp, onSelected, afterClosure }) {
  const dowFace = !isFaceUp ? CardStyle.isDowFace : null;
  const area = size;
  const handleAfterEvent = () => {
    if (afterClosure instanceof Function) {
      afterClosure()
    }
  }

  const handleAnaimatedCard = () => {
    if (onSelected instanceof Function) {
      onSelected()
    }
  };



  return (
    <TouchableOpacity
      onPress={handleAnaimatedCard}
      style={[CardStyle.container, dowFace, { height: area, width: area }]}>
      <View>
        {isFaceUp && (
          <Circle
            size={( area / 2.5)}
            afterEvent={handleAfterEvent}
            internval={5000}>
            <CardContent type={typeContent} content={content} />
          </Circle>
        )}
      </View>
    </TouchableOpacity>
  );
}

export function CardContent({ type, content }) {
  if (type == 'text') {
    return <Text style={CardStyle.text}>{content}</Text>
  } else if (type === 'image') {
    return <></>
  } else if (type === 'color') {
    return <View style={{ backgroundColor: content, width: '100%', height: '100%' }} />
  }
  return <></>
  return <Text style={CardStyle.text}>{content}</Text>
}

Card.propTypes = {
  content: PropTypes.string,
  style: ViewPropTypes.style,
  size: PropTypes.number,
  onSelected: PropTypes.func,
  afterClosure: PropTypes.func,
  isFaceUp: PropTypes.bool
}

export default Card;