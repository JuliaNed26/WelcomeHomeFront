import React, {useState, useRef} from 'react';
import {StyleSheet, FlatList, View, TextInput, Image, Text} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {taskAdded, taskToggled} from '../../store/tasksSlice';
import {RootState} from '../../store/store';
// import {Task} from '../store/tasksSlice';
import {Task} from '../../store/tasksSlice';

import {useTheme} from '../../theme/useTheme';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import ListItem from '../../components/ListItem';
import Event from './Events/event';

const Help = () => {
  const {theme} = useTheme();

  const inputRef = useRef<TextInput>(null);

  const todoList = useSelector((state: RootState) => state.todos.entities);
  // const loadingStatus = useSelector((state) => state.todos.status);
  const dispatch = useDispatch();

  const [text, setText] = useState('');

  const addNewTask = () => {
    let temp = text.trim();
    if (temp !== '') {
      dispatch(taskAdded({id: Date.now(), title: temp, done: false}));
    }
    inputRef.current?.clear();
  };

  const onCheckedHandler = (id: string) => {
    dispatch(taskToggled(id));
  };

  const renderItem = ({item, index}: {item: Task; index: number}) => (
    <ListItem item={item} index={index} onPress={onCheckedHandler} />
  );

  const keyExtractor = (item: Task) => `task-${item.id}`;

  return (
    <Layout>
      <Card
        style={[styles.inputCard, {borderTopColor: theme?.cardBorderColor}]}>
        {/* TextInput and InputButton starts here */}
        <View style={styles.inputBtnRow}>
          <View style={styles.inputBtnWrp}>
            <TextInput
              ref={inputRef}
              placeholder="Знайти підтримку"
              placeholderTextColor={theme?.color}
              style={[
                styles.input,
                {
                  color: theme?.color,
                  backgroundColor: theme?.layoutBg,
                  borderColor: theme?.layoutBg,
                },
              ]}
              onChangeText={t => setText(t)}
              onSubmitEditing={() => addNewTask()}
            />
          </View>
        </View>
        {/* TextInput and InputButton ends here */}
      </Card>
      <View
        style={[
          {
            marginBottom: 25,
            marginTop: 20,
            marginLeft: 30,
            backgroundColor: theme?.layoutBg,
          },
        ]}>
        {/* <Text
          style={[
            {
              color: 'blue',
              fontSize: 20,
            },
          ]}>
          Категорії
        </Text> */}
      </View>
      <Event text={'Психологічні служби'} />
      <Event text={'Групи підтримки'} />
      <Event text={'Благодійні заходи'} />

      {/* Tasks Listing starts here */}
      {/* <FlatList
        data={todoList}
        renderItem={renderItem} 
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.flatList}
      /> */}
      {/* Tasks Listing ends here */}
    </Layout>
  );
};

export default Help;

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  flatList: {
    paddingHorizontal: 12,
    paddingVertical: 30,
  },
  tickIcon: {
    width: 22,
    height: 22,
  },
  inputCard: {
    borderTopWidth: StyleSheet.hairlineWidth,
    elevation: 4,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  inputBtnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputBtnWrp: {
    flexDirection: 'row',
    flex: 1,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    flex: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 14,
    height: 45,
    backgroundColor: '#f6f6f6',
  },
  btnAdd: {
    borderRadius: 20,
    padding: 6,
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0071ff',
    color: '#fff',
    height: 38,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  btnAddText: {
    color: '#fff',
    fontSize: 14,
  },
  btnClear: {
    borderRadius: 2,
    paddingVertical: 5,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: StyleSheet.hairlineWidth,
    // borderColor: '#c50e29',
    marginRight: 8,
  },
  btnClearText: {
    color: '#c50e29',
    fontSize: 14,
  },
});
