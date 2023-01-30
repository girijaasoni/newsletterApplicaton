import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ArticleCard from '../components/articleCard.js';
import '@patternfly/react-core/dist/styles/base.css';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';
import previewImage from '../../assets/images/img1.png';
import colors from '../utils/colors.js';
import { Gallery, GalleryItem, Text, Button } from '@patternfly/react-core';
import ArticleForm from '../components/ArticleForm.js';

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
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen((prevValue) => !prevValue);
  };
  const handleDelete = (id) => {
    axios
      .delete(`/articles/${id}`)
      .then((response) => {
        console.log(response);
        console.log('item was deleted!');
      })
      .catch((response) => console.log(response));
  };

  useEffect(() => {
    axios
      .get('/articles')
      .then((response) => {
        setArticles(response.data);
      })
      .catch((response) => console.log(response));
  }, [articles.length]);

  return (
    <>
      <Text style={styles.headerText}>Satellite Newsletter</Text>
      <React.Fragment>
        <Button variant="link" icon={<PlusCircleIcon />} onClick={handleModalToggle}>
          Create Article
        </Button>
        <ArticleForm isOpen={isModalOpen} handleModalToggle={handleModalToggle} />
      </React.Fragment>

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
        {articles.map(({ id, title, body, date }) => {
          return (
            <GalleryItem key={`article-${id}`}>
              <ArticleCard
                id={id}
                title={title}
                body={body}
                onShowClick={() =>
                  navigate(`/articles/${id}`, {
                    state: {
                      article: {
                        id: id,
                        title: title,
                        body: body,
                        date: date
                      }
                    }
                  })
                }
                onDeleteClick={() => handleDelete(id)}
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
