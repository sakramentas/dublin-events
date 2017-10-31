import React from 'react';
import moment from 'moment';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import { DateTimeBox } from '../DateTimeBox';
import {
  getEventTitle,
  getEventImage,
  getEventDateTime,
} from '../selectors';

const EventCard = ({ event, handleEventClick }) => {
  const {
    eventCard,
    eventBgImg,
    coverOverlay,
    eventInfo,
    eventInfoLeft,
    eventTitle,
    subtext,
    subtext2,
    eventInfoRight,
  } = styles;

  const triggerClick = () => {
    handleEventClick(event.id);
  };

  return (
    <TouchableOpacity
      style={eventCard}
      key={event.id}
      onPress={triggerClick}
    >
      <Image
        source={{ uri: getEventImage(event) }}
        style={eventBgImg}
      />
      <View style={coverOverlay} />
      <View style={eventInfo}>
        <View style={eventInfoLeft}>
          <Text
            style={eventTitle}
            numberOfLines={1}
          >
            {getEventTitle(event)}
          </Text>
          <Text style={subtext}> {moment(getEventDateTime(event)).format('LT')}</Text>
        </View>
        <View style={eventInfoRight}>
          <DateTimeBox dateTime={getEventDateTime(event)} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;

