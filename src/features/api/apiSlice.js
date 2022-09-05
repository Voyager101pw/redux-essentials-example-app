import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  // Если вы не укажете reducerPath параметр, по умолчанию он будет 'api' 
  reducerPath: 'api', // store: state.api

  // Все наши запросы будут иметь URL-адреса, начинающиеся с «/fakeApi».
  baseQuery: fetchBaseQuery({ baseUrl: '/fakeApi' }),
  // fetchBaseQuery - Небольшая оболочка fetch, предназначенная для упрощения запросов.

  // «Конечные точки» представляют собой операции и запросы для этого сервера.
  // По умолчанию конечные точки запроса будут использовать GET HTTP-запрос
  // Для переопределения, вернуть объект, типа: {url: '/posts', method: 'POST', body: newPost} вместо самой строки URL
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => '/posts',  // URL для запроса: '/fakeApi/posts'
    }),
    getPost: builder.query({
      query: (postId) => `/posts/${postId}`,
    }),
    addNewPost: builder.mutation({
      query: (initialPost) => ({
        url: '/posts',
        method: 'POST',
        body: initialPost // передаем полезную нагрузку (новый пост) в тело запроса
      })
      // Здесь наша quer yопция возвращает объект, содержащий {url, method, body}.
      // Поскольку мы используем fetchBaseQuery для выполнения запросов, body поле 
      // будет автоматически сериализовано для нас в формате JSON.
    })
  }),
});

// Экспортируем автоматически сгенерированный хук для конечной точки запроса `getPosts`
// Ведь RTKQ-react автоматически генерирует хуки для каждой созданной нами конечной точки!
export const {
  useGetPostsQuery,
  useGetPostQuery,
  useAddNewPostMutation // endpoint addNewPost: builder. > mutation <
} = apiSlice;


// Почему именно useGetPostsQuery ?
// Хуки автоматически именуются на основе стандартного соглашения:
// use - префикс, говорящий что это хук React'а
// Имя конечной точки, с заглавной буквы
// Тип конечной точки Query или Mutation