import React from 'react';
import { Gallery, GalleryItem, Text } from '@patternfly/react-core';
import ArticleCard from '../components/articleCard.js';
import previewImage from '../../assets/images/img1.png';
import colors from '../utils/colors.js';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
const styles = {
  headerText: {
    fontWeight: 'bolder',
    textAlign: 'center',
    flex: 1,
    color: colors.appDarkBlue,
    fontSize: '50px'
  }
};
const Home = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get('/articles', {
        headers: {
          'content-type': 'application/json'
        }
      })
      .then((response) => {
        setArticles(response.data);
      })
      .catch((response) => console.log(response));
  }, [articles.length]);

  return (
    <>
      <Text style={styles.headerText}>Articles for you!!!</Text>
      <Gallery
        hasGutter
        style={{ marginInline: '3%' }}
        span={3}
        min={2}
        minWidths={{
          sm: '250px',
          md: '300px',
          lg: '350px',
          xl: '300px',
          '2xl': '500px'
        }}>
        {articles.map((item) => {
          return (
            <GalleryItem key={`article-${item.id}`}>
              <ArticleCard
                id={item.id}
                title={item.title}
                body={item.body}
                footer={item.date}
                onCardClick={() =>
                  navigate(`/articles/${item.id}`, {
                    state: {
                      article: item
                    }
                  })
                }
                thumbnail={previewImage}
              />
            </GalleryItem>
          );
        })}
      </Gallery>
    </>
  );
};
export default Home;
