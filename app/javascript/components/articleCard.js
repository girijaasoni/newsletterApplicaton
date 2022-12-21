import React from 'react';
import { Card, CardTitle, CardBody, CardFooter, Text, TextVariants } from '@patternfly/react-core';
import '@patternfly/react-core/dist/styles/base.css';
import colors from '../utils/colors';
const styles = {
  card: {
    borderRadius: 10,
    margin: '1%'
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
    marginInline: 20,
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
    <>
      <Card style={styles.card} onClick={onCardClick}>
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
    </>
  );
};
export default ArticleCard;
