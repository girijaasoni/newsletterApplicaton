import React from 'react';
import { useLocation } from 'react-router-dom';
import { Text } from '@patternfly/react-core';
import colors from '../utils/colors';
import previewImage from '../../assets/images/img1.png';
const styles = {
  title: {
    textAlign: 'center',
    alignSelf: 'center',
    color: colors.appBlue,
    fontSize: '50px',
    fontWeight: 'bolder',
    marginInline: '10%'
  },
  img: {
    marginInline: '25%',
    marginTop: '2%',
    marginBottom: '2%',
    borderRadius: 10
  },
  body: {
    textAlign: 'center',
    alignSelf: 'center',
    color: colors.appGrey,
    fontSize: '30px',
    marginInline: '20%'
  }
};
const FullArticle = () => {
  const {
    state: {
      article: { title, body }
    }
  } = useLocation();
  return (
    <>
      <Text style={styles.title}>{title}</Text>

      <img src={previewImage} width={'500px'} style={styles.img} />

      <Text style={styles.body}>{body}</Text>
    </>
  );
};
export default FullArticle;
