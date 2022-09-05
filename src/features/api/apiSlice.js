import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  // Если вы не укажете reducerPath параметр, по умолчанию он будет 'api' 
  reducerPath: 'api', // store: state.api

  // Все наши запросы будут иметь URL-адреса, начинающиеся с «/fakeApi».
  baseQuery: fetchBaseQuery({ baseUrl: '/fakeApi' }),
  // fetchBaseQuery - Небольшая оболочка fetch, предназначенная для упрощения запросов.

  tagTypes: ['Post'], // здесь нет ничего особенного в литеральной строке 'Post'
  // Мы могли бы назвать это 'Fred', 'qwerty' или как-нибудь еще. Просто в каждом поле должна
  // быть одна и та же строка, чтобы RTK Query знал, что «когда произойдет эта мутация, сделать
  // недействительными все конечные точки, в которых указана одна и та же строка тега».

  // «Конечные точки» представляют собой операции и запросы для этого сервера.
  // По умолчанию конечные точки запроса будут использовать GET HTTP-запрос
  // Для переопределения, вернуть объект, типа: {url: '/posts', method: 'POST', body: newPost} вместо самой строки URL
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => '/posts',  // URL для запроса: '/fakeApi/posts'
      providesTags: ['Post'],
    }),
    getPost: builder.query({
      query: (postId) => `/posts/${postId}`,
    }),
    addNewPost: builder.mutation({
      query: (initialPost) => ({
        url: '/posts',
        method: 'POST',
        body: initialPost // передаем полезную нагрузку (новый пост) в тело запроса
      }),
      // Здесь наша query опция возвращает объект, содержащий {url, method, body}.
      // Поскольку мы используем fetchBaseQuery для выполнения запросов, body поле 
      // будет автоматически сериализовано для нас в формате JSON.

      invalidatesTags: ['Post'], // Массив тегов, которые станут недействительными, каждый раз когда запустится мутация
      // Это позволит автоматически обновлять  getPosts конечную точку каждый раз, когда мы добавляем новый пост
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