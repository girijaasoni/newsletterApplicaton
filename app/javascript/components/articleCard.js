import React from 'react';
import { Card, CardTitle, CardBody, CardFooter, Text, TextVariants } from '@patternfly/react-core';
import colors from '../utils/colors';
import PropTypes from 'prop-types';
import PfButton from './pfButton';
const styles = {
  card: {
    borderRadius: 10,
    margin: '1%',
    padding: 20
  },
  btn: {
    marginRight: 10,
    padding: '5px'
  },
  titleText: {
    color: colors.appBlue,
    alignItems: 'center',
    justifySelf: 'flex-start',
    fontSize: 30,
    flexWrap: 'wrap',
    textAlign: 'left',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  thumbnailImg: {
    borderRadius: 10,
    marginBottom: 10,
    maxHeight: '300px',
    minHeight: '200px'
  },
  body: { color: colors.appGrey, alignSelf: 'center', fontSize: 20, marginBottom: '2%' }
};
const ArticleCard = ({ id, title, body, thumbnail, onShowClick, onDeleteClick }) => (
  <Card style={styles.card} id={id}>
    <CardTitle>
      <Text component={TextVariants.h2} style={styles.titleText}>
        {title}
      </Text>
    </CardTitle>
    <img src={thumbnail} style={styles.thumbnailImg} />
    <CardBody>
      <Text style={styles.body}>{body}</Text>
    </CardBody>
    <CardFooter>
      <PfButton
        style={styles.btn}
        buttonText="show"
        isSmall
        variant="primary"
        onBtnClick={onShowClick}
      />
      <PfButton style={styles.btn} buttonText="edit" isSmall variant="secondary" />
      <PfButton
        style={styles.btn}
        buttonText="delete"
        isSmall
        variant="danger"
        onBtnClick={onDeleteClick}
      />
    </CardFooter>
  </Card>
);

ArticleCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onShowClick: PropTypes.func.isRequired
};
export default ArticleCard;
