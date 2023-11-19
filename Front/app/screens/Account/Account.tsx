import React, {useState, useRef} from 'react';
import {StyleSheet, FlatList, View, TextInput, Image, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useTheme} from '../../theme/useTheme';
import {LeaveBtn} from './Main/accountLeaveBtn';
import AccAction from './Main/accountAction';
// import {AccHeader} from './Header/AccountHeader';
type center = {
  text: string;
  citys: string;
  photoLink: string;
};

const Account = () => {
  const {theme} = useTheme();

  const inputRef = useRef<TextInput>(null);

  const dispatch = useDispatch();

  const [text, setText] = useState('');

  //   <View style={styles.auto_layer_row_1}>
  //   <Text style={styles.stepan_bandera}>Stepan Bandera</Text>
  //   <View style={styles.setting} />
  // </View>
  // <Text style={styles.phone_number}>+38 (091) 234 56 78</Text>
  // <Text style={styles.additional_features}>Додаткові можливості</Text>
  // <View style={styles.line} />
  // <View style={styles.frame}>
  //   <View style={styles.auto_layer_row_2}>
  //     <View style={styles.rectangle_3} />
  //     <View style={styles.iconly}>
  //       <View style={styles.document} />
  //     </View>
  //     <Text style={styles.tell_about_needs}>Розповісти про потреби</Text>
  //   </View>
  // </View>
  return (
    <View style={styles.card}>
      {/* <AccHeader /> */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>додаткові можливості</Text>
        <AccAction
          text={'Розповісти про потреби'}
          imgUrl={'ddf'}
          linkTo={'Tell'}
        />
        <AccAction text={'Написати відгук'} imgUrl={'ddf'} linkTo={'Tell'} />
        <AccAction
          text={'Поділитися застосунком'}
          imgUrl={'ddf'}
          linkTo={'Tell'}
        />
      </View>
      <LeaveBtn />
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 2,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});
