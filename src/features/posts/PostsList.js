import React, { useEffect, useMemo } from 'react';

import cn from 'classnames';

import { useSelector, useDispatch } from 'react-redux';
import { 
  selectAllPosts,
  fetchPosts,
  selectPostIds,
  selectPostById,
} from './postsSlice';

import { useGetPostsQuery } from '../api/apiSlice';

import { Link } from 'react-router-dom';
import { PostAuthor } from './PostAuthor.js';
import { TimeAgo } from './TimeAgo.js';
import { ReactionButtons } from './ReactionButtons.js';
import { Spinner } from '../../components/Spinner.js';

// const PostExcerpt = ({ postId }) => { // после RTK
//   const post = useSelector((state) => selectPostById(state, postId)); 
  
//   return (
//     <article className="post-excerpt" key={post.id}>
//       <h3>{post.title}</h3>
//       <div>
//         <PostAuthor userId={post.user} />
//         <TimeAgo timestamp={post.date} />
//       </div>
//       <p className="post-content">{post.content.substring(0, 100)}</p>

//       <ReactionButtons post={post} />
//       <Link to={`/posts/${post.id}`} className="button muted-button">
//         View Post
//       </Link>
//     </article>
//   )
// }

// RTK Query
const PostExcerpt = ({ post }) => { 
  return (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <div>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <p className="post-content">{post.content.substring(0, 100)}</p>

      <ReactionButtons post={post} />
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  )
}



// export const PostsList = () => {
//   const dispatch = useDispatch();
  
//   // Компоненты React читают данные из хранилища с помощью useSelector хука
//   // const posts = useSelector(state => state.posts); // state.posts необходимый для работы срез данных
//   // const posts = useSelector(selectAllPosts); // useSelector -> store.getState() -> корневой state -> selectorAllPosts(state) -> profit
//   const orderedPostIds = useSelector(selectPostIds)

//   const postStatus = useSelector((state) => state.posts.status);
//   const error = useSelector((state) => state.posts.error);

//   useEffect(() => {
//     if(postStatus === 'idle') {
//       dispatch(fetchPosts())
//     }
//   }, [postStatus, dispatch]);

//   let content;

//   if (postStatus === 'loading') {
//     content = <Spinner text="Loading..." />
//   } else if (postStatus === 'succeeded') {
//     content = orderedPostIds.map((postId) => (<PostExcerpt key={postId} postId={postId} />))
//   } else if (postStatus === 'failed') {
//     content = <div>{error}</div>
//   }

//   return (
//     <section className="post-list">
//       <h2>Posts</h2>
//       {content}
//     </section>
//   )
// }  

// с RTK Query
export const PostsList = () => {
  // Сигнатура ответа от запроса на фейковый сервер
  const {
    // data: posts, // Это поле будет undefined до тех пор, пока не будет получен ответ .
    data: posts = [],
    isLoading, // Если запрос выполняется в первые true, в дальнейшем всегда будет false
    isFetching, // Если запрос выполняется true, если нет, то false
    isSuccess,
    isError,
    error,
    refetch // фун. для повторного получения данных из запроса
  } = useGetPostsQuery(); // Выполняем запрос на фековый сервер .../fakeApi/posts

  const sortedPosts = useMemo(() => {
    const sortedPosts = posts.slice();
    // Мы не можем просто вызвать posts.sort()напрямую, потому что Array.sort() изменяет существующий массив, 
    // поэтому нам нужно сначала сделать его копию. Чтобы избежать повторной сортировки при каждом повторном рендеринге
    
    sortedPosts.sort((a, b) => b.date.localeCompare(a.date));
    return sortedPosts;
  }, [posts]);

  let content;

  if (isLoading) {
    content = <Spinner text="Loading..." />
  } else if (isSuccess) {
    const renderPosts = sortedPosts.map((post) => (
      <PostExcerpt key={post.id} post={post} />
    ));
    
    const containerClassname = cn('posts-container', {
      disabled: isFetching
    });

    content = <div className={containerClassname}>{renderPosts}</div>
  } else if (isError) {
    content = <div>{error.toString()}</div>
  }

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      <button onClick={refetch}>Refetch Posts</button>
      {content}
    </section>
  )
}  

// Концептуально <PostsList> он по-прежнему выполняет ту же работу, что и раньше,
// но мы смогли заменить множественные вызовы useSelector и useEffect диспетчеризацию 
// одним вызовом useGetPostsQuery().