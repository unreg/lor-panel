import { store } from '../store';
import { setNavigatorVisitedList,
         setNavigatorVisitedLast } from '../components/navigator/actions';


const lastCommentOnPage = () => {
  const articles = [...document.querySelectorAll('article.msg')]
    .filter(article => article.id.indexOf('comment') !== -1);
  return articles.length && articles[articles.length - 1] || '';
};

const getTopic = () => {
  const articles = [...document.querySelectorAll('article.msg')]
    .filter(article => article.id.indexOf('topic') !== -1 );
  return articles.length === 1 && articles[0] || {};
};


export const goToLastComment = () => {
  const topic = getTopic();
  if (topic.id) {
    const { visited, visited_last } = store.getState().NavigatorState.NavigatorData;
    const id = parseInt(topic.id.split('-')[1], 10);

    if (visited.indexOf(id) === -1) {
      visited.unshift(id);
    } else {
      if (Object.keys(visited_last).indexOf(`${id}`) === -1) {

      } else {
        const { comment } = visited_last[id];
        const articles = [...document.querySelectorAll('article.msg')]
          .filter(article => article.id === `comment-${comment}`);
        if (articles.length === 1) {
          window.scroll(0, articles[0].offsetTop)
        }
      }
    }

    const last = lastCommentOnPage();
    if (last) {
      visited_last[id] = {
        comment: parseInt(last.id.split('-')[1], 10),
        datetime: new Date()
      }
    } else {
      visited_last[id] = {};
    }

    setTimeout(() => {
      store.dispatch(setNavigatorVisitedList(visited));
      store.dispatch(setNavigatorVisitedLast(visited_last));
    }, 5000);
  }
};
