import React, {useState, useRef} from 'react';
import {StyleSheet, FlatList, View, TextInput, Image, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
// import {taskAdded, taskToggled} from '../../store/tasksSlice';
// import {RootState} from '../../store/store';
// import {Task} from '../store/tasksSlice';
// import {Task} from '../../store/tasksSlice';

import {useTheme} from '../../../theme/useTheme';
import Layout from '../../../components/Layout';
// import Card from '../../components/Card';
// import ListItem from '../../components/ListItem';

type event = {
  text: string;
};

const Event = (props: event) => {
  const {theme} = useTheme();

  const inputRef = useRef<TextInput>(null);

  // const loadingStatus = useSelector((state) => state.todos.status);
  const dispatch = useDispatch();

  const [text, setText] = useState('');

  //   const addNewTask = () => {
  //     let temp = text.trim();
  //     if (temp !== '') {
  //       dispatch(taskAdded({id: Date.now(), title: temp, done: false}));
  //     }
  //     inputRef.current?.clear();
  //   };

  //   const onCheckedHandler = (id: string) => {
  //     dispatch(taskToggled(id));
  //   };

  //   const renderItem = ({item, index}: {item: Task; index: number}) => (
  //     <ListItem item={item} index={index} onPress={onCheckedHandler} />
  //   );

  //   const keyExtractor = (item: Task) => `task-${item.id}`;

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: 'https://via.placeholder.com/150'}}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </View>
  );
};

export default Event;

const styles = StyleSheet.create({
  card: {
    elevation: 3,
    shadowColor: '#000000',
    backgroundColor: '#C9D8E5',
    borderBottomStartRadius: 7,
    width: '93%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginLeft: 13,
    marginBottom: 13,
    borderRadius: 10,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 2,
    alignItems: 'flex-start',
  },
  text: {
    fontFamily: 'Cochin',
    // font-family: 'Inter',
    // font-style: normal,
    // line-height: 150%,
    lineHeight: 70,
    fontWeight: '700',
    color: '#0D0F44',
    fontSize: 22,
    textAlign: 'center',
  },
});
