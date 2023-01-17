import React from 'react';
import { Card, CardTitle, CardBody, CardFooter, Text, TextVariants } from '@patternfly/react-core';
import colors from '../utils/colors';
import PropTypes from 'prop-types';
const styles = {
  card: {
    borderRadius: 10,
    margin: '1%',
    padding: 20
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
  body: { color: colors.appGrey, alignSelf: 'center', fontSize: 20 },
  footer: { color: colors.appLightGrey, alignSelf: 'flex-end', margin: 5, fontSize: 10 }
};
const ArticleCard = ({ id, title, body, footer, thumbnail, onCardClick }) => {
  return (
    <Card style={styles.card} onClick={onCardClick} id={id}>
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
        <Text style={styles.footer}>{footer}</Text>
      </CardFooter>
    </Card>
  );
};
ArticleCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  onCardClick: PropTypes.func.isRequired
};
export default ArticleCard;
